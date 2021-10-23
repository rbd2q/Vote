const validateForm = (data) => {
  const errors = {};
  const firstTwoLetters = data.passportNumber.split('').slice(0,2).join('');


  if (data.passportNumber.length !== 8) {
    errors.name = 'Passport Number should be 8 symbols long';
  }
  if (firstTwoLetters !== 'MP') {
    errors.name = 'Passport Number should start with MP';
  }

  return errors;
};

export default validateForm;