import React from "react";
import styles from "@/feature/chat/components/Message.module.css";
import { Avatar } from "@chakra-ui/react";
import { AiOutlineUser } from "react-icons/ai";
import type { Message } from "@/type/models";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

type MessageProps = Message & { profileImg: string };

const Message: React.FC<MessageProps> = ({ profileImg, contents, userId }) => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <div
      className={styles.message}
      style={{
        justifyContent: user.userId === userId ? "end" : "start",
      }}
    >
      {user.userId === userId && (
        <div>
          <Avatar size="sm" icon={<AiOutlineUser />}></Avatar>
        </div>
      )}
      <div>{contents}</div>
    </div>
  );
};

export default Message;
