export const userGroupPermissions = {
  VIEWER: {
    allowedNavigationTabs: {
      view: ["home", "inventory", "profiles"],
      // create : [],
      // update : [],
      // delete : [],
    },
  },
  ADMIN: {
    allowedNavigationTabs: {
      view: ["home", "inventory", "invoice", "profiles", "report", "pricing"],
      // create : [],
      // update : [],
      // delete : [],
    },
  },
};
