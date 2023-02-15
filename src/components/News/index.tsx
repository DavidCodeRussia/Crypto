import { withAuthNavigate } from "../../hoc/withAuthRedirect";
import { ComponentInBuildMode } from "../common/ComponentInBuildMode";
import WrapperForMain from "../common/WrapperForMain";

import s from "./News.module.scss";

const NewsContainer = () => {
  return (
    <WrapperForMain>
      <div className={s.news}>
        <ComponentInBuildMode padding />
      </div>
    </WrapperForMain>
  );
};

export default withAuthNavigate(NewsContainer);
