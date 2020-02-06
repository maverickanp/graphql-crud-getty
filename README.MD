# create a recipe mongoose model
RecipeSchema. we will be able to pull all recipes in a single GraphQL call.

# create a recipe graphql schema
Schemas are made up of Queries and Mutations.
Queries allow you to fetch data.
Mutations allow you to modify the data.

# index from schema
index.js tie to the model recipe and import our schemas using schemaComposer

# Util Script for Building GraphQL schema
* build script transforms Mongoose style schemas into GraphQL schemas.
* maintain mongoose connection alive
* .env files for system variables configurarion




# query all recipes
```
query {
  recipeMany {
    _id
    name
    category
    description
    createdAt
  }
}
```
# query filter
```
query {
  recipeOne(filter: { _id: "5e3c1289e24e1e08cd9f9575" }) {
    _id
    name
    category
    description
    createdAt
  }
}
```
# mutation create
```
mutation {
  recipeCreateOne(
    record: {
      name: "Bolo 2"
      category: "Sobremesa"
      description: "lorem ipsum"
    }
  ) {
    record {
      _id
      name
      category
      description
    }
  }
}
```
# mutation update
```
mutation {
  recipeUpdateOne(
    filter: { _id: "5e3c1227e24e1e08cd9f9574" }
    record: {
      name: "Feijão temperado denovo"
      description: "Feijão boladão, cheio de temperos e amor"
    }
  ) {
    record {
      _id
      name
      category
      description
    }
  }
}
```

# mutation delete
```
mutation {
  recipeRemoveOne(filter: { _id: "5e3c1227e24e1e08cd9f9574" }) {
    record {
      _id
      name
      category
      description
    }
  }
}
```

# -----------------------------------------

```yarn build : send command "babel src --out-dir dist" -> to transpile project files to dist folder```

```yarn start : send command "node dist/index.js"-> runs the project from dist folder```

```yarn dev : send command "nodemon --exec npx babel-node src/index.js" -> runs local project ```