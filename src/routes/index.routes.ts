import { accessLogsRoutes } from "./accesslogs.routes";

export function setRoutes(app: any): void {

  /** add all the routes needed below */
  accessLogsRoutes(app);

}
