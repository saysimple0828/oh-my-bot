"use client";

import styles from "@/feature/chat/components/Chat.module.css";
import React, { useState } from "react";
import Message from "@/feature/chat/components/Message";
import { RootState } from "@/feature/chat/store/store";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/feature/chat/chatSlice";
import type { Message as TMessage, Chat as TChat } from "@/type/models";
import { v4 as uuidv4 } from "uuid";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [message, setMessage] = useState("");

  const { userId, profileImg } = useSelector((state: RootState) => state.user);
  const { currentChat, messages } = useSelector(
    (state: RootState) => state.chat
  );

  const dispatch = useDispatch();

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  const sendMessage = () => {
    const newMessage: Message = {
      userId: userId,
      chatId: currentChat.chatId,
      messageId: uuidv4(),
      type: uuidv4(),
      contents: message,
      profileImg: userId,
    };
    dispatch(addMessage(newMessage));
    console.log(messages);
    // TODO: Message create api 필요
    if (message.trim() !== "") {
      setMessage("");
    }
  };

  return (
    <div className={styles.chat}>
      {/* 채팅창 */}
      <div className={styles.chatBox}>
        {messages.map((message) => (
          <Message
            userId={message.userId}
            chatId={message.chatId}
            messageId={message.messageId}
            type={message.type}
            profileImg={message.profileImg}
            contents={message.contents}
          ></Message>
        ))}
      </div>

      {/* 메세지 인풋 */}
      <div className={styles.messageInput}>
        <input
          className={styles.messageInputBox}
          type="text"
          placeholder="메시지를 입력하세요..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button className={styles.sendMessageButton} onClick={sendMessage}>
          전송
        </button>
      </div>
    </div>
  );
};

export default Chat;
