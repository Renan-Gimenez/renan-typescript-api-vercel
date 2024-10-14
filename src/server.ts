import { fastify } from "fastify";

import { ping } from "./routes";

const app = fastify();

app.register(ping);

const PORT = 3333;
app.listen({ port: PORT }).then(() => {
  console.log(`Server running on port ${PORT}`);
});
