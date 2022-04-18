import React, { useEffect } from "react";
import axiosClient from "../../services/axiosClient";
export const Home = () => {
  useEffect(() => {
    // const get = () => {
    //   meApi.getMe();
    // };
    // get();
  }, []);
  const sendComment = async () => {
    const access_token =
      "EAAI6dGAJy5wBAP7fDMscrkvWgzREgIwL3SbXhepIm6aCH49Lajc0kbsEtNqJdd2TCRQE7sdYz1q9OIpNQn9nZCcXSHa4Abh8ZAHSmeinYqDgombciFEZCUlZAZA72fgZCzZBZAMnYzM0CoRsF9cBRAUyywTqdoCrjxlWaGK0OAuHRNps4tZBx5t80QlSClfrL4EOo2lRxAKE74ZBkKhsBDPrlb";
    let message = "nice post <3";
    let res = await axiosClient.post(
      `830231860481550_1972677406236984/comments?access_token=${access_token}&message=${message}`
    );
  };

  return (
    <div>
      <button
        onClick={() => {
          sendComment();
        }}
      >
        senComment
      </button>
    </div>
  );
};
