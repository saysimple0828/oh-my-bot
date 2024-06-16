import type { Chat, Message } from "@/type/models";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ChatState {
  currentChat: Chat;
  chats: Chat[];
  messages: Message[];
}

const initialState: ChatState = {
  currentChat: {} as Chat,
  chats: [],
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<Chat>) => {
      state.chats.push(action.payload);
    },
    updateChat: (state, action: PayloadAction<Chat>) => {
      const { chatId } = action.payload;
      const index = state.chats.findIndex((chat) => chat.chatId === chatId);
      if (index !== -1) {
        state.chats[index] = action.payload;
      }
    },
    removeChat: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter(
        (chat) => chat.chatId !== action.payload
      );
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
    updateMessage: (state, action: PayloadAction<Message>) => {
      const { messageId } = action.payload;
      const index = state.messages.findIndex(
        (message) => message.chatId === messageId
      );
      if (index !== -1) {
        state.messages[index] = action.payload;
      }
    },
    removeMessage: (state, action: PayloadAction<string>) => {
      state.messages = state.messages.filter(
        (message) => message.messageId !== action.payload
      );
    },
  },
});

export const {
  addChat,
  updateChat,
  removeChat,
  addMessage,
  updateMessage,
  removeMessage,
} = chatSlice.actions;

export default chatSlice.reducer;
