import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { customermiddleware } from './middlewares/customer.middleware';
import { CustomersService } from './service/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(customermiddleware).forRoutes({
      path:"customers/search/:id",
      method:RequestMethod.GET,
    });
  }
}
