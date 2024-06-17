import { defineAbility } from "@casl/ability";
import { userGroupPermissions } from "./permission";

function defineAbilityForUser(userRole) {
  return defineAbility((can) => {
    switch (userRole) {
      case "VIEWER":
        Object.keys(userGroupPermissions.VIEWER).forEach((allowedResources) => {
          Object.keys(userGroupPermissions.VIEWER[allowedResources]).forEach(
            (access) => {
              userGroupPermissions.VIEWER[allowedResources][access].forEach(
                (resource) => {
                  can(access, resource);
                }
              );
            }
          );
        });
        break;
      case "ADMIN":
        Object.keys(userGroupPermissions.ADMIN).forEach((allowedResources) => {
          Object.keys(userGroupPermissions.ADMIN[allowedResources]).forEach(
            (access) => {
              userGroupPermissions.ADMIN[allowedResources][access].forEach(
                (resource) => {
                  can(access, resource);
                }
              );
            }
          );
        });
        break;
      default:
        can("view", "home");
    }
  });
}

export { defineAbilityForUser };
