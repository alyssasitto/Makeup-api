const jsonServer = require("json-server");

const server = jsonServer.create();

const router = jsonServer.router("filteredData.json");

const middleWares = jsonServer.defaults();

const port = process.env.PORT;

server.use(middleWares);
server.use(router);

server.listen(port);
