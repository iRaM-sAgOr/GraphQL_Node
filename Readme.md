# GraphQL_Node
Graphql api creation with Nodejs

1. https://www.apollographql.com/docs/apollo-server/getting-started/

-- Create an apollo server
-- Create some schema(table with type)
-- Create some resolver(login behind the query)

Commit: Apollo server, schema, resolver, single entity, entity list

a. single entity query
Client:
query ExampleQuery($id: ID!, $gameId: ID!, $authorId: ID!) {
  review(id: $id) {
    rating,
    content
  },
  game(id: $gameId) {
    title
  },
  author(id: $authorId) {
    name
  }

}

also pass as payload
{
    "id": "1",
    "gameId": "2:,
    "suthorId": "3"
}

b. All list
Client:
query ExampleQuery {
  reviews {
    id
  }
  games {
    id
  }
  authors {
    id
  }
}

NB: Can user localhost:4001 for the apollo sandbox


2. Mutation for Delete entry
-- Create a schema for Mutation with deleteGame,
-- Create the resolver with the Mutation and deleteGame function

Query:
mutation deleteMutation($id: ID!){
  deleteGame(id: $id) {
    title,
    platform,
    id
  }
}