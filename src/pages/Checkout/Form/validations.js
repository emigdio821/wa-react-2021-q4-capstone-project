export const formValues = {
  name: '',
  email: '',
  zipcode: '',
  ordernotes: '',
};

export const validations = (values) => {
  const errors = {};
  const zipRegex = /^\d+$/;
  const emailRegex = /(.+)@(.+){1,}\.(.+){1,}/;

  if (!values.name) {
    errors.name = 'Name is required';
  }
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!emailRegex.test(values.email)) {
    errors.email = 'Invalid Email';
  }
  if (!values.zipcode) {
    errors.zipcode = 'ZIP code is required';
  } else if (!zipRegex.test(values.zipcode)) {
    errors.zipcode = 'Invalid ZIP code';
  }

  return errors;
};
