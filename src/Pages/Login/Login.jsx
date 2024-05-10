import React, { useState } from "react";
import style from "./login.module.css";
import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOTP/StepOtp";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
};
const Login = () => {
  const [step, setstep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    setstep(step + 1);
  };
  return <Step onNext={onNext} />;
};

export default Login;
