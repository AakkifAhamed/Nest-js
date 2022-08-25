import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/Customers.dtos';
import { Customer } from 'src/customers/types/customer';

@Injectable()
export class CustomersService {
    private customers:Customer[]=[
        {
        id:1,
        email:'aakkeef9253@gmail.com',
        FullName:'Aakkif Ahamed',
        Age:25
        },
        {
            id:2,
            email:'aakkeef@gmail.com',
            FullName:'Ahamed', 
            Age:23
        },
        {
            id:3,
            email:'9253@gmail.com',
            FullName:'Aakkif Ar',
            Age:24
        },
    ];
    findCustomerById(id:number){
        return this.customers.find((user)=> 
        user.id===id);
    }

    CreateCustomer(CustomerDto:CreateCustomerDto){
        this.customers.push(CustomerDto);
    }

    getCustomers(){
        return this.customers;
    }
}
