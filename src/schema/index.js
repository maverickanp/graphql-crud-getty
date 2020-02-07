import { SchemaComposer } from 'graphql-compose'

import { RecipeQuery, RecipeMutation } from './recipe'

const schemaComposer = new SchemaComposer()

schemaComposer.Query.addFields({
  ...RecipeQuery
})

schemaComposer.Mutation.addFields({
  ...RecipeMutation
})

export default schemaComposer.buildSchema()
