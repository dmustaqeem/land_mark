/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const updateSpacialWorldTracking = /* GraphQL */ `
  mutation UpdateSpacialWorldTracking(
    $input: UpdateSpacialWorldTrackingInput!
    $condition: ModelSpacialWorldTrackingConditionInput
  ) {
    updateSpacialWorldTracking(input: $input, condition: $condition) {
      id
      x_coordinate
      y_coordinate
      z_coordinate
      model_s3_link
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createSpacialWorldTracking = /* GraphQL */ `
  mutation CreateSpacialWorldTracking(
    $input: CreateSpacialWorldTrackingInput!
    $condition: ModelSpacialWorldTrackingConditionInput
  ) {
    createSpacialWorldTracking(input: $input, condition: $condition) {
      id
      x_coordinate
      y_coordinate
      z_coordinate
      model_s3_link
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteSpacialWorldTracking = /* GraphQL */ `
  mutation DeleteSpacialWorldTracking(
    $input: DeleteSpacialWorldTrackingInput!
    $condition: ModelSpacialWorldTrackingConditionInput
  ) {
    deleteSpacialWorldTracking(input: $input, condition: $condition) {
      id
      x_coordinate
      y_coordinate
      z_coordinate
      model_s3_link
      createdAt
      updatedAt
      owner
    }
  }
`;
