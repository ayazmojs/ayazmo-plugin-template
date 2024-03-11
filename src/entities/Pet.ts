import { Entity, Property } from '@ayazmo/types';
import { BaseEntity } from '@ayazmo/core';

/**
 * Defining Entity - Example Template
 *
 * This is a template entity for the Mikro ORM to be used in the Ayazmo framework.
 * Developers can use this as a starting point to create custom entities.
 * Feel free to modify, expand, or replace this template according to your application's needs.
 * For more information, see https://mikro-orm.io/docs/defining-entities.
 */

@Entity()
export default class Pet extends BaseEntity {

  @Property()
  name!: string;

  @Property()
  type!: string; // e.g., 'Dog', 'Cat'

  // Additional properties or relations can be added here as per your requirements

  constructor(name: string, type: string) {
    super();
    this.name = name;
    this.type = type;
  }
}
