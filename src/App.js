import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Footer from './components/Footer/Footer';
import {Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Settings from "./components/Navbar/Settings/Settings";
import Friends from "./components/Navbar/Fiends/Friends";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <div className="app-wrapper-content">
                <Nav />
                <div className="forBackColor">
                    <Routes>
                        <Route path="/Profile" element={<Profile />}/>
                        <Route path="/Dialogs/*" element={<DialogsContainer />}/>
                        <Route path='/Friends' element={<Friends />}/>
                        <Route path='/News' element={<News/>}/>
                        <Route path='/Settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default App;
