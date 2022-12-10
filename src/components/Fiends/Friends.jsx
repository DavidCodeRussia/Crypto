import React from "react";

import { withAuthNavigate } from "../../hoc/withAuthRedirect";

import WrapperForMain from "@components/common/WrapperForMain";

const FriendsContainer = (props) => {
  return (
    <WrapperForMain>
      <div>Oops. You have no friends. Sorry</div>
    </WrapperForMain>
  );
};
export default withAuthNavigate(FriendsContainer);
