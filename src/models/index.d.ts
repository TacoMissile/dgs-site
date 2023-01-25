import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";

export enum AbilityCategory {
  WEAPON = "WEAPON",
  EQUIPMENT = "EQUIPMENT",
  TECHNIQUE = "TECHNIQUE",
  SKILL = "SKILL"
}

export enum AbilityType {
  PHYSICAL = "PHYSICAL",
  ESOTERIC = "ESOTERIC"
}

export enum SlotType {
  LIGHT = "LIGHT",
  MEDIUM = "MEDIUM",
  HEAVY = "HEAVY"
}

type EagerTurn = {
  readonly id?: string | null;
  readonly characterID?: string | null;
  readonly phase?: number | null;
  readonly hasGone?: boolean | null;
}

type LazyTurn = {
  readonly id?: string | null;
  readonly characterID?: string | null;
  readonly phase?: number | null;
  readonly hasGone?: boolean | null;
}

export declare type Turn = LazyLoading extends LazyLoadingDisabled ? EagerTurn : LazyTurn

export declare const Turn: (new (init: ModelInit<Turn>) => Turn)

type EagerStatBlock = {
  readonly hp?: number | null;
  readonly sp?: number | null;
  readonly armor?: number | null;
  readonly barrier?: number | null;
  readonly physicaldefense?: number | null;
  readonly esotericdefense?: number | null;
  readonly speed?: number | null;
  readonly strain?: number | null;
}

type LazyStatBlock = {
  readonly hp?: number | null;
  readonly sp?: number | null;
  readonly armor?: number | null;
  readonly barrier?: number | null;
  readonly physicaldefense?: number | null;
  readonly esotericdefense?: number | null;
  readonly speed?: number | null;
  readonly strain?: number | null;
}

export declare type StatBlock = LazyLoading extends LazyLoadingDisabled ? EagerStatBlock : LazyStatBlock

export declare const StatBlock: (new (init: ModelInit<StatBlock>) => StatBlock)

type EagerPrimaryStats = {
  readonly tough?: number | null;
  readonly agility?: number | null;
  readonly mod?: number | null;
  readonly strange?: number | null;
}

type LazyPrimaryStats = {
  readonly tough?: number | null;
  readonly agility?: number | null;
  readonly mod?: number | null;
  readonly strange?: number | null;
}

export declare type PrimaryStats = LazyLoading extends LazyLoadingDisabled ? EagerPrimaryStats : LazyPrimaryStats

export declare const PrimaryStats: (new (init: ModelInit<PrimaryStats>) => PrimaryStats)

type EagerCombat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Combat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pcs?: string | null;
  readonly CombatPCCharacters?: (CombatPCCharacter | null)[] | null;
  readonly turns?: (Turn | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCombat = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Combat, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly pcs?: string | null;
  readonly CombatPCCharacters: AsyncCollection<CombatPCCharacter>;
  readonly turns?: (Turn | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Combat = LazyLoading extends LazyLoadingDisabled ? EagerCombat : LazyCombat

export declare const Combat: (new (init: ModelInit<Combat>) => Combat) & {
  copyOf(source: Combat, mutator: (draft: MutableModel<Combat>) => MutableModel<Combat> | void): Combat;
}

type EagerPCCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PCCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly level?: number | null;
  readonly user?: string | null;
  readonly statBase?: StatBlock | null;
  readonly statCurrent?: StatBlock | null;
  readonly statPrimaryBase?: PrimaryStats | null;
  readonly statPrimaryCurrent?: PrimaryStats | null;
  readonly PCAbilities?: (PCAbility | null)[] | null;
  readonly PCClasses?: (PCClass | null)[] | null;
  readonly PCClassesKnown?: (PCClass | null)[] | null;
  readonly PCArchetypesKnown?: (PCArchetype | null)[] | null;
  readonly PCArchetypes?: (PCArchetype | null)[] | null;
  readonly gearPoints?: number | null;
  readonly gearPointsMax?: number | null;
  readonly users?: (UserPCCharacter | null)[] | null;
  readonly combats?: (CombatPCCharacter | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPCCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PCCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly level?: number | null;
  readonly user?: string | null;
  readonly statBase?: StatBlock | null;
  readonly statCurrent?: StatBlock | null;
  readonly statPrimaryBase?: PrimaryStats | null;
  readonly statPrimaryCurrent?: PrimaryStats | null;
  readonly PCAbilities: AsyncCollection<PCAbility>;
  readonly PCClasses: AsyncCollection<PCClass>;
  readonly PCClassesKnown: AsyncCollection<PCClass>;
  readonly PCArchetypesKnown: AsyncCollection<PCArchetype>;
  readonly PCArchetypes: AsyncCollection<PCArchetype>;
  readonly gearPoints?: number | null;
  readonly gearPointsMax?: number | null;
  readonly users: AsyncCollection<UserPCCharacter>;
  readonly combats: AsyncCollection<CombatPCCharacter>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PCCharacter = LazyLoading extends LazyLoadingDisabled ? EagerPCCharacter : LazyPCCharacter

export declare const PCCharacter: (new (init: ModelInit<PCCharacter>) => PCCharacter) & {
  copyOf(source: PCCharacter, mutator: (draft: MutableModel<PCCharacter>) => MutableModel<PCCharacter> | void): PCCharacter;
}

type EagerPCAbility = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PCAbility, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly typeCategory?: AbilityCategory | keyof typeof AbilityCategory | null;
  readonly typeAbility?: AbilityType | keyof typeof AbilityType | null;
  readonly slot?: SlotType | keyof typeof SlotType | null;
  readonly uses?: number | null;
  readonly gp?: number | null;
  readonly rank?: number | null;
  readonly pccharacterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPCAbility = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PCAbility, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly typeCategory?: AbilityCategory | keyof typeof AbilityCategory | null;
  readonly typeAbility?: AbilityType | keyof typeof AbilityType | null;
  readonly slot?: SlotType | keyof typeof SlotType | null;
  readonly uses?: number | null;
  readonly gp?: number | null;
  readonly rank?: number | null;
  readonly pccharacterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PCAbility = LazyLoading extends LazyLoadingDisabled ? EagerPCAbility : LazyPCAbility

export declare const PCAbility: (new (init: ModelInit<PCAbility>) => PCAbility) & {
  copyOf(source: PCAbility, mutator: (draft: MutableModel<PCAbility>) => MutableModel<PCAbility> | void): PCAbility;
}

type EagerPCClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PCClass, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly archetype?: string | null;
  readonly bonusstats?: PrimaryStats | null;
  readonly stat?: StatBlock | null;
  readonly pccharacterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPCClass = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PCClass, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly archetype?: string | null;
  readonly bonusstats?: PrimaryStats | null;
  readonly stat?: StatBlock | null;
  readonly pccharacterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PCClass = LazyLoading extends LazyLoadingDisabled ? EagerPCClass : LazyPCClass

export declare const PCClass: (new (init: ModelInit<PCClass>) => PCClass) & {
  copyOf(source: PCClass, mutator: (draft: MutableModel<PCClass>) => MutableModel<PCClass> | void): PCClass;
}

type EagerPCArchetype = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PCArchetype, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly tats?: PrimaryStats | null;
  readonly stats?: StatBlock | null;
  readonly slots?: (SlotType | null)[] | keyof typeof SlotType | null;
  readonly pccharacterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPCArchetype = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PCArchetype, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly tats?: PrimaryStats | null;
  readonly stats?: StatBlock | null;
  readonly slots?: (SlotType | null)[] | keyof typeof SlotType | null;
  readonly pccharacterID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PCArchetype = LazyLoading extends LazyLoadingDisabled ? EagerPCArchetype : LazyPCArchetype

export declare const PCArchetype: (new (init: ModelInit<PCArchetype>) => PCArchetype) & {
  copyOf(source: PCArchetype, mutator: (draft: MutableModel<PCArchetype>) => MutableModel<PCArchetype> | void): PCArchetype;
}

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly name?: string | null;
  readonly PCCharactersUser?: (UserPCCharacter | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly description?: string | null;
  readonly name?: string | null;
  readonly PCCharactersUser: AsyncCollection<UserPCCharacter>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type User = LazyLoading extends LazyLoadingDisabled ? EagerUser : LazyUser

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(source: User, mutator: (draft: MutableModel<User>) => MutableModel<User> | void): User;
}

type EagerNPCAbility = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NPCAbility, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly uses?: number | null;
  readonly description?: string | null;
  readonly type?: string | null;
  readonly npcbases?: (NPCBaseNPCAbility | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNPCAbility = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NPCAbility, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly uses?: number | null;
  readonly description?: string | null;
  readonly type?: string | null;
  readonly npcbases: AsyncCollection<NPCBaseNPCAbility>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NPCAbility = LazyLoading extends LazyLoadingDisabled ? EagerNPCAbility : LazyNPCAbility

export declare const NPCAbility: (new (init: ModelInit<NPCAbility>) => NPCAbility) & {
  copyOf(source: NPCAbility, mutator: (draft: MutableModel<NPCAbility>) => MutableModel<NPCAbility> | void): NPCAbility;
}

type EagerNPCBase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NPCBase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly tier?: number | null;
  readonly statBasePrimary?: PrimaryStats | null;
  readonly statBlockBase?: StatBlock | null;
  readonly statBlockTierBonus?: StatBlock | null;
  readonly physicalSaveBase?: number | null;
  readonly physicalSaveTierBonus?: number | null;
  readonly esotericSaveBase?: number | null;
  readonly esotericSaveTierBonus?: number | null;
  readonly damageTierBonus?: number | null;
  readonly NPCAbilitiesNPCBase?: (NPCBaseNPCAbility | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNPCBase = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NPCBase, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly description?: string | null;
  readonly tier?: number | null;
  readonly statBasePrimary?: PrimaryStats | null;
  readonly statBlockBase?: StatBlock | null;
  readonly statBlockTierBonus?: StatBlock | null;
  readonly physicalSaveBase?: number | null;
  readonly physicalSaveTierBonus?: number | null;
  readonly esotericSaveBase?: number | null;
  readonly esotericSaveTierBonus?: number | null;
  readonly damageTierBonus?: number | null;
  readonly NPCAbilitiesNPCBase: AsyncCollection<NPCBaseNPCAbility>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NPCBase = LazyLoading extends LazyLoadingDisabled ? EagerNPCBase : LazyNPCBase

export declare const NPCBase: (new (init: ModelInit<NPCBase>) => NPCBase) & {
  copyOf(source: NPCBase, mutator: (draft: MutableModel<NPCBase>) => MutableModel<NPCBase> | void): NPCBase;
}

type EagerCombatPCCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CombatPCCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly combatId?: string | null;
  readonly pCCharacterId?: string | null;
  readonly combat: Combat;
  readonly pcCharacter: PCCharacter;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCombatPCCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<CombatPCCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly combatId?: string | null;
  readonly pCCharacterId?: string | null;
  readonly combat: AsyncItem<Combat>;
  readonly pcCharacter: AsyncItem<PCCharacter>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CombatPCCharacter = LazyLoading extends LazyLoadingDisabled ? EagerCombatPCCharacter : LazyCombatPCCharacter

export declare const CombatPCCharacter: (new (init: ModelInit<CombatPCCharacter>) => CombatPCCharacter) & {
  copyOf(source: CombatPCCharacter, mutator: (draft: MutableModel<CombatPCCharacter>) => MutableModel<CombatPCCharacter> | void): CombatPCCharacter;
}

type EagerUserPCCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPCCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pCCharacterId?: string | null;
  readonly userId?: string | null;
  readonly pcCharacter: PCCharacter;
  readonly user: User;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserPCCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<UserPCCharacter, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly pCCharacterId?: string | null;
  readonly userId?: string | null;
  readonly pcCharacter: AsyncItem<PCCharacter>;
  readonly user: AsyncItem<User>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserPCCharacter = LazyLoading extends LazyLoadingDisabled ? EagerUserPCCharacter : LazyUserPCCharacter

export declare const UserPCCharacter: (new (init: ModelInit<UserPCCharacter>) => UserPCCharacter) & {
  copyOf(source: UserPCCharacter, mutator: (draft: MutableModel<UserPCCharacter>) => MutableModel<UserPCCharacter> | void): UserPCCharacter;
}

type EagerNPCBaseNPCAbility = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NPCBaseNPCAbility, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nPCAbilityId?: string | null;
  readonly nPCBaseId?: string | null;
  readonly npcAbility: NPCAbility;
  readonly npcBase: NPCBase;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNPCBaseNPCAbility = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<NPCBaseNPCAbility, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly nPCAbilityId?: string | null;
  readonly nPCBaseId?: string | null;
  readonly npcAbility: AsyncItem<NPCAbility>;
  readonly npcBase: AsyncItem<NPCBase>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type NPCBaseNPCAbility = LazyLoading extends LazyLoadingDisabled ? EagerNPCBaseNPCAbility : LazyNPCBaseNPCAbility

export declare const NPCBaseNPCAbility: (new (init: ModelInit<NPCBaseNPCAbility>) => NPCBaseNPCAbility) & {
  copyOf(source: NPCBaseNPCAbility, mutator: (draft: MutableModel<NPCBaseNPCAbility>) => MutableModel<NPCBaseNPCAbility> | void): NPCBaseNPCAbility;
}