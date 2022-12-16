import axios from "axios";

const apiInstance = axios.create({
  baseURL: "http://localhost:3001/api/v1",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default apiInstance;
