/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpatialAr = /* GraphQL */ `
  query GetSpatialAr($id: ID!) {
    getSpatialAr(id: $id) {
      ar_name
      user_id
      category_id
      model_id
      x_position
      y_position
      z_position
      x_rotation
      y_rotation
      z_rotation
      x_scale
      y_scale
      z_scale
      id
      createdAt
      updatedAt
    }
  }
`;
export const listSpatialArs = /* GraphQL */ `
  query ListSpatialArs(
    $filter: ModelSpatialArFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpatialArs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ar_name
        user_id
        category_id
        model_id
        x_position
        y_position
        z_position
        x_rotation
        y_rotation
        z_rotation
        x_scale
        y_scale
        z_scale
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getModel = /* GraphQL */ `
  query GetModel($id: ID!) {
    getModel(id: $id) {
      model_name
      model_path
      id
      createdAt
      updatedAt
    }
  }
`;
export const listModels = /* GraphQL */ `
  query ListModels(
    $filter: ModelModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        model_name
        model_path
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getFollower = /* GraphQL */ `
  query GetFollower($id: ID!) {
    getFollower(id: $id) {
      user_id
      follower_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const listFollowers = /* GraphQL */ `
  query ListFollowers(
    $filter: ModelFollowerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFollowers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        user_id
        follower_id
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getLikes = /* GraphQL */ `
  query GetLikes($id: ID!) {
    getLikes(id: $id) {
      ar_id
      user_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const listLikes = /* GraphQL */ `
  query ListLikes(
    $filter: ModelLikesFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLikes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ar_id
        user_id
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getViews = /* GraphQL */ `
  query GetViews($id: ID!) {
    getViews(id: $id) {
      ar_id
      user_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const listViews = /* GraphQL */ `
  query ListViews(
    $filter: ModelViewsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listViews(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        ar_id
        user_id
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
      category_name
      id
      createdAt
      updatedAt
    }
  }
`;
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        category_name
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
