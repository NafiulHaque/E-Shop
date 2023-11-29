
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
// import './styles/styles'
import { LoginPage, SignupPage } from './Routes';

function App() {
  return (
  <BrowserRouter>
  <Routes>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/sign-up' element={<SignupPage/>}/>
  </Routes>
  </BrowserRouter>
  );
}

export default App;
