import { Response } from "express";

export default function toJSON(_res: Response, _payload: string) {

    return _res.status(_res.statusCode).json({
        success: true,
        statusCode: _res.statusCode,
        result: _payload
    });

}

export function toXML(_res: Response, _payload: string) {
    return _res.status(_res.statusCode);
}

export function toMRSS(_res: Response, _payload: string) {
    return _res.status(_res.statusCode);
}

export function toSOAP(_res: Response, _payload: string) {
    return _res.status(_res.statusCode);
}

export function errorHandler(_res: Response, _payload: string) {
    return _res.status(_res.statusCode);
}
