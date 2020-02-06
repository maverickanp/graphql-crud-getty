import { SchemaComposer } from 'graphql-compose';

import db from '../utils/db';

import { RecipeQuery, RecipeMutation } from './recipe';

const schemaComposer = new SchemaComposer();

schemaComposer.Query.addFields({
  ...RecipeQuery,
});

schemaComposer.Mutation.addFields({
  ...RecipeMutation,
});

export default schemaComposer.buildSchema();
