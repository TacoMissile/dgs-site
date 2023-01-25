export const schema = {
    "models": {
        "Combat": {
            "name": "Combat",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "pcs": {
                    "name": "pcs",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "CombatPCCharacters": {
                    "name": "CombatPCCharacters",
                    "isArray": true,
                    "type": {
                        "model": "CombatPCCharacter"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "combat"
                        ]
                    }
                },
                "turns": {
                    "name": "turns",
                    "isArray": true,
                    "type": {
                        "nonModel": "Turn"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Combats",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PCCharacter": {
            "name": "PCCharacter",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "level": {
                    "name": "level",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "statBase": {
                    "name": "statBase",
                    "isArray": false,
                    "type": {
                        "nonModel": "StatBlock"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "statCurrent": {
                    "name": "statCurrent",
                    "isArray": false,
                    "type": {
                        "nonModel": "StatBlock"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "statPrimaryBase": {
                    "name": "statPrimaryBase",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrimaryStats"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "statPrimaryCurrent": {
                    "name": "statPrimaryCurrent",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrimaryStats"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "PCAbilities": {
                    "name": "PCAbilities",
                    "isArray": true,
                    "type": {
                        "model": "PCAbility"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "pccharacterID"
                        ]
                    }
                },
                "PCClasses": {
                    "name": "PCClasses",
                    "isArray": true,
                    "type": {
                        "model": "PCClass"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "pccharacterID"
                        ]
                    }
                },
                "PCClassesKnown": {
                    "name": "PCClassesKnown",
                    "isArray": true,
                    "type": {
                        "model": "PCClass"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "pccharacterID"
                        ]
                    }
                },
                "PCArchetypesKnown": {
                    "name": "PCArchetypesKnown",
                    "isArray": true,
                    "type": {
                        "model": "PCArchetype"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "pccharacterID"
                        ]
                    }
                },
                "PCArchetypes": {
                    "name": "PCArchetypes",
                    "isArray": true,
                    "type": {
                        "model": "PCArchetype"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "pccharacterID"
                        ]
                    }
                },
                "gearPoints": {
                    "name": "gearPoints",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "gearPointsMax": {
                    "name": "gearPointsMax",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "users": {
                    "name": "users",
                    "isArray": true,
                    "type": {
                        "model": "UserPCCharacter"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "pcCharacter"
                        ]
                    }
                },
                "combats": {
                    "name": "combats",
                    "isArray": true,
                    "type": {
                        "model": "CombatPCCharacter"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "pcCharacter"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PCCharacters",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PCAbility": {
            "name": "PCAbility",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "typeCategory": {
                    "name": "typeCategory",
                    "isArray": false,
                    "type": {
                        "enum": "AbilityCategory"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "typeAbility": {
                    "name": "typeAbility",
                    "isArray": false,
                    "type": {
                        "enum": "AbilityType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "slot": {
                    "name": "slot",
                    "isArray": false,
                    "type": {
                        "enum": "SlotType"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "uses": {
                    "name": "uses",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "gp": {
                    "name": "gp",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "rank": {
                    "name": "rank",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "pccharacterID": {
                    "name": "pccharacterID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PCAbilities",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPCCharacter",
                        "fields": [
                            "pccharacterID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PCClass": {
            "name": "PCClass",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "archetype": {
                    "name": "archetype",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "bonusstats": {
                    "name": "bonusstats",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrimaryStats"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "stat": {
                    "name": "stat",
                    "isArray": false,
                    "type": {
                        "nonModel": "StatBlock"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "pccharacterID": {
                    "name": "pccharacterID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PCClasses",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPCCharacter",
                        "fields": [
                            "pccharacterID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "PCArchetype": {
            "name": "PCArchetype",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tats": {
                    "name": "tats",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrimaryStats"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "stats": {
                    "name": "stats",
                    "isArray": false,
                    "type": {
                        "nonModel": "StatBlock"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "slots": {
                    "name": "slots",
                    "isArray": true,
                    "type": {
                        "enum": "SlotType"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "pccharacterID": {
                    "name": "pccharacterID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "PCArchetypes",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPCCharacter",
                        "fields": [
                            "pccharacterID"
                        ]
                    }
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "User": {
            "name": "User",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "PCCharactersUser": {
                    "name": "PCCharactersUser",
                    "isArray": true,
                    "type": {
                        "model": "UserPCCharacter"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "user"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Users",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "NPCAbility": {
            "name": "NPCAbility",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "uses": {
                    "name": "uses",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "type": {
                    "name": "type",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "npcbases": {
                    "name": "npcbases",
                    "isArray": true,
                    "type": {
                        "model": "NPCBaseNPCAbility"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "npcAbility"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "NPCAbilities",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "NPCBase": {
            "name": "NPCBase",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "name": {
                    "name": "name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "description": {
                    "name": "description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "tier": {
                    "name": "tier",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "statBasePrimary": {
                    "name": "statBasePrimary",
                    "isArray": false,
                    "type": {
                        "nonModel": "PrimaryStats"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "statBlockBase": {
                    "name": "statBlockBase",
                    "isArray": false,
                    "type": {
                        "nonModel": "StatBlock"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "statBlockTierBonus": {
                    "name": "statBlockTierBonus",
                    "isArray": false,
                    "type": {
                        "nonModel": "StatBlock"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "physicalSaveBase": {
                    "name": "physicalSaveBase",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "physicalSaveTierBonus": {
                    "name": "physicalSaveTierBonus",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "esotericSaveBase": {
                    "name": "esotericSaveBase",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "esotericSaveTierBonus": {
                    "name": "esotericSaveTierBonus",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "damageTierBonus": {
                    "name": "damageTierBonus",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "NPCAbilitiesNPCBase": {
                    "name": "NPCAbilitiesNPCBase",
                    "isArray": true,
                    "type": {
                        "model": "NPCBaseNPCAbility"
                    },
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true,
                    "association": {
                        "connectionType": "HAS_MANY",
                        "associatedWith": [
                            "npcBase"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "NPCBases",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        },
        "CombatPCCharacter": {
            "name": "CombatPCCharacter",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "combatId": {
                    "name": "combatId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "pCCharacterId": {
                    "name": "pCCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "combat": {
                    "name": "combat",
                    "isArray": false,
                    "type": {
                        "model": "Combat"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "combatId"
                        ]
                    }
                },
                "pcCharacter": {
                    "name": "pcCharacter",
                    "isArray": false,
                    "type": {
                        "model": "PCCharacter"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "pCCharacterId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "CombatPCCharacters",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byCombat",
                        "fields": [
                            "combatId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPCCharacter",
                        "fields": [
                            "pCCharacterId"
                        ]
                    }
                }
            ]
        },
        "UserPCCharacter": {
            "name": "UserPCCharacter",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "pCCharacterId": {
                    "name": "pCCharacterId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "userId": {
                    "name": "userId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "pcCharacter": {
                    "name": "pcCharacter",
                    "isArray": false,
                    "type": {
                        "model": "PCCharacter"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "pCCharacterId"
                        ]
                    }
                },
                "user": {
                    "name": "user",
                    "isArray": false,
                    "type": {
                        "model": "User"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "userId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "UserPCCharacters",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byPCCharacter",
                        "fields": [
                            "pCCharacterId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byUser",
                        "fields": [
                            "userId"
                        ]
                    }
                }
            ]
        },
        "NPCBaseNPCAbility": {
            "name": "NPCBaseNPCAbility",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "nPCAbilityId": {
                    "name": "nPCAbilityId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "nPCBaseId": {
                    "name": "nPCBaseId",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "npcAbility": {
                    "name": "npcAbility",
                    "isArray": false,
                    "type": {
                        "model": "NPCAbility"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "nPCAbilityId"
                        ]
                    }
                },
                "npcBase": {
                    "name": "npcBase",
                    "isArray": false,
                    "type": {
                        "model": "NPCBase"
                    },
                    "isRequired": true,
                    "attributes": [],
                    "association": {
                        "connectionType": "BELONGS_TO",
                        "targetNames": [
                            "nPCBaseId"
                        ]
                    }
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "NPCBaseNPCAbilities",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byNPCAbility",
                        "fields": [
                            "nPCAbilityId"
                        ]
                    }
                },
                {
                    "type": "key",
                    "properties": {
                        "name": "byNPCBase",
                        "fields": [
                            "nPCBaseId"
                        ]
                    }
                }
            ]
        }
    },
    "enums": {
        "AbilityCategory": {
            "name": "AbilityCategory",
            "values": [
                "WEAPON",
                "EQUIPMENT",
                "TECHNIQUE",
                "SKILL"
            ]
        },
        "AbilityType": {
            "name": "AbilityType",
            "values": [
                "PHYSICAL",
                "ESOTERIC"
            ]
        },
        "SlotType": {
            "name": "SlotType",
            "values": [
                "LIGHT",
                "MEDIUM",
                "HEAVY"
            ]
        }
    },
    "nonModels": {
        "Turn": {
            "name": "Turn",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "characterID": {
                    "name": "characterID",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": false,
                    "attributes": []
                },
                "phase": {
                    "name": "phase",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "hasGone": {
                    "name": "hasGone",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "StatBlock": {
            "name": "StatBlock",
            "fields": {
                "hp": {
                    "name": "hp",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "sp": {
                    "name": "sp",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "armor": {
                    "name": "armor",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "barrier": {
                    "name": "barrier",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "physicaldefense": {
                    "name": "physicaldefense",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "esotericdefense": {
                    "name": "esotericdefense",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "speed": {
                    "name": "speed",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "strain": {
                    "name": "strain",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "PrimaryStats": {
            "name": "PrimaryStats",
            "fields": {
                "tough": {
                    "name": "tough",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "agility": {
                    "name": "agility",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "mod": {
                    "name": "mod",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "strange": {
                    "name": "strange",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "codegenVersion": "3.3.5",
    "version": "5ed2287eea6726cf3daa10fdac387a57"
};