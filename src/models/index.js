// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const AbilityCategory = {
  "WEAPON": "WEAPON",
  "EQUIPMENT": "EQUIPMENT",
  "TECHNIQUE": "TECHNIQUE",
  "SKILL": "SKILL"
};

const AbilityType = {
  "PHYSICAL": "PHYSICAL",
  "ESOTERIC": "ESOTERIC"
};

const SlotType = {
  "LIGHT": "LIGHT",
  "MEDIUM": "MEDIUM",
  "HEAVY": "HEAVY"
};

const { Combat, PCCharacter, PCAbility, PCClass, PCArchetype, User, NPCAbility, NPCBase, CombatPCCharacter, UserPCCharacter, NPCBaseNPCAbility, Turn, StatBlock, PrimaryStats } = initSchema(schema);

export {
  Combat,
  PCCharacter,
  PCAbility,
  PCClass,
  PCArchetype,
  User,
  NPCAbility,
  NPCBase,
  CombatPCCharacter,
  UserPCCharacter,
  NPCBaseNPCAbility,
  AbilityCategory,
  AbilityType,
  SlotType,
  Turn,
  StatBlock,
  PrimaryStats
};