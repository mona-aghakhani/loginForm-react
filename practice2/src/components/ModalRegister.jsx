import React from "react";
// import { FaInfo } from "react-icons/fa";

const ModalRegister = ({ show, info }) => {
  if (!show) {
    return null;
  }
  console.log(info);
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="modal-body">
            <h3 className="parageraph p-title" >ثبت نام شما با موفقیت انجام شد</h3>
            <p className="parageraph ">{` نام : ${info.firstName} `}</p>
            <p className="parageraph ">{`  نام خانوادگی : ${info.lastName} `}</p>
            <p className="parageraph ">{` ایمیل : ${info.email} `}</p>
            <p className="parageraph">{` تحصیلات : ${info.education} `}</p>
            <p className="parageraph">{` محل تحصیل : ${info.educationPlace} `}</p>
            <p className="parageraph">{` نام محل تحصیل : ${info.educationPlaceName} `}</p>
           
          </div>
        </div>
      </div>
    </div>
  );
};
export default ModalRegister;
