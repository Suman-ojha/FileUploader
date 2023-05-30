const TOKEN_KEY = "ACCSESS_TOKEN";

const saveUserToken = (token) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(token));
};

//read that token

const getUserToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);

  try {
    return JSON.parse(token);
  } catch (error) {
    return "";
  }
};

export { saveUserToken, getUserToken };
