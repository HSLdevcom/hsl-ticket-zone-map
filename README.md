# HSL Ticket Zones Map

A simple map that shows the Helsinki Regional Traffic ticket zones that will come into effect in the beginning of 2019.
Made to be embeddable and self-sufficient.

### Develop

First of all, install dependencies with yarn or npm.

```bash
yarn

# or

npm install
```

To start the server in watch mode, run the `watch` script.

```bash
yarn run watch
```

To start the server with Forever and logging, run the `start` script. This is what happens in production.

```bash
yarn start
```

There is no build step in this application. Now you can visit the site at [http://localhost:3000](http://localhost:3000).

### Production

The production application uses Docker. Port 3000 is exposed from the Docker container.

To build the Docker image:
```bash
docker build -t hsldevcom/hsl-ticket-zones-map .
```

To run the Docker container:

```bash
docker run -p 3000:3000 --name hsl-ticket-zones-map hsldevcom/hsl-ticket-zones-map
```

Adjust the port bindings as necessary. Now you can visit the site at [http://localhost:3000](http://localhost:3000).
