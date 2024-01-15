import { AyazmoRouteOptions, AyazmoInstance } from '@ayazmo/types';

const routes = (app: AyazmoInstance): AyazmoRouteOptions[] => [
  {
    method: 'GET',
    url: '/pets',
    handler: async (request, reply) => {

      // get the user service from the DI container
      const petsService = request.diScope.resolve('petsService');
      reply.code(200).send({ pets: await petsService.getAll() });

    }
  },
  // More routes can be added here...
];

export default routes;
