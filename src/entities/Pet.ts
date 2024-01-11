// import { Entity, PrimaryKey, Property } from '@mikro-orm/core';

/**
 * Defining Entity - Example Template
 *
 * This is a template entity for the Mikro ORM to be used in the Ayazmo framework.
 * Developers can use this as a starting point to create custom entities.
 * Feel free to modify, expand, or replace this template according to your application's needs.
 * For more information, see https://mikro-orm.io/docs/defining-entities.
 */

// @Entity()
// export class Pet {

//   @PrimaryKey()
//   id!: number;

//   @Property()
//   name!: string;

//   @Property()
//   type!: string; // e.g., 'Dog', 'Cat'

//   @Property({ nullable: true })
//   breed?: string;

//   @Property()
//   age!: number;

//   @Property({ type: 'text', nullable: true })
//   bio?: string;

//   @Property({ onCreate: () => new Date() })
//   createdAt: Date = new Date();

//   @Property({ onUpdate: () => new Date(), nullable: true })
//   updatedAt: Date = new Date();

//   // Additional properties or relations can be added here as per your requirements

//   constructor(name: string, type: string, age: number, breed?: string, bio?: string) {
//     this.name = name;
//     this.type = type;
//     this.age = age;
//     this.breed = breed;
//     this.bio = bio;
//   }
// }
