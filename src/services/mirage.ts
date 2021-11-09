import { createServer, Factory, Model, Response } from "miragejs";
import faker from "faker";
import { User } from "../types/user";

export function MakeServer() {
  return createServer({
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

      this.get("/users", (schema, request) => {
        const { page = 1, per_page = 10 } = request.queryParams;

        const total = schema.all("user").length;

        const start = (Number(page) - 1) * Number(per_page);
        const end = start + Number(per_page);

        const users = (this as any)
          .serialize(schema.all("user"))
          .users.slice(start, end);

        return new Response(200, { "x-total-count": String(total) }, { users });
      });
      this.post("/users");

      this.namespace = "";
      this.passthrough();
    },
  });
}
