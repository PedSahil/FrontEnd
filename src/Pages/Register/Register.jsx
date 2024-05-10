import React, { useState } from "react";
import style from "./register.module.css";

import StepPhoneEmail from "../Steps/StepPhoneEmail/StepPhoneEmail";
import StepOtp from "../Steps/StepOTP/StepOtp";
import StepName from "../Steps/StepName/StepName";
import StepAvatar from "../Steps/StepAvatar/StepAvatar";
import StepUsername from "../Steps/StepUsername/StepUsername";

const steps = {
  1: StepPhoneEmail,
  2: StepOtp,
  3: StepName,
  4: StepAvatar,
  5: StepUsername,
};

const Register = () => {
  const [step, setstep] = useState(1);
  const Step = steps[step];
  const onNext = () => {
    setstep(step + 1);
  };
  return (
    <div>
      <Step onNext={onNext} />
    </div>
  );
};

export default Register;
