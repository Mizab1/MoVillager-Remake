import { functionCmd, MCFunction, NBT, raw, rel, summon } from "sandstone";

const dirName: String = "villagers/";
MCFunction(`${dirName}armor_enchanter`, () => {
  summon("minecraft:villager", rel(0, 0, 0), {
    Tags: ["custom_villager", "scanned"],
    CanPickUpLoot: NBT.byte(0),
    CustomName:
      '{ "text":"Mark The Armour Enchanter", "color":"dark_grey", "bold":"false" }',
    ArmorItems: [
      {},
      {},
      {},
      {
        id: "minecraft:player_head",
        Count: NBT.byte(1),
        tag: {
          SkullOwner: {
            Id: NBT`[I;1694219289, 1005928497, -1891711064, -528266692]`,
            Properties: {
              textures: [
                {
                  Value:
                    "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmI0MTZiM2Q5NzNlMzQ4MDY2NDE2MmM5MjhjMGY3ZDJmNGYzMmI4ZDIwMjIyNWFiNjIyN2ZmNTllZTFjNWMzMSJ9fX0=",
                },
              ],
            },
          },
        },
      },
    ],
    VillagerData: {
      level: 99,
      profession: "minecraft:nitwit",
      type: "minecraft:plains",
    },
    Offers: {
      Recipes: [
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          Uses: 5,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(5),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:protection",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:protection",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:protection",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(32),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:protection",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(8),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:fire_protection",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:fire_protection",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(18),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:fire_protection",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(32),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:fire_protection",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(8),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:feather_falling",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:feather_falling",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(18),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:feather_falling",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(24),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:feather_falling",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(8),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:blast_protection",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:blast_protection",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(24),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:blast_protection",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(32),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:blast_protection",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(8),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:projectile_protection",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:projectile_protection",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:projectile_protection",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(32),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:projectile_protection",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(10),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:respiration",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(16),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:respiration",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(24),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:respiration",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123546,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:aqua_affinity",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(10),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:thorns",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(18),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:thorns",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(32),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:thorns",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 213456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:depth_strider",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 213456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:depth_strider",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 213456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(32),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:depth_strider",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(48),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:frost_walker",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(60),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:frost_walker",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:book",
            Count: NBT.byte(3),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(6),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:mushroom_stew",
            Count: NBT.byte(1),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(9),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:cake",
            Count: NBT.byte(1),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:bread",
            Count: NBT.byte(8),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(2),
          },
        },
      ],
    },
  });
});

MCFunction(`${dirName}beekeeper`, () => {
  summon("minecraft:villager", rel(0, 0, 0), {
    CanPickUpLoot: NBT.byte(0),
    Tags: ["custom_villager", "scanned"],
    CustomName: '{"text":"Roxie the Beekeeper","color":"dark_gray"}',
    VillagerData: {
      level: 99,
      profession: "minecraft:nitwit",
      type: "minecraft:plains",
    },
    Offers: {
      Recipes: [
        {
          maxUses: 123456,
          uses: 5,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(15),
          },
          sell: {
            id: "minecraft:bee_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:bee_nest",
            Count: NBT.byte(1),
          },
        },
        {
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:beehive",
            Count: NBT.byte(1),
          },
        },
        {
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(6),
          },
          sell: {
            id: "minecraft:honey_bottle",
            Count: NBT.byte(1),
          },
        },
        {
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(18),
          },
          sell: {
            id: "minecraft:honey_block",
            Count: NBT.byte(4),
          },
        },
        {
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(10),
          },
          sell: {
            id: "minecraft:honeycomb",
            Count: NBT.byte(12),
          },
        },
        {
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(15),
          },
          sell: {
            id: "minecraft:honeycomb_block",
            Count: NBT.byte(5),
          },
        },
        {
          maxUses: 123456,
          buy: {
            id: "minecraft:glass_bottle",
            Count: NBT.byte(5),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(4),
          },
        },
        {
          maxUses: 123456,
          buy: {
            id: "minecraft:campfire",
            Count: NBT.byte(1),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(2),
          },
        },
        {
          maxUses: 123456,
          buy: {
            id: "minecraft:bread",
            Count: NBT.byte(8),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(2),
          },
        },
      ],
    },
  });
});

MCFunction(`${dirName}breeder`, () => {
  summon("minecraft:villager", rel(0, 0, 0), {
    Tags: ["custom_villager", "scanned"],
    CanPickUpLoot: NBT.byte(0),
    CustomName:
      '{"text":"Maui The Animals Seller ","color":"dark_grey","bold":"false"}',
    ArmorItems: [
      {},
      {},
      {},
      {
        id: "minecraft:player_head",
        Count: NBT.byte(1),
        tag: {
          SkullOwner: {
            Id: NBT`[I; -1708814377, 2063683148, -1139321358, 395775236]`,
            Properties: {
              textures: [
                {
                  Value:
                    "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZDE2Mjg4YTEyOGE2NGUzZDQ0NjI0MmYzMDAwMjcyOWE1ZWQyN2ViZDA1N2ViYTAyMThhMmQ0ODhlYWQ5NDg2YyJ9fX0=",
                },
              ],
            },
          },
        },
      },
    ],
    VillagerData: {
      level: 99,
      profession: "minecraft:nitwit",
      type: "minecraft:plains",
    },
    Offers: {
      Recipes: [
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          Uses: 5,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(5),
          },
          sell: {
            id: "minecraft:cow_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(5),
          },
          sell: {
            id: "minecraft:pig_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(5),
          },
          sell: {
            id: "minecraft:sheep_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(4),
          },
          sell: {
            id: "minecraft:chicken_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(10),
          },
          sell: {
            id: "minecraft:wolf_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(15),
          },
          sell: {
            id: "minecraft:parrot_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:ocelot_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:mooshroom_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(6),
          },
          sell: {
            id: "minecraft:donkey_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(6),
          },
          sell: {
            id: "minecraft:mule_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:horse_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:llama_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(15),
          },
          sell: {
            id: "minecraft:turtle_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(5),
          },
          sell: {
            id: "minecraft:pufferfish_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(4),
          },
          sell: {
            id: "minecraft:tropical_fish_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(4),
          },
          sell: {
            id: "minecraft:cod_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(4),
          },
          sell: {
            id: "minecraft:salmon_spawn_egg",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:bread",
            Count: NBT.byte(15),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(5),
          },
        },
      ],
    },
  });
});

MCFunction(`${dirName}brewer`, () => {
  summon("minecraft:villager", rel(0, 0, 0), {
    Tags: ["custom_villager", "scanned"],
    CanPickUpLoot: NBT.byte(0),
    CustomName: '{"text":"Ted The Brewer","color":"dark_grey","bold":"false"}',
    ArmorItems: [
      {},
      {},
      {},
      {
        id: "minecraft:player_head",
        Count: NBT.byte(1),
        tag: {
          SkullOwner: {
            Id: NBT`[I; -527873671, 1750222890, -1640016929, 1379982966]`,
            Properties: {
              textures: [
                {
                  Value:
                    "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWExMzQ2ZWUwMDJlNjRmZWE3YWUxNzMwMjJlNGE5YzM1MjFmZWYzNjUwMWExN2UzYWU4YTZiNjY1N2VlYmIzZSJ9fX0=",
                },
              ],
            },
          },
        },
      },
    ],
    VillagerData: {
      level: 99,
      profession: "minecraft:nitwit",
      type: "minecraft:plains",
    },
    Offers: {
      Recipes: [
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          Uses: 5,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              Potion: "minecraft:long_swiftness",
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              Potion: "minecraft:long_strength",
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              Potion: "minecraft:strong_healing",
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              Potion: "minecraft:long_leaping",
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              Potion: "minecraft:long_regeneration",
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              Potion: "minecraft:long_fire_resistance",
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              Potion: "minecraft:long_water_breathing",
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              Potion: "minecraft:long_invisibility",
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              Potion: "minecraft:long_slow_falling",
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 123456,
          buy: {
            id: "minecraft:diamond",
            Count: NBT.byte(40),
          },
          sell: {
            id: "minecraft:potion",
            Count: NBT.byte(1),
            tag: {
              display: {
                Name: '{"text":"Ultimate Cocktail","color":"white","italic":"true"}',
              },
              CustomPotionEffects: [
                {
                  Id: NBT.byte(1),
                  Amplifier: NBT.byte(2),
                  Duration: 3600,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(3),
                  Amplifier: NBT.byte(2),
                  Duration: 4000,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(5),
                  Amplifier: NBT.byte(3),
                  Duration: 3600,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(6),
                  Amplifier: NBT.byte(1),
                  Duration: 40,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(8),
                  Amplifier: NBT.byte(2),
                  Duration: 1200,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(10),
                  Amplifier: NBT.byte(2),
                  Duration: 3600,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(11),
                  Amplifier: NBT.byte(2),
                  Duration: 3600,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(12),
                  Amplifier: NBT.byte(2),
                  Duration: 3600,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(13),
                  Amplifier: NBT.byte(2),
                  Duration: 3600,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(14),
                  Amplifier: NBT.byte(1),
                  Duration: 1200,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(16),
                  Amplifier: NBT.byte(1),
                  Duration: 1200,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(21),
                  Amplifier: NBT.byte(1),
                  Duration: 600,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(22),
                  Amplifier: NBT.byte(1),
                  Duration: 1200,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(23),
                  Amplifier: NBT.byte(2),
                  Duration: 1200,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(26),
                  Amplifier: NBT.byte(1),
                  Duration: 600,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(28),
                  Amplifier: NBT.byte(1),
                  Duration: 400,
                  ShowParticles: NBT.byte(0),
                },
                {
                  Id: NBT.byte(29),
                  Amplifier: NBT.byte(1),
                  Duration: 1200,
                  ShowParticles: NBT.byte(0),
                },
              ],
              CustomPotionColor: 16714250,
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(13),
          },
          sell: {
            id: "minecraft:brewing_stand",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(4),
          },
          sell: {
            id: "minecraft:nether_wart",
            Count: NBT.byte(32),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(14),
          },
          sell: {
            id: "minecraft:cauldron",
            Count: NBT.byte(1),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:cooked_chicken",
            Count: NBT.byte(6),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(2),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:cooked_salmon",
            Count: NBT.byte(6),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(2),
          },
        },
      ],
    },
  });
});

MCFunction(`${dirName}combat_enchanter`, () => {
  summon("minecraft:villager", rel(0, 0, 0), {
    Tags: ["custom_villager", "scanned"],
    CanPickUpLoot: NBT.byte(0),
    CustomName:
      '{"text":"Kane The Combat Enchanter","color":"dark_grey","bold":"false"}',
    ArmorItems: [
      {},
      {},
      {},
      {
        id: "minecraft:player_head",
        Count: NBT.byte(1),
        tag: {
          SkullOwner: {
            Id: NBT`[I;1581613144, -1619115221, -1459668434, 554923195]`,
            Properties: {
              textures: [
                {
                  Value:
                    "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvODVlZTg4MjBkMmQ2NWM1NGZlMmFhMmVhZmRlZWVjZTQxNjFiMzlmZjQ1ODE4YTc2NjUzZWE0MThmOWM2NWJiIn19fQ==",
                },
              ],
            },
          },
        },
      },
    ],
    VillagerData: {
      level: 99,
      profession: "minecraft:nitwit",
      type: "minecraft:plains",
    },
    Offers: {
      Recipes: [
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          Uses: 5,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(4),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:sharpness",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:sharpness",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:sharpness",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(32),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:sharpness",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(46),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:sharpness",
                  lvl: 5,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(4),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:smite",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(12),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:smite",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:smite",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(32),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:smite",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(50),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:smite",
                  lvl: 5,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(4),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:bane_of_arthropods",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(10),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:bane_of_arthropods",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(26),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:bane_of_arthropods",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(32),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:bane_of_arthropods",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(49),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:bane_of_arthropods",
                  lvl: 5,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:knockback",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(40),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:knockback",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(35),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:fire_aspect",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(60),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:fire_aspect",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(59),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:looting",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(35),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:unbreaking",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(60),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:unbreaking",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(40),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:power",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(64),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:power",
                  lvl: 4,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(39),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:punch",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(54),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:punch",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(59),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:flame",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald_block",
            Count: NBT.byte(36),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:infinity",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald_block",
            Count: NBT.byte(10),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:loyalty",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald_block",
            Count: NBT.byte(20),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:loyalty",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(49),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:impaling",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(64),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:impaling",
                  lvl: 5,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(62),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:riptide",
                  lvl: 2,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald_block",
            Count: NBT.byte(23),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:riptide",
                  lvl: 3,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald_block",
            Count: NBT.byte(49),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:mending",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 1234566,
          buy: {
            id: "minecraft:emerald",
            Count: NBT.byte(61),
          },
          sell: {
            id: "minecraft:enchanted_book",
            Count: NBT.byte(1),
            tag: {
              StoredEnchantments: [
                {
                  id: "minecraft:channeling",
                  lvl: 1,
                },
              ],
            },
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:cooked_rabbit",
            Count: NBT.byte(3),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(5),
          },
        },
        {
          rewardExp: NBT.byte(1),
          maxUses: 2147483647,
          buy: {
            id: "minecraft:cooked_mutton",
            Count: NBT.byte(3),
          },
          sell: {
            id: "minecraft:emerald",
            Count: NBT.byte(5),
          },
        },
      ],
    },
  });
});

MCFunction(`${dirName}concrete_seller`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Jojo The Concrete Seller","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-2080447309,609832204,-1081788136,-1195249844],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzRhNjE3YWQ0MjFlZmExMzZjNmI5MTllMzY0NGE4N2IzNjU3MjQwZGZkZmFiNWExZDgxNTFlM2U3OWIxNjM4MyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,maxUses:2147483647,Uses:5,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:orange_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:magenta_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:light_blue_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:yellow_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:lime_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:pink_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:gray_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:light_gray_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:cyan_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:purple_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:blue_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:brown_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:green_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:black_concrete",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:8b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_pickaxe",Count:1b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}cynophilist`, () => {
  raw(
    `summon minecraft:villager ~ ~ ~ {CanPickUpLoot:0b,Tags:["custom_villager", "scanned"],CustomName:'{"text":"Zues the Cynophilist","color":"dark_gray"}',VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{maxUses:123456,uses:5,buy:{id:"minecraft:emerald",Count:12b},sell:{id:"minecraft:wolf_spawn_egg",Count:1b}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:20b},sell:{id:"minecraft:wolf_spawn_egg",Count:1b,tag:{display:{Name:'{"text":"Speed Wolf","italic":false}'},EntityTag:{ActiveEffects:[{Id:1b,Amplifier:3b,Duration:999999,ShowParticles:0b}]}}}},{maxUses:132456,buy:{id:"minecraft:emerald",Count:35b},sell:{id:"minecraft:wolf_spawn_egg",Count:1b,tag:{display:{Name:'{"text":"Tough Wolf","italic":false}',Lore:['{"text":"A wolf with double health","color":"dark_blue","italic":false}']},EntityTag:{Health:40f}}}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:35b},sell:{id:"minecraft:wolf_spawn_egg",Count:1b,tag:{display:{Name:'{"text":"Strong Wolf","italic":false}',Lore:['{"text":"A wolf with double attack damage","color":"dark_blue","italic":false}']},EntityTag:{Attributes:[{Name:"generic.attackDamage",Base:8}]}}}},{maxUses:123456,buy:{id:"minecraft:emerald_block",Count:15b},sell:{id:"minecraft:wolf_spawn_egg",Count:1b,tag:{display:{Name:'{"text":"Ultimate Wolf","italic":false}',Lore:['{"text":"You know the deal :D","color":"dark_blue","italic":false}']},EntityTag:{Health:50f,ActiveEffects:[{Id:1b,Amplifier:3b,Duration:999999,ShowParticles:0b},{Id:11b,Amplifier:2b,Duration:999999,ShowParticles:0b},{Id:12b,Amplifier:2b,Duration:999999,ShowParticles:0b}],Attributes:[{Name:"generic.attackDamage",Base:16},{Name:"generic.attackKnockback",Base:5}]}}}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:rotten_flesh",Count:6b,tag:{display:{Name:'{"text":"Food for Dogs","italic":false}'}}}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:chicken",Count:5b,tag:{display:{Name:'{"text":"Food for Dogs","italic":false}',Lore:['{"text":"Quality Food","color":"dark_blue","italic":false}']}}}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:rabbit",Count:3b,tag:{display:{Name:'{"text":"Food for Dogs","italic":false}',Lore:['{"text":"Superb Quality","color":"dark_blue","italic":false}']}}}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:bone",Count:10b,tag:{display:{Name:'{"text":"Bone for Dogs","italic":false}',Lore:['{"text":"Tame  em","color":"dark_blue","italic":false}']}}}},{maxUses:123456,buy:{id:"minecraft:bread",Count:10b},sell:{id:"minecraft:emerald",Count:2b}},]}}`
  );
});

MCFunction(`${dirName}desert_explorer`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Kim The Desert Explorer","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1,tag:{SkullOwner:{Id:"fd779bdd-f038-4f9f-967f-5a5ef4d3655f",Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYTM0OWM1NDFjMWZiZTgzNjU5NmJjY2U1YjRmMzM0ODc4ZjYxMjllY2UyMjNhZGI3YTIwNzM5YzJlYTk4N2FkIn19fQ=="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:desert"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:214748364,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:sand",Count:64b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:cactus",Count:10b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:sandstone",Count:32b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:red_sandstone",Count:16b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:bread",Count:7b},sell:{id:"minecraft:emerald",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:iron_shovel",Count:1b},sell:{id:"minecraft:emerald",Count:4b}}]}}`
  );
});

MCFunction(`${dirName}disc_seller`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Andrew The Disc Seller","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-2131583560,1836665835,-1293365006,-2118527928],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjBlODA5YTNkMDc4ZWU0MDc0YWM0MjkxNDM4ZGMzOWFiYjhiMWVhNDNlYWU2MzIxNjIxODcxZGRlZWU2NTliMSJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,maxUses:2147483647,Uses:5,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_13",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_cat",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_blocks",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_chirp",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_far",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_mall",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_mellohi",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_stal",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_strad",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_ward",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_11",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:music_disc_wait",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:9b},sell:{id:"minecraft:emerald",Count:3b}}]}}`
  );
});

MCFunction(`${dirName}dye_seller`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Argon The Dye Seller","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;1649304476,1329086581,-2031202788,1911220142],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzAwODU3OWU5MjkxMTQxYjY3OTc4MDg3ZDNmNTRhYzgwYTE5NzRlZTM4OWE5ZWE5OTI4YjczZDVkNjcyZDJkIn19fQ=="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,maxUses:2147483647,Uses:5,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:black_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:red_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:green_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:brown_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:blue_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:purple_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:cyan_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:light_gray_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:gray_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:pink_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:lime_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:yellow_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:light_blue_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:magenta_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:orange_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:white_dye",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:11b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}egg`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Dan The Egg Seller","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;1960118582,-1265743730,-1097500298,-389327182],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjU5MDJiODYzYzA3MjcyZGNmZDFlZDFlNGQ4MzQzYmI1MjllZjk2MjAyMThmZGQ2ZGViOGU5YzllYTk0ZjQ3ZSJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:214748364,buy:{id:"minecraft:emerald",Count:3b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:bat_spawn_egg",Count:2b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:13b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:blaze_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:22b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:cave_spider_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:9b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:chicken_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:5b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:cod_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:13b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:cow_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:25b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:creeper_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:46b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:dolphin_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:20b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:donkey_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:32b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:drowned_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:4b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:endermite_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:34b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:enderman_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:42b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:ghast_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:43b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:guardian_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:31b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:husk_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:41b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:horse_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:35b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:llama_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:48b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:magma_cube_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald_block",Count:19b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:mooshroom_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:42b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:mule_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:51b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:ocelot_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:52b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:parrot_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:53b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:phantom_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:34b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:pig_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:54b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:polar_bear_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:16b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:pufferfish_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:31b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:rabbit_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:16b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:salmon_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:31b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:sheep_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:31b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:silverfish_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:41b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:skeleton_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:55b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:slime_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald_block",Count:32b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:shulker_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:35b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:spider_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:32b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:squid_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:42b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:stray_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:16b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:tropical_fish_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:62b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:turtle_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:36b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:witch_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:62b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:wither_skeleton_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:44b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:wolf_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:9b},buyB:{id:"minecraft:egg",Count:1b},sell:{id:"minecraft:zombie_pigman_spawn_egg",Count:1b}},{maxUses:123456,buy:{id:"minecraft:bread",Count:14b},sell:{id:"minecraft:emerald",Count:4b}},{maxUses:123456,buy:{id:"minecraft:cooked_chicken",Count:5b},sell:{id:"minecraft:emerald",Count:2b}},{maxUses:123456,buy:{id:"minecraft:egg",Count:8b},sell:{id:"minecraft:emerald",Count:3b}}]}}`
  );
});

MCFunction(`${dirName}emerald_exchanger`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Simon The Gems Exchanger","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;94296195,1812614292,-1564218711,899463525],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTQyYjAwYzYwMmE4ZTI2MDRhOWI1OGE3ZWZhZTNhZGQwYzQ0MGI4OThlNTA1Mzk4NTM2M2NiYjJmZmIwMGZlNCJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:diamond",Count:1b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_ingot",Count:5b},sell:{id:"minecraft:emerald",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:gold_ingot",Count:5b},sell:{id:"minecraft:emerald",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:lapis_lazuli",Count:8b},sell:{id:"minecraft:emerald",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:5b},sell:{id:"minecraft:emerald",Count:1b}}]}}`
  );
});

MCFunction(`${dirName}enchanter_1`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Ken The Enchanter","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-578549575,-714257713,-1454141494,1150845929],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTIyNjc0MWViMDgyYTI2OTllMmU4NmI4NzA5MzcxNDYyN2Y3ZjRkZTMyMzlmNmYwYTE5MjFlMmU4ZWU1MTExYyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:534465,buy:{'id':"minecraft:diamond_sword",Count:1b},buyB:{id:"minecraft:emerald",Count:8b},sell:{id:"minecraft:diamond_sword",Count:1b,tag:{display:{Name:'{"text":"Sharpner"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:sharpness",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:diamond_shovel",Count:1b},buyB:{id:"minecraft:emerald",Count:12b},sell:{id:"minecraft:diamond_shovel",Count:1b,tag:{display:{Name:'{"text":"Showell"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:1},{id:"minecraft:unbreaking",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:diamond_axe",Count:1b},buyB:{id:"minecraft:emerald",Count:12b},sell:{id:"minecraft:diamond_axe",Count:1b,tag:{display:{Name:'{"text":"Axellent"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:1},{id:"minecraft:unbreaking",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:diamond_pickaxe",Count:1b},buyB:{id:"minecraft:emerald",Count:32b},sell:{id:"minecraft:diamond_pickaxe",Count:1b,tag:{display:{Name:'{"text":"Pickle"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:2},{id:"minecraft:unbreaking",lvl:2}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_sword",Count:1b},buyB:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:stone_sword",Count:1b,tag:{display:{Name:'{"text":"Pebble Folk"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:sharpness",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_shovel",Count:1b},buyB:{id:"minecraft:emerald",Count:12b},sell:{id:"minecraft:stone_shovel",Count:1b,tag:{display:{Name:'{"text":"Stovel"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:1},{id:"minecraft:silk_touch",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_pickaxe",Count:1b},buyB:{id:"minecraft:emerald",Count:8b},sell:{id:"minecraft:stone_pickaxe",Count:1b,tag:{display:{Name:'{"text":"Drop Axe"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_axe",Count:1b},buyB:{id:"minecraft:emerald",Count:32b},sell:{id:"minecraft:stone_axe",Count:1b,tag:{display:{Name:'{"text":"Tree Eater"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:2},{id:"minecraft:unbreaking",lvl:2}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_sword",Count:1b},buyB:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:iron_sword",Count:1b,tag:{display:{Name:'{"text":"Shiner"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:unbreaking",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_pickaxe",Count:1b},buyB:{id:"minecraft:emerald",Count:15b},sell:{id:"minecraft:iron_pickaxe",Count:1b,tag:{display:{Name:'{"text":"Digger"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:1},{id:"minecraft:unbreaking",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_axe",Count:1b},buyB:{id:"minecraft:emerald",Count:64b},sell:{id:"minecraft:iron_axe",Count:1b,tag:{display:{Name:'{"text":"Axel"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:3},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1},{id:"minecraft:silk_touch",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_shovel",Count:1b},buyB:{id:"minecraft:emerald",Count:18b},sell:{id:"minecraft:iron_shovel",Count:1b,tag:{display:{Name:'{"text":"Isotope"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:3}]}}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:cooked_beef",Count:3b},sell:{id:"minecraft:emerald",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:cooked_cod",Count:3b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}enchanter_2`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Cavin The Enchanter","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-578549575,-714257713,-1454141494,1150845929],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTIyNjc0MWViMDgyYTI2OTllMmU4NmI4NzA5MzcxNDYyN2Y3ZjRkZTMyMzlmNmYwYTE5MjFlMmU4ZWU1MTExYyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:534465,buy:{id:"minecraft:diamond_sword",Count:1b},buyB:{id:"minecraft:emerald",Count:28b},sell:{id:"minecraft:diamond_sword",Count:1b,tag:{display:{Name:'{"text":"Blade"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:sharpness",lvl:2},{id:"minecraft:mending",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:diamond_shovel",Count:1b},buyB:{id:"minecraft:emerald",Count:16b},sell:{id:"minecraft:diamond_shovel",Count:1b,tag:{display:{Name:'{"text":"Dirt y"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:1},{id:"minecraft:unbreaking",lvl:2}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:diamond_axe",Count:1b},buyB:{id:"minecraft:emerald",Count:51b},sell:{id:"minecraft:diamond_axe",Count:1b,tag:{display:{Name:'{"text":"Axe o Thermic"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:5},{id:"minecraft:unbreaking",lvl:2},{id:"minecraft:silk_touch",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:diamond_pickaxe",Count:1b},buyB:{id:"minecraft:emerald",Count:32b},sell:{id:"minecraft:diamond_pickaxe",Count:1b,tag:{display:{Name:'{"text":"Pick Tax"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:3},{id:"minecraft:unbreaking",lvl:3}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_sword",Count:1b},buyB:{id:"minecraft:emerald",Count:12b},sell:{id:"minecraft:stone_sword",Count:1b,tag:{display:{Name:'{"text":"Stone age Sword"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:sharpness",lvl:2},{id:"minecraft:unbreaking",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_shovel",Count:1b},buyB:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:stone_shovel",Count:1b,tag:{display:{Name:'{"text":"Stone Spoon"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:unbreaking",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_pickaxe",Count:1b},buyB:{id:"minecraft:emerald",Count:24b},sell:{id:"minecraft:stone_pickaxe",Count:1b,tag:{display:{Name:'{"text":"Bendy"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:5}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_axe",Count:1b},buyB:{id:"minecraft:emerald",Count:15b},sell:{id:"minecraft:stone_axe",Count:1b,tag:{display:{Name:'{"text":"Chopper"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:silk_touch",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_sword",Count:1b},buyB:{id:"minecraft:emerald",Count:61b},sell:{id:"minecraft:iron_sword",Count:1b,tag:{display:{Name:'{"text":"Slayer"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:sharpness",lvl:2},{id:"minecraft:fire_aspect",lvl:1},{id:"minecraft:knockback",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_pickaxe",Count:1b},buyB:{id:"minecraft:emerald",Count:21b},sell:{id:"minecraft:iron_pickaxe",Count:1b,tag:{display:{Name:'{"text":"DigBig"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:2},{id:"minecraft:unbreaking",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_axe",Count:1b},buyB:{id:"minecraft:emerald",Count:19b},sell:{id:"minecraft:iron_axe",Count:1b,tag:{display:{Name:'{"text":"Unbreakable"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:1},{id:"minecraft:unbreaking",lvl:3}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_shovel",Count:1b},buyB:{id:"minecraft:emerald",Count:22b},sell:{id:"minecraft:iron_shovel",Count:1b,tag:{display:{Name:'{"text":"Not a Shovel"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:3},{id:"minecraft:sharpness",lvl:1}]}}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:cooked_rabbit",Count:3b},sell:{id:"minecraft:emerald",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:cooked_mutton",Count:3b},sell:{id:"minecraft:emerald",Count:6b}}]}}`
  );
});

MCFunction(`${dirName}enchanter_3`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Felix The Enchanter","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-578549575,-714257713,-1454141494,1150845929],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTIyNjc0MWViMDgyYTI2OTllMmU4NmI4NzA5MzcxNDYyN2Y3ZjRkZTMyMzlmNmYwYTE5MjFlMmU4ZWU1MTExYyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:534465,buy:{id:"minecraft:diamond_sword",Count:1b},buyB:{id:"minecraft:emerald",Count:49b},sell:{id:"minecraft:diamond_sword",Count:1b,tag:{display:{Name:'{"text":"Fire Blade"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:sharpness",lvl:2},{id:"minecraft:fire_aspect",lvl:1},{id:"minecraft:unbreaking",lvl:3}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:diamond_shovel",Count:1b},buyB:{id:"minecraft:emerald",Count:49b},sell:{id:"minecraft:diamond_shovel",Count:1b,tag:{display:{Name:'{"text":"Bore Well"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:2},{id:"minecraft:unbreaking",lvl:2}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:diamond_axe",Count:1b},buyB:{id:"minecraft:emerald",Count:51b},sell:{id:"minecraft:diamond_axe",Count:1b,tag:{display:{Name:'{"text":"Cutter"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:5},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:efficiency",lvl:3}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:diamond_pickaxe",Count:1b},buyB:{id:"minecraft:emerald",Count:46b},sell:{id:"minecraft:diamond_pickaxe",Count:1b,tag:{display:{Name:'{"text":"Pick o Ledial"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:2},{id:"minecraft:unbreaking",lvl:2},{id:"minecraft:silk_touch",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_sword",Count:1b},buyB:{id:"minecraft:emerald",Count:56b},sell:{id:"minecraft:stone_sword",Count:1b,tag:{display:{Name:'{"text":"Sword o pedia"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:sharpness",lvl:2},{id:"minecraft:unbreaking",lvl:2},{id:"minecraft:knockback",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_shovel",Count:1b},buyB:{id:"minecraft:emerald",Count:39b},sell:{id:"minecraft:stone_shovel",Count:1b,tag:{display:{Name:'{"text":"Dirt Blower"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:unbreaking",lvl:2},{id:"minecraft:efficiency",lvl:5}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_pickaxe",Count:1b},buyB:{id:"minecraft:emerald",Count:64b},sell:{id:"minecraft:stone_pickaxe",Count:1b,tag:{display:{Name:'{"text":"Pick Axellent"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:5},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:mending",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:stone_axe",Count:1b},buyB:{id:"minecraft:emerald",Count:46b},sell:{id:"minecraft:stone_axe",Count:1b,tag:{display:{Name:'{"text":"Tree o sity"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:unbreaking",lvl:2},{id:"minecraft:efficiency",lvl:4}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_sword",Count:1b},buyB:{id:"minecraft:emerald",Count:49b},sell:{id:"minecraft:iron_sword",Count:1b,tag:{display:{Name:'{"text":"Fryer"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:sharpness",lvl:3},{id:"minecraft:fire_aspect",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_pickaxe",Count:1b},buyB:{id:"minecraft:emerald",Count:55b},sell:{id:"minecraft:iron_pickaxe",Count:1b,tag:{display:{Name:'{"text":"Dig nity"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:3},{id:"minecraft:unbreaking",lvl:3}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_axe",Count:1b},buyB:{id:"minecraft:emerald",Count:59b},sell:{id:"minecraft:iron_axe",Count:1b,tag:{display:{Name:'{"text":"Axeable"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:4},{id:"minecraft:unbreaking",lvl:3},{id:"minecraft:silk_touch",lvl:1}]}}},{rewardExp:1b,maxUses:534465,buy:{id:"minecraft:iron_shovel",Count:1b},buyB:{id:"minecraft:emerald",Count:42b},sell:{id:"minecraft:iron_shovel",Count:1b,tag:{display:{Name:'{"text":"I-Vel"}'},Unbreakable:0b,Enchantments:[{id:"minecraft:efficiency",lvl:4},{id:"minecraft:unbreaking",lvl:3}]}}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:cooked_beef",Count:5b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:cooked_salmon",Count:3b},sell:{id:"minecraft:emerald",Count:4b}}]}}`
  );
});

MCFunction(`${dirName}end_explorer`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Paul The End Explorer","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-1475778232,1381320268,-1896091184,324355916],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWUyOGEwM2VkMmViOTBlYWZmMWExMTlhNWI1NTQ0NTI3MDFiOTdhZjQ3YmZmNzNjZTcxMDg0OWM2YjAifX19"}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:end_stone",Count:32b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:end_rod",Count:16b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:popped_chorus_fruit",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:end_crystal",Count:1b},sell:{id:"minecraft:emerald",Count:35b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:ender_eye",Count:9b},sell:{id:"minecraft:emerald",Count:6b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:ender_pearl",Count:16b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:end_stone_bricks",Count:16b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:purpur_block",Count:16b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:purpur_pillar",Count:16b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:chorus_flower",Count:10b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:chorus_fruit",Count:40b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:32b},sell:{id:"minecraft:emerald",Count:10b}}]}}`
  );
});

MCFunction(`${dirName}engineer`, () => {
  raw(
    `summon minecraft:villager ~ ~ ~ {CanPickUpLoot:0b,Tags:["custom_villager", "scanned"],CustomName:'{"text":"Gabo the Engineer","color":"dark_gray"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;608755667,2118797778,-1693207759,572708766],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNmVjYzNiOGExZjY1YTQxZjE2ZWQ3NzcwMTA5NGI3YjQ0MGFkNDA1YzJjYzM0OGYxMDU1NGZmMjhmNGQ1MjE0ZiJ9fX0="}]}}}}],ArmorDropChances:[0.085F,0.085F,0.085F,0.000F],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{maxUses:123456,uses:5,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:smithing_table",Count:1b}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:loom",Count:1b}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:cartography_table",Count:1b}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:fletching_table",Count:1b}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:lectern",Count:1b}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:grindstone",Count:1b}},{maxUses:123456,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:stonecutter",Count:1b}},{maxUses:123456,buy:{id:"minecraft:bread",Count:64b},sell:{id:"minecraft:emerald",Count:18b}},{maxUses:123456,buy:{id:"minecraft:oak_log",Count:16b},sell:{id:"minecraft:emerald",Count:6b}},{maxUses:123456,buy:{id:"minecraft:birch_log",Count:16b},sell:{id:"minecraft:emerald",Count:6b}},{maxUses:123456,buy:{id:"minecraft:spruce_log",Count:16b},sell:{id:"minecraft:emerald",Count:6b}},{maxUses:123456,buy:{id:"minecraft:acacia_button",Count:16b},sell:{id:"minecraft:emerald",Count:6b}},{maxUses:123456,buy:{id:"minecraft:paper",Count:16b},sell:{id:"minecraft:emerald",Count:5b}},{maxUses:123456,buy:{id:"minecraft:iron_ingot",Count:8b},sell:{id:"minecraft:emerald",Count:4b}}]}}`
  );
});

MCFunction(`${dirName}firework`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Tango the Fireworks Seller","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-1705959460,1469007498,-1142970707,-2112072891],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNThkMzdiMDZjODY5MmE4NTBlZTdhNjQzMmY1YzZhOTVkZDk4NmM3M2JlNzg5MTYxNjEzM2E0MjU2OWM3MDk5NyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:214748364,buy:{id:"minecraft:emerald",Count:35b},sell:{id:"minecraft:firework_rocket",Count:64b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:gunpowder",Count:8b},sell:{id:"minecraft:emerald",Count:2b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:paper",Count:16b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:13b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}fisherman`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Tony The Fisherman","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;1715058733,-1316011150,-1399012283,478411096],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvN2NlMWRjNzBiMjNjZDZkNzY4YmFlM2UyNTM3MzliNjViNDAxZTA2MzdmODczZmFmYzcxM2E4YjFlYTMwMDhiIn19fQ=="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:214748364,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:cod",Count:9b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:salmon",Count:10b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:tropical_fish",Count:12b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:pufferfish",Count:7b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:9b},sell:{id:"minecraft:pufferfish_bucket",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:11b},sell:{id:"minecraft:cod_bucket",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:salmon_bucket",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:12b},sell:{id:"minecraft:tropical_fish_bucket",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:14b},sell:{id:"minecraft:cooked_salmon",Count:23b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:15b},sell:{id:"minecraft:cooked_cod",Count:32b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:23b},sell:{id:"minecraft:fishing_rod",Count:1b}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:30b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:lure",lvl:1}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:42b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:lure",lvl:2}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:53b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:lure",lvl:3}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:32b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:45b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:55b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2}]}}},{maxUses:123456,buy:{id:"minecraft:bread",Count:16b},sell:{id:"minecraft:emerald",Count:4b}},{maxUses:123456,buy:{id:"minecraft:barrel",Count:8b},sell:{id:"minecraft:emerald",Count:3b}},{maxUses:123456,buy:{id:"minecraft:fishing_rod",Count:1b},sell:{id:"minecraft:emerald",Count:3b}}]}}`
  );
});

MCFunction(`${dirName}florist`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Daisy The Florist","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;1065841111,1413759660,-1213289290,316148593],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZThiOGM2YTQ2ZDg3Y2Y4NmE1NWRmMjE0Y2Y4NGJmNDVjY2EyNWVkYjlhNjc2ZTk2MzY0ZGQ2YTZlZWEyMzViMyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:poppy",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:blue_orchid",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:allium",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:azure_bluet",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:red_tulip",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:oxeye_daisy",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:sunflower",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:lilac",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:rose_bush",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:peony",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:dandelion",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:flower_pot",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:shears",Count:1b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:14b},sell:{id:"minecraft:emerald",Count:6b}}]}}`
  );
});

MCFunction(`${dirName}fruiterer`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Oliver the Fruiterer","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-1951728418,-2014688888,-1798350235,2038624537],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjNmMzEzOTQ0ZmNlN2E5MzEyODdkYmMwNjg0MmQ2NDYzYmQ2NGIwMTc3MjE1M2IwYTg4ZTIxMDM5ZmQwODZkMCJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:apple",Count:8b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:melon_slice",Count:16b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:melon",Count:1b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:pumpkin",Count:1b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:carrot",Count:12b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:golden_carrot",Count:12b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:sweet_berries",Count:10b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:20b},sell:{id:"minecraft:golden_apple",Count:2b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:chorus_fruit",Count:15b}},{maxUses:123456,buy:{id:"minecraft:bread",Count:18b},sell:{id:"minecraft:emerald",Count:5b}},{maxUses:123456,buy:{id:"minecraft:bone_meal",Count:16b},sell:{id:"minecraft:emerald",Count:3b}},]}}`
  );
});

MCFunction(`${dirName}glazed_terracotta_seller`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Fling The Terracotta Seller","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;1698402744,-1395307937,-1887133941,779281176],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDU2NGI2ZDYxMzQ2NTI4OTNlYjM4MTcwZDRmZmNmMGM1OGVjYjM3NTM0OWM0YWQyZWU1NjBjZGI3NWNmODc3MSJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:white_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:orange_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:magenta_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:light_blue_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:yellow_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:lime_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:pink_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:gray_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:light_gray_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:cyan_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:purple_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:blue_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:brown_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:green_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:red_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:black_glazed_terracotta",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_pickaxe",Count:1b},sell:{id:"minecraft:emerald",Count:4b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:13b},sell:{id:"minecraft:emerald",Count:8b}}]}}`
  );
});

MCFunction(`${dirName}griefer`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"The Griefer","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;2026649866,363417023,-1879485739,200075066],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjVhZTMyMGEzYzcyN2ZkNDVhYzEzNjM2YjhjYzgxOGQzOTc2ZGM3YjVlZDAwNjk1NzA5MDhlZGRmNzkwZDgzYyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:tnt",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:flint_and_steel",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:lava_bucket",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:5b},sell:{id:"minecraft:emerald",Count:3b}},{maxUses:123456,buy:{id:"minecraft:gunpowder",Count:12b},sell:{id:"minecraft:emerald",Count:3b}}]}}`
  );
});

MCFunction(`${dirName}head_seller`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Lorem The psychopath","color":"dark_grey","bold":"false"}',VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:147483647,buy:{id:"minecraft:emerald",Count:40b},sell:{id:"minecraft:skeleton_skull",Count:1b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:40b},sell:{id:"minecraft:zombie_head",Count:1b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:40b},sell:{id:"minecraft:creeper_head",Count:1b}},{rewardExp:1b,maxUses:147483647,buy:{id:"minecraft:emerald",Count:64b},sell:{id:"minecraft:player_head",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:15b},sell:{id:"minecraft:emerald",Count:4b}},{maxUses:123456,buy:{id:"minecraft:iron_axe",Count:1b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}horse_rider`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Wattles The Horse Dealer","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;2140577582,-1058192901,-1976262372,-939240238],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMzUzZTcwZTYzYzZjZDgyODcwNWVkNDhkZGNlYWI4OTExMGM2Y2Q0ZjIwMjk3ZjY4OGNjOGVmODNmOThlODM2OCJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:214748364,buy:{id:"minecraft:emerald",Count:8b},sell:{id:"minecraft:diamond_horse_armor",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:7b},sell:{id:"minecraft:golden_horse_armor",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:iron_horse_armor",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:saddle",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:horse_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:32b},sell:{id:"minecraft:zombie_horse_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:25b},sell:{id:"minecraft:skeleton_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:chainmail_helmet",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:15b},sell:{id:"minecraft:chainmail_chestplate",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:chainmail_leggings",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:chainmail_boots",Count:1b}},{maxUses:123456,buy:{id:"minecraft:bread",Count:15b},sell:{id:"minecraft:emerald",Count:4b}},{maxUses:123456,buy:{id:"minecraft:cooked_mutton",Count:10b},sell:{id:"minecraft:emerald",Count:4b}}]}}`
  );
  functionCmd("mo_villager:secrets/secret_4");
});

MCFunction(`${dirName}hunter`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Hanz The Hunter","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-1169070692,-186692672,-1817619055,149098001],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDBiM2E0MDNiODBjMmZmZTdiMzY1OTZmZDgwOWQ1NWM2MjRlN2M0MTQzYzZmZDYwYjFkNjJkMTU2MjkwYzU2OSJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:leather",Count:10b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:rabbit_hide",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:rabbit_foot",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bow",Count:1b,tag:{Unbreakable:0b}},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:arrow",Count:16b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_sword",Count:1b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:14b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}ice_maker`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Cris The Ice Seller","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;1329300192,499204518,-2111498603,1649939269],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMjg5NDBiZWY2MTBlMDNhN2M5MWZiNGU4YzM3Y2ZhYzJmMDIwZDhjOTZmNWM3ODgwYzFjZjUyNTg5MzA2Y2ZjZCJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:ice",Count:10b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:packed_ice",Count:10b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:blue_ice",Count:10b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:water_bucket",Count:1b},sell:{id:"minecraft:emerald",Count:2b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:snow",Count:10b},sell:{id:"minecraft:emerald",Count:2b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_shovel",Count:1b},sell:{id:"minecraft:emerald",Count:2b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_pickaxe",Count:1b},sell:{id:"minecraft:emerald",Count:4b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:17b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}lumberjack`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Ron The Lumberjack","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;1322603806,-923778394,-1583075469,-110924717],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOTE0ZGZiZjNkMDRmOGY2NTMyM2MzMmU0Mjc4NDJiNjAwYjdkZmU5Zjc3OTg4OWMyNTIzNDliOTRlNjBiY2YwNSJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:oak_log",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:spruce_log",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:birch_log",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:acacia_log",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:dark_oak_log",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:32b},sell:{id:"minecraft:emerald",Count:8b}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:iron_axe",Count:1b},sell:{id:"minecraft:emerald",Count:3b}},{maxUses:123456,buy:{id:"minecraft:bone_meal",Count:16b},sell:{id:"minecraft:emerald",Count:4b}}]}}`
  );
});

MCFunction(`${dirName}merchant`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Steve The Merchant","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-1808185366,1041911772,-2048527048,933168617],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNWYxMzc5YTgyMjkwZDdhYmUxZWZhYWJiYzcwNzEwZmYyZWMwMmRkMzRhZGUzODZiYzAwYzkzMGM0NjFjZjkzMiJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:214748364,buy:{id:"minecraft:emerald_block",Count:12b},buyB:{id:"minecraft:diamond_block",Count:12b},sell:{id:"minecraft:trident",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald_block",Count:10b},buyB:{id:"minecraft:diamond_block",Count:10b},sell:{id:"minecraft:elytra",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:48b},sell:{id:"minecraft:white_shulker_box",Count:1b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:40b},sell:{id:"minecraft:golden_carrot",Count:64b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:16b},sell:{id:"minecraft:name_tag",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald_block",Count:15b},sell:{id:"minecraft:enchanted_golden_apple",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:12b},sell:{id:"minecraft:emerald",Count:3b}}]}}`
  );
});

MCFunction(`${dirName}miner`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Dave The Miner","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-663168777,430130626,-1261834416,712994671],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzk2MjdiZTYyY2VkNzE0MTEzOWQzZjE1NTc5MGE1ZDQzNTZlYjdiOWVlOTVlNTA0YjMzMjI5NzRjYmM1MTVlYSJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:stone",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:granite",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:andesite",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:coal",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:coal_ore",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:lapis_lazuli",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:lapis_ore",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:iron_ingot",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:quartz",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_pickaxe",Count:1b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:torch",Count:16b},sell:{id:"minecraft:emerald",Count:3b}},{maxUses:123456,buy:{id:"minecraft:bread",Count:16b},sell:{id:"minecraft:emerald",Count:4b}}]}}`
  );
});

MCFunction(`${dirName}mizab`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Mizab","color":"gold","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-1475469972,1002589940,-1419576525,-235652360],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOWZiNzlhZWZkZGNhZDYzYTFmZTAyYmQzY2E5MDY0NmZlYzk3NGVjMmExYzcxMzNhOTE4ZmRkMDhmNmZhN2FlMyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:5,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:trident",Count:1b}},{rewardExp:1b,maxUses:5,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:elytra",Count:1b}},{rewardExp:1b,maxUses:5,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:white_shulker_box",Count:1b}},{rewardExp:1b,maxUses:5,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:golden_carrot",Count:64b}},{rewardExp:1b,maxUses:5,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:name_tag",Count:20b}},{rewardExp:1b,maxUses:5,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:enchanted_golden_apple",Count:8b}},{rewardExp:1b,maxUses:10,buy:{id:"minecraft:bread",Count:5b},sell:{id:"minecraft:emerald",Count:20b}}]}}`
  );
  functionCmd("mo_villager:secrets/secret_2");
  // advancement.grant("@a").only("minecraft:villagers/legend");
});

MCFunction(`${dirName}mob_hunter`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Nathan the Mob Hunter","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-1629097238,-384612004,-1522418922,683892255],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDkxOThlYjVlNjUwMDdkZWNlZWMxZWY1NzI3MGQyY2E1ZWJhMTUxZmU1MmZkOWE0YWE3ODQxMGQxYjNiNTNmYSJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:slime_ball",Count:16b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:slime_block",Count:2b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:leather",Count:9b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:slime_ball",Count:8b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:string",Count:16b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:feather",Count:32b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:ink_sac",Count:10b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:rotten_flesh",Count:32b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:snowball",Count:16b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:blaze_rod",Count:5b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:glowstone_dust",Count:16b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:spider_eye",Count:16b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:prismarine_shard",Count:12b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:7b},sell:{id:"minecraft:prismarine_crystals",Count:12b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:wet_sponge",Count:1b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:ender_pearl",Count:8b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:9b},sell:{id:"minecraft:ghast_tear",Count:2b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:32b},sell:{id:"minecraft:totem_of_undying",Count:1b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:magma_cream",Count:16b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:13b},sell:{id:"minecraft:phantom_membrane",Count:10b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:8b},sell:{id:"minecraft:saddle",Count:1b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:22b},sell:{id:"minecraft:shulker_shell",Count:4b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:gunpowder",Count:16b}},{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:gold_nugget",Count:9b}},{maxUses:123456,buy:{id:"minecraft:bread",Count:10b},sell:{id:"minecraft:emerald",Count:2b}},{maxUses:123456,buy:{id:"minecraft:cooked_mutton",Count:10b},sell:{id:"minecraft:emerald",Count:4b}},{maxUses:123456,buy:{id:"minecraft:iron_sword",Count:1b},sell:{id:"minecraft:emerald",Count:2b}},{maxUses:123456,buy:{id:"minecraft:diamond_sword",Count:1b},sell:{id:"minecraft:emerald",Count:4b}}]}}`
  );
});

MCFunction(`${dirName}mushroom`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Gwen The Mushroom Seller","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;57298727,-1955705786,-2012017360,2072096544],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNDk4YWFkOTYwOWQ5ZTY4OWI3NDk4MzUxOWJiMjBiOTk5YzVkM2Q2MjY0ZmY3Y2YzYmNlYTI4ZmQyODFlMTczNyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:214748364,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:red_mushroom",Count:6b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:brown_mushroom",Count:8b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:12b},sell:{id:"minecraft:red_mushroom_block",Count:4b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:19b},sell:{id:"minecraft:brown_mushroom_block",Count:5b}},{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:7b},sell:{id:"minecraft:mushroom_stew",Count:3b}},{maxUses:123456,buy:{id:"minecraft:bread",Count:16b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}nether_explorer`, () => {
  raw(
    `summon villager ~ ~ ~ {CanPickUpLoot:0b,Tags:["custom_villager", "scanned"],CustomName:'{"text":"Giorgio The Nether Explorer"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;970314518,1557351784,-1516213081,-1603398334],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvY2RmNzk3MTg4ODJiODJkZDJlNmM3MTJiZTI5MjZlMjM0YTM1NTY4NWQ0NzU4NTg0NTdiOWIzZmMyZjc1Y2JjNyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,maxUses:214748364,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:blackstone",Count:20b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:polished_blackstone",Count:18b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:gilded_blackstone",Count:8b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:chiseled_polished_blackstone",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:6b},sell:{id:"minecraft:cracked_polished_blackstone_bricks",Count:14b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:crying_obsidian",Count:4b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:20b},sell:{id:"minecraft:ancient_debris",Count:1b}},{maxUses:2147483647,buy:{id:"minecraft:emerald",Count:18b},sell:{id:"minecraft:lodestone",Count:1b}},{maxUses:2147483647,buy:{id:"minecraft:emerald_block",Count:18b},sell:{id:"minecraft:netherite_block",Count:1b}},{maxUses:2147483647,buy:{id:"minecraft:emerald",Count:25b},sell:{id:"minecraft:respawn_anchor",Count:1b}},{maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:crimson_nylium",Count:10b}},{maxUses:2147483647,buy:{id:'minecraft:emerald',Count:2b},sell:{id:"minecraft:warped_nylium",Count:10b}},{maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:crimson_stem",Count:10b}},{maxUses:2147483647,buy:{id:'minecraft:emerald',Count:4b},sell:{id:"minecraft:warped_stem",Count:10b}},{maxUses:2147483647,buy:{id:'minecraft:emerald',Count:4b},sell:{id:"minecraft:weeping_vines",Count:20b}},{maxUses:2147483647,buy:{id:'minecraft:emerald',Count:4b},sell:{id:"minecraft:twisting_vines",Count:20b}},{maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:crimson_fungus",Count:3b}},{maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:warped_fungus",Count:3b}}]}}`
  );
});

MCFunction(`${dirName}quartz_seller`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Logan The Quartz Seller","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;643318650,955074879,-1437033434,1574784846],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNzNlOWI3ZjQ1MDc1YjMyZDM3YjQ1NWVkNzI3NzkzZWI0MjUyMDY1NGI4M2JiN2FlZGM2NmEyMDYzZTU4ZTdiIn19fQ=="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:214748364,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:smooth_quartz",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:quartz_block",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:nether_quartz_ore",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:quartz_slab",Count:64b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:chiseled_quartz_block",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:quartz_pillar",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:quartz_stairs",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:13b},sell:{id:"minecraft:emerald",Count:2b}},{maxUses:123456,buy:{id:"minecraft:iron_pickaxe",Count:1b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:diamond_pickaxe",Count:1b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}railman`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Micheal The Railman","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;607844112,-535084084,-1292121373,702659619],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvNjllOTVkNTc0ZWEzZTBmMDAxMjEyNzVhNjJhNGQ1MDVmMDI2ZTZjYzY5OTdmNzdiMmQ1MWZkOTlmMDMxOGRmZSJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:rail",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:activator_rail",Count:4b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:powered_rail",Count:4b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:minecart",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:stick",Count:16b},sell:{id:"minecraft:emerald",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:gold_ingot",Count:16b},sell:{id:"minecraft:emerald",Count:3b}},{maxUses:123456,buy:{id:"minecraft:bread",Count:12b},sell:{id:"minecraft:emerald",Count:3b}}]}}`
  );
});

MCFunction(`${dirName}redstoner`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Jumbo The Redstoner","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;795129491,1129334886,-1730239823,77328911],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvM2E0MTA2MWVkODU0MTUxZmRkYTEzZjY4M2RiZTI5OTdhMjczNWNhYTVhMmE1OWE1Njk5MzE0NjAyYTE0ZjkifX19"}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:redstone",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:repeater",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:comparator",Count:2b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:redstone_torch",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:piston",Count:8b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:sticky_piston",Count:8b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:hopper",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:18b},sell:{id:"minecraft:emerald",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_pickaxe",Count:1b},sell:{id:"minecraft:emerald",Count:3b}}]}}`
  );
  // advancement.grant("@a").only("minecraft:villagers/jumbo");
});

MCFunction(`${dirName}sea_diver`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Carl The Sea Diver","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-1385929575,-1009170801,-1595211924,1604243453],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZmQwNTE0ZTE5MTEzMDIyNTA1NjY3YzA0OTAyZWYxZmU2ZjI4M2QxZTI4NDQ0YWQ5ZWQzMWJjN2IwY2Q5N2E2NSJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:brain_coral",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:brain_coral_block",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:brain_coral_fan",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:bubble_coral",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:bubble_coral_block",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:1b},sell:{id:"minecraft:bubble_coral_fan",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:fire_coral",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:fire_coral_block",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:fire_coral_fan",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:horn_coral",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:horn_coral_block",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:horn_coral_fan",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:tube_coral",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:tube_coral_block",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:tube_coral_fan",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:sea_pickle",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:seagrass",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:25b},sell:{id:"minecraft:conduit",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:2b},sell:{id:"minecraft:kelp",Count:64b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:prismarine",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:prismarine_bricks",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:4b},sell:{id:"minecraft:dark_prismarine",Count:32b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:bread",Count:20b},sell:{id:"minecraft:emerald",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:cooked_rabbit",Count:5b},sell:{id:"minecraft:emerald",Count:5b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:cooked_mutton",Count:7b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});

MCFunction(`${dirName}tool_enchanter`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Lucy The Tool Enchanter","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-530641551,-1688450801,-1328716196,-653365045],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOWU4M2MyMDZkNjU5ZWU0NTg3YTRjYWNjNTVkYjY5ZDhiY2EzNTRmZTg3NTY5ZjI1NTZlNDEyYmYxYWJhOGNiMyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:123456,buy:{id:"minecraft:emerald",Count:8b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:efficiency",lvl:1}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:16b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:efficiency",lvl:2}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:24b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:efficiency",lvl:3}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:32b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:efficiency",lvl:4}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:42b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:efficiency",lvl:5}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:61b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:silk_touch",lvl:1}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:16b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:1}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:32b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:2}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:42b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:unbreaking",lvl:3}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:52b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:fortune",lvl:1}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald_block",Count:19b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:fortune",lvl:2}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:16b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:1}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:33b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:2}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:55b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:luck_of_the_sea",lvl:3}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:22b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:lure",lvl:1}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:33b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:lure",lvl:2}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald",Count:51b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:lure",lvl:3}]}}},{rewardExp:1b,maxUses:123456,buy:{id:"minecraft:emerald_block",Count:30b},sell:{id:"minecraft:enchanted_book",Count:1b,tag:{StoredEnchantments:[{id:"minecraft:mending",lvl:1}]}}},{maxUses:123456,buy:{id:"minecraft:bread",Count:16b},sell:{id:"minecraft:emerald",Count:4b}},{maxUses:123456,buy:{id:"minecraft:book",Count:32b},sell:{id:"minecraft:emerald",Count:10b}},{maxUses:123456,buy:{id:"minecraft:enchanting_table",Count:1b},sell:{id:"minecraft:emerald",Count:8b}}]}}`
  );
});

MCFunction(`${dirName}turtle_man`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Xisoma The Turtle Man","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;610214580,746343068,-2030395706,1280632058],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMGE0MDUwZTdhYWNjNDUzOTIwMjY1OGZkYzMzOWRkMTgyZDdlMzIyZjlmYmNjNGQ1Zjk5YjU3MThhIn19fQ=="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:turtle_spawn_egg",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:turtle_egg",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:5b},sell:{id:"minecraft:turtle_helmet",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:12b},sell:{id:"minecraft:scute",Count:1b}},{maxUses:123456,buy:{id:"minecraft:birch_log",Count:16b},sell:{id:"minecraft:emerald",Count:6b}},{maxUses:123456,buy:{id:"minecraft:iron_pickaxe",Count:1b},sell:{id:"minecraft:emerald",Count:2b}},{maxUses:123456,buy:{id:"minecraft:cooked_mutton",Count:16b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
  functionCmd("mo_villager:secrets/secret_1");
  // advancement.grant("@a").only("minecraft:villagers/turtle_man");
});

MCFunction(`${dirName}wither_killer`, () => {
  raw(
    `summon villager ~ ~ ~ {Tags:["custom_villager", "scanned"],CanPickUpLoot:0b,CustomName:'{"text":"Susan The Wither Buster","color":"dark_grey","bold":"false"}',ArmorItems:[{},{},{},{id:"minecraft:player_head",Count:1b,tag:{SkullOwner:{Id:[I;-739176954,503531050,-1815217748,-432798530],Properties:{textures:[{Value:"eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYWM2Nzk4NjcyMjFiYzJjOGM4ZWIyYTZjMmE2ZTk2ODA0NjcxM2U4YmM5MGNkYmU0MzUwY2FlZjAxNjUwMWRmYyJ9fX0="}]}}}}],VillagerData:{level:99,profession:"minecraft:nitwit",type:"minecraft:plains"},Offers:{Recipes:[{rewardExp:1b,Uses:5,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:64b},sell:{id:"minecraft:nether_star",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:10b},sell:{id:"minecraft:wither_skeleton_skull",Count:1b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:emerald",Count:3b},sell:{id:"minecraft:soul_sand",Count:16b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_helmet",Count:1b},sell:{id:"minecraft:emerald",Count:4b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_chestplate",Count:1b},sell:{id:"minecraft:emerald",Count:6b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_leggings",Count:1b},sell:{id:"minecraft:emerald",Count:3b}},{rewardExp:1b,maxUses:2147483647,buy:{id:"minecraft:iron_boots",Count:1b},sell:{id:"minecraft:emerald",Count:2b}},{maxUses:123456,buy:{id:"minecraft:bread",Count:18b},sell:{id:"minecraft:emerald",Count:4b}},{maxUses:123456,buy:{id:"minecraft:cooked_chicken",Count:16b},sell:{id:"minecraft:emerald",Count:5b}}]}}`
  );
});
