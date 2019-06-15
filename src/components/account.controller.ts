import async from "async";
import { Request, Response } from "express";
import { AccountService } from "./account.service";


/**
 * GET /account
 */
export let getAccount = (req: Request, res: Response): Promise<any> => {

  return new Promise((resolve, reject) => {

    const accountService = new AccountService("id").getAccount();
    if (accountService) {
      resolve(accountService);
    } else {
      res.statusCode = 500;
      reject("Error");
    }

  });

};

/**
 * POST /contact
 */
export let postAccount = (req: Request, res: Response): Promise<any> => {


  return new Promise((resolve, reject) => {

    // FLEXIBILITY OF REJECTING OR REASOLVING A PROMISE

    // *** EXPRESS JS ALLOW YOU TO VALIDATE YOUR REQUEST USING EXPRESS-VALIDATOR */
    req.assert("name", "Name cannot be blank").notEmpty();
    req.assert("email", "Email is not valid").isEmail();

    const errors = req.validationErrors();

    if (errors) {
      // **  HERE IS AN EXAMPLE OF REJECTING A PROMISE */
      res.statusCode = 422;
      reject(errors);
    }

    const accountObj = new AccountService("ID", "william", "diaz").saveAccount();

    if (accountObj) {

      /**
       * Example of invoking a workflow
       */
        resolve(accountObj);

    } else {
      res.statusCode = 500;
      reject("Error saving the account");
    }


  });

};


/**
 * POST /contact
 */
export let deleteAccount = (req: Request, res: Response): Promise<any> => {


  return new Promise((resolve, reject) => {

    // FLEXIBILITY OF REJECTING OR REASOLVING A PROMISE

    // *** EXPRESS JS ALLOW YOU TO VALIDATE YOUR REQUEST USING EXPRESS-VALIDATOR */
    req.assert("accountID", "Account id cannot be blank").notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      // **  HERE IS AN EXAMPLE OF REJECTING A PROMISE */
      res.statusCode = 422;
      reject(errors);
    }

    const account = new AccountService("IDHAIANSUY", "william", "diaz").saveAccount();


    if (account) {
      resolve(account);
    } else {
      res.statusCode = 500;
      reject("Error saving the account");
    }


  });

};


export let updateAccount = (req: Request, res: Response): Promise<any> => {


  return new Promise((resolve, reject) => {

    // FLEXIBILITY OF REJECTING OR REASOLVING A PROMISE

    // *** EXPRESS JS ALLOW YOU TO VALIDATE YOUR REQUEST USING EXPRESS-VALIDATOR */
    req.assert("accountID", "Account id cannot be blank").notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      // **  HERE IS AN EXAMPLE OF REJECTING A PROMISE */
      res.statusCode = 422;
      reject(errors);
    }

    const account = new AccountService("IDHAIANSUY", "william").updateAccount();

    if (account) {
      resolve(account);
    } else {
      res.statusCode = 500;
      reject("Error saving the account");
    }


  });

};

export let putAccount = (req: Request, res: Response): Promise<any> => {


  return new Promise((resolve, reject) => {

    // FLEXIBILITY OF REJECTING OR REASOLVING A PROMISE

    // *** EXPRESS JS ALLOW YOU TO VALIDATE YOUR REQUEST USING EXPRESS-VALIDATOR */
    req.assert("accountID", "Account id cannot be blank").notEmpty();

    const errors = req.validationErrors();

    if (errors) {
      // **  HERE IS AN EXAMPLE OF REJECTING A PROMISE */
      res.statusCode = 422;
      reject(errors);
    }

    const account = new AccountService("IDHAIANSUY", "william").putAccount();

    if (account) {
      resolve(account);
    } else {
      res.statusCode = 500;
      reject("Error saving the account");
    }


  });

};