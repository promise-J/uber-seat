import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  UnauthorizedException,  // Add this import
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();  // Optional: For path/timestamp if you want to re-enable

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    let exceptionResponse =
      exception instanceof HttpException
        ? exception.getResponse()
        : null;

    // Customize message for JWT-related UnauthorizedException
    let customMessage: string | undefined;
    if (exception instanceof UnauthorizedException) {
      const originalMessage = typeof exceptionResponse === 'string'
        ? exceptionResponse
        : (exceptionResponse as any)?.message || exception.message || '';
      
      // Check for JWT-related keywords (common in Passport JWT errors)
      if (
        originalMessage.includes('jwt') ||
        originalMessage.includes('token') ||
        originalMessage.includes('JsonWebTokenError') ||
        originalMessage.includes('TokenExpiredError') ||
        originalMessage.includes('NotBeforeError')
      ) {
        customMessage = 'Invalid or expired token';  // Your custom message
      } else {
        customMessage = 'Unauthorized access';  // Fallback for other auth errors
      }
    }

    // Use custom message if set, otherwise fall back to original logic
    const message = customMessage || (
      typeof exceptionResponse === 'string'
        ? exceptionResponse
        : (exceptionResponse as any)?.message || 'Internal server error'
    );

    response.status(status).json({
      success: false,
      statusCode: status,
      // timestamp: new Date().toISOString(),  // Uncomment if you want to re-enable
      // path: request.url,  // Uncomment if you want to re-enable
      message: message,
    });
  }
}