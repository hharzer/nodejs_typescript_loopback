import { Request, Response, NextFunction, RequestHandler } from "express";

declare function SwaggerInputValidator(options: SwaggerInputValidator.Options): RequestHandler;
declare namespace SwaggerInputValidator {

  interface Options {
    schema: string;
}

function validator(options: Options): RequestHandler;


}

function swaggerSchema(_swaggerschema: any) {
  try {

    if (_swaggerschema || typeof _swaggerschema === "object") {

      _swaggerschema.forEach(function (value: any) {
        console.log(value);
      });

    }


  } catch (_error) {
    throw new Error(_error);
  }
}

 function validate(req: Request, res: Response, next: NextFunction) {
  try {



  } catch (e) {

  }
}

 function init(_swaggerschema: any): RequestHandler {
  try {

    const _swaggerschemaParsed = swaggerSchema(_swaggerschema);

    return this;

  } catch (e) {

  }
}


export = SwaggerInputValidator;