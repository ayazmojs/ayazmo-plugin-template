const dogs = [
  { name: 'Max' },
  { name: 'Charlie' },
  { name: 'Buddy' },
  { name: 'Max' }
]

const resolvers = {
  Query: {
    dogs: async (_, args, context, info) => dogs,
  }
}

export default resolvers