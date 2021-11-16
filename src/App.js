import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import Footer from './components/Footer/Footer';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import News from "./components/Navbar/News/News";
import Music from "./components/Navbar/Music/Music";
import Settings from "./components/Navbar/Settings/Settings";
import s from "./components/Dialogs/Dialogs.module.css";

const App = () => {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper-content">
                    <Nav />
                    <Routes>
                        <Route path="/Profile" render={ () => <Profile />} />
                        <Route path="/Dialogs/*" render={ () => <Dialogs /> } />
                        <Route path='/News' element={<News />} />
                        <Route path='/Music' element={<Music />} />
                        <Route path='/Settings' element={<Settings />} />
                    </Routes>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
)
}

export default App;
