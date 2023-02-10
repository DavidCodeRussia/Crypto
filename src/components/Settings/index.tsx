import { withAuthNavigate } from "../../hoc/withAuthRedirect";
import { ComponentInBuildMode } from "../common/ComponentInBuildMode";
import WrapperForMain from "../common/WrapperForMain";
import s from "./Settings.module.scss";

const SettingsContainer = () => {
  return (
    <WrapperForMain>
      <div className={s.settings}>
        <ComponentInBuildMode padding />
      </div>
    </WrapperForMain>
  );
};

export default withAuthNavigate(SettingsContainer);
