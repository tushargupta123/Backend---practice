import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Protected from './Protected';
import Login from './features/user/components/Login';
import Home from './Home';
import Signup from './features/user/components/Signup';
import ForgotPassword from './features/user/components/ForgotPassword';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/" element={<Protected><Home/></Protected>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
