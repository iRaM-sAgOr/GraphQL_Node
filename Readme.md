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
