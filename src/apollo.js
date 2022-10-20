import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client"
import getAccessToken from "realm"

const client = new ApolloClient({
    link: new HttpLink({
      uri: `https://realm.mongodb.com/api/client/v2.0/app/${process.env.REALM_APP_ID}/graphql`,
      fetch: async (uri, options) => {
        const accessToken = await getAccessToken()
        // console.log(accessToken)
        options.headers.Authorization = `Bearer ${accessToken}`
        return fetch(uri, options)
      }
    }),
    cache: new InMemoryCache(),
});

export default client
