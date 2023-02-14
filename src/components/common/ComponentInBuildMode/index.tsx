import cn from "classnames";
import loader from "../../../assets/images/gear.png";
import s from "./ComponentInBuildMode.module.scss";

export const ComponentInBuildMode = ({ padding = false }) => {
  return (
    <div
      className={cn(s.component, {
        [s.padding]: padding,
      })}
    >
      <div>Component is being developed</div>
      <img className={s.gear} src={loader} alt="gear" width={75} height={75} />
    </div>
  );
};
