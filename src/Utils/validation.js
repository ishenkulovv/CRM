export const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

export const validatePassword = (password) => password?.length >= 6;

export const validateText = (text) => text?.length >= 2;