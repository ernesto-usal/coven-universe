import "reflect-metadata"
import express from "express"
import http from "http"
import {ApolloServer} from "apollo-server-express"
import cookieParser from "cookie-parser"
import bodyParser from "body-parser"
import cors from "cors"
import helmet from "helmet"

import {initConfiguration} from "./configuration"
import {getSchema} from "./graphql"

export const createServer = async () => {
  if (process.env.ETH_NETWORK) {
    await initConfiguration(process.env.ETH_NETWORK)
    const PORT = 12040

    const app = express()
    app.use(cors())
    app.use(helmet())
    app.use(cookieParser())
    app.use(bodyParser.json())

    const apolloServer = new ApolloServer({
      schema: await getSchema(),
    })
    apolloServer.applyMiddleware({app})
    const httpServer = http.createServer(app)
    apolloServer.installSubscriptionHandlers(httpServer)
    httpServer.listen(PORT, () => {
      // console.log(`*  REST Server ready at http://localhost:${PORT}`);
      console.log(
        `🚀 Apollo Server ready at ws://localhost:${PORT}${apolloServer.graphqlPath}`,
      )
      // console.log(
      //   `🚀 Apollo Subscriptions ready at ws://localhost:${PORT}${apolloServer.subscriptionsPath}`,
      // );
    })
  }
}

createServer()
