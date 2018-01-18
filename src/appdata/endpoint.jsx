import ApolloClient, { HttpLink } from 'apollo-client-preset'

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.graph.cool/simple/v1/cjce2zlxp0zpk0127h1iwd538'
  })
})

export { client }
