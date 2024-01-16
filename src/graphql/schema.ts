// Define your GraphQL schema
const schema = `
  type Dog {
    name: String!
  }

  extend type Query {
    dogs: [Dog]
  }
`;

export default schema;
