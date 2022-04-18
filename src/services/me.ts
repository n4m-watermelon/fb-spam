import axiosClient from "./axiosClient";
const meApi = {
  getMe: async () => {
    return await axiosClient.get("me");
  },
};

export default meApi;
