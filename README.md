# Template project

`Nx monorepo, Typescript, Express, MVC Architecture`

Application features:

- Logger

- Security

- Multiple routers

- Serving static resources

- Exception Handling

---

## Adding capabilities to your workspace

### Dependencies

- [cookie-parser](https://www.npmjs.com/package/cookie-parser)
  - `npm install --save cookie-parser`
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

### Dev dependencies

- [Express Plugin for Nx](https://www.npmjs.com/package/@nrwl/express)
  - `npm install --save-dev @nrwl/express`
- [Morgan](https://www.npmjs.com/package/morgan)
  - `npm install --save-dev morgan`
- [CHALK](https://www.npmjs.com/package/chalk)
  - `npm install --save-dev chalk`
- [@types/express](https://www.npmjs.com/package/@types/express)
  - `npm install --save-dev @types/express`
- [@types/cookie-parser](https://www.npmjs.com/package/@types/cookie-parser)
  - `npm install --save-dev @types/cookie-parser`
- [@types/morgan](https://www.npmjs.com/package/@types/morgan)
  - `npm install --save-dev @types/morgan`
- [@types/express-rate-limit](https://www.npmjs.com/package/@types/express-rate-limit)
  - `npm install --save-dev @types/express-rate-limit`
- [@types/hpp](https://www.npmjs.com/package/@types/hpp)
  - `npm install --save-dev @types/hpp`
- [@types/express-mongo-sanitize](https://www.npmjs.com/package/@types/express-mongo-sanitize)
  - `npm install --save-dev @types/express-mongo-sanitize`

---

## Code scaffolding

### Generating folder structure

Run `mkdir libs/server` to create a directory named `server` to hold all express server relevant code.

### Generating Express application

**`./apps/server`** & **`./apps/server-e2e`**

```javascript
nx generate @nrwl/express:application --name=server
```

### Generating corresponding server libraries | Node

**`./libs/server/models`**

```javascript
nx generate @nrwl/node:library --name=models --directory=server --importPath=@server/models --no-interactive
```

**`./libs/server/routes`**

```javascript
nx generate @nrwl/node:library --name=routes --directory=server --importPath=@server/routes --no-interactive
```

**`./libs/server/controllers`**

```javascript
nx generate @nrwl/node:library --name=controllers --directory=server --importPath=@server/controllers --no-interactive
```

**`./libs/server/middleware`**

```javascript
nx generate @nrwl/node:library --name=middleware --directory=server --importPath=@server/middleware --no-interactive
```

**`./libs/server/utils`**

```javascript
nx generate @nrwl/node:library --name=utils --directory=server --importPath=@server/utils --no-interactive
```

### Generating globally shared libraries | Node

Run `mkdir libs/shared` to create a directory named `shared` to hold all globally shared libraries.

**`./libs/shared/environments`**

```javascript
nx generate @nrwl/node:library --name=environments --directory=shared --importPath=@shared/environments --unitTestRunner=none --no-interactive
```

**`./libs/shared/exceptions`**

```javascript
nx generate @nrwl/node:library --name=exceptions --directory=shared --importPath=@shared/exceptions --unitTestRunner=none --no-interactive
```

**`./libs/shared/data-access-models`**

```javascript
nx generate @nrwl/node:library --name=data-access-models --directory=shared --importPath=@shared/data-access-models --unitTestRunner=none --no-interactive

```

---

### Extend Express Request and Response : Typescript Declaration Merging

Run `mkdir @types && mkdir @types/express` to create a directory named `express` to hold extended Express types definitions.

Create a file `index.d.ts` with following content.

```javascript
declare namespace Express {
  export interface Request {
    token: any;
    requestTime: any;
    user: any;
  }

  export interface Response {
    token: any;
    requestTime: any;
    user?: any;
  }
}
```

Add `"typeRoots"` value to `tsconfig.base.json` in Nx monorepo Typescript configuration file.

```javascript
"typeRoots": [
      "@types",               
      "./node_modules/@types"
    ],
```

Add `"esModuleInterop"`, `"forceConsistentCasingInFileNames"` values to `tsconfig.base.json` in Nx monorepo Typescript configuration file.

```javascript
"compilerOptions": {
    "esModuleInterop": true,
    "forceConsistentCasingInFileNames": true,
},
```

---

### References

[Typescript Declaration Merging](https://www.typescriptlang.org/docs/handbook/declaration-merging.html)

More sources about `Typescript Declaration Merging`:

[dev.to](https://dev.to/kwabenberko/extend-express-s-request-object-with-typescript-declaration-merging-1nn5)

[stackoverflow](https://stackoverflow.com/questions/37377731/extend-express-request-object-using-typescript)

[github](https://github.com/DefinitelyTyped/DefinitelyTyped/blob/master/types/passport/index.d.ts)

---
