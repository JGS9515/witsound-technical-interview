import { HttpConnection, Route, RouteProtocol } from "./HttpConnectionWrapper";

export const routes: Route[] = [
  {
    protocol: RouteProtocol.GET,
    path: "/",
    action: async (connection: HttpConnection): Promise<void> => {
      connection.response.send("Hello World from the server side!");
    },
  },
  {
    protocol: RouteProtocol.GET,
    path: "/name",
    action: async (connection: HttpConnection): Promise<void> => {
      // get all names
    },
  },
  {
    protocol: RouteProtocol.POST,
    path: "/name",
    action: async (connection: HttpConnection): Promise<void> => {
      // create new name
    },
  },
];
