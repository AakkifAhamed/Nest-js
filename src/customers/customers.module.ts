import { MiddlewareConsumer, Module, NestModule, Next, RequestMethod } from '@nestjs/common';
import { CustomersController } from './controllers/customers/customers.controller';
import { customermiddleware } from './middlewares/customer.middleware';
import {customerAccountmidleware} from './middlewares/customer-account.middleware';
import { CustomersService } from './service/customers/customers.service';
import { NextFunction } from 'express';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule{
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(customermiddleware,
      customerAccountmidleware,
      (req:Request, res:Response, next:NextFunction) =>{
        console.log("Last middleware");
        next();
      })
    .exclude(
      {
        path:"api/customers/Create",
        method:RequestMethod.POST,
      },
      {
        path:"api/customers",
        method:RequestMethod.GET,
      }
    )
    .forRoutes(CustomersController);
  }
}
