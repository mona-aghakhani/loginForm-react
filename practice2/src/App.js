// import logo from './logo.svg';
// import './App.css';
import React,{useState} from 'react'
import LoginBox from './components/LoginBox'
import RegisterBox from './components/RegisterBox'

function App() {
const infoUser=[{id:1,email: "mona@gmail.com" ,password: "mona1366124"} ,{id:2,email: "monaaghakhani@gmail.com" ,password: "monamona"},{id:3,email: "mona2021@gmail.com" ,password: "monaghakhani"}]
const [passwordShown, setPasswordShown] = useState(false);
const togglePasswordVisiblity = () => {
setPasswordShown(passwordShown ? false : true);
};
const [isLoginOpen, setisLoginOpen] = useState(true)
const [isRegisterOpen, setisRegisterOpen] = useState(false)
const showLoginBox = ()=>{
  setisLoginOpen(true)
  setisRegisterOpen(false)

}  
const showRegisterBox = ()=>{
  setisLoginOpen(false)
  setisRegisterOpen(true)
}

return (
  <div className="app-outer">
    <div className="app-container">
      <div className="app-inner">
    <div className="box-controller">
       <div className={"controller " + (isLoginOpen ? "selected-controller" : "") } onClick={showLoginBox}>
         ورود
       </div>
    <div className={"controller " + (isRegisterOpen ? "selected-controller" : "")} onClick={showRegisterBox}>
      ثبت نام
       </div>
    </div>
    <div className="box">
      {isLoginOpen && <LoginBox infoUser={infoUser} passwordShown={passwordShown} toggleClick={togglePasswordVisiblity}/>}
      {isRegisterOpen && <RegisterBox passwordShown={passwordShown} toggleClick={togglePasswordVisiblity} />}
      </div> 
      </div>
    </div>
    </div>
  );
}

export default App;
