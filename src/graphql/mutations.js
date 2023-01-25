/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCombat = /* GraphQL */ `
  mutation CreateCombat(
    $input: CreateCombatInput!
    $condition: ModelCombatConditionInput
  ) {
    createCombat(input: $input, condition: $condition) {
      id
      name
      pcs
      CombatPCCharacters {
        nextToken
        startedAt
      }
      turns {
        id
        characterID
        phase
        hasGone
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCombat = /* GraphQL */ `
  mutation UpdateCombat(
    $input: UpdateCombatInput!
    $condition: ModelCombatConditionInput
  ) {
    updateCombat(input: $input, condition: $condition) {
      id
      name
      pcs
      CombatPCCharacters {
        nextToken
        startedAt
      }
      turns {
        id
        characterID
        phase
        hasGone
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCombat = /* GraphQL */ `
  mutation DeleteCombat(
    $input: DeleteCombatInput!
    $condition: ModelCombatConditionInput
  ) {
    deleteCombat(input: $input, condition: $condition) {
      id
      name
      pcs
      CombatPCCharacters {
        nextToken
        startedAt
      }
      turns {
        id
        characterID
        phase
        hasGone
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPCArchetype = /* GraphQL */ `
  mutation CreatePCArchetype(
    $input: CreatePCArchetypeInput!
    $condition: ModelPCArchetypeConditionInput
  ) {
    createPCArchetype(input: $input, condition: $condition) {
      id
      name
      tats {
        tough
        agility
        mod
        strange
      }
      stats {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      slots
      pccharacterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePCArchetype = /* GraphQL */ `
  mutation UpdatePCArchetype(
    $input: UpdatePCArchetypeInput!
    $condition: ModelPCArchetypeConditionInput
  ) {
    updatePCArchetype(input: $input, condition: $condition) {
      id
      name
      tats {
        tough
        agility
        mod
        strange
      }
      stats {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      slots
      pccharacterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePCArchetype = /* GraphQL */ `
  mutation DeletePCArchetype(
    $input: DeletePCArchetypeInput!
    $condition: ModelPCArchetypeConditionInput
  ) {
    deletePCArchetype(input: $input, condition: $condition) {
      id
      name
      tats {
        tough
        agility
        mod
        strange
      }
      stats {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      slots
      pccharacterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPCClass = /* GraphQL */ `
  mutation CreatePCClass(
    $input: CreatePCClassInput!
    $condition: ModelPCClassConditionInput
  ) {
    createPCClass(input: $input, condition: $condition) {
      id
      name
      archetype
      bonusstats {
        tough
        agility
        mod
        strange
      }
      stat {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      pccharacterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePCClass = /* GraphQL */ `
  mutation UpdatePCClass(
    $input: UpdatePCClassInput!
    $condition: ModelPCClassConditionInput
  ) {
    updatePCClass(input: $input, condition: $condition) {
      id
      name
      archetype
      bonusstats {
        tough
        agility
        mod
        strange
      }
      stat {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      pccharacterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePCClass = /* GraphQL */ `
  mutation DeletePCClass(
    $input: DeletePCClassInput!
    $condition: ModelPCClassConditionInput
  ) {
    deletePCClass(input: $input, condition: $condition) {
      id
      name
      archetype
      bonusstats {
        tough
        agility
        mod
        strange
      }
      stat {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      pccharacterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      description
      name
      PCCharactersUser {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      description
      name
      PCCharactersUser {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      description
      name
      PCCharactersUser {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNPCAbility = /* GraphQL */ `
  mutation CreateNPCAbility(
    $input: CreateNPCAbilityInput!
    $condition: ModelNPCAbilityConditionInput
  ) {
    createNPCAbility(input: $input, condition: $condition) {
      id
      name
      uses
      description
      type
      npcbases {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNPCAbility = /* GraphQL */ `
  mutation UpdateNPCAbility(
    $input: UpdateNPCAbilityInput!
    $condition: ModelNPCAbilityConditionInput
  ) {
    updateNPCAbility(input: $input, condition: $condition) {
      id
      name
      uses
      description
      type
      npcbases {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNPCAbility = /* GraphQL */ `
  mutation DeleteNPCAbility(
    $input: DeleteNPCAbilityInput!
    $condition: ModelNPCAbilityConditionInput
  ) {
    deleteNPCAbility(input: $input, condition: $condition) {
      id
      name
      uses
      description
      type
      npcbases {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPCAbility = /* GraphQL */ `
  mutation CreatePCAbility(
    $input: CreatePCAbilityInput!
    $condition: ModelPCAbilityConditionInput
  ) {
    createPCAbility(input: $input, condition: $condition) {
      id
      name
      typeCategory
      typeAbility
      slot
      uses
      gp
      rank
      pccharacterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePCAbility = /* GraphQL */ `
  mutation UpdatePCAbility(
    $input: UpdatePCAbilityInput!
    $condition: ModelPCAbilityConditionInput
  ) {
    updatePCAbility(input: $input, condition: $condition) {
      id
      name
      typeCategory
      typeAbility
      slot
      uses
      gp
      rank
      pccharacterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePCAbility = /* GraphQL */ `
  mutation DeletePCAbility(
    $input: DeletePCAbilityInput!
    $condition: ModelPCAbilityConditionInput
  ) {
    deletePCAbility(input: $input, condition: $condition) {
      id
      name
      typeCategory
      typeAbility
      slot
      uses
      gp
      rank
      pccharacterID
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createPCCharacter = /* GraphQL */ `
  mutation CreatePCCharacter(
    $input: CreatePCCharacterInput!
    $condition: ModelPCCharacterConditionInput
  ) {
    createPCCharacter(input: $input, condition: $condition) {
      id
      name
      description
      level
      user
      statBase {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      statCurrent {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      statPrimaryBase {
        tough
        agility
        mod
        strange
      }
      statPrimaryCurrent {
        tough
        agility
        mod
        strange
      }
      PCAbilities {
        nextToken
        startedAt
      }
      PCClasses {
        nextToken
        startedAt
      }
      PCClassesKnown {
        nextToken
        startedAt
      }
      PCArchetypesKnown {
        nextToken
        startedAt
      }
      PCArchetypes {
        nextToken
        startedAt
      }
      gearPoints
      gearPointsMax
      users {
        nextToken
        startedAt
      }
      combats {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updatePCCharacter = /* GraphQL */ `
  mutation UpdatePCCharacter(
    $input: UpdatePCCharacterInput!
    $condition: ModelPCCharacterConditionInput
  ) {
    updatePCCharacter(input: $input, condition: $condition) {
      id
      name
      description
      level
      user
      statBase {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      statCurrent {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      statPrimaryBase {
        tough
        agility
        mod
        strange
      }
      statPrimaryCurrent {
        tough
        agility
        mod
        strange
      }
      PCAbilities {
        nextToken
        startedAt
      }
      PCClasses {
        nextToken
        startedAt
      }
      PCClassesKnown {
        nextToken
        startedAt
      }
      PCArchetypesKnown {
        nextToken
        startedAt
      }
      PCArchetypes {
        nextToken
        startedAt
      }
      gearPoints
      gearPointsMax
      users {
        nextToken
        startedAt
      }
      combats {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deletePCCharacter = /* GraphQL */ `
  mutation DeletePCCharacter(
    $input: DeletePCCharacterInput!
    $condition: ModelPCCharacterConditionInput
  ) {
    deletePCCharacter(input: $input, condition: $condition) {
      id
      name
      description
      level
      user
      statBase {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      statCurrent {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      statPrimaryBase {
        tough
        agility
        mod
        strange
      }
      statPrimaryCurrent {
        tough
        agility
        mod
        strange
      }
      PCAbilities {
        nextToken
        startedAt
      }
      PCClasses {
        nextToken
        startedAt
      }
      PCClassesKnown {
        nextToken
        startedAt
      }
      PCArchetypesKnown {
        nextToken
        startedAt
      }
      PCArchetypes {
        nextToken
        startedAt
      }
      gearPoints
      gearPointsMax
      users {
        nextToken
        startedAt
      }
      combats {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNPCBase = /* GraphQL */ `
  mutation CreateNPCBase(
    $input: CreateNPCBaseInput!
    $condition: ModelNPCBaseConditionInput
  ) {
    createNPCBase(input: $input, condition: $condition) {
      id
      name
      description
      tier
      statBasePrimary {
        tough
        agility
        mod
        strange
      }
      statBlockBase {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      statBlockTierBonus {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      physicalSaveBase
      physicalSaveTierBonus
      esotericSaveBase
      esotericSaveTierBonus
      damageTierBonus
      NPCAbilitiesNPCBase {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNPCBase = /* GraphQL */ `
  mutation UpdateNPCBase(
    $input: UpdateNPCBaseInput!
    $condition: ModelNPCBaseConditionInput
  ) {
    updateNPCBase(input: $input, condition: $condition) {
      id
      name
      description
      tier
      statBasePrimary {
        tough
        agility
        mod
        strange
      }
      statBlockBase {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      statBlockTierBonus {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      physicalSaveBase
      physicalSaveTierBonus
      esotericSaveBase
      esotericSaveTierBonus
      damageTierBonus
      NPCAbilitiesNPCBase {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNPCBase = /* GraphQL */ `
  mutation DeleteNPCBase(
    $input: DeleteNPCBaseInput!
    $condition: ModelNPCBaseConditionInput
  ) {
    deleteNPCBase(input: $input, condition: $condition) {
      id
      name
      description
      tier
      statBasePrimary {
        tough
        agility
        mod
        strange
      }
      statBlockBase {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      statBlockTierBonus {
        hp
        sp
        armor
        barrier
        physicaldefense
        esotericdefense
        speed
        strain
      }
      physicalSaveBase
      physicalSaveTierBonus
      esotericSaveBase
      esotericSaveTierBonus
      damageTierBonus
      NPCAbilitiesNPCBase {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createCombatPCCharacter = /* GraphQL */ `
  mutation CreateCombatPCCharacter(
    $input: CreateCombatPCCharacterInput!
    $condition: ModelCombatPCCharacterConditionInput
  ) {
    createCombatPCCharacter(input: $input, condition: $condition) {
      id
      combatId
      pCCharacterId
      combat {
        id
        name
        pcs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pCCharacter {
        id
        name
        description
        level
        user
        gearPoints
        gearPointsMax
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateCombatPCCharacter = /* GraphQL */ `
  mutation UpdateCombatPCCharacter(
    $input: UpdateCombatPCCharacterInput!
    $condition: ModelCombatPCCharacterConditionInput
  ) {
    updateCombatPCCharacter(input: $input, condition: $condition) {
      id
      combatId
      pCCharacterId
      combat {
        id
        name
        pcs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pCCharacter {
        id
        name
        description
        level
        user
        gearPoints
        gearPointsMax
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteCombatPCCharacter = /* GraphQL */ `
  mutation DeleteCombatPCCharacter(
    $input: DeleteCombatPCCharacterInput!
    $condition: ModelCombatPCCharacterConditionInput
  ) {
    deleteCombatPCCharacter(input: $input, condition: $condition) {
      id
      combatId
      pCCharacterId
      combat {
        id
        name
        pcs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pCCharacter {
        id
        name
        description
        level
        user
        gearPoints
        gearPointsMax
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUserPCCharacter = /* GraphQL */ `
  mutation CreateUserPCCharacter(
    $input: CreateUserPCCharacterInput!
    $condition: ModelUserPCCharacterConditionInput
  ) {
    createUserPCCharacter(input: $input, condition: $condition) {
      id
      userId
      pCCharacterId
      user {
        id
        description
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pCCharacter {
        id
        name
        description
        level
        user
        gearPoints
        gearPointsMax
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserPCCharacter = /* GraphQL */ `
  mutation UpdateUserPCCharacter(
    $input: UpdateUserPCCharacterInput!
    $condition: ModelUserPCCharacterConditionInput
  ) {
    updateUserPCCharacter(input: $input, condition: $condition) {
      id
      userId
      pCCharacterId
      user {
        id
        description
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pCCharacter {
        id
        name
        description
        level
        user
        gearPoints
        gearPointsMax
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserPCCharacter = /* GraphQL */ `
  mutation DeleteUserPCCharacter(
    $input: DeleteUserPCCharacterInput!
    $condition: ModelUserPCCharacterConditionInput
  ) {
    deleteUserPCCharacter(input: $input, condition: $condition) {
      id
      userId
      pCCharacterId
      user {
        id
        description
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      pCCharacter {
        id
        name
        description
        level
        user
        gearPoints
        gearPointsMax
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createNPCBaseNPCAbility = /* GraphQL */ `
  mutation CreateNPCBaseNPCAbility(
    $input: CreateNPCBaseNPCAbilityInput!
    $condition: ModelNPCBaseNPCAbilityConditionInput
  ) {
    createNPCBaseNPCAbility(input: $input, condition: $condition) {
      id
      nPCAbilityId
      nPCBaseId
      nPCAbility {
        id
        name
        uses
        description
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nPCBase {
        id
        name
        description
        tier
        physicalSaveBase
        physicalSaveTierBonus
        esotericSaveBase
        esotericSaveTierBonus
        damageTierBonus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateNPCBaseNPCAbility = /* GraphQL */ `
  mutation UpdateNPCBaseNPCAbility(
    $input: UpdateNPCBaseNPCAbilityInput!
    $condition: ModelNPCBaseNPCAbilityConditionInput
  ) {
    updateNPCBaseNPCAbility(input: $input, condition: $condition) {
      id
      nPCAbilityId
      nPCBaseId
      nPCAbility {
        id
        name
        uses
        description
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nPCBase {
        id
        name
        description
        tier
        physicalSaveBase
        physicalSaveTierBonus
        esotericSaveBase
        esotericSaveTierBonus
        damageTierBonus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteNPCBaseNPCAbility = /* GraphQL */ `
  mutation DeleteNPCBaseNPCAbility(
    $input: DeleteNPCBaseNPCAbilityInput!
    $condition: ModelNPCBaseNPCAbilityConditionInput
  ) {
    deleteNPCBaseNPCAbility(input: $input, condition: $condition) {
      id
      nPCAbilityId
      nPCBaseId
      nPCAbility {
        id
        name
        uses
        description
        type
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nPCBase {
        id
        name
        description
        tier
        physicalSaveBase
        physicalSaveTierBonus
        esotericSaveBase
        esotericSaveTierBonus
        damageTierBonus
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
