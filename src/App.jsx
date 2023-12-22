import { Route, Routes } from 'react-router-dom';
import SignIn from './pages/LoginPage/SignIn';
import SignUp from './pages/RegisterPage/SignUp';
import Mypage from './pages/MyPage/Mypage';
import MainPage from './pages/MainPage/MainPage';
import Directory from './components/directory/Directory';
import Editor from './components/editor/CodeEditor';
import SideBar from './components/file-sidebar/FileSidebar';
import DirectoryItem from './components/directory/directory-items/Items';
import Header from './components/header/Header';

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<SignIn/>}/>
                <Route path="/main" element={<MainPage/>}/>
                <Route path="/register" element={<SignUp/>}/>
                <Route path="/mypage" element={<Mypage/>}/>
                <Route path="/directory" element={<Directory/>}/>
                <Route path="/codeEditor" element={<Editor/>}/>
                <Route path="/sideBar" element={<SideBar/>}/>
                <Route path="/items" element={<DirectoryItem/>}/>
                <Route path="/header" element={<Header/>}/>
            </Routes>

        </>
    );
}

export default App;