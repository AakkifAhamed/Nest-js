import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Response,Request } from "express";


@Injectable()
export class usermiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("Iam inside usermiddlware class");
        next();   
    }   
}