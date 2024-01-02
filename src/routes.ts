import { AyazmoRouteOptions, AyazmoRequest, AyazmoReply } from '@ayazmo/types';

const routes: AyazmoRouteOptions[] = [
  {
    method: 'GET',
    url: '/pets',
    handler: async (request: AyazmoRequest, reply: AyazmoReply) => {

      // get the user service from the DI container
      const petsService = request.diScope.resolve('petsService');
      reply.code(200).send({ pets: await petsService.getAll() });

    }
  },
  // More routes can be added here...
];

export default routes;
