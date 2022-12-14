import { Controller,
        Get,
        Post,
        Param, 
        ParseIntPipe, 
        Req, 
        Res, 
        Body, 
        UsePipes, 
        ValidationPipe, 
        HttpException,
        HttpStatus} from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/Customers.dtos';
import { CustomersService } from 'src/customers/service/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customerService:CustomersService){}
    @Get(':id')
    getCustomer(
    @Param('id',ParseIntPipe)id:number,
    @Req() req:Request,
    @Res() res:Response,
    ){
       const customer= this.customerService.findCustomerById(id);
       if(customer){
        res.send(customer);
       }else{
        res.status(400).send({msg:'customer details not found!!!!!'});
       }
        
    }

    @Get('/search/:id')
    searchcustomerById(@Param('id',ParseIntPipe)id:number){
        const customer=this.customerService.findCustomerById
        (id);
        if(customer) return customer
        else throw new HttpException('customer not find',HttpStatus.BAD_REQUEST);
    }
    
    @Get('')
    getAllcustomers(){
        return this.customerService.getCustomers();
    }

    @Post('Create')
    @UsePipes(ValidationPipe)
    CreateCustomer(@Body() CreateCustomerDto:CreateCustomerDto){
        console.log(CreateCustomerDto);
        this.customerService.CreateCustomer(CreateCustomerDto);
    }
}
