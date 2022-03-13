import {rest} from "msw";

const URL = 'http://localhost:5000';

export const handlers = [
  rest.get(`${URL}/products`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'America',
          imagePath: '/images/america.jpg',
        },
        {
          name: 'England',
          imagePath: '/images/england.jpg',
        }
      ])
    )
  }),
  rest.get(`${URL}/options`, (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: 'Insurance',
        },
        {
          name: 'Dinner'
        }
      ])
    )
  }),
  rest.post(`${URL}/order`, (req, res, ctx) => {
    const dummyData = [{orderNumber: 1234567, price: 2000}];
    return res(ctx.json(dummyData));
  }),
]