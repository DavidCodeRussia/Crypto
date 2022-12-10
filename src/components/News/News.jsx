import { withAuthNavigate } from "../../hoc/withAuthRedirect";

import WrapperForMain from "@components/common/WrapperForMain";

import s from "./News.module.scss";

const NewsContainer = (props) => {
  return (
    <WrapperForMain>
      <div className={s.NewsFeed}>News</div>
    </WrapperForMain>
  );
};

export default withAuthNavigate(NewsContainer);
