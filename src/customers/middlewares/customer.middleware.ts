import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Response,Request } from "express";


@Injectable()
export class customermiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("Iam inside customermiddlware class");
        next();   
    }
    
}