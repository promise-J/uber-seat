import Redis from 'ioredis'

export class RedisPubSub {
    private pub: Redis;
    private sub: Redis;

    constructor(){
        this.pub = new Redis()
        this.sub = new Redis()
    }

    publish(channel: string, message: any){
        return this.pub.publish(channel, JSON.stringify(message))
    }

    subscribe(channel: string, cb: (msg: any)=> void){
        this.sub.subscribe(channel)

        this.sub.on('message', (_, message)=>{
            cb(JSON.parse(message))
        })
    }
}