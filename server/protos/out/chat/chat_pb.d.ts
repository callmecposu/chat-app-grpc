// package: chatservice
// file: chat/chat.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class JoinChatRoomRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): JoinChatRoomRequest;
    getUsername(): string;
    setUsername(value: string): JoinChatRoomRequest;
    getChatRoomId(): number;
    setChatRoomId(value: number): JoinChatRoomRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): JoinChatRoomRequest.AsObject;
    static toObject(includeInstance: boolean, msg: JoinChatRoomRequest): JoinChatRoomRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: JoinChatRoomRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): JoinChatRoomRequest;
    static deserializeBinaryFromReader(message: JoinChatRoomRequest, reader: jspb.BinaryReader): JoinChatRoomRequest;
}

export namespace JoinChatRoomRequest {
    export type AsObject = {
        userId: number,
        username: string,
        chatRoomId: number,
    }
}

export class Message extends jspb.Message { 
    getUsername(): string;
    setUsername(value: string): Message;
    getContent(): string;
    setContent(value: string): Message;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Message.AsObject;
    static toObject(includeInstance: boolean, msg: Message): Message.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Message, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Message;
    static deserializeBinaryFromReader(message: Message, reader: jspb.BinaryReader): Message;
}

export namespace Message {
    export type AsObject = {
        username: string,
        content: string,
    }
}

export class SendMessageRequest extends jspb.Message { 
    getChatRoomId(): number;
    setChatRoomId(value: number): SendMessageRequest;

    hasMsg(): boolean;
    clearMsg(): void;
    getMsg(): Message | undefined;
    setMsg(value?: Message): SendMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
    static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
    export type AsObject = {
        chatRoomId: number,
        msg?: Message.AsObject,
    }
}

export class SendMessageResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): SendMessageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
    static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
    export type AsObject = {
        success: boolean,
    }
}

export class LeaveChatRoomRequest extends jspb.Message { 
    getUserId(): number;
    setUserId(value: number): LeaveChatRoomRequest;
    getUsername(): string;
    setUsername(value: string): LeaveChatRoomRequest;
    getChatRoomId(): number;
    setChatRoomId(value: number): LeaveChatRoomRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveChatRoomRequest.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveChatRoomRequest): LeaveChatRoomRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveChatRoomRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveChatRoomRequest;
    static deserializeBinaryFromReader(message: LeaveChatRoomRequest, reader: jspb.BinaryReader): LeaveChatRoomRequest;
}

export namespace LeaveChatRoomRequest {
    export type AsObject = {
        userId: number,
        username: string,
        chatRoomId: number,
    }
}

export class LeaveChatRoomResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): LeaveChatRoomResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LeaveChatRoomResponse.AsObject;
    static toObject(includeInstance: boolean, msg: LeaveChatRoomResponse): LeaveChatRoomResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LeaveChatRoomResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LeaveChatRoomResponse;
    static deserializeBinaryFromReader(message: LeaveChatRoomResponse, reader: jspb.BinaryReader): LeaveChatRoomResponse;
}

export namespace LeaveChatRoomResponse {
    export type AsObject = {
        success: boolean,
    }
}
