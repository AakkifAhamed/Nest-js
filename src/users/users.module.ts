import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { UsersController } from './controllers/users/users.controller';
import { usermiddleware } from './middlewares/user.middleware';
import { UsersService } from './service/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [{
    provide:'USER_SERVICE',
    useClass:UsersService
  }]
})
export class UsersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(usermiddleware).forRoutes({
      path:'users/:username',
      method:RequestMethod.GET,
    })
  }
}
