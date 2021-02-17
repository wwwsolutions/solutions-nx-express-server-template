import { Request as _Request } from 'express';

// import { UserModel } from "../../src/user/user.model";

// https://stackoverflow.com/questions/57132428/augmentations-for-the-global-scope-can-only-be-directly-nested-in-external-modul
export {};

// declare global {
//   namespace Express {
//     interface Request {
//       // currentUser: UserModel
//     }
//   }
// }

declare global {
  namespace Express {
    interface Request extends _Request {
      body: { [key: string]: string | undefined };
    }
  }
}
