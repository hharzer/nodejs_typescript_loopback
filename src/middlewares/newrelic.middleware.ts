/**
 * Login Required middleware.
 */
import { Request, Response, NextFunction } from "express";
export let invokeAPI = (req: Request, res: Response, next: NextFunction) => {
    // if (req.isAuthenticated()) {
    //     next();
    //     return true;
    // }
    // else {
    //     next();
    //     return false;
    // }
    next();
};