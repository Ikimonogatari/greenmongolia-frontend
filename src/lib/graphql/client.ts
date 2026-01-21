import { GraphQLClient } from 'graphql-request';

// GraphQL endpoint for Directus
const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_DIRECTUS_URL 
  ? `${process.env.NEXT_PUBLIC_DIRECTUS_URL}/graphql`
  : 'https://cms.green-mongolia.com/graphql';

// Create GraphQL client instance
export const graphqlClient = new GraphQLClient(GRAPHQL_ENDPOINT, {
  headers: {
    'Content-Type': 'application/json',
  },
  // Add credentials if needed for authentication
  // credentials: 'include',
});

// Helper function to make GraphQL requests with error handling
export async function makeGraphQLRequest<T>(
  query: string,
  variables?: Record<string, unknown>
): Promise<T> {
  try {
    const data = await graphqlClient.request<T>(query, variables);
    return data;
  } catch (error) {
    console.error('GraphQL request error:', error);
    throw error;
  }
}

export default graphqlClient;
