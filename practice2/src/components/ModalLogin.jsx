import React from 'react'

 const ModalLogin = ({dataUser}) => {
    // if (!dataUser) {
    //     return null;
    //   }
    return (
        <div className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-body">
              <h3 className="parageraph p-title" > {` کاربر ${dataUser[0].email} خوش آمدید `} </h3>
            
            </div>
          </div>
        </div>
      </div>
    )
}
export default ModalLogin;