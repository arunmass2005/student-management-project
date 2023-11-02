import React from "react";

const Requirements = ({name,pwd}) => {
  return (
    <div className={`${name}-requirements requirements`} id={`${name}-requirements requirements`} name ={name}>
      <span className="req-ul-head">have atleast</span>
      <div className="req-ul">
        {pwd?<li className="req-li li-min-char">minimum 8 characters</li>:null}
        <li className="req-li li-upper">1 uppercase letter</li>
        <li className="req-li li-lower">1 lowercase letter</li>
        <li className="req-li li-number">1 number</li>
        <li className="req-li li-special-char">1 special characters (!,@,#,$,%,&,*,_)</li>
      </div>
    </div>
  );
};

export default Requirements;
