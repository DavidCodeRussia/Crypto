import { withAuthNavigate } from "../../hoc/withAuthRedirect.ts";
import { ComponentInBuildMode } from "../common/ComponentInBuildMode";
import WrapperForMain from "@components/common/WrapperForMain";

import s from "./News.module.scss";

const NewsContainer = (props) => {
  return (
    <WrapperForMain>
      <div className={s.news}>
        <ComponentInBuildMode padding />
      </div>
    </WrapperForMain>
  );
};

export default withAuthNavigate(NewsContainer);
