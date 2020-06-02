/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import {Request, Response} from 'express'
import connection from '../database/connection';

class PointsController {
  async index(req: Request, res: Response) {
    const {city, uf, items} = req.query;

    const parsedItens = String(items)
      .split(',')
      .map(item => Number(item.trim()))

    const points = await connection('points')
      .join('point_items', 'points.id', '=', 'point_items.point_id')
      .whereIn('point_items.item_id', parsedItens)
      .where('city', String(city))
      .where('uf', String(uf))
      .distinct()
      .select('points.*')

    return res.json(points);
  }

  async show(req: Request, res: Response) {
    const {id} = req.params;

    const point = await connection('points')
      .where('id', id)
      .first()

    if(!point) {
      return res.status(400).json({error: 'Ponto não encontrado'})
    }

    const items = await connection('items')
      .join('point_items', 'items.id', '=', 'point_items.item_id')
      .where('point_items.point_id', id)
      .select('items.title')

    return res.json({point, items});
  }

  async create(req: Request, res: Response) {
    const {
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
      items
    } = req.body;
  
    const trx = await connection.transaction()
  
    const point = {
      image: `https://images.unsplash.com/photo-
      1532996122724-e3c354a0b15b?ixlib=rb-1.2.1&ixid
      =eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60`,
      name,
      email,
      whatsapp,
      latitude,
      longitude,
      city,
      uf,
    }

    const insertedIds = await trx('points').insert(point);
  
    const point_id = insertedIds[0]

    const pointItems = items.map((item_id: number) => {
      return {
        item_id,
        point_id
      }
    })
  
    await trx('point_items').insert(pointItems);

    await trx.commit();
  
    return res.json({
      id: point_id,
      ...point,
    });
  }
}

export default PointsController;