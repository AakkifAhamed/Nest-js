import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Response,Request } from "express";


@Injectable()
export class customermiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction){
        console.log("Iam inside customermiddlware class!");
        const {authorization}=req.headers;
        if(!authorization) 
        return res
        .status(403)
        .send({error:"no Authentication token provided"});
        if(authorization ==='123'){
            next();
        }
        else{
            return res
            .status(402)
            .send({error:"invalid authontication token"})
        }
    }
    
}