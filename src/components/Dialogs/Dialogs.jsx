import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            <div className={s.container}>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/1">Misha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">Katya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Vanya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Magomed</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Natali</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/6">Eduard</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/7">Sergey</NavLink>
                </div>
            </div>

            <div className={s.filesWithMessage}>
                <div>Hello</div>
                <div>Hello</div>
                <div>How are you</div>
                <div>Bad</div>
            </div>
        </div>
    )
}

export default Dialogs;