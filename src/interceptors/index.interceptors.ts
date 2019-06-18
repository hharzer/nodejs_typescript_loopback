
import { injectHeaderToken } from "./header.token.interceptor";

export function setInterceptors(app: any): void {

  injectHeaderToken(app); 
 
}
