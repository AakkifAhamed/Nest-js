import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Response,Request } from "express";

@Injectable()
export class customerAccountmidleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        const {valid}=req.headers;
        console.log(valid);
        console.log("Validate customer acoount!!");
        if(valid){
            next();
        }else{
            res.status(403).send({error:"Account is invalid!"})
        }
    }
}