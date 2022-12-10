import { withAuthNavigate } from "../../hoc/withAuthRedirect";
import WrapperForMain from "@components/common/WrapperForMain";
import s from "./Settings.module.scss";

const SettingsContainer = (props) => {
  return (
    <WrapperForMain>
      <div className={s.SettingsFeed}>Settings</div>
    </WrapperForMain>
  );
};

export default withAuthNavigate(SettingsContainer);
