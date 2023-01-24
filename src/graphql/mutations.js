/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const addUser = /* GraphQL */ `
  mutation AddUser($id: ID!, $name: String, $character: [String]) {
    addUser(id: $id, name: $name, character: $character) {
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
export const addCharacter = /* GraphQL */ `
  mutation AddCharacter($userid: ID!, $content: String) {
    addCharacter(userid: $userid, content: $content) {
      userid
      characterid
      name
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser($input: CreateUserInput!) {
    createUser(input: $input) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser($input: UpdateUserInput!) {
    updateUser(input: $input) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser($input: DeleteUserInput!) {
    deleteUser(input: $input) {
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
export const createCharacter = /* GraphQL */ `
  mutation CreateCharacter($input: CreateCharacterInput!) {
    createCharacter(input: $input) {
      userid
      characterid
      name
    }
  }
`;
export const updateCharacter = /* GraphQL */ `
  mutation UpdateCharacter($input: UpdateCharacterInput!) {
    updateCharacter(input: $input) {
      userid
      characterid
      name
    }
  }
`;
export const deleteCharacter = /* GraphQL */ `
  mutation DeleteCharacter($input: DeleteCharacterInput!) {
    deleteCharacter(input: $input) {
      userid
      characterid
      name
    }
  }
`;
