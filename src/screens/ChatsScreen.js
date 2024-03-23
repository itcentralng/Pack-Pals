import React, { useState, useCallback } from 'react';
import { View, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { StatusBar } from 'expo-status-bar';

export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  const onSend = useCallback((newMessages = []) => {
    setMessages((prevMessages) => GiftedChat.append(prevMessages, newMessages));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#000" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        keyboardVerticalOffset={Platform.OS === 'ios' ? 84 : 0}
      >
        <GiftedChat
          messages={messages}
          onSend={(newMessages) => onSend(newMessages)}
          user={{
            _id: 1,
          }}
        />
      </KeyboardAvoidingView>
      <StatusBar style="auto" />
    </View>
  );
}
