import { Exclude } from "class-transformer";

export interface User{
    username:string;
    Password:string;
}

export class serializedUser{
    username:string;

    @Exclude()
    Password:string;

    constructor(partial: Partial<serializedUser>){
        Object.assign(this,partial);
    }
}