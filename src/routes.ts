import { AyazmoRouteOptions, AyazmoRequest, AyazmoReply } from '@ayazmo/types';

const routes: AyazmoRouteOptions[] = [
  {
    method: 'GET',
    url: '/users',
    handler: async (request: AyazmoRequest, reply: AyazmoReply) => {

      // get the user service from the DI container
      const petsService = request.diScope.resolve('petsService');
      reply.code(200).send({ pets: petsService.getAll() });

    }
  },
  // More routes can be added here...
];

export default routes;
