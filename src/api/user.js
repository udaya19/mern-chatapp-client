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
