/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Request, Response} from 'express';
import connection from '../database/connection';

class ItemsController {
  async index(req: Request, res: Response) {
    const items = await connection('items').select('*');
  
    const serializedItems = items.map(item => {
      return {
        id: item.id,
        title: item.title,
        image_url: `http://localhost:3333/uploads/${item.image}`
      }
    })
  
    return res.json(serializedItems);
  }
}

export default ItemsController;