import apiInstance from ".";

export const getAllChats = async () => {
  try {
    const response = await (await apiInstance.get("/chats/get-all-chats")).data;
    return response;
  } catch (error) {
    return error;
  }
};
export const createNewChat = async (members) => {
  try {
    const response = await (
      await apiInstance.post("/chats/create-new-chat", { members })
    ).data;
    return response;
  } catch (error) {
    return error;
  }
};
