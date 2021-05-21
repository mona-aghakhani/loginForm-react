import React,{useState} from 'react'
import { FaEye } from 'react-icons/fa';
import {FaEyeSlash } from 'react-icons/fa';
import Dropdown from "./Dropdown"
import ModalRegister from "./ModalRegister"
// import { useForm } from "react-hook-form";
 const RegisterBox = ({passwordShown,toggleClick,...props}) => {
     /* useform
    // const { register, handleSubmit } = useForm();
    // const onSubmit = data => {
    //   console.log(data);
    // };
    // ref={register({ required: "This is required." })}
*/
    // const [passShown, setPassShown] = useState(false);
    // const togglePassVisiblity = () => {
    //     setPassShown(passShown ? false : true);
    //   }; 
    // const [change, setChange] = useState("")
    // const [changeLoc, setChangeLoc] = useState("")
    // const [errors, setErrors] = useState([""])
//     const showFeildLocation = (e) => {
//         console.log(e.target.value);
//   if (e.target.value !== "") {
//     return <input type="text"  className="register-input" placeholder="محل تحصیل"/>;
//   }
// };
    // console.log(passwordShown);
    // const showValidationErr = (elm,msg) {

    // }
    // const  clearValidationErr = () {

    // }
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [education, setEducation] = useState("")
    const [educationPlace, setEducationPlace] = useState("")
    // const [educationPlaceName, setEducationPlaceName] = useState("")
    const [firstNameErr, setFirstNameErr] = useState("")
    const [lastNameErr, setLastNameErr] = useState("")
    const [emailErr, setEmailErr] = useState("")
    const [educationPlaceErr, setEducationPlaceErr] = useState("")
    // const [educationPlaceNameErr, setEducationPlaceNameErr] = useState("")
    const [passwordErr, setPasswordErr] = useState("")
    const [info, setInfo] = useState("")
    const [show, setShow] = useState(false)
    const submitRegister = (e) =>{
        e.preventDefault();
        // let isValid = true;
        const regex = RegExp(
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          );
          const regexPass=RegExp(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/)
// let emailPattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        
        if(firstName === ""  ){
            setFirstNameErr("لطفا نام خود را وارد کنید")
            // return false
            // return <div style={{color:"red"}}> لطفا نام خود را وارد کنید</div>
            // isValid =false
        }
        if(lastName === "" ){
            setLastNameErr("لطفا نام خانوادگی خود را وارد کنید")
            // return <div style={{color:"red"}}> لطفا نام خانوادگی خود را وارد کنید</div>
            //  isValid =false
            // return false
         }
         if (!regex.test(email)) {
            setEmailErr("فرمت ایمیل را به درستی وارد کنید")
            // return false
         }
         if (educationPlace ==="" && education !== "") {
            setEducationPlaceErr("محل تحصیل خود را وارد کنید")
            // return false
        }
        // if (educationPlaceName ==="" && educationPlace !=="" && education !== ""  ) {
        //     setEducationPlaceNameErr("نام محل تحصیل خود را وارد کنید")
        //     // return false
        // }
         if (!regexPass.test(password)) {
            setPasswordErr("پسورد باید حداقل 8 رقم و شامل حروف کوچک و بزرگ و عدد باشد")
            // return false
         }
         else{
            setFirstNameErr("")
            setLastNameErr("")
            setEmailErr("")
            setEducationPlaceErr("")
            // setEducationPlaceNameErr("")
            setPasswordErr("")
            setShow(true)
            // show
         }
        //  setFirstName("")
        //  setLastName("")
        //  setEmail("")
        //  setEducationPlace("")
        //  setEducationPlaceName("")
        //  setPassword("")
        let info={firstName:firstName , lastName:lastName,email:email,education:education, educationPlace:educationPlace}
        setInfo(info)
        //  return isValid

        console.log(1111);
        // const isValid = formValdation()
    }
//     const formValdation = ()=>{
//         console.log(222);
// // const firstNameErr ={}
// // const lastNameErr ={}
// let isValid = true;
// if(firstName === ""  ){
//     firstNameErr = "لطفا نام خود را وارد کنید"
//     isValid =false
// }
// if(lastName === "" ){
//    lastNameErr = "لطفا نام خانوادگی خود را وارد کنید"
//     isValid =false
// }
// setFirstNameErr(firstNameErr)
// setLastNameErr(lastNameErr)
// return isValid;
//     }
// onClick={submitRegister}
    //  const submitRegister = (e)=>{

    //  }
    return (
        <form onSubmit={submitRegister} >
        <div className="register-box box-container">
            <h3>رایگان ثبت نام کنید</h3>
            {/* <div className="input-group">  */}
           <div className="group-name">
               <div className="inner-input">
               <input className="top-input" type="text" name ="name" value={firstName} onChange={(e) => {setFirstName(e.target.value) }} placeholder="*نام"/>
  
               {<div className="err" > {firstNameErr ? firstNameErr : "" }</div>}
               </div>
               <div className="inner-input">
               <input className="top-input" type="text" name ="last-name" value={lastName} onChange={(e) => {setLastName(e.target.value)}} placeholder="* نام خانوادگی"/>
               
               {<div className="err" > {lastNameErr ? lastNameErr : "" }</div>}
               </div>
           </div>
            <input name="email" className="register-input" value={email} onChange={(e) => {setEmail(e.target.value)}} placeholder="*پست الکترونیک"/>
            {<div className="err" style={{color:"red"}}> {emailErr ? emailErr : "" }</div>}
            {/* <input type="text" name="education" className="register-input" placeholder="تحصیلات" value={education} onChange={(e) => setEducation(e.target.value)}/> */}
           <select className="register-input" name="" id="" defaultValue={education} onChange={(e) => setEducation(e.target.value)}>

               <option >تحصیلات</option>
               <option >کاردانی</option>
               <option >کارشناسی</option>
               <option >کارشناسی ارشد</option>
               <option >دکترا</option>
           </select>
           {/* {showFeildLocation} */}
            {/* <input type="text"  className="register-input" placeholder="محل تحصیل"/> */}
{
   education !== "" ? (<input type="text"  className="register-input" value={educationPlace} onChange={(e) => setEducationPlace(e.target.value)} placeholder="*محل تحصیل"/>) : (<div></div>)
}
{<div className="err" style={{color:"red"}}> {educationPlaceErr ? educationPlaceErr : "" }</div>}
{/* {
   educationPlace !== "" ? (<input type="text"  className="register-input"  value={educationPlaceName} onChange={(e) => setEducationPlaceName(e.target.value)} placeholder="*نام محل تحصیل"/>) : (<div></div>)
}
{<div className="err" style={{color:"red"}}> {educationPlaceNameErr ? educationPlaceNameErr : "" }</div>} */}
            <Dropdown />
            <div className="pass-wrapper">
            <input type={passwordShown ? "text" : "password"} value={password} onChange={(e) => {setPassword(e.target.value)}} name="password" className="register-input" placeholder="*کلمه عبور"/>
            <FaEye onClick={toggleClick} className={`open-eye icon-register ${!passwordShown && "notVisible"}`}    />
            <FaEyeSlash onClick={toggleClick} className={`close-eye icon-register ${passwordShown && "notVisible"}`} />
            {<div className="pass-err err"> {passwordErr ? passwordErr : "" }</div>}
            </div>
           <button type="submit" className="register-btn btn" >ثبت نام</button>
            {/* </div> */}
        </div>
        <ModalRegister show={show} info={info} />
        </form>
        // {show ? <}
    )
}
export default RegisterBox;