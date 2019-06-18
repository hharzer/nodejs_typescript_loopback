/**
 * HEADER TOKEN INTERCEPTOR.
 */

// Interceptor (route handlers)


const interceptor = require('express-interceptor');

export function injectHeaderToken(app: any): void {

  const injectToken = interceptor(function(req: any, res: { get: (arg0: string) => string; }){
    return {
      // Only HTML responses will be intercepted
      isInterceptable: function(){
        return /application\/json/.test(res.get('Content-Type'));
      },
      // Appends a paragraph at the end of the response body
      intercept: function(body: any, send: (arg0: any) => void) {
       //LOGIC HERE
      }
    };
  })

  // Add the interceptor middleware
  app.use(injectToken);
  
}




