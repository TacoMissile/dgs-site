/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const allUser = /* GraphQL */ `
  query AllUser {
    allUser {
      id
      name
      character {
        userid
        characterid
        name
      }
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!, $name: String!) {
    getUser(id: $id, name: $name) {
      id
      name
      character {
        userid
        characterid
        name
      }
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: TableUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
      }
      nextToken
    }
  }
`;
export const getCharacter = /* GraphQL */ `
  query GetCharacter($characterid: String!, $name: String!) {
    getCharacter(characterid: $characterid, name: $name) {
      userid
      characterid
      name
    }
  }
`;
export const listCharacters = /* GraphQL */ `
  query ListCharacters(
    $filter: TableCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        userid
        characterid
        name
      }
      nextToken
    }
  }
`;
