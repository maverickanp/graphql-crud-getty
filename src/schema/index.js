import { SchemaComposer } from 'graphql-compose';


const schemaComposer = new SchemaComposer();

import { RecipeQuery, RecipeMutation } from './recipe';

schemaComposer.Query.addFields({
    ...RecipeQuery,
});

schemaComposer.Mutation.addFields({
    ...RecipeMutation,
});

export default schemaComposer.buildSchema();