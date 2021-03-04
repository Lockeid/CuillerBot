## What is it ?

A Kaamelott discord bot for random quotes.

## How to deploy ?

### Dev

Use `npm run dev` to use the dev webpack config which will create a bundle in the dist directory and watch for modifications.

### Production

You can either build the bundle by using `npm run dist` and then launch it manually or just use `npm start` to clean the directory and run it.

### Public key

You need a config file `config.json` at the root with a single key `token` 