import React from "react";
import AccountName from "./AccountName";

const Account = () => {
  return (
    <div>
      <div className="fs-4">
        <i className="bi bi-person-circle"></i>
      </div>
      <div className="mt-3">
        <AccountName />
      </div>
    </div>
  );
};

export default Account;
