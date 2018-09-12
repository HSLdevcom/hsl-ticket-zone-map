# HSL Ticket Zones Map

A simple map that shows the Helsinki Regional Traffic ticket zones that will come into effect in the beginning of 2019. It is made to be embeddable and self-sufficient.

The map uses [mapbox-gl-js](https://github.com/mapbox/mapbox-gl-js) to render the map based on [HSL's vector styles](https://github.com/HSLdevcom/hsl-map-style). There is no build step involved in this application, but a server is included to generate the vector styles and serve the application HTML file. It runs in a Docker container in production.

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

Now you can visit the site at [http://localhost:3000](http://localhost:3000).

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
