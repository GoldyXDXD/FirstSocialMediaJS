import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Weather from "./components/Weather/Weather";
import DialoguesContainer from "./components/Dialogues/DialoguesContainer";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/profile' element={<Profile store={props.store} />}/>
                        <Route path='/dialogues/*' element={<DialoguesContainer store={props.store}/>}/>
                        <Route path="/weather" element={<Weather/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}


export default App;
