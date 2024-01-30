/**
 * Defining Service - Example Template
 *
 * This is a template service for Ayazmo framework.
 * Developers can use this as a starting point to create custom servies.
 * Feel free to modify, expand, or replace this template according to your application's needs.
 */


import { BasePluginService } from '@ayazmo/core';
// import { EntityRepository } from '@ayazmo/utils';

export default class PetsService extends BasePluginService {
  // private petEntity: EntityRepository<Object>;

  constructor(container, pluginOptions) {
    super(container, pluginOptions);
    // this.petEntity = this.getEntity('Pet');
  }

  async getAll() {
    // const comments = this.getService('commentService').getAll();
    const pets = ['cat', 'dog'];
    return pets;
  }
}