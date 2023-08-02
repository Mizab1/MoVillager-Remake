import type { SandstoneConfig } from "sandstone";

export default {
  name: "MoVillager",
  description: ["A Datapack Created by ", { text: "Mizab", color: "gold" }],
  formatVersion: 15,
  namespace: "mo_villager",
  packUid: "t6Y4K480",
  saveOptions: { world: "Testing 3" },
  onConflict: {
    default: "warn",
  },
} as SandstoneConfig;
