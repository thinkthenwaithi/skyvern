import { createServer } from "http";
import handler from "serve-handler";
import open from "open";

const port = 9001;
const url = `http://localhost:${port}`;

const server = createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, {
    public: "dist",
    rewrites: [
      {
        source: "**",
        destination: "/index.html",
      },
    ],
  });
});

server.listen(9001, async () => {
  console.log(`Running at ${url}`);
  await open(url);
});
