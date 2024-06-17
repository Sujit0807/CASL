import { useState } from "react";
import Navbar from "./Navbar";
import { AbilityContext } from "./ability-context";
import { defineAbilityForUser } from "./abilities";

const USER_ROLE = "VIEWER"; // "VIEWER" OR "ADMIN"

function App() {
  const [userRole, setUserRole] = useState(USER_ROLE);

  const ability = defineAbilityForUser(userRole);

  return (
    <AbilityContext.Provider value={ability}>
      <Navbar />

      <h1 className="text-3xl text-center my-5">User Role Is: {userRole} </h1>

      <div className="flex justify-center">
        <select
          className="border-2 border-blue-500 py-2 px-5 rounded-sm"
          onChange={(event) => setUserRole(event.target.value)}
        >
          <option value="VIEWER">Viewer</option>
          <option value="ADMIN">Admin</option>
        </select>
      </div>
    </AbilityContext.Provider>
  );
}

export default App;
