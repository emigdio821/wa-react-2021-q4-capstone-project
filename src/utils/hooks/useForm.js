import { useState, useEffect } from 'react';

const useForm = ({ formValues, validations, formCallback }) => {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState(formValues);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrors(validations(values));
    setIsSubmitted(true);
  };

  useEffect(() => {
    if (!Object.keys(errors).length && isSubmitted) {
      formCallback();
    }
  }, [errors]);

  return {
    handleFormChange,
    values,
    errors,
    handleFormSubmit,
  };
};

export default useForm;
