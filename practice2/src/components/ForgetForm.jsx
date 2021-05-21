import React,{useState} from "react";
import ModalPass from "./ModalPass";

const ForgetForm = () => {
  
  const [emailUser, setEmailUser] = useState("");
  const [showMsg, setShowMsg] = useState("");
// const onClose =()=>{
//   setShowMsg(false)
// }
    const msgPass = (e) => {
      e.preventDefault();
// console.log(111);
if (!emailUser) {
alert('لطفا ایمیل را وارد کنید')
return
  // setShowMsg(true);
}
setShowMsg(true);
  // setShowMsg(true);
  };
  return (
    <div className="modal" >
      <div className="modal-header-form" >
        <div className="modal-body-form" >
          <form  >
            <div >
              <h4 className="forget-title">فرم فراموشی رمز </h4>
              <input
                type="email"
                className="login-input"
                value={emailUser}
                onChange={(e)=>setEmailUser(e.target.value)}
                placeholder="پست الکترونیک"
              />
              <button type="submit" onClick={msgPass}  className="login-btn btn">
                ثبت
              </button>
              {showMsg && <ModalPass/>}

              {/* {showMsg && <button className="test">hello</button>} */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default ForgetForm;
// <div className="modal-form">

// <div className="modal-body">
//      <form >
//  <div className="login-box box-container">
//      <h3>فرم فراموشی رمز </h3>
//     {/* <div className="input-group">  */}

//     <input type="email" name="email" className="login-input" placeholder="پست الکترونیک"/>
//     <button type="submit" className="login-btn btn">ورود</button>
//  </div>
//  </form>

// </div>

// </div>

// <form >
// <div className="login-box box-container">
//     <h3>فرم فراموشی رمز </h3>
//     {/* <div className="input-group">  */}

//     <input type="email" name="email" className="login-input" placeholder="پست الکترونیک"/>
//   </div>
// </form>
// value={emailUser}
// onChange={(e) => {
//   setEmailUser(e.target.value);
// }}
