import { AppRouter } from '@server/utils';

// CONTROLLERS
import { getAllUsersController, getUserController } from '@server/controllers';

// INIT ROUTER
const router = AppRouter.getInstance();

// DEFINE ROUTES
router.route('/').get(getAllUsersController);
router.route('/:id').get(getUserController);

export { router as userRouter };
