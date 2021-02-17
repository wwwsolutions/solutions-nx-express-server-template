// www.typescriptlang.org/docs/handbook/declaration-merging.html

// Declaration Merging allows you to merge two or more distinct declaration
// or types declared with the same name into a single definition.
// This concept allows you to attach your own custom property onto
// another Typescript interface type.

import { User } from '@server/models';

declare global {
  namespace Express {
    // CUSTOMIZE INTERFACE
    interface Request {
      token?: any;
      requestTime?: any;
      user?: User;
    }

    // CUSTOMIZE INTERFACE
    interface Response {
      token?: any;
      requestTime?: any;
      user?: any;
    }
  }
}
