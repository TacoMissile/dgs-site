/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCombat = /* GraphQL */ `
  query GetCombat($id: ID!) {
    getCombat(id: $id) {
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
export const listCombats = /* GraphQL */ `
  query ListCombats(
    $filter: ModelCombatFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCombats(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        pcs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCombats = /* GraphQL */ `
  query SyncCombats(
    $filter: ModelCombatFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCombats(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        pcs
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPCArchetype = /* GraphQL */ `
  query GetPCArchetype($id: ID!) {
    getPCArchetype(id: $id) {
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
export const listPCArchetypes = /* GraphQL */ `
  query ListPCArchetypes(
    $filter: ModelPCArchetypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPCArchetypes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        slots
        pccharacterID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPCArchetypes = /* GraphQL */ `
  query SyncPCArchetypes(
    $filter: ModelPCArchetypeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPCArchetypes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        slots
        pccharacterID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const pCArchetypesByPccharacterID = /* GraphQL */ `
  query PCArchetypesByPccharacterID(
    $pccharacterID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPCArchetypeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pCArchetypesByPccharacterID(
      pccharacterID: $pccharacterID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        slots
        pccharacterID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getPCClass = /* GraphQL */ `
  query GetPCClass($id: ID!) {
    getPCClass(id: $id) {
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
export const listPCClasses = /* GraphQL */ `
  query ListPCClasses(
    $filter: ModelPCClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPCClasses(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        archetype
        pccharacterID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncPCClasses = /* GraphQL */ `
  query SyncPCClasses(
    $filter: ModelPCClassFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPCClasses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        name
        archetype
        pccharacterID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const pCClassesByPccharacterID = /* GraphQL */ `
  query PCClassesByPccharacterID(
    $pccharacterID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPCClassFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pCClassesByPccharacterID(
      pccharacterID: $pccharacterID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        name
        archetype
        pccharacterID
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        description
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUsers = /* GraphQL */ `
  query SyncUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUsers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        description
        name
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNPCAbility = /* GraphQL */ `
  query GetNPCAbility($id: ID!) {
    getNPCAbility(id: $id) {
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
export const listNPCAbilities = /* GraphQL */ `
  query ListNPCAbilities(
    $filter: ModelNPCAbilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNPCAbilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNPCAbilities = /* GraphQL */ `
  query SyncNPCAbilities(
    $filter: ModelNPCAbilityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNPCAbilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPCAbility = /* GraphQL */ `
  query GetPCAbility($id: ID!) {
    getPCAbility(id: $id) {
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
export const listPCAbilities = /* GraphQL */ `
  query ListPCAbilities(
    $filter: ModelPCAbilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPCAbilities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPCAbilities = /* GraphQL */ `
  query SyncPCAbilities(
    $filter: ModelPCAbilityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPCAbilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const pCAbilitiesByPccharacterID = /* GraphQL */ `
  query PCAbilitiesByPccharacterID(
    $pccharacterID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPCAbilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    pCAbilitiesByPccharacterID(
      pccharacterID: $pccharacterID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getPCCharacter = /* GraphQL */ `
  query GetPCCharacter($id: ID!) {
    getPCCharacter(id: $id) {
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
export const listPCCharacters = /* GraphQL */ `
  query ListPCCharacters(
    $filter: ModelPCCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPCCharacters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPCCharacters = /* GraphQL */ `
  query SyncPCCharacters(
    $filter: ModelPCCharacterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPCCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getNPCBase = /* GraphQL */ `
  query GetNPCBase($id: ID!) {
    getNPCBase(id: $id) {
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
export const listNPCBases = /* GraphQL */ `
  query ListNPCBases(
    $filter: ModelNPCBaseFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNPCBases(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncNPCBases = /* GraphQL */ `
  query SyncNPCBases(
    $filter: ModelNPCBaseFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNPCBases(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCombatPCCharacter = /* GraphQL */ `
  query GetCombatPCCharacter($id: ID!) {
    getCombatPCCharacter(id: $id) {
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
export const listCombatPCCharacters = /* GraphQL */ `
  query ListCombatPCCharacters(
    $filter: ModelCombatPCCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCombatPCCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        combatId
        pCCharacterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncCombatPCCharacters = /* GraphQL */ `
  query SyncCombatPCCharacters(
    $filter: ModelCombatPCCharacterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCombatPCCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        combatId
        pCCharacterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const combatPCCharactersByCombatId = /* GraphQL */ `
  query CombatPCCharactersByCombatId(
    $combatId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCombatPCCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    combatPCCharactersByCombatId(
      combatId: $combatId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        combatId
        pCCharacterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const combatPCCharactersByPCCharacterId = /* GraphQL */ `
  query CombatPCCharactersByPCCharacterId(
    $pCCharacterId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelCombatPCCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    combatPCCharactersByPCCharacterId(
      pCCharacterId: $pCCharacterId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        combatId
        pCCharacterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getUserPCCharacter = /* GraphQL */ `
  query GetUserPCCharacter($id: ID!) {
    getUserPCCharacter(id: $id) {
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
export const listUserPCCharacters = /* GraphQL */ `
  query ListUserPCCharacters(
    $filter: ModelUserPCCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserPCCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        pCCharacterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncUserPCCharacters = /* GraphQL */ `
  query SyncUserPCCharacters(
    $filter: ModelUserPCCharacterFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncUserPCCharacters(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        userId
        pCCharacterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userPCCharactersByUserId = /* GraphQL */ `
  query UserPCCharactersByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserPCCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userPCCharactersByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        pCCharacterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const userPCCharactersByPCCharacterId = /* GraphQL */ `
  query UserPCCharactersByPCCharacterId(
    $pCCharacterId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserPCCharacterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userPCCharactersByPCCharacterId(
      pCCharacterId: $pCCharacterId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        pCCharacterId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getNPCBaseNPCAbility = /* GraphQL */ `
  query GetNPCBaseNPCAbility($id: ID!) {
    getNPCBaseNPCAbility(id: $id) {
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
export const listNPCBaseNPCAbilities = /* GraphQL */ `
  query ListNPCBaseNPCAbilities(
    $filter: ModelNPCBaseNPCAbilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNPCBaseNPCAbilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nPCAbilityId
        nPCBaseId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncNPCBaseNPCAbilities = /* GraphQL */ `
  query SyncNPCBaseNPCAbilities(
    $filter: ModelNPCBaseNPCAbilityFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncNPCBaseNPCAbilities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        nPCAbilityId
        nPCBaseId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const nPCBaseNPCAbilitiesByNPCAbilityId = /* GraphQL */ `
  query NPCBaseNPCAbilitiesByNPCAbilityId(
    $nPCAbilityId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNPCBaseNPCAbilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nPCBaseNPCAbilitiesByNPCAbilityId(
      nPCAbilityId: $nPCAbilityId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nPCAbilityId
        nPCBaseId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const nPCBaseNPCAbilitiesByNPCBaseId = /* GraphQL */ `
  query NPCBaseNPCAbilitiesByNPCBaseId(
    $nPCBaseId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelNPCBaseNPCAbilityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    nPCBaseNPCAbilitiesByNPCBaseId(
      nPCBaseId: $nPCBaseId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        nPCAbilityId
        nPCBaseId
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
