/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($id: ID, $name: String) {
    onCreateUser(id: $id, name: $name) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($id: ID, $name: String) {
    onUpdateUser(id: $id, name: $name) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($id: ID, $name: String) {
    onDeleteUser(id: $id, name: $name) {
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
export const onCreateCharacter = /* GraphQL */ `
  subscription OnCreateCharacter(
    $userid: ID
    $characterid: String
    $name: String
  ) {
    onCreateCharacter(userid: $userid, characterid: $characterid, name: $name) {
      userid
      characterid
      name
    }
  }
`;
export const onUpdateCharacter = /* GraphQL */ `
  subscription OnUpdateCharacter(
    $userid: ID
    $characterid: String
    $name: String
  ) {
    onUpdateCharacter(userid: $userid, characterid: $characterid, name: $name) {
      userid
      characterid
      name
    }
  }
`;
export const onDeleteCharacter = /* GraphQL */ `
  subscription OnDeleteCharacter(
    $userid: ID
    $characterid: String
    $name: String
  ) {
    onDeleteCharacter(userid: $userid, characterid: $characterid, name: $name) {
      userid
      characterid
      name
    }
  }
`;
