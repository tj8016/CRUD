import { Route, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './pages/HomePage';
import { EditUserPage } from './pages/EditUserPage';
import { NavBar } from './components/NavBar';

function App() {
  return (
    <div className='bg-[#111827] min-h-screen h-full'>
      <NavBar/>
      <Routes>
        <Route path='/' element = {<HomePage/>}/>
        <Route path='/edituser/:id' element = {<EditUserPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
