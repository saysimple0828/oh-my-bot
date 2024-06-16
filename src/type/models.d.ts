interface Chat {
  chatId: string;
}

interface Message {
  userId: string;
  chatId: string;
  messageId: string;
  type: string;
  contents: string;
  profileImg: string;
}

interface User {
  id: number;
  userId: string;
  profileImg: string;
}

export { Chat, Message };
