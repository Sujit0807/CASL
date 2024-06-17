import { defineAbility } from "@casl/ability";

function defineAbilityForUser(userRole) {
  return defineAbility((can) => {
    switch (userRole) {
      case "VIEWER":
        can("view", "home");
        can("view", "inventory");
        can("view", "profiles");
        break;
      case "ADMIN":
        can("view", "home");
        can("view", "inventory");
        can("view", "invoice");
        can("view", "profiles");
        can("view", "pricing");
        can("view", "report");
        break;
      default:
        can("view", "home");
    }
  });
}

export { defineAbilityForUser };
