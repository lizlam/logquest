export const schema = gql`
  type Game {
    id: Int!
    title: String!
    bgglink: String!
    createdAt: DateTime!
    completed: String!
  }

  type Query {
    games: [Game!]!
    game(id: Int!): Game!
  }

  input CreateGameInput {
    title: String!
    bgglink: String!
    completed: String!
  }

  input UpdateGameInput {
    title: String
    bgglink: String
    completed: String!
  }

  type Mutation {
    createGame(input: CreateGameInput!): Game!
    updateGame(id: Int!, input: UpdateGameInput!): Game!
    deleteGame(id: Int!): Game!
  }
`
