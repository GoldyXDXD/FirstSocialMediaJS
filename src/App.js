import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogues from "./components/Dialogues/Dialogues";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {addPost, updateNewPostText} from "./redux/state";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={addPost} updateNewPostText={updateNewPostText}/>}/>
                        <Route path='/dialogues/*' element={<Dialogues state={props.state.dialoguePage}/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
