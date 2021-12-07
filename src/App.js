import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from './components/Footer/Footer';
import {Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import Friends from "./components/Navbar/Fiends/Friends";

const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <div className="app-wrapper-content">
                <Nav/>
                <div className="forBackColor">
                    <Routes>
                        <Route path="/Profile" element={<Profile
                            store={props.store}
                        />}/>
                        <Route path="/Dialogs/*" element={<Dialogs
                            dialogsPage={props.state.dialogsPage}
                            dispatch = {props.dispatch}
                            store={props.store}
                        />}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Music' element={<Music/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                        <Route path='/Friends' element={<Friends state={props.state.dialogsPage}/>}/>
                    </Routes>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default App;
