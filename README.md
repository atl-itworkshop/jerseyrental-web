# jerseyswap-web
The web frontend for the JerseyRental app 

![image](https://user-images.githubusercontent.com/8188/63205604-ec9d9380-c074-11e9-90b0-f719bf556527.png)

## Local Development

Use these scripts to run the website locally on your machine.

In the project directory, you can run:

### `yarn install`

This will install any dependencies and will update the `yarn.lock` file if you added some new dependencies. The `yarn.lock` file needs to be always checked in.

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

## Run in Docker

To be to run the website in a container using Docker, follow these steps:

### Build & Run
```
docker-compose up -d --build
```

Runs the app in the development mode.<br>
Open [http://localhost:8080](http://localhost:8080) to view it in the browser.

### List 

```
docker-compose ps
```

### Stop & Remove

```
docker-compose stop
docker-compose rm
```