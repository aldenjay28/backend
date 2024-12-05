import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000/api", // Laravel backend URL
  headers: { "Content-Type": "application/json" },
});

export const register = (userData) => API.post("/register", userData);
export const login = (credentials) => API.post("/login", credentials);
export const getWalletBalance = () => API.get("/wallet/balance", {
  headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
});
export const placeBet = (betData) =>
  API.post("/bet", betData, {
    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
  });
