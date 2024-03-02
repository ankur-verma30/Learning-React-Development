import React, { useContext } from "react";
import { userContext } from "../App";
import { UserChannel } from "../App";

function ContextF() {
  const user = useContext(userContext);
  const channel = useContext(UserChannel);

  return (
    <div>
      {user}-{channel}
    </div>
  );
}
export default ContextF;
