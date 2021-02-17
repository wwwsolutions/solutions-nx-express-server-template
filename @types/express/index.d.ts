import { Request } from 'express';

// import { UserModel } from "../../src/user/user.model";

// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
// export {};

// declare global {
//   namespace Express {
//     interface Request {
//       // currentUser: UserModel
//     }
//   }
// }

// declare global {
//   namespace Express {
//     interface ExtendedRequest extends Request {
//       body: { [key: string]: string | undefined };
//     }
//   }
// }

interface User {
  name: string;
}

declare global {
  namespace Express {
    interface Request {
      body: { [key: string]: string | undefined };
      [key: string]: string | undefined;
    }
  }
}
