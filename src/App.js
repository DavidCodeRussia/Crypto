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

const App = (props) => {
debugger
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <div className="app-wrapper-content">
                    <Nav />
                    <div className="forBackColor">
                    <Routes>
                        <Route path="/Profile" element={<Profile posts={props.state.profilePage.posts} descrription={props.state.profilePage.descrription} />} />
                        <Route path="/Dialogs/*" element={<Dialogs dialogsData={props.state.messagesPage.dialogsData} messages={props.state.messagesPage.messages} />} />
                        <Route path='/News' element={<News />} />
                        <Route path='/Music' element={<Music />} />
                        <Route path='/Settings' element={<Settings />} />
                    </Routes>
                    </div>
                </div>

                <Footer/>
            </div>
        </BrowserRouter>
)
}

export default App;
