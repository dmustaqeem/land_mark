/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getSpacialWorldTracking = /* GraphQL */ `
  query GetSpacialWorldTracking($id: ID!) {
    getSpacialWorldTracking(id: $id) {
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
export const listSpacialWorldTrackings = /* GraphQL */ `
  query ListSpacialWorldTrackings(
    $filter: ModelSpacialWorldTrackingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listSpacialWorldTrackings(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        x_coordinate
        y_coordinate
        z_coordinate
        model_s3_link
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
