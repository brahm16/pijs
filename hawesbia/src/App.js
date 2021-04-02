import logo from './logo.svg';
import './App.css';
import Landing from './frontend/Landing';
import { getCookie, signout } from './helpers/auth';


function App() {
  const tt=getCookie("role");
  console.log(tt);
  return (
    <>
       <Landing />
    </>
  );
}

export default App;
