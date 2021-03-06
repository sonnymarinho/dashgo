import {
  createServer,
  Factory,
  Model,
  Response,
  ActiveModelSerializer,
} from "miragejs";
import faker from "faker";
import { User } from "../types/user";

export function MakeServer() {
  return createServer({
    serializers: {
      application: ActiveModelSerializer,
    },

    models: {
      user: Model.extend<Partial<User>>({}),
    },

    factories: {
      user: Factory.extend({
        id() {
          return faker.datatype.uuid();
        },
        name(i) {
          return faker.name.findName();
        },
        email() {
          return faker.internet.email().toLowerCase();
        },
        createdAt() {
          return faker.date.recent(10);
        },
      }),
    },

    seeds(server) {
      server.createList("user", 200);
    },

    routes() {
      this.namespace = "api";
      this.timing = 750;

      this.get("/users/:id");
      this.get("/users", function (schema, request) {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const pageStart = (Number(page) - 1) * Number(per_page);
        const pageEnd = pageStart + Number(per_page);

        const { users } = this.serialize(schema.all("user"));

        const parsedUsers = users
          ? users
              .sort(
                (a: User, b: User) =>
                  new Date(b.createdAt) < new Date(a.createdAt)
              )
              .slice(pageStart, pageEnd)
          : [];

        return new Response(
          200,
          { "x-total-count": String(total) },
          { users: parsedUsers }
        );
      });
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });
}
