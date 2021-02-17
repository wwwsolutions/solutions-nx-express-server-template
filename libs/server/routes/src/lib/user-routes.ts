import { Router } from 'express';

import { getAllUsersController } from '@server/controllers';
// import {
//   protect,
//   loginController,
//   signupController,
//   getAllUsersController,
//   getUserController,
//   createUserController,
//   deleteUserController,
//   updateUserController,
//   forgotPasswordController,
//   resetPasswordController,
//   updatePasswordController,
//   updateMeController,
//   deleteMeController,
// } from '@codebase/natoursapi/controllers';

const router: Router = Router();

// router.route('/forgotPassword').post(forgotPasswordController);
// router.route('/resetPassword/:token').patch(resetPasswordController);
// router.route('/updateMyPassword').patch(protect, updatePasswordController);
// router.route('/updateMe').patch(protect, updateMeController);
// router.route('/deleteMe').delete(protect, deleteMeController);

// router.route('/signup').post(signupController);
// router.route('/login').post(loginController);

// router.route('/').get(getAllUsersController).post(createUserController);
// router
//   .route('/:id')
//   .get(getUserController)
//   .delete(deleteUserController)
//   .patch(updateUserController);

router.route('/').get(getAllUsersController);

export { router as userRouter };
