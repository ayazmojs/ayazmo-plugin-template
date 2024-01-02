// Define your GraphQL schema
const schema = `
  type Dog {
    name: String!
    owner: Human
  }

  extend type Query {
    dogs: [Dog]
  }
`;

// Export the schema
module.exports = schema;
