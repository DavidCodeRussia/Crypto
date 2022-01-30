import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import Nav from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import {Route, Routes} from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from "./components/Profile/ProfileContainer";
import Login from "./components/Login/Login";
import FriendsContainer from "./components/Fiends/FriendsContainer";
import NewsContainer from "./components/News/NewsContainer";
import SettingsContainer from "./components/Settings/SettingsContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer />
            <div className="app-wrapper-content">
                <Nav />
                <div className="forBackColor">
                    <Routes>
                        <Route path="/Profile/*" element={<ProfileContainer />} />
                        <Route path="/Dialogs/*" element={<DialogsContainer />}/>
                        <Route path='/Friends/*' element={<FriendsContainer />}/>
                        <Route path='/Users/*' element={<UsersContainer />}/>
                        <Route path='/News/*' element={<NewsContainer />}/>
                        <Route path='/Settings/*' element={<SettingsContainer />} />
                        <Route path='/Login/*' element={<Login />} />
                    </Routes>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default App;
