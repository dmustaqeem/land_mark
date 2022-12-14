/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createSpatialAr = /* GraphQL */ `
  mutation CreateSpatialAr(
    $input: CreateSpatialArInput!
    $condition: ModelSpatialArConditionInput
  ) {
    createSpatialAr(input: $input, condition: $condition) {
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
export const updateSpatialAr = /* GraphQL */ `
  mutation UpdateSpatialAr(
    $input: UpdateSpatialArInput!
    $condition: ModelSpatialArConditionInput
  ) {
    updateSpatialAr(input: $input, condition: $condition) {
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
export const deleteSpatialAr = /* GraphQL */ `
  mutation DeleteSpatialAr(
    $input: DeleteSpatialArInput!
    $condition: ModelSpatialArConditionInput
  ) {
    deleteSpatialAr(input: $input, condition: $condition) {
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
export const createModel = /* GraphQL */ `
  mutation CreateModel(
    $input: CreateModelInput!
    $condition: ModelModelConditionInput
  ) {
    createModel(input: $input, condition: $condition) {
      model_name
      model_path
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateModel = /* GraphQL */ `
  mutation UpdateModel(
    $input: UpdateModelInput!
    $condition: ModelModelConditionInput
  ) {
    updateModel(input: $input, condition: $condition) {
      model_name
      model_path
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteModel = /* GraphQL */ `
  mutation DeleteModel(
    $input: DeleteModelInput!
    $condition: ModelModelConditionInput
  ) {
    deleteModel(input: $input, condition: $condition) {
      model_name
      model_path
      id
      createdAt
      updatedAt
    }
  }
`;
export const createFollower = /* GraphQL */ `
  mutation CreateFollower(
    $input: CreateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    createFollower(input: $input, condition: $condition) {
      user_id
      follower_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateFollower = /* GraphQL */ `
  mutation UpdateFollower(
    $input: UpdateFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    updateFollower(input: $input, condition: $condition) {
      user_id
      follower_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteFollower = /* GraphQL */ `
  mutation DeleteFollower(
    $input: DeleteFollowerInput!
    $condition: ModelFollowerConditionInput
  ) {
    deleteFollower(input: $input, condition: $condition) {
      user_id
      follower_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const createLikes = /* GraphQL */ `
  mutation CreateLikes(
    $input: CreateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    createLikes(input: $input, condition: $condition) {
      ar_id
      user_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateLikes = /* GraphQL */ `
  mutation UpdateLikes(
    $input: UpdateLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    updateLikes(input: $input, condition: $condition) {
      ar_id
      user_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteLikes = /* GraphQL */ `
  mutation DeleteLikes(
    $input: DeleteLikesInput!
    $condition: ModelLikesConditionInput
  ) {
    deleteLikes(input: $input, condition: $condition) {
      ar_id
      user_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const createViews = /* GraphQL */ `
  mutation CreateViews(
    $input: CreateViewsInput!
    $condition: ModelViewsConditionInput
  ) {
    createViews(input: $input, condition: $condition) {
      ar_id
      user_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateViews = /* GraphQL */ `
  mutation UpdateViews(
    $input: UpdateViewsInput!
    $condition: ModelViewsConditionInput
  ) {
    updateViews(input: $input, condition: $condition) {
      ar_id
      user_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteViews = /* GraphQL */ `
  mutation DeleteViews(
    $input: DeleteViewsInput!
    $condition: ModelViewsConditionInput
  ) {
    deleteViews(input: $input, condition: $condition) {
      ar_id
      user_id
      id
      createdAt
      updatedAt
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      category_name
      id
      createdAt
      updatedAt
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      category_name
      id
      createdAt
      updatedAt
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      category_name
      id
      createdAt
      updatedAt
    }
  }
`;
