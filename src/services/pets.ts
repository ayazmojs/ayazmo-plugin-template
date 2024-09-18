/**
 * Defining Service - Example Template
 *
 * This is a template service for Ayazmo framework.
 * Developers can use this as a starting point to create custom servies.
 * Feel free to modify, expand, or replace this template according to your application's needs.
 */


import { BasePluginService } from '@ayazmo/core';
import { AyazmoInstance, PluginConfig } from '@ayazmo/types';
// import { EntityRepository } from '@ayazmo/utils';

export default class PetsService extends BasePluginService {
  // private petRepository: EntityRepository<Object>;

  constructor(app: AyazmoInstance, pluginOptions: PluginConfig) {
    super(app, pluginOptions);
    // this.petRepository = this.getRepository('Pet');
  }

  async getAll() {
    // const comments = this.getService('commentService').getAll();
    const pets = ['cat', 'dog'];
    return pets;
  }
}