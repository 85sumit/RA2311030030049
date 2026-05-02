import axios from "axios";

const API = axios.create({
  baseURL: "http://20.207.122.201/evaluation-service",
});

export const getNotifications = async (params, token) => {
  return API.get("/notifications", {
    params,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
