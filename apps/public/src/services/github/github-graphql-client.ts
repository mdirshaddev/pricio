import { GraphQLClient } from 'graphql-request';

/* The code is creating a new instance of the `GraphQLClient` class and assigning it to the
`githubGraphQLClient` constant. The `GraphQLClient` constructor takes two arguments: the GraphQL
endpoint URL (`process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_URL`) and an options object. The options
object includes a `headers` property with an `Authorization` header that contains a bearer token
(`process.env.NEXT_PUBLIC_GITHUB_TOKEN`). This client can be used to make GraphQL requests to the
specified GitHub GraphQL API endpoint with the provided authorization token. */
const githubGraphQLClient: GraphQLClient = new GraphQLClient(
  process.env.NEXT_PUBLIC_GITHUB_GRAPHQL_URL,
  {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_TOKEN}`
    }
  }
);

export { githubGraphQLClient };
