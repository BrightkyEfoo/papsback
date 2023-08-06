import { Request } from "express"
import { JwtPayload } from "jsonwebtoken"



export interface reqUser {

}

export interface myDecodedToken extends JwtPayload{
    userId : number,
    name : string
}


export interface myRequest<B=any , Q=any> extends Request{
    user? : myDecodedToken,
    body : B
}