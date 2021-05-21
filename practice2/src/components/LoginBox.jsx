import React ,{useState} from 'react'
import { FaEye } from 'react-icons/fa';
import {FaEyeSlash } from 'react-icons/fa';
import ModalLogin from "./ModalLogin";
import ForgetForm from "./ForgetForm";

 const LoginBox = ({passwordShown,toggleClick,infoUser,...props}) => {
    // const [passwordShown, setPasswordShown] = useState(false);
    // const togglePasswordVisiblity = () => {
    //     setPasswordShown(passwordShown ? false : true);
    //   };
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [findUser, setFindUser] = useState(false)
    const [showModalUser, setShowModalUser] = useState(false)
    const [showErrUser, setShowErrUser] = useState(false)
    const [showForgetForm, setShowForgetForm] = useState(false)
const forgetForm = () =>{
    setShowForgetForm(true)
}
    const submitLogin = (e)=>{
        e.preventDefault();
        console.log(infoUser.filter((user)=>(user.email ===email && user.password === password)));
        let dataUser=infoUser.filter((user)=>(user.email ===email && user.password === password))
        setFindUser(dataUser)
        if (dataUser.length === 0) {
            // alert("لطفا اطلاعات را به درستی وارد کنید")
            setShowErrUser(true)
        }else{
            setShowModalUser(true)
        }
        // let result=""
//         infoUser.map((user) =>{
            
// if (user.email === email && user.password === password) {
//     // result = "ok"
//    setShow(true)
//    return 
}
// if (setShow) {
//     return 
// }else{
//     alert("لطفا اطلاعات را به درستی وارد کنید")
// }

        // }
        // )

// if (result) {
//     
// }
    // }

    return (
        <form onSubmit={submitLogin}>
        <div className="login-box box-container">
            <h3>خوش آمدید</h3>
            {/* <div className="input-group">  */}
           
            <input type="email" name="email" className="login-input" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="*پست الکترونیک"/>
            <div className="pass-wrapper">
            <input type={passwordShown ? "text" : "password"} name="password" className="login-input password"  value={password} onChange={(e) => {setPassword(e.target.value)}} placeholder="*کلمه عبور"/>
            <FaEye onClick={toggleClick} className={`open-eye icon ${!passwordShown && "notVisible"}`}   />
            <FaEyeSlash onClick={toggleClick} className={`close-eye icon ${passwordShown && "notVisible"}`} />
            </div>
            {showErrUser && <p style={{color:"red"}}> لطفا اطلاعات را به درستی وارد کنید </p>}
            <p className="forget" onClick={forgetForm}> فراموش کردید؟</p>
           <button type="submit" className="login-btn btn">ورود</button>
            {/* </div> */}
        </div>
        {showModalUser && <ModalLogin dataUser={findUser}  />}
        {showForgetForm && <ForgetForm show={showForgetForm}  />}
        </form>
    )
}
export default LoginBox;