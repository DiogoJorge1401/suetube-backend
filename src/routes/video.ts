import { Router } from 'express';
import { verifyToken } from '../middlewares/verifyToken';
import { addVideoController } from '../useCases/video/AddVideo';
import { deleteVideoController } from '../useCases/video/DeleteVideo';
import { getVideoController } from '../useCases/video/GetVideo';
import { updateVideoController } from '../useCases/video/UpdateVideo';
import { addViewVideoController } from '../useCases/video/AddViewVideo';
import { trendVideoController } from '../useCases/video/TrendVideo';
import { randomVideoController } from '../useCases/video/RandomVideo';
import { subsVideoController } from '../useCases/video/SubsVideo';
import { tagsVideoController } from '../useCases/video/TagsVideo';
import { searchVideoController } from '../useCases/video/SearchVideo';

const videoRouter = Router();

videoRouter.get('/trend', trendVideoController.handle);
videoRouter.get('/tags/:tags', tagsVideoController.handle);
videoRouter.get('/search/:title', searchVideoController.handle);
videoRouter.get('/random', randomVideoController.handle);
videoRouter.get('/subs', verifyToken, subsVideoController.handle);
videoRouter.get('/find/:id', getVideoController.handle);
videoRouter.put('/:id', verifyToken, updateVideoController.handle);
videoRouter.put('/view/:id', addViewVideoController.handle);
videoRouter.delete('/:id', verifyToken, deleteVideoController.handle);
videoRouter.post('/', verifyToken, addVideoController.handle);

export { videoRouter };
