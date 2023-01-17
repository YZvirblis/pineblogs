import { NextFunction, Request, Response } from "express"

const allowedOrigins = require('../../../../config/allowedOrigins')

const credentials = (request: Request, response:Response, next: NextFunction) => {
    const origin = request.headers.origin
    if(allowedOrigins.includes(origin)){
        response.header("Access-Control-Allow-Credentials", "true")
    }
    next()
}

export = credentials