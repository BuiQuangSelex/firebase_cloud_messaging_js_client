# Firebase Web test

## Configuration firebase

```js
module.exports = {
    firebaseConfig: {
        apiKey: "API_KEY",
        authDomain: "PROJECT_ID.firebaseapp.com",
        // The value of `databaseURL` depends on the location of the database
        databaseURL: "https://DATABASE_NAME.firebaseio.com",
        projectId: "PROJECT_ID",
        storageBucket: "PROJECT_ID.appspot.com",
        messagingSenderId: "SENDER_ID",
        appId: "APP_ID",
        // For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
        measurementId: "G-MEASUREMENT_ID",
    },
    vapidKey: "",
};

```

## Intall package

```shell
    npm i
```

## Run build module

```shell
    npm run build
```

## Intall web server

```shell
    npm install serve
```

## Run web server

```shell
    serve ./dist/
```
