import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "./_db.js";

//type
import { typeDefs } from "./schema.js";

// Resolver for login
const resolvers = {
  Query: {
    games() {
      return db.games;
    },
    game(_, args) {
      return db.games.find((game) => game.id === args.id);
    },
    authors() {
      return db.authors;
    },
    author(_, args) {
      return db.authors.find((author) => author.id === args.id);
    },
    reviews() {
      return db.reviews;
    },
    review(_, args) {
      console.log("Hi from ", args);
      return db.reviews.find((review) => review.id === args.id);
    },
  },
  Mutation: {
    deleteGame(_, args) {
      db.games = db.games.filter(g => g.id != args.id)
      return db.games;
    }
  }
};

// configurations
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Server creation
const { url } = await startStandaloneServer(server, {
  listen: { port: 4001 },
});

console.log("Server Ready at port", 4001);
