// package: chatservice
// file: chat/chat.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as chat_chat_pb from "../chat/chat_pb";

interface IChatServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    joinChatRoom: IChatServiceService_IJoinChatRoom;
    sendMessage: IChatServiceService_ISendMessage;
    leaveChatRoom: IChatServiceService_ILeaveChatRoom;
}

interface IChatServiceService_IJoinChatRoom extends grpc.MethodDefinition<chat_chat_pb.JoinChatRoomRequest, chat_chat_pb.Message> {
    path: "/chatservice.ChatService/JoinChatRoom";
    requestStream: false;
    responseStream: true;
    requestSerialize: grpc.serialize<chat_chat_pb.JoinChatRoomRequest>;
    requestDeserialize: grpc.deserialize<chat_chat_pb.JoinChatRoomRequest>;
    responseSerialize: grpc.serialize<chat_chat_pb.Message>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.Message>;
}
interface IChatServiceService_ISendMessage extends grpc.MethodDefinition<chat_chat_pb.SendMessageRequest, chat_chat_pb.SendMessageResponse> {
    path: "/chatservice.ChatService/SendMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_chat_pb.SendMessageRequest>;
    requestDeserialize: grpc.deserialize<chat_chat_pb.SendMessageRequest>;
    responseSerialize: grpc.serialize<chat_chat_pb.SendMessageResponse>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.SendMessageResponse>;
}
interface IChatServiceService_ILeaveChatRoom extends grpc.MethodDefinition<chat_chat_pb.LeaveChatRoomRequest, chat_chat_pb.LeaveChatRoomResponse> {
    path: "/chatservice.ChatService/LeaveChatRoom";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<chat_chat_pb.LeaveChatRoomRequest>;
    requestDeserialize: grpc.deserialize<chat_chat_pb.LeaveChatRoomRequest>;
    responseSerialize: grpc.serialize<chat_chat_pb.LeaveChatRoomResponse>;
    responseDeserialize: grpc.deserialize<chat_chat_pb.LeaveChatRoomResponse>;
}

export const ChatServiceService: IChatServiceService;

export interface IChatServiceServer {
    joinChatRoom: grpc.handleServerStreamingCall<chat_chat_pb.JoinChatRoomRequest, chat_chat_pb.Message>;
    sendMessage: grpc.handleUnaryCall<chat_chat_pb.SendMessageRequest, chat_chat_pb.SendMessageResponse>;
    leaveChatRoom: grpc.handleUnaryCall<chat_chat_pb.LeaveChatRoomRequest, chat_chat_pb.LeaveChatRoomResponse>;
}

export interface IChatServiceClient {
    joinChatRoom(request: chat_chat_pb.JoinChatRoomRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_chat_pb.Message>;
    joinChatRoom(request: chat_chat_pb.JoinChatRoomRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_chat_pb.Message>;
    sendMessage(request: chat_chat_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    sendMessage(request: chat_chat_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    sendMessage(request: chat_chat_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    leaveChatRoom(request: chat_chat_pb.LeaveChatRoomRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.LeaveChatRoomResponse) => void): grpc.ClientUnaryCall;
    leaveChatRoom(request: chat_chat_pb.LeaveChatRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.LeaveChatRoomResponse) => void): grpc.ClientUnaryCall;
    leaveChatRoom(request: chat_chat_pb.LeaveChatRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.LeaveChatRoomResponse) => void): grpc.ClientUnaryCall;
}

export class ChatServiceClient extends grpc.Client implements IChatServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public joinChatRoom(request: chat_chat_pb.JoinChatRoomRequest, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_chat_pb.Message>;
    public joinChatRoom(request: chat_chat_pb.JoinChatRoomRequest, metadata?: grpc.Metadata, options?: Partial<grpc.CallOptions>): grpc.ClientReadableStream<chat_chat_pb.Message>;
    public sendMessage(request: chat_chat_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public sendMessage(request: chat_chat_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public sendMessage(request: chat_chat_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public leaveChatRoom(request: chat_chat_pb.LeaveChatRoomRequest, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.LeaveChatRoomResponse) => void): grpc.ClientUnaryCall;
    public leaveChatRoom(request: chat_chat_pb.LeaveChatRoomRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.LeaveChatRoomResponse) => void): grpc.ClientUnaryCall;
    public leaveChatRoom(request: chat_chat_pb.LeaveChatRoomRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: chat_chat_pb.LeaveChatRoomResponse) => void): grpc.ClientUnaryCall;
}
