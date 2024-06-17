import { defineAbility } from "@casl/ability";
import { userGroupPermissions } from "./permission";

function defineAbilityForUser(userRole) {
  return defineAbility((can) => {
    switch (userRole) {
      case "VIEWER":
        Object.entries(userGroupPermissions.VIEWER).forEach(
          ([allowedResources, accessObj]) => {
            Object.entries(accessObj).forEach(([access, resources]) => {
              resources.forEach((resource) => {
                can(access, resource);
              });
            });
          }
        );
        break;
      case "ADMIN":
        Object.entries(userGroupPermissions.ADMIN).forEach(
          ([allowedResources, accessObj]) => {
            Object.entries(accessObj).forEach(([access, resources]) => {
              resources.forEach((resource) => {
                can(access, resource);
              });
            });
          }
        );
        break;
      default:
        can("view", "home");
    }
  });
}

export { defineAbilityForUser };
