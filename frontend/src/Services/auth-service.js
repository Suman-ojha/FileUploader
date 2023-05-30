import { api } from "./index";

export const loginSuccess = async (user) => {
  return  await api.post("/api/auth/register", user).then((response) => response.data);
};
