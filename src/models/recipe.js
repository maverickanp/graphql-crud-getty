import mongoose, { Schema } from 'mongoose'
import timestamps from 'mongoose-timestamp'
import { composeWithMongoose } from 'graphql-compose-mongoose'

export const RecipeSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  },
  {
    collection: 'recipes'
  }
)

RecipeSchema.plugin(timestamps)

RecipeSchema.index({ createdAt: 1, updatedAt: 1 })

export const Recipe = mongoose.model('Recipe', RecipeSchema)
export const RecipeTC = composeWithMongoose(Recipe)
