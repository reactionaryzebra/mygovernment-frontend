import React, { useState } from "react";

const useForm = callback => {
  const [values, setValues] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    callback();
  };

  const handleChange = e => {
    e.persist();
    setValues({ ...values, [e.currentTarget.name]: e.currentTarget.value });
  };

  return {
    values,
    setValues,
    handleSubmit,
    handleChange
  };
};

export default useForm;
