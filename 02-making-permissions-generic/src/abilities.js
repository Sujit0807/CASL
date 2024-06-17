import { defineAbility } from "@casl/ability";
import { permissions } from "./permission";

function defineAbilityForUser(userRole) {
  return defineAbility((can) => {
    switch (userRole) {
      case "VIEWER":
        Object.keys(permissions.VIEWER).forEach((access) => {
          permissions.VIEWER[access].forEach((resource) => {
            can(access, resource);
          });
        });
        break;
      case "ADMIN":
        Object.keys(permissions.ADMIN).forEach((access) => {
          permissions.ADMIN[access].forEach((resource) => {
            can(access, resource);
          });
        });
        break;
      default:
        can("view", "home");
    }
  });
}

export { defineAbilityForUser };
