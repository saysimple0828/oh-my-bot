"use client";

import styles from "@/feature/chat/components/Chat.module.css";
import React, { useState, useEffect, useRef } from "react";
import Message from "@/feature/chat/components/Message";
import { RootState } from "@/feature/chat/store/store";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/feature/chat/chatSlice";
import type { Message as TMessage, Chat as TChat } from "@/type/models";
import { v4 as uuidv4 } from "uuid";

interface ChatProps {}

const Chat: React.FC<ChatProps> = () => {
  const [message, setMessage] = useState("");
  const messageInputRef = useRef<HTMLInputElement>(null); // 입력 요소에 대한 참조 생성

  const { userId, profileImg } = useSelector((state: RootState) => state.user);
  const { currentChat, messages } = useSelector(
    (state: RootState) => state.chat
  );

  const dispatch = useDispatch();

  useEffect(() => {
    // 컴포넌트가 마운트될 때 입력 요소에 포커스 설정
    if (messageInputRef.current) {
      messageInputRef.current.focus();
    }
  }, []);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.preventDefault(); // 이벤트 전파 방지
      sendMessage();
    }
  };

  const sendMessage = () => {
    if (message.trim() === "") return; // 빈 메시지 방지

    const newMessage: TMessage = {
      userId: userId,
      chatId: currentChat.chatId,
      messageId: uuidv4(),
      type: "text", // 메시지 타입 설정 (예: 'text')
      contents: message, // 실제 메시지 내용
      profileImg: profileImg, // 프로필 이미지
    };
    dispatch(addMessage(newMessage));
    console.log(messages);
    setMessage(""); // 메시지 인풋 초기화
  };

  return (
    <div className={styles.chat}>
      {/* 채팅창 */}
      <div className={styles.chatBox}>
        {messages.map((message) => (
          <Message
            key={message.messageId} // 유니크 키 설정
            userId={message.userId}
            chatId={message.chatId}
            messageId={message.messageId}
            type={message.type}
            profileImg={message.profileImg}
            contents={message.contents}
          />
        ))}
      </div>

      {/* 메시지 인풋 */}
      <div className={styles.messageInput}>
        <input
          ref={messageInputRef} // 입력 요소에 참조 연결
          className={styles.messageInputBox}
          type="text"
          placeholder="메시지를 입력하세요..."
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className={styles.sendMessageButton} onClick={sendMessage}>
          전송
        </button>
      </div>
    </div>
  );
};

export default Chat;
