// Logout.js

import React from "react";

const Logout = () => {
  window.localStorage.removeItem("user");
  window.location.href = "/login";

  return (
    <div>
      Logging out...
      {/* You may include a loading spinner or a message here */}
    </div>
  );
};

export default Logout;
