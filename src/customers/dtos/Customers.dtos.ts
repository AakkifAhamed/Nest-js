import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, Validate, ValidateNested } from "class-validator";
import {CreateAddressDto}from "./Address.dtos";

export class CreateCustomerDto{
    @IsNumber()
    @IsNotEmpty()
    id:number;

    @IsEmail()
    @IsNotEmpty()
    email:string;

    @IsNotEmpty()
    FullName:string;
    
    @IsNumber()
    @IsNotEmpty()
    Age:number;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(()=> CreateAddressDto)
    Address: CreateAddressDto;
}