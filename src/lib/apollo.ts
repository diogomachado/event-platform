import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: "https://api-sa-east-1.graphcms.com/v2/cl4qalhaa3lff01xt2hop7ean/master",
  cache: new InMemoryCache(),
});
