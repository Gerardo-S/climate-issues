import React from "react";
import Form from "../components/Form";
function SignUpPage() {
  return (
    <div className="homeContainer">
      <h1>Please Register To Continue</h1>
      <Form label1={"Username:"} label2={"Password:"} />
    </div>
  );
}
export default SignUpPage;
