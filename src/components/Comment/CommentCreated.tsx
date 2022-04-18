import React, { useState } from "react";
import { Input, Button } from "antd";
import axiosClient from "../../services/axiosClient";
const { TextArea } = Input;
function CommentCreated() {
  const [data, setData] = useState({
    post_id: "",
    page_id: "",
    message: "",
  });

  const handleChangeInput = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { value, name } = event.target;
    setData({ ...data, [name]: value });
  };
  const onSendMessage = async () => {
    const accessToken =
      "EAAI6dGAJy5wBABZAmz0n3ZCvdC4YZB0Hy5WziMn5QjEG7i8kgU1Q8aIZBym3r4y62Q3BF4oTNeQl1QJI3UkkZBZBfex5MqIDaAiobNsolLx06H07PYHAwJdVUXZCVzu0VIM2lxmaHBzbLMkEusY7tBagwjCoffflZAdvwRZAuhhSurWGg3NNZBnjtkPP7wqs8vvOgHYQIF7x1ZC60ieYEF4FUCs";
    const res = await axiosClient.post(
      `${data.page_id}_${data.post_id}/comments?access_token=${accessToken}&message=${data.message}`
    );
    console.log(res.data?.id);
  };

  const getBusinessFromFBByPageURL = async () => {};

  return (
    <div>
      <div className="comment-content">
        <Input
          onChange={(e) => handleChangeInput(e)}
          name="page_id"
          placeholder="Page ID"
        />
        <Input
          onChange={(e) => handleChangeInput(e)}
          name="post_id"
          placeholder="Post ID"
        />

        <TextArea
          onChange={(e) => handleChangeInput(e)}
          name="message"
          rows={3}
          placeholder="Message content."
        />
        <Button onClick={() => onSendMessage()} type="primary">
          Send
        </Button>
      </div>
    </div>
  );
}

export default CommentCreated;
