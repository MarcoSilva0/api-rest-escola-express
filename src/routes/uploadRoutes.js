import { Router } from 'express';
import loginRequired from '../middlewares/loginRequired';

import UploadController from '../controllers/UploadController';

const router = new Router();

router.post('/', loginRequired, UploadController.store);

export default router;
