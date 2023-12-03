import './App.css';
import Login from './Assessment-Components/Login';
import LoginPage from './Assessment-Components/Login-Page';
import Onboarding from './Assessment-Components/Onboarding';
import RegistrationPage from './Assessment-Components/Registration-Page';
import AllowPage from './Assessment-Components/Allow-Page';
import { BrowserRouter as Router, Routes,  Route} from 'react-router-dom';


function App() {
  return (
<Router>
  <div>
    <Routes>
      <Route path='/' element={<Onboarding />} />
      <Route path="login" element={<Login />} /> 
      <Route path='userlogin' element={<LoginPage />} />
      <Route path='register' element={<RegistrationPage />} />
      <Route path='authenication' element={<AllowPage />} />
    </Routes>
  </div>
</Router>
);
}

export default App;
