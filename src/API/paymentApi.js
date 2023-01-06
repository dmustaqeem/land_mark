import axios from "axios";

const axiosAPI = axios.create({
  baseURL: "http://localhost:4343",
});

export const createPaymentIntent = async (creditPack) => {
  const response = await axiosAPI.post("/create-payment-intent", {
    creditPack,
  });
  return response;
};
