import apiInstance from ".";

export const registerUser = async (name, email, password) => {
  try {
    const response = await (
      await apiInstance.post("/users/register", {
        name,
        email,
        password,
      })
    ).data;
    return response;
  } catch (error) {
    return error;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await (
      await apiInstance.post("/users/login", { email, password })
    ).data;
    return response;
  } catch (error) {
    return error;
  }
};

export const loadUser = async () => {
  try {
    const response = await (await apiInstance.get("/users/me")).data;
    return response;
  } catch (error) {
    return error;
  }
};

export const getAllUsers = async () => {
  try {
    const response = await (await apiInstance.get("/users/all-users")).data;
    return response;
  } catch (error) {
    return error;
  }
};
