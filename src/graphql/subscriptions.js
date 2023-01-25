/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCombat = /* GraphQL */ `
  subscription OnCreateCombat($filter: ModelSubscriptionCombatFilterInput) {
    onCreateCombat(filter: $filter) {
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
export const onUpdateCombat = /* GraphQL */ `
  subscription OnUpdateCombat($filter: ModelSubscriptionCombatFilterInput) {
    onUpdateCombat(filter: $filter) {
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
export const onDeleteCombat = /* GraphQL */ `
  subscription OnDeleteCombat($filter: ModelSubscriptionCombatFilterInput) {
    onDeleteCombat(filter: $filter) {
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
export const onCreatePCArchetype = /* GraphQL */ `
  subscription OnCreatePCArchetype(
    $filter: ModelSubscriptionPCArchetypeFilterInput
  ) {
    onCreatePCArchetype(filter: $filter) {
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
export const onUpdatePCArchetype = /* GraphQL */ `
  subscription OnUpdatePCArchetype(
    $filter: ModelSubscriptionPCArchetypeFilterInput
  ) {
    onUpdatePCArchetype(filter: $filter) {
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
export const onDeletePCArchetype = /* GraphQL */ `
  subscription OnDeletePCArchetype(
    $filter: ModelSubscriptionPCArchetypeFilterInput
  ) {
    onDeletePCArchetype(filter: $filter) {
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
export const onCreatePCClass = /* GraphQL */ `
  subscription OnCreatePCClass($filter: ModelSubscriptionPCClassFilterInput) {
    onCreatePCClass(filter: $filter) {
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
export const onUpdatePCClass = /* GraphQL */ `
  subscription OnUpdatePCClass($filter: ModelSubscriptionPCClassFilterInput) {
    onUpdatePCClass(filter: $filter) {
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
export const onDeletePCClass = /* GraphQL */ `
  subscription OnDeletePCClass($filter: ModelSubscriptionPCClassFilterInput) {
    onDeletePCClass(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateNPCAbility = /* GraphQL */ `
  subscription OnCreateNPCAbility(
    $filter: ModelSubscriptionNPCAbilityFilterInput
  ) {
    onCreateNPCAbility(filter: $filter) {
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
export const onUpdateNPCAbility = /* GraphQL */ `
  subscription OnUpdateNPCAbility(
    $filter: ModelSubscriptionNPCAbilityFilterInput
  ) {
    onUpdateNPCAbility(filter: $filter) {
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
export const onDeleteNPCAbility = /* GraphQL */ `
  subscription OnDeleteNPCAbility(
    $filter: ModelSubscriptionNPCAbilityFilterInput
  ) {
    onDeleteNPCAbility(filter: $filter) {
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
export const onCreatePCAbility = /* GraphQL */ `
  subscription OnCreatePCAbility(
    $filter: ModelSubscriptionPCAbilityFilterInput
  ) {
    onCreatePCAbility(filter: $filter) {
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
export const onUpdatePCAbility = /* GraphQL */ `
  subscription OnUpdatePCAbility(
    $filter: ModelSubscriptionPCAbilityFilterInput
  ) {
    onUpdatePCAbility(filter: $filter) {
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
export const onDeletePCAbility = /* GraphQL */ `
  subscription OnDeletePCAbility(
    $filter: ModelSubscriptionPCAbilityFilterInput
  ) {
    onDeletePCAbility(filter: $filter) {
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
export const onCreatePCCharacter = /* GraphQL */ `
  subscription OnCreatePCCharacter(
    $filter: ModelSubscriptionPCCharacterFilterInput
  ) {
    onCreatePCCharacter(filter: $filter) {
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
export const onUpdatePCCharacter = /* GraphQL */ `
  subscription OnUpdatePCCharacter(
    $filter: ModelSubscriptionPCCharacterFilterInput
  ) {
    onUpdatePCCharacter(filter: $filter) {
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
export const onDeletePCCharacter = /* GraphQL */ `
  subscription OnDeletePCCharacter(
    $filter: ModelSubscriptionPCCharacterFilterInput
  ) {
    onDeletePCCharacter(filter: $filter) {
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
export const onCreateNPCBase = /* GraphQL */ `
  subscription OnCreateNPCBase($filter: ModelSubscriptionNPCBaseFilterInput) {
    onCreateNPCBase(filter: $filter) {
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
export const onUpdateNPCBase = /* GraphQL */ `
  subscription OnUpdateNPCBase($filter: ModelSubscriptionNPCBaseFilterInput) {
    onUpdateNPCBase(filter: $filter) {
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
export const onDeleteNPCBase = /* GraphQL */ `
  subscription OnDeleteNPCBase($filter: ModelSubscriptionNPCBaseFilterInput) {
    onDeleteNPCBase(filter: $filter) {
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
export const onCreateCombatPCCharacter = /* GraphQL */ `
  subscription OnCreateCombatPCCharacter(
    $filter: ModelSubscriptionCombatPCCharacterFilterInput
  ) {
    onCreateCombatPCCharacter(filter: $filter) {
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
export const onUpdateCombatPCCharacter = /* GraphQL */ `
  subscription OnUpdateCombatPCCharacter(
    $filter: ModelSubscriptionCombatPCCharacterFilterInput
  ) {
    onUpdateCombatPCCharacter(filter: $filter) {
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
export const onDeleteCombatPCCharacter = /* GraphQL */ `
  subscription OnDeleteCombatPCCharacter(
    $filter: ModelSubscriptionCombatPCCharacterFilterInput
  ) {
    onDeleteCombatPCCharacter(filter: $filter) {
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
export const onCreateUserPCCharacter = /* GraphQL */ `
  subscription OnCreateUserPCCharacter(
    $filter: ModelSubscriptionUserPCCharacterFilterInput
  ) {
    onCreateUserPCCharacter(filter: $filter) {
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
export const onUpdateUserPCCharacter = /* GraphQL */ `
  subscription OnUpdateUserPCCharacter(
    $filter: ModelSubscriptionUserPCCharacterFilterInput
  ) {
    onUpdateUserPCCharacter(filter: $filter) {
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
export const onDeleteUserPCCharacter = /* GraphQL */ `
  subscription OnDeleteUserPCCharacter(
    $filter: ModelSubscriptionUserPCCharacterFilterInput
  ) {
    onDeleteUserPCCharacter(filter: $filter) {
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
export const onCreateNPCBaseNPCAbility = /* GraphQL */ `
  subscription OnCreateNPCBaseNPCAbility(
    $filter: ModelSubscriptionNPCBaseNPCAbilityFilterInput
  ) {
    onCreateNPCBaseNPCAbility(filter: $filter) {
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
export const onUpdateNPCBaseNPCAbility = /* GraphQL */ `
  subscription OnUpdateNPCBaseNPCAbility(
    $filter: ModelSubscriptionNPCBaseNPCAbilityFilterInput
  ) {
    onUpdateNPCBaseNPCAbility(filter: $filter) {
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
export const onDeleteNPCBaseNPCAbility = /* GraphQL */ `
  subscription OnDeleteNPCBaseNPCAbility(
    $filter: ModelSubscriptionNPCBaseNPCAbilityFilterInput
  ) {
    onDeleteNPCBaseNPCAbility(filter: $filter) {
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
