/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/auth-service/src/auth/auth.controller.ts"
/*!*******************************************************!*\
  !*** ./apps/auth-service/src/auth/auth.controller.ts ***!
  \*******************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/auth-service/src/auth/auth.service.ts");
const register_dto_1 = __webpack_require__(/*! ../dto/register.dto */ "./apps/auth-service/src/dto/register.dto.ts");
const login_dto_1 = __webpack_require__(/*! ../dto/login.dto */ "./apps/auth-service/src/dto/login.dto.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ../guards/jwt-auth.guard */ "./apps/auth-service/src/guards/jwt-auth.guard.ts");
let AuthController = class AuthController {
    authService;
    constructor(authService) {
        this.authService = authService;
    }
    register(dto) {
        return this.authService.register(dto.email, dto.password);
    }
    login(dto) {
        return this.authService.login(dto.email, dto.password);
    }
    logout(req) {
        return this.authService.logout(req.user.sub);
    }
    me(req) {
        console.log({ req: req.user });
        return req.user;
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof register_dto_1.RegisterDto !== "undefined" && register_dto_1.RegisterDto) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "register", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof login_dto_1.LoginDto !== "undefined" && login_dto_1.LoginDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Post)('logout'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
__decorate([
    (0, common_1.Get)('me'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "me", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], AuthController);


/***/ },

/***/ "./apps/auth-service/src/auth/auth.module.ts"
/*!***************************************************!*\
  !*** ./apps/auth-service/src/auth/auth.module.ts ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const redis_1 = __webpack_require__(/*! @app/redis */ "./libs/redis/src/index.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/auth-service/src/auth/auth.service.ts");
const user_service_1 = __webpack_require__(/*! ../users/user.service */ "./apps/auth-service/src/users/user.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/auth-service/src/auth/auth.controller.ts");
const user_schema_1 = __webpack_require__(/*! ../users/user.schema */ "./apps/auth-service/src/users/user.schema.ts");
const user_module_1 = __webpack_require__(/*! ../users/user.module */ "./apps/auth-service/src/users/user.module.ts");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const jwt_strategy_1 = __webpack_require__(/*! ../strategies/jwt.strategy */ "./apps/auth-service/src/strategies/jwt.strategy.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            mongoose_1.MongooseModule.forRoot('mongodb://localhost:27018/uber-auth'),
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
            jwt_1.JwtModule.register({
                secret: process.env.JWT_SECRET || 'supersecret',
                signOptions: { expiresIn: '6h' }
            }),
            redis_1.RedisModule.forRoot({
                host: process.env.REDIS_HOST || 'localhost',
                port: Number(process.env.REDIS_PORT || 6379)
            }),
            passport_1.PassportModule,
            user_module_1.UserModule
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, user_service_1.UserService, jwt_strategy_1.JwtStrategy],
    })
], AuthModule);


/***/ },

/***/ "./apps/auth-service/src/auth/auth.service.ts"
/*!****************************************************!*\
  !*** ./apps/auth-service/src/auth/auth.service.ts ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_service_1 = __webpack_require__(/*! ../users/user.service */ "./apps/auth-service/src/users/user.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
const redis_1 = __webpack_require__(/*! @app/redis */ "./libs/redis/src/index.ts");
let AuthService = class AuthService {
    userService;
    jwtService;
    redisService;
    constructor(userService, jwtService, redisService) {
        this.userService = userService;
        this.jwtService = jwtService;
        this.redisService = redisService;
    }
    async register(email, password) {
        try {
            const hashed = await bcrypt.hash(password, 10);
            const redis = this.redisService.getClient();
            await redis.flushall();
            const userExists = await this.userService.findByEmail(email);
            if (userExists) {
                throw new common_1.ConflictException('User already exists');
            }
            const user = await this.userService.create({ email, password: hashed });
            return this.generateTokens(user._id.toString(), user.email, user.role);
        }
        catch (error) {
            throw new common_1.InternalServerErrorException(error.message);
        }
    }
    async login(email, password) {
        const user = await this.userService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            throw new common_1.UnauthorizedException('Invalid credentials');
        return this.generateTokens(user._id.toString(), user.email, user.role);
    }
    async generateTokens(id, email, role) {
        const payload = { sub: id, email, role };
        const accessToken = this.jwtService.sign(payload, { expiresIn: '30m' });
        const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });
        const redis = this.redisService.getClient();
        await redis.set(`refresh:${id}`, refreshToken, 'EX', 60 * 60 * 24 * 7);
        return {
            accessToken,
            refreshToken,
        };
    }
    async logout(userId) {
        const redis = this.redisService.getClient();
        redis.del(`refresh:${userId}`);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof redis_1.RedisService !== "undefined" && redis_1.RedisService) === "function" ? _c : Object])
], AuthService);


/***/ },

/***/ "./apps/auth-service/src/dto/login.dto.ts"
/*!************************************************!*\
  !*** ./apps/auth-service/src/dto/login.dto.ts ***!
  \************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoginDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class LoginDto {
    email;
    password;
}
exports.LoginDto = LoginDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], LoginDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password is required' }),
    __metadata("design:type", String)
], LoginDto.prototype, "password", void 0);


/***/ },

/***/ "./apps/auth-service/src/dto/register.dto.ts"
/*!***************************************************!*\
  !*** ./apps/auth-service/src/dto/register.dto.ts ***!
  \***************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RegisterDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class RegisterDto {
    email;
    password;
}
exports.RegisterDto = RegisterDto;
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], RegisterDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)({ message: 'Password is required' }),
    (0, class_validator_1.MinLength)(8, { message: 'Password must be atleast 8 characters' }),
    __metadata("design:type", String)
], RegisterDto.prototype, "password", void 0);


/***/ },

/***/ "./apps/auth-service/src/guards/jwt-auth.guard.ts"
/*!********************************************************!*\
  !*** ./apps/auth-service/src/guards/jwt-auth.guard.ts ***!
  \********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtAuthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtAuthGuard = class JwtAuthGuard extends (0, passport_1.AuthGuard)('jwt') {
    handleRequest(err, user, info) {
        if (err || !user) {
            throw new common_1.UnauthorizedException('Invalid or expired token');
        }
        return user;
    }
};
exports.JwtAuthGuard = JwtAuthGuard;
exports.JwtAuthGuard = JwtAuthGuard = __decorate([
    (0, common_1.Injectable)()
], JwtAuthGuard);


/***/ },

/***/ "./apps/auth-service/src/main.ts"
/*!***************************************!*\
  !*** ./apps/auth-service/src/main.ts ***!
  \***************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/auth-service/src/auth/auth.module.ts");
const http_exception_filter_1 = __webpack_require__(/*! libs/common/filter/http-exception.filter */ "./libs/common/filter/http-exception.filter.ts");
const logging_interceptor_1 = __webpack_require__(/*! libs/common/interceptors/logging.interceptor */ "./libs/common/interceptors/logging.interceptor.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const helmet_1 = __importDefault(__webpack_require__(/*! helmet */ "./node_modules/helmet/index.cjs"));
async function bootstrap() {
    const app = await core_1.NestFactory.create(auth_module_1.AuthModule);
    app.use((0, helmet_1.default)());
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    app.useGlobalInterceptors(new logging_interceptor_1.LoggingInterceptor());
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.enableCors({
        origin: "*",
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        allowedHeaders: 'Content-Type, Authorization',
        credentials: true,
    });
    await app.listen(process.env.PORT ?? 3001);
    console.log('Auth service running on http://localhost:3001');
}
bootstrap();


/***/ },

/***/ "./apps/auth-service/src/strategies/jwt.strategy.ts"
/*!**********************************************************!*\
  !*** ./apps/auth-service/src/strategies/jwt.strategy.ts ***!
  \**********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const user_service_1 = __webpack_require__(/*! ../users/user.service */ "./apps/auth-service/src/users/user.service.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    configService;
    jwtService;
    userService;
    constructor(configService, jwtService, userService) {
        const secret = configService.get('JWT_SECRET') || 'fallback-secret';
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: secret,
        });
        this.configService = configService;
        this.jwtService = jwtService;
        this.userService = userService;
    }
    async validate(payload) {
        console.log('JWT validate called with payload:', payload);
        const user = await this.userService.findByEmail(payload.email);
        if (!user) {
            throw new common_1.UnauthorizedException('User not found');
        }
        return { id: user._id.toString(), email: user.email, role: user.role };
    }
};
exports.JwtStrategy = JwtStrategy;
exports.JwtStrategy = JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof user_service_1.UserService !== "undefined" && user_service_1.UserService) === "function" ? _c : Object])
], JwtStrategy);


/***/ },

/***/ "./apps/auth-service/src/users/user.module.ts"
/*!****************************************************!*\
  !*** ./apps/auth-service/src/users/user.module.ts ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const user_schema_1 = __webpack_require__(/*! ./user.schema */ "./apps/auth-service/src/users/user.schema.ts");
const user_service_1 = __webpack_require__(/*! ./user.service */ "./apps/auth-service/src/users/user.service.ts");
let UserModule = class UserModule {
};
exports.UserModule = UserModule;
exports.UserModule = UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: user_schema_1.User.name, schema: user_schema_1.UserSchema }]),
        ],
        providers: [user_service_1.UserService],
        exports: [user_service_1.UserService],
    })
], UserModule);


/***/ },

/***/ "./apps/auth-service/src/users/user.schema.ts"
/*!****************************************************!*\
  !*** ./apps/auth-service/src/users/user.schema.ts ***!
  \****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserSchema = exports.User = void 0;
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
let User = class User extends mongoose_2.Document {
    email;
    password;
    role;
    isActive;
};
exports.User = User;
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 'rider' }),
    __metadata("design:type", String)
], User.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], User.prototype, "isActive", void 0);
exports.User = User = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], User);
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);


/***/ },

/***/ "./apps/auth-service/src/users/user.service.ts"
/*!*****************************************************!*\
  !*** ./apps/auth-service/src/users/user.service.ts ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mongoose_1 = __webpack_require__(/*! @nestjs/mongoose */ "@nestjs/mongoose");
const mongoose_2 = __webpack_require__(/*! mongoose */ "mongoose");
const user_schema_1 = __webpack_require__(/*! ./user.schema */ "./apps/auth-service/src/users/user.schema.ts");
let UserService = class UserService {
    userModel;
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(data) {
        const user = new this.userModel({ ...data, role: 'user' });
        return user.save();
    }
    async findByEmail(email) {
        return this.userModel.findOne({ email }).exec();
    }
};
exports.UserService = UserService;
exports.UserService = UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_schema_1.User.name)),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Model !== "undefined" && mongoose_2.Model) === "function" ? _a : Object])
], UserService);


/***/ },

/***/ "./libs/common/filter/http-exception.filter.ts"
/*!*****************************************************!*\
  !*** ./libs/common/filter/http-exception.filter.ts ***!
  \*****************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpExceptionFilter = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let HttpExceptionFilter = class HttpExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const status = exception instanceof common_1.HttpException
            ? exception.getStatus()
            : common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        let exceptionResponse = exception instanceof common_1.HttpException
            ? exception.getResponse()
            : null;
        let customMessage;
        if (exception instanceof common_1.UnauthorizedException) {
            const originalMessage = typeof exceptionResponse === 'string'
                ? exceptionResponse
                : exceptionResponse?.message || exception.message || '';
            if (originalMessage.includes('jwt') ||
                originalMessage.includes('token') ||
                originalMessage.includes('JsonWebTokenError') ||
                originalMessage.includes('TokenExpiredError') ||
                originalMessage.includes('NotBeforeError')) {
                customMessage = 'Invalid or expired token';
            }
            else {
                customMessage = 'Unauthorized access';
            }
        }
        const message = customMessage || (typeof exceptionResponse === 'string'
            ? exceptionResponse
            : exceptionResponse?.message || 'Internal server error');
        response.status(status).json({
            success: false,
            statusCode: status,
            message: message,
        });
    }
};
exports.HttpExceptionFilter = HttpExceptionFilter;
exports.HttpExceptionFilter = HttpExceptionFilter = __decorate([
    (0, common_1.Catch)()
], HttpExceptionFilter);


/***/ },

/***/ "./libs/common/interceptors/logging.interceptor.ts"
/*!*********************************************************!*\
  !*** ./libs/common/interceptors/logging.interceptor.ts ***!
  \*********************************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LoggingInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
let LoggingInterceptor = class LoggingInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const { method, url } = request;
        const now = Date.now();
        return next.handle().pipe((0, rxjs_1.tap)(() => {
            const duration = Date.now() - now;
            console.log(`[${method}] ${url} - ${duration}ms`);
        }));
    }
};
exports.LoggingInterceptor = LoggingInterceptor;
exports.LoggingInterceptor = LoggingInterceptor = __decorate([
    (0, common_1.Injectable)()
], LoggingInterceptor);


/***/ },

/***/ "./libs/redis/src/index.ts"
/*!*********************************!*\
  !*** ./libs/redis/src/index.ts ***!
  \*********************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./redis.module */ "./libs/redis/src/redis.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./redis.service */ "./libs/redis/src/redis.service.ts"), exports);


/***/ },

/***/ "./libs/redis/src/redis.module.ts"
/*!****************************************!*\
  !*** ./libs/redis/src/redis.module.ts ***!
  \****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var RedisModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const redis_service_1 = __webpack_require__(/*! ./redis.service */ "./libs/redis/src/redis.service.ts");
let RedisModule = RedisModule_1 = class RedisModule {
    static forRoot(options = {}) {
        return {
            module: RedisModule_1,
            providers: [
                {
                    provide: 'REDIS_OPTIONS',
                    useValue: {
                        host: options.host || 'localhost',
                        port: options.port || 6379,
                        password: options.password || undefined,
                    },
                },
                redis_service_1.RedisService,
            ],
            exports: [redis_service_1.RedisService],
        };
    }
};
exports.RedisModule = RedisModule;
exports.RedisModule = RedisModule = RedisModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [redis_service_1.RedisService],
        exports: [redis_service_1.RedisService],
    })
], RedisModule);


/***/ },

/***/ "./libs/redis/src/redis.service.ts"
/*!*****************************************!*\
  !*** ./libs/redis/src/redis.service.ts ***!
  \*****************************************/
(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const ioredis_1 = __importDefault(__webpack_require__(/*! ioredis */ "ioredis"));
let RedisService = class RedisService {
    options;
    client;
    constructor(options) {
        this.options = options;
    }
    onModuleInit() {
        this.client = new ioredis_1.default({
            host: this.options.host,
            port: this.options.port,
            password: this.options.password
        });
        this.client.on('connect', () => {
            console.log(`✅ Redis connected at ${this.options.host}:${this.options.port}`);
        });
        this.client.on('error', (err) => {
            console.error('❌ Redis connection error', err);
        });
    }
    getClient() {
        return this.client;
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)("REDIS_OPTIONS")),
    __metadata("design:paramtypes", [Object])
], RedisService);


/***/ },

/***/ "./node_modules/helmet/index.cjs"
/*!***************************************!*\
  !*** ./node_modules/helmet/index.cjs ***!
  \***************************************/
(module, exports) {



Object.defineProperties(exports, {__esModule: {value: true}, [Symbol.toStringTag]: {value: "Module"}})

const dangerouslyDisableDefaultSrc = Symbol("dangerouslyDisableDefaultSrc")
const SHOULD_BE_QUOTED = new Set(["none", "self", "strict-dynamic", "report-sample", "inline-speculation-rules", "unsafe-inline", "unsafe-eval", "unsafe-hashes", "wasm-unsafe-eval"])
const getDefaultDirectives = () => ({
	"default-src": ["'self'"],
	"base-uri": ["'self'"],
	"font-src": ["'self'", "https:", "data:"],
	"form-action": ["'self'"],
	"frame-ancestors": ["'self'"],
	"img-src": ["'self'", "data:"],
	"object-src": ["'none'"],
	"script-src": ["'self'"],
	"script-src-attr": ["'none'"],
	"style-src": ["'self'", "https:", "'unsafe-inline'"],
	"upgrade-insecure-requests": []
})
const dashify = str => str.replace(/[A-Z]/g, capitalLetter => "-" + capitalLetter.toLowerCase())
const assertDirectiveValueIsValid = (directiveName, directiveValue) => {
	if (/;|,/.test(directiveValue)) {
		throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}`)
	}
}
const assertDirectiveValueEntryIsValid = (directiveName, directiveValueEntry) => {
	if (SHOULD_BE_QUOTED.has(directiveValueEntry) || directiveValueEntry.startsWith("nonce-") || directiveValueEntry.startsWith("sha256-") || directiveValueEntry.startsWith("sha384-") || directiveValueEntry.startsWith("sha512-")) {
		throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}. ${JSON.stringify(directiveValueEntry)} should be quoted`)
	}
}
function normalizeDirectives(options) {
	const defaultDirectives = getDefaultDirectives()
	const {useDefaults = true, directives: rawDirectives = defaultDirectives} = options
	const result = new Map()
	const directiveNamesSeen = new Set()
	const directivesExplicitlyDisabled = new Set()
	for (const rawDirectiveName in rawDirectives) {
		if (!Object.hasOwn(rawDirectives, rawDirectiveName)) {
			continue
		}
		if (rawDirectiveName.length === 0 || /[^a-zA-Z0-9-]/.test(rawDirectiveName)) {
			throw new Error(`Content-Security-Policy received an invalid directive name ${JSON.stringify(rawDirectiveName)}`)
		}
		const directiveName = dashify(rawDirectiveName)
		if (directiveNamesSeen.has(directiveName)) {
			throw new Error(`Content-Security-Policy received a duplicate directive ${JSON.stringify(directiveName)}`)
		}
		directiveNamesSeen.add(directiveName)
		const rawDirectiveValue = rawDirectives[rawDirectiveName]
		let directiveValue
		if (rawDirectiveValue === null) {
			if (directiveName === "default-src") {
				throw new Error("Content-Security-Policy needs a default-src but it was set to `null`. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.")
			}
			directivesExplicitlyDisabled.add(directiveName)
			continue
		} else if (typeof rawDirectiveValue === "string") {
			directiveValue = [rawDirectiveValue]
		} else if (!rawDirectiveValue) {
			throw new Error(`Content-Security-Policy received an invalid directive value for ${JSON.stringify(directiveName)}`)
		} else if (rawDirectiveValue === dangerouslyDisableDefaultSrc) {
			if (directiveName === "default-src") {
				directivesExplicitlyDisabled.add("default-src")
				continue
			} else {
				throw new Error(`Content-Security-Policy: tried to disable ${JSON.stringify(directiveName)} as if it were default-src; simply omit the key`)
			}
		} else {
			directiveValue = rawDirectiveValue
		}
		for (const element of directiveValue) {
			if (typeof element !== "string") continue
			assertDirectiveValueIsValid(directiveName, element)
			assertDirectiveValueEntryIsValid(directiveName, element)
		}
		result.set(directiveName, directiveValue)
	}
	if (useDefaults) {
		Object.entries(defaultDirectives).forEach(([defaultDirectiveName, defaultDirectiveValue]) => {
			if (!result.has(defaultDirectiveName) && !directivesExplicitlyDisabled.has(defaultDirectiveName)) {
				result.set(defaultDirectiveName, defaultDirectiveValue)
			}
		})
	}
	if (!result.size) {
		throw new Error("Content-Security-Policy has no directives. Either set some or disable the header")
	}
	if (!result.has("default-src") && !directivesExplicitlyDisabled.has("default-src")) {
		throw new Error("Content-Security-Policy needs a default-src but none was provided. If you really want to disable it, set it to `contentSecurityPolicy.dangerouslyDisableDefaultSrc`.")
	}
	return result
}
function getHeaderValue(req, res, normalizedDirectives) {
	const result = []
	for (const [directiveName, rawDirectiveValue] of normalizedDirectives) {
		let directiveValue = ""
		for (const element of rawDirectiveValue) {
			if (typeof element === "function") {
				const newElement = element(req, res)
				assertDirectiveValueEntryIsValid(directiveName, newElement)
				directiveValue += " " + newElement
			} else {
				directiveValue += " " + element
			}
		}
		if (directiveValue) {
			assertDirectiveValueIsValid(directiveName, directiveValue)
			result.push(`${directiveName}${directiveValue}`)
		} else {
			result.push(directiveName)
		}
	}
	return result.join(";")
}
const contentSecurityPolicy = function contentSecurityPolicy(options = {}) {
	const headerName = options.reportOnly ? "Content-Security-Policy-Report-Only" : "Content-Security-Policy"
	const normalizedDirectives = normalizeDirectives(options)
	return function contentSecurityPolicyMiddleware(req, res, next) {
		const result = getHeaderValue(req, res, normalizedDirectives)
		if (result instanceof Error) {
			next(result)
		} else {
			res.setHeader(headerName, result)
			next()
		}
	}
}
contentSecurityPolicy.getDefaultDirectives = getDefaultDirectives
contentSecurityPolicy.dangerouslyDisableDefaultSrc = dangerouslyDisableDefaultSrc

const ALLOWED_POLICIES$2 = new Set(["require-corp", "credentialless", "unsafe-none"])
function getHeaderValueFromOptions$6({policy = "require-corp"}) {
	if (ALLOWED_POLICIES$2.has(policy)) {
		return policy
	} else {
		throw new Error(`Cross-Origin-Embedder-Policy does not support the ${JSON.stringify(policy)} policy`)
	}
}
function crossOriginEmbedderPolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$6(options)
	return function crossOriginEmbedderPolicyMiddleware(_req, res, next) {
		res.setHeader("Cross-Origin-Embedder-Policy", headerValue)
		next()
	}
}

const ALLOWED_POLICIES$1 = new Set(["same-origin", "same-origin-allow-popups", "unsafe-none"])
function getHeaderValueFromOptions$5({policy = "same-origin"}) {
	if (ALLOWED_POLICIES$1.has(policy)) {
		return policy
	} else {
		throw new Error(`Cross-Origin-Opener-Policy does not support the ${JSON.stringify(policy)} policy`)
	}
}
function crossOriginOpenerPolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$5(options)
	return function crossOriginOpenerPolicyMiddleware(_req, res, next) {
		res.setHeader("Cross-Origin-Opener-Policy", headerValue)
		next()
	}
}

const ALLOWED_POLICIES = new Set(["same-origin", "same-site", "cross-origin"])
function getHeaderValueFromOptions$4({policy = "same-origin"}) {
	if (ALLOWED_POLICIES.has(policy)) {
		return policy
	} else {
		throw new Error(`Cross-Origin-Resource-Policy does not support the ${JSON.stringify(policy)} policy`)
	}
}
function crossOriginResourcePolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$4(options)
	return function crossOriginResourcePolicyMiddleware(_req, res, next) {
		res.setHeader("Cross-Origin-Resource-Policy", headerValue)
		next()
	}
}

function originAgentCluster() {
	return function originAgentClusterMiddleware(_req, res, next) {
		res.setHeader("Origin-Agent-Cluster", "?1")
		next()
	}
}

const ALLOWED_TOKENS = new Set(["no-referrer", "no-referrer-when-downgrade", "same-origin", "origin", "strict-origin", "origin-when-cross-origin", "strict-origin-when-cross-origin", "unsafe-url", ""])
function getHeaderValueFromOptions$3({policy = ["no-referrer"]}) {
	const tokens = typeof policy === "string" ? [policy] : policy
	if (tokens.length === 0) {
		throw new Error("Referrer-Policy received no policy tokens")
	}
	const tokensSeen = new Set()
	tokens.forEach(token => {
		if (!ALLOWED_TOKENS.has(token)) {
			throw new Error(`Referrer-Policy received an unexpected policy token ${JSON.stringify(token)}`)
		} else if (tokensSeen.has(token)) {
			throw new Error(`Referrer-Policy received a duplicate policy token ${JSON.stringify(token)}`)
		}
		tokensSeen.add(token)
	})
	return tokens.join(",")
}
function referrerPolicy(options = {}) {
	const headerValue = getHeaderValueFromOptions$3(options)
	return function referrerPolicyMiddleware(_req, res, next) {
		res.setHeader("Referrer-Policy", headerValue)
		next()
	}
}

const DEFAULT_MAX_AGE = 365 * 24 * 60 * 60
function parseMaxAge(value = DEFAULT_MAX_AGE) {
	if (value >= 0 && Number.isFinite(value)) {
		return Math.floor(value)
	} else {
		throw new Error(`Strict-Transport-Security: ${JSON.stringify(value)} is not a valid value for maxAge. Please choose a positive integer.`)
	}
}
function getHeaderValueFromOptions$2(options) {
	if ("maxage" in options) {
		throw new Error("Strict-Transport-Security received an unsupported property, `maxage`. Did you mean to pass `maxAge`?")
	}
	if ("includeSubdomains" in options) {
		throw new Error('Strict-Transport-Security middleware should use `includeSubDomains` instead of `includeSubdomains`. (The correct one has an uppercase "D".)')
	}
	const directives = [`max-age=${parseMaxAge(options.maxAge)}`]
	if (options.includeSubDomains === undefined || options.includeSubDomains) {
		directives.push("includeSubDomains")
	}
	if (options.preload) {
		directives.push("preload")
	}
	return directives.join("; ")
}
function strictTransportSecurity(options = {}) {
	const headerValue = getHeaderValueFromOptions$2(options)
	return function strictTransportSecurityMiddleware(_req, res, next) {
		res.setHeader("Strict-Transport-Security", headerValue)
		next()
	}
}

function xContentTypeOptions() {
	return function xContentTypeOptionsMiddleware(_req, res, next) {
		res.setHeader("X-Content-Type-Options", "nosniff")
		next()
	}
}

function xDnsPrefetchControl(options = {}) {
	const headerValue = options.allow ? "on" : "off"
	return function xDnsPrefetchControlMiddleware(_req, res, next) {
		res.setHeader("X-DNS-Prefetch-Control", headerValue)
		next()
	}
}

function xDownloadOptions() {
	return function xDownloadOptionsMiddleware(_req, res, next) {
		res.setHeader("X-Download-Options", "noopen")
		next()
	}
}

function getHeaderValueFromOptions$1({action = "sameorigin"}) {
	const normalizedAction = typeof action === "string" ? action.toUpperCase() : action
	switch (normalizedAction) {
		case "SAME-ORIGIN":
			return "SAMEORIGIN"
		case "DENY":
		case "SAMEORIGIN":
			return normalizedAction
		default:
			throw new Error(`X-Frame-Options received an invalid action ${JSON.stringify(action)}`)
	}
}
function xFrameOptions(options = {}) {
	const headerValue = getHeaderValueFromOptions$1(options)
	return function xFrameOptionsMiddleware(_req, res, next) {
		res.setHeader("X-Frame-Options", headerValue)
		next()
	}
}

const ALLOWED_PERMITTED_POLICIES = new Set(["none", "master-only", "by-content-type", "all"])
function getHeaderValueFromOptions({permittedPolicies = "none"}) {
	if (ALLOWED_PERMITTED_POLICIES.has(permittedPolicies)) {
		return permittedPolicies
	} else {
		throw new Error(`X-Permitted-Cross-Domain-Policies does not support ${JSON.stringify(permittedPolicies)}`)
	}
}
function xPermittedCrossDomainPolicies(options = {}) {
	const headerValue = getHeaderValueFromOptions(options)
	return function xPermittedCrossDomainPoliciesMiddleware(_req, res, next) {
		res.setHeader("X-Permitted-Cross-Domain-Policies", headerValue)
		next()
	}
}

function xPoweredBy() {
	return function xPoweredByMiddleware(_req, res, next) {
		res.removeHeader("X-Powered-By")
		next()
	}
}

function xXssProtection() {
	return function xXssProtectionMiddleware(_req, res, next) {
		res.setHeader("X-XSS-Protection", "0")
		next()
	}
}

function getMiddlewareFunctionsFromOptions(options) {
	const result = []
	switch (options.contentSecurityPolicy) {
		case undefined:
		case true:
			result.push(contentSecurityPolicy())
			break
		case false:
			break
		default:
			result.push(contentSecurityPolicy(options.contentSecurityPolicy))
			break
	}
	switch (options.crossOriginEmbedderPolicy) {
		case undefined:
		case false:
			break
		case true:
			result.push(crossOriginEmbedderPolicy())
			break
		default:
			result.push(crossOriginEmbedderPolicy(options.crossOriginEmbedderPolicy))
			break
	}
	switch (options.crossOriginOpenerPolicy) {
		case undefined:
		case true:
			result.push(crossOriginOpenerPolicy())
			break
		case false:
			break
		default:
			result.push(crossOriginOpenerPolicy(options.crossOriginOpenerPolicy))
			break
	}
	switch (options.crossOriginResourcePolicy) {
		case undefined:
		case true:
			result.push(crossOriginResourcePolicy())
			break
		case false:
			break
		default:
			result.push(crossOriginResourcePolicy(options.crossOriginResourcePolicy))
			break
	}
	switch (options.originAgentCluster) {
		case undefined:
		case true:
			result.push(originAgentCluster())
			break
		case false:
			break
		default:
			console.warn("Origin-Agent-Cluster does not take options. Remove the property to silence this warning.")
			result.push(originAgentCluster())
			break
	}
	switch (options.referrerPolicy) {
		case undefined:
		case true:
			result.push(referrerPolicy())
			break
		case false:
			break
		default:
			result.push(referrerPolicy(options.referrerPolicy))
			break
	}
	if ("strictTransportSecurity" in options && "hsts" in options) {
		throw new Error("Strict-Transport-Security option was specified twice. Remove `hsts` to silence this warning.")
	}
	const strictTransportSecurityOption = options.strictTransportSecurity ?? options.hsts
	switch (strictTransportSecurityOption) {
		case undefined:
		case true:
			result.push(strictTransportSecurity())
			break
		case false:
			break
		default:
			result.push(strictTransportSecurity(strictTransportSecurityOption))
			break
	}
	if ("xContentTypeOptions" in options && "noSniff" in options) {
		throw new Error("X-Content-Type-Options option was specified twice. Remove `noSniff` to silence this warning.")
	}
	const xContentTypeOptionsOption = options.xContentTypeOptions ?? options.noSniff
	switch (xContentTypeOptionsOption) {
		case undefined:
		case true:
			result.push(xContentTypeOptions())
			break
		case false:
			break
		default:
			console.warn("X-Content-Type-Options does not take options. Remove the property to silence this warning.")
			result.push(xContentTypeOptions())
			break
	}
	if ("xDnsPrefetchControl" in options && "dnsPrefetchControl" in options) {
		throw new Error("X-DNS-Prefetch-Control option was specified twice. Remove `dnsPrefetchControl` to silence this warning.")
	}
	const xDnsPrefetchControlOption = options.xDnsPrefetchControl ?? options.dnsPrefetchControl
	switch (xDnsPrefetchControlOption) {
		case undefined:
		case true:
			result.push(xDnsPrefetchControl())
			break
		case false:
			break
		default:
			result.push(xDnsPrefetchControl(xDnsPrefetchControlOption))
			break
	}
	if ("xDownloadOptions" in options && "ieNoOpen" in options) {
		throw new Error("X-Download-Options option was specified twice. Remove `ieNoOpen` to silence this warning.")
	}
	const xDownloadOptionsOption = options.xDownloadOptions ?? options.ieNoOpen
	switch (xDownloadOptionsOption) {
		case undefined:
		case true:
			result.push(xDownloadOptions())
			break
		case false:
			break
		default:
			console.warn("X-Download-Options does not take options. Remove the property to silence this warning.")
			result.push(xDownloadOptions())
			break
	}
	if ("xFrameOptions" in options && "frameguard" in options) {
		throw new Error("X-Frame-Options option was specified twice. Remove `frameguard` to silence this warning.")
	}
	const xFrameOptionsOption = options.xFrameOptions ?? options.frameguard
	switch (xFrameOptionsOption) {
		case undefined:
		case true:
			result.push(xFrameOptions())
			break
		case false:
			break
		default:
			result.push(xFrameOptions(xFrameOptionsOption))
			break
	}
	if ("xPermittedCrossDomainPolicies" in options && "permittedCrossDomainPolicies" in options) {
		throw new Error("X-Permitted-Cross-Domain-Policies option was specified twice. Remove `permittedCrossDomainPolicies` to silence this warning.")
	}
	const xPermittedCrossDomainPoliciesOption = options.xPermittedCrossDomainPolicies ?? options.permittedCrossDomainPolicies
	switch (xPermittedCrossDomainPoliciesOption) {
		case undefined:
		case true:
			result.push(xPermittedCrossDomainPolicies())
			break
		case false:
			break
		default:
			result.push(xPermittedCrossDomainPolicies(xPermittedCrossDomainPoliciesOption))
			break
	}
	if ("xPoweredBy" in options && "hidePoweredBy" in options) {
		throw new Error("X-Powered-By option was specified twice. Remove `hidePoweredBy` to silence this warning.")
	}
	const xPoweredByOption = options.xPoweredBy ?? options.hidePoweredBy
	switch (xPoweredByOption) {
		case undefined:
		case true:
			result.push(xPoweredBy())
			break
		case false:
			break
		default:
			console.warn("X-Powered-By does not take options. Remove the property to silence this warning.")
			result.push(xPoweredBy())
			break
	}
	if ("xXssProtection" in options && "xssFilter" in options) {
		throw new Error("X-XSS-Protection option was specified twice. Remove `xssFilter` to silence this warning.")
	}
	const xXssProtectionOption = options.xXssProtection ?? options.xssFilter
	switch (xXssProtectionOption) {
		case undefined:
		case true:
			result.push(xXssProtection())
			break
		case false:
			break
		default:
			console.warn("X-XSS-Protection does not take options. Remove the property to silence this warning.")
			result.push(xXssProtection())
			break
	}
	return result
}
const helmet = Object.assign(
	function helmet(options = {}) {
		// People should be able to pass an options object with no prototype,
		// so we want this optional chaining.
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (options.constructor?.name === "IncomingMessage") {
			throw new Error("It appears you have done something like `app.use(helmet)`, but it should be `app.use(helmet())`.")
		}
		const middlewareFunctions = getMiddlewareFunctionsFromOptions(options)
		return function helmetMiddleware(req, res, next) {
			let middlewareIndex = 0
			;(function internalNext(err) {
				if (err) {
					next(err)
					return
				}
				const middlewareFunction = middlewareFunctions[middlewareIndex]
				if (middlewareFunction) {
					middlewareIndex++
					middlewareFunction(req, res, internalNext)
				} else {
					next()
				}
			})()
		}
	},
	{
		contentSecurityPolicy,
		crossOriginEmbedderPolicy,
		crossOriginOpenerPolicy,
		crossOriginResourcePolicy,
		originAgentCluster,
		referrerPolicy,
		strictTransportSecurity,
		xContentTypeOptions,
		xDnsPrefetchControl,
		xDownloadOptions,
		xFrameOptions,
		xPermittedCrossDomainPolicies,
		xPoweredBy,
		xXssProtection,
		// Legacy aliases
		dnsPrefetchControl: xDnsPrefetchControl,
		xssFilter: xXssProtection,
		permittedCrossDomainPolicies: xPermittedCrossDomainPolicies,
		ieNoOpen: xDownloadOptions,
		noSniff: xContentTypeOptions,
		frameguard: xFrameOptions,
		hidePoweredBy: xPoweredBy,
		hsts: strictTransportSecurity
	}
)

exports.contentSecurityPolicy = contentSecurityPolicy
exports.crossOriginEmbedderPolicy = crossOriginEmbedderPolicy
exports.crossOriginOpenerPolicy = crossOriginOpenerPolicy
exports.crossOriginResourcePolicy = crossOriginResourcePolicy
exports["default"] = helmet
exports.dnsPrefetchControl = xDnsPrefetchControl
exports.frameguard = xFrameOptions
exports.hidePoweredBy = xPoweredBy
exports.hsts = strictTransportSecurity
exports.ieNoOpen = xDownloadOptions
exports.noSniff = xContentTypeOptions
exports.originAgentCluster = originAgentCluster
exports.permittedCrossDomainPolicies = xPermittedCrossDomainPolicies
exports.referrerPolicy = referrerPolicy
exports.strictTransportSecurity = strictTransportSecurity
exports.xContentTypeOptions = xContentTypeOptions
exports.xDnsPrefetchControl = xDnsPrefetchControl
exports.xDownloadOptions = xDownloadOptions
exports.xFrameOptions = xFrameOptions
exports.xPermittedCrossDomainPolicies = xPermittedCrossDomainPolicies
exports.xPoweredBy = xPoweredBy
exports.xXssProtection = xXssProtection
exports.xssFilter = xXssProtection

module.exports = exports.default
module.exports["default"] = module.exports


/***/ },

/***/ "@nestjs/common"
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/common");

/***/ },

/***/ "@nestjs/config"
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
(module) {

module.exports = require("@nestjs/config");

/***/ },

/***/ "@nestjs/core"
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
(module) {

module.exports = require("@nestjs/core");

/***/ },

/***/ "@nestjs/jwt"
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
(module) {

module.exports = require("@nestjs/jwt");

/***/ },

/***/ "@nestjs/mongoose"
/*!***********************************!*\
  !*** external "@nestjs/mongoose" ***!
  \***********************************/
(module) {

module.exports = require("@nestjs/mongoose");

/***/ },

/***/ "@nestjs/passport"
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
(module) {

module.exports = require("@nestjs/passport");

/***/ },

/***/ "bcrypt"
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
(module) {

module.exports = require("bcrypt");

/***/ },

/***/ "class-validator"
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
(module) {

module.exports = require("class-validator");

/***/ },

/***/ "ioredis"
/*!**************************!*\
  !*** external "ioredis" ***!
  \**************************/
(module) {

module.exports = require("ioredis");

/***/ },

/***/ "mongoose"
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
(module) {

module.exports = require("mongoose");

/***/ },

/***/ "passport-jwt"
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
(module) {

module.exports = require("passport-jwt");

/***/ },

/***/ "rxjs"
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
(module) {

module.exports = require("rxjs");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./apps/auth-service/src/main.ts");
/******/ 	
/******/ })()
;