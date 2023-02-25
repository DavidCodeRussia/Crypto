import { TOwnProps } from '../../types';
import WrapperForMain from '../../../common/WrapperForMain';
import { ComponentInBuildMode } from '../../../common/ComponentInBuildMode';

import s from './Dialogs.module.scss';

const Dialogs: React.FC<TOwnProps> = () => {
  return (
    <WrapperForMain>
      <div className={s.dialogs}>
        <ComponentInBuildMode padding />
      </div>
    </WrapperForMain>
  );
};

export default Dialogs;
