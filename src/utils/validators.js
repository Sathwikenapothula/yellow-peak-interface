
export const validateEmail = (email) => {
  const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return re.test(email);
};

export const validatePassword = (password) => {
  return password.length >= 8;
};

export const validateName = (name) => {
  return name.trim().length > 0;
};

export const validatePhone = (phone) => {
  const re = /^\+?[0-9]{10,15}$/;
  return re.test(phone);
};
