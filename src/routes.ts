import express from 'express';

const routes = express.Router();

import PointsController from './controllers/PointController';
import ItemsController from './controllers/ItemController';

const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get('/items', itemsController.index);
routes.get('/points', pointsController.index);
routes.post('/points', pointsController.create);
routes.get('/points/:id', pointsController.show);

export default routes;