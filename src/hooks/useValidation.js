import React, { useEffect, useState } from "react";

const useValidation = (initialState, validation, Fn) => {
  const [values, setValues] = useState(initialState);
  const [errors, setError] = useState({});
  const [submitform, saveSubmitForm] = useState(false);

  useEffect(() => {
    if (submitform) {
      const nError = Object.keys(errors).lenght === 0;
      if (nError) {
        Fn();
      }
      saveSubmitForm(false);
    }
  }, []);

  const handleChangeH = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitH = (e) => {
    e.preventDefault();
    const validationerrors = validation(values);
    setError(validationerrors);
    saveSubmitForm(true);
  };
  const handleBlurH = () => {
    const validationerrors = validation(values);
    setError(validationerrors);
  };
  return {
    values,
    errors,
    handleChangeH,
    handleSubmitH,
    handleBlurH,
  };
};

export default useValidation;
