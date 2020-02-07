import { RecipeTC } from '../models/recipe'

const RecipeQuery = {
  recipeById: RecipeTC.getResolver('findById'),
  recipeByIds: RecipeTC.getResolver('findByIds'),
  recipeOne: RecipeTC.getResolver('findOne'),
  recipeMany: RecipeTC.getResolver('findMany')
}

const RecipeMutation = {
  recipeCreateOne: RecipeTC.getResolver('createOne'),
  recipeUpdateById: RecipeTC.getResolver('updateById'),
  recipeUpdateOne: RecipeTC.getResolver('updateOne'),
  recipeRemoveById: RecipeTC.getResolver('removeById'),
  recipeRemoveOne: RecipeTC.getResolver('removeOne')
}

export { RecipeQuery, RecipeMutation }
