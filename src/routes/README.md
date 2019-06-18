# Routes and Controllers
Use the index.routes.ts to add new references to the new routes and then inside of the new routes add a new reference to the new controllers with their methods. All routes shall be specified in the `SWAGGER` definitions first. If the routes you add in the ``index.routes.ts`` doesn't exist in the definitions, it wont resolve the route.

### Example of new route reference
All the new routes lives in `index.routes.ts`, so let's open it up and add the following code:
```js
import { acpGroupsRoutes } from "./acpgroups.routes";
/**Here you would add your next route file reference*/

export function setRoutes(app: any): void {
  acpGroupsRoutes(app);
  /**Here you would add your next route*/
}

```
### Example of the route file with reference to a controllers

```js
// Controllers (route handlers)

import { Request, Response } from "express";
import * as authMiddleware from "../middlewares/auth.middleware";
import * as acpGroupsController from "../components/acpgroups.controller";
// Controllers (route handlers)

import { Request, Response } from "express";
import * as authMiddleware from "../middlewares/auth.middleware";
import * as acpGroupsController from "../components/acpgroups.controller";
import * as apiResponse from "../util/restful.response.util";

export function acpGroupsRoutes(app: any): void {

  app.get("/acpGroups", [authMiddleware.isAuthenticated], function (req: Request, res: Response) {
    acpGroupsController.getAcpGroups(req, res).then(function (_result) {
      apiResponse.default(res, _result);
    }, function (_err) {
      apiResponse.default(res, _err);
    });
  });
}
  ```

### Middlewares
Having the routes separated would give the flexibility to make your code mode modular and also use custom middlewares. There would be some cases that you won't need to call the same middleware for all the routes, reduceing the stack size and memore usage if some middlewares have iterations.
