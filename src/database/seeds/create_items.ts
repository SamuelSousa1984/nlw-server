/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Knex from 'knex';

export async function seed(knex: Knex) {
  await knex('items').insert([
    {title: 'Lâmpadas', image: 'lampadas.svg'},
    {title: 'Pilhas e Baterias', image: 'baterias.svg'},
    {title: 'Papéis e Papelão', image: 'papeis-papelao.svg'},
    {title: 'Resíduos Eletrônicos', image: 'eletrônicos.svg'},
    {title: 'Resíduos Orgânicos', image: 'orgânicos.svg'},
    {title: 'Óleo de Cozinha', image: 'oleo.svg'},
  ])
}