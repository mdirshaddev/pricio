import type { CodegenConfig } from '@graphql-codegen/cli';

const graphqlCodegenConfig: CodegenConfig = {
  schema: './src/modules/graphql/schema.graphql',
  documents: './src/**/*.gql',
  generates: {
    'generated/generates.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-query'
      ],
      config: {
        fetcher: 'graphql-request'
      }
    }
  },
  hooks: {
    afterAllFileWrite: ['prettier -w']
  }
};

export default graphqlCodegenConfig;
