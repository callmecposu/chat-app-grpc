// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var chat_chat_pb = require('../chat/chat_pb.js');

function serialize_chatservice_JoinChatRoomRequest(arg) {
  if (!(arg instanceof chat_chat_pb.JoinChatRoomRequest)) {
    throw new Error('Expected argument of type chatservice.JoinChatRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatservice_JoinChatRoomRequest(buffer_arg) {
  return chat_chat_pb.JoinChatRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chatservice_LeaveChatRoomRequest(arg) {
  if (!(arg instanceof chat_chat_pb.LeaveChatRoomRequest)) {
    throw new Error('Expected argument of type chatservice.LeaveChatRoomRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatservice_LeaveChatRoomRequest(buffer_arg) {
  return chat_chat_pb.LeaveChatRoomRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chatservice_LeaveChatRoomResponse(arg) {
  if (!(arg instanceof chat_chat_pb.LeaveChatRoomResponse)) {
    throw new Error('Expected argument of type chatservice.LeaveChatRoomResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatservice_LeaveChatRoomResponse(buffer_arg) {
  return chat_chat_pb.LeaveChatRoomResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chatservice_Message(arg) {
  if (!(arg instanceof chat_chat_pb.Message)) {
    throw new Error('Expected argument of type chatservice.Message');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatservice_Message(buffer_arg) {
  return chat_chat_pb.Message.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chatservice_SendMessageRequest(arg) {
  if (!(arg instanceof chat_chat_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type chatservice.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatservice_SendMessageRequest(buffer_arg) {
  return chat_chat_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_chatservice_SendMessageResponse(arg) {
  if (!(arg instanceof chat_chat_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type chatservice.SendMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_chatservice_SendMessageResponse(buffer_arg) {
  return chat_chat_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var ChatServiceService = exports.ChatServiceService = {
  joinChatRoom: {
    path: '/chatservice.ChatService/JoinChatRoom',
    requestStream: false,
    responseStream: true,
    requestType: chat_chat_pb.JoinChatRoomRequest,
    responseType: chat_chat_pb.Message,
    requestSerialize: serialize_chatservice_JoinChatRoomRequest,
    requestDeserialize: deserialize_chatservice_JoinChatRoomRequest,
    responseSerialize: serialize_chatservice_Message,
    responseDeserialize: deserialize_chatservice_Message,
  },
  sendMessage: {
    path: '/chatservice.ChatService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: chat_chat_pb.SendMessageRequest,
    responseType: chat_chat_pb.SendMessageResponse,
    requestSerialize: serialize_chatservice_SendMessageRequest,
    requestDeserialize: deserialize_chatservice_SendMessageRequest,
    responseSerialize: serialize_chatservice_SendMessageResponse,
    responseDeserialize: deserialize_chatservice_SendMessageResponse,
  },
  leaveChatRoom: {
    path: '/chatservice.ChatService/LeaveChatRoom',
    requestStream: false,
    responseStream: false,
    requestType: chat_chat_pb.LeaveChatRoomRequest,
    responseType: chat_chat_pb.LeaveChatRoomResponse,
    requestSerialize: serialize_chatservice_LeaveChatRoomRequest,
    requestDeserialize: deserialize_chatservice_LeaveChatRoomRequest,
    responseSerialize: serialize_chatservice_LeaveChatRoomResponse,
    responseDeserialize: deserialize_chatservice_LeaveChatRoomResponse,
  },
};

exports.ChatServiceClient = grpc.makeGenericClientConstructor(ChatServiceService);
