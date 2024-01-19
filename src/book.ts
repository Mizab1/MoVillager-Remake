import { give, MCFunction } from "sandstone";

MCFunction("give_book", () => {
  give(
    "@s",
    `minecraft:written_book{
    title: "Instructions",
    author: "Mizab",
    pages: [
      '[
        {
          "text": "Hello there,I hope you had successfully install this datapack",
          "color": "dark_blue"
        }, {
          "text": "\\\\n\\\\nInstructions",
          "color": "dark_green",
          "underlined": true
        }, {
          "text": "\\\\n\\\\n1. When you open your world make sure to type /reload",
          "color": "black",
          "bold": false
        }, {
          "text": "\\\\n\\\\n2. click the links in this book\\\\n(which is on next page)",
          "color": "black",
          "bold": false
        }
      ]', '[
        {
          "text": "---Kill Switch---\\\\n",
          "color": "dark_red",
          "bold": true,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:kill_the_closest_villager"
          }
        }, {
          "text": "Use this switch to kill the villager in a 2 block radius, using this commands you will not get bad deals from other villagers. This switch is here to kill the old Mo Villager and spawn the new on in",
          "color": "dark_blue",
          "bold": false
        }
      ]', '[
        {
          "text": "Commands:\\\\n",
          "color": "dark_blue",
          "underlined": false
        }, {
          "text": "1.Armour Enchanter",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/armor_enchanter"
          }
        }, {
          "text": "\\\\n2.Breeder",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/breeder"
          }
        }, {
          "text": "\\\\n3.Brewer",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/brewer"
          }
        }, {
          "text": "\\\\n4.Combat Enchanter",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/combat_enchanter"
          }
        }, {
          "text": "\\\\n5.Concrete Seller",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/concrete_seller"
          }
        }, {
          "text": "\\\\n6.Desert Explorer",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/desert_explorer"
          }
        }, {
          "text": "\\\\n7.Disc Seller",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/disc_seller"
          }
        }, {
          "text": "\\\\n8.Dye Seller",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/dye_seller"
          }
        }, {
          "text": "\\\\n9.Emerald Exchanger",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/emerald_exchanger"
          }
        }, {
          "text": "\\\\n10.Enchanter 1",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/enchanter_1"
          }
        }, {
          "text": "\\\\n11.Enchanter 2",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/enchanter_2"
          }
        }, {
          "text": "\\\\n12.Enchanter 3",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/enchanter_3"
          }
        }, {
          "text": "\\\\n13.End Explorer",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/end_explorer"
          }
        }
      ]', '[
        {
          "text": "14.Firework",
          "color": "black",
          "bold": false,
          "italic": true,
          "underlined": false,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/firework"
          }
        }, {
          "text": "\\\\n15.Flourist",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/florist"
          }
        }, {
          "text": "\\\\n16.Terracotta Seller",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/glazed_terracotta_seller"
          }
        }, {
          "text": "\\\\n17.Griefer",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/griefer"
          }
        }, {
          "text": "\\\\n18.Head Seller",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/head_seller"
          }
        }, {
          "text": "\\\\n19.Horse Rider",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/horse_rider"
          }
        }, {
          "text": "\\\\n20.Hunter",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/hunter"
          }
        }, {
          "text": "\\\\n21.Ice Maker",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/ice_maker"
          }
        }, {
          "text": "\\\\n22.Lumberjack",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/lumberjack"
          }
        }, {
          "text": "\\\\n23.Merchant",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/merchant"
          }
        }, {
          "text": "\\\\n24.Miner",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/miner"
          }
        }, {
          "text": "\\\\n25.Mizab",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/mizab"
          }
        }, {
          "text": "\\\\n26.Quartz Seller",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/quartz_seller"
          }
        }
      ]', '[
        {
          "text": "27.Redstoner",
          "italic": true,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/redstoner"
          }
        }, {
          "text": "\\\\n28.Fisherman",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/fisherman"
          }
        }, {
          "text": "\\\\n29.Mushroom Seller",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/mushroom"
          }
        }, {
          "text": "\\\\n30.Sea Diver",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/sea_diver"
          }
        }, {
          "text": "\\\\n31.Tool Enchanter",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/tool_enchanter"
          }
        }, {
          "text": "\\\\n32.Turtle Man",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/turtle_man"
          }
        }, {
          "text": "\\\\n33.Wither Killer",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/wither_killer"
          }
        }, {
          "text": "\\\\n34.Spawn Egg Seller",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/egg"
          }
        }, {
          "text": "\\\\n35.Mob Hunter",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/mob_hunter"
          }
        }, {
          "text": "\\\\n36.Fruiterer\\\\n",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/fruiterer"
          }
        }, {
          "text": "37.Beekeeper\\\\n",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/beekeeper"
          }
        }, {
          "text": "38.Cynophilist\\\\n",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/cynophilist"
          }
        }, {
          "text": "39.Engineer\\\\n",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/engineer"
          }
        }
      ]', '[
        {
          "text": "41.Railman\\\\n",
          "italic": true,
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/railman"
          }
        }, {
          "text": "42. Nether Explorer",
          "clickEvent": {
            "action": "run_command",
            "value": "/function mo_villager:villagers/nether_explorer"
          }
        }
      ]'
    ]
  }`.replace(/\n/g, " "),
    1
  );
});
