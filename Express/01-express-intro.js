const express = require("express");

function block_1_basicServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    app.get("/menu", (_, res) => {
      res.json({
        items: ["thali", "biryani"],
      });
    });

    app.get("/search", (req, res) => {
      const {q, limit} = req.query;
      res.json({
        query: q,
        limit: limit || "10",
      });
    });

    app.get("/menu/:id", (req, res) => {
      const {id} = req.params;

      res.json({
        id: id,
        price: 169,
      });
    });

    app.post("/order", (req, res) => {
      const order = req.body;

      res.status(201).json({
        status: "created",
        order,
      });
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        const res = await fetch(`${base}/menu`);
        const resData = await res.json();
        console.log(JSON.stringify(resData));

        console.log(
          "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
        );

        const itemSeach = await fetch(`${base}/search?q=biryani&limit=5`);
        const itemData = await itemSeach.json();

        console.log(JSON.stringify(itemData));

        console.log(
          "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
        );

        const itemId = await fetch(`${base}/menu/42`);
        const itemIdData = await itemId.json();

        console.log(JSON.stringify(itemIdData));

        console.log(
          "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
        );

        const postOrder = await fetch(`${base}/order`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            body: JSON.stringify({
              dish: "biryani",
              quantity: 2,
            }),
          },
        });
        const postOrderData = await postOrder.json();

        console.log(JSON.stringify(postOrderData));
      } catch (error) {
        console.log(error);
      }

      server.close(() => {
        console.log("Block 1 resolved");
        resolve();
      });
    });
  });
}

function bloac_2_basicServer() {
  return new Promise((resolve) => {
    const app = express();
    app.use(express.json());

    app.get("/text", (req, res) => {
      res.send("Hello World");
    });

    app.get("/json", (req, res) => {
      res.json({
        freamwork: "express",
        version: "6.1.1",
      });
    });

    app.get("/not-found", (req, res) => {
      res.status(404).json({error: "page not found", status: 404});
    });

    app.get("/health", (req, res) => {
      res.sendStatus(200);
    });

    app.get("/old-route", (req, res) => {
      res.redirect(301, "https://www.chaicode.com");
    });

    app.get("/custom-header", (req, res) => {
      res.set("x-powered-by", "kunal-madoliya");
      res.set("x-req-byId", "123456789");
      res.json({
        message: "custom header set",
      });
    });

    const server = app.listen(0, async () => {
      const port = server.address().port;
      const base = `http://127.0.0.1:${port}`;

      try {
        const test = await fetch(`${base}/text`);
        const textData = await test.text();

        console.log(textData);

        console.log(
          "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
        );

        const jsonText = await fetch(`${base}/json`);
        const jsonData = await jsonText.json();

        console.log(jsonData);

        console.log(
          "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
        );

        const notFoundText = await fetch(`${base}/not-found`);
        const notFoundData = await notFoundText.json();

        console.log(notFoundData);


                console.log(
          "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
        );


        const health = await fetch(`${base}/health`)
        const healthData = await health.text()

        console.log(healthData);
        
                        console.log(
          "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
        );

        const oldRoute = await fetch(`${base}/old-route`)
        const oldData = await oldRoute.text()
        console.log(oldData);
        
                               console.log(
          "+++++++++++++++++++++++++++++++++++++++++++++++++++++++++",
        );

        const customHeader = await fetch(`${base}/custom-header`)
        const customHeaderData = await customHeader.json()

        console.log(customHeaderData);
        
        
        
      } catch (error) {
        console.log(error);
      }
    });
  });
}

async function main() {
  await block_1_basicServer();
  console.log("+++++++++++++++++++++++++++++++++++++++++++++++++++++++++");

  await bloac_2_basicServer();

  process.exit(0);
}

main();
