# Template project

## Express server Nx monorepo architecture

`Nx monorepo, Typescript, Express`

- XXXXXXXXX

- XXXXXXXXX

- XXXXXXXXX

- XXXXXXXXX

---

## Adding capabilities to your workspace

### Dependencies

- [Axios](https://www.npmjs.com/package/axios)
  - `npm install --save axios`
- [Express Rate Limit](https://www.npmjs.com/package/express-rate-limit)
  - `npm install --save express-rate-limit`
- [Helmet](https://www.npmjs.com/package/helmet)
  - `npm install --save helmet`
- [xss-clean](https://www.npmjs.com/package/xss-clean)
  - `npm install --save xss-clean`
- [HPP](https://www.npmjs.com/package/hpp)
  - `npm install --save hpp`
- [Express Mongoose Sanitize](https://www.npmjs.com/package/express-mongo-sanitize)
  - `npm install --save express-mongo-sanitize`

- [Xxxxxxx](https://www.npmjs.com/package/xxxxxxx)
  - `npm install --save xxxxxx`
- [Xxxxxxx](https://www.npmjs.com/package/xxxxxxx)
  - `npm install --save xxxxxx`

### Dev dependencies

- [Express Plugin for Nx](https://www.npmjs.com/package/@nrwl/express)
  - `npm install --save-dev @nrwl/express`
- [Morgan](https://www.npmjs.com/package/morgan)
  - `npm install --save-dev morgan`
- [colors.js](https://www.npmjs.com/package/colors)
  - `npm install --save-dev colors`
- [@types/express](https://www.npmjs.com/package/@types/express)
  - `npm install --save-dev @types/express`
- [@types/express-rate-limit](https://www.npmjs.com/package/@types/express-rate-limit)
  - `npm install --save-dev @types/express-rate-limit`


@types/express-rate-limit
## Code scaffolding for a template app `'server'`

### Generating folder structure

Run `mkdir libs/server` to create a directory named `server` to hold all express server relevant code.

### Generating Express application

**`./apps/server`** & **`./apps/server-e2e`**

```javascript
```

### Generating corresponding libraries | Express

**`./libs/server/xxxxxxx`**

```javascript
```

**`./libs/server/xxxxxxx`**

```javascript
```

**`./libs/server/xxxxxxx`**

```javascript
```

**`./libs/server/xxxxxxx`**

```javascript
```

### Generating corresponding server libraries | Typescript

**`./libs/server/controllers`**

```javascript
```

**`./libs/server/middleware`**

```javascript
```

**`./libs/server/models`**

```javascript
```

**`./libs/server/routes`**

```javascript
```

**`./libs/server/utils`**

```javascript
```

---

## Extend Express Request and Response : Typescript Declaration Merging

Run `mkdir @types/express` to create a directory named `express` to hold extended Express types definitions.

Create a file `index.d.ts` with following content.

```javascript
declare namespace Express {
  interface Request {
    token: any;
    requestTime: any;
    user: any;
  }

  interface Response {
    token: any;
    requestTime: any;
    user?: any;
  }
}
```

Add following lines to `tsconfig.base.json` in Nx monorepo Typescript configuration file.

```javascript
"typeRoots": [
      "@types",               
      "node_modules/@types"
    ],
```

More sources about `Typescript Declaration Merging`:

[stackoverflow](https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript)

[dev.to](https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5)

[github](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/passport/index.d.ts)
