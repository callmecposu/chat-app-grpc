import { handleServerStreamingCall, handleUnaryCall } from "grpc";
import { IChatServiceServer } from "./protos/out/chat/chat_grpc_pb";
import {
    Message,
    SendMessageResponse,
    SendMessageRequest,
    LeaveChatRoomRequest,
    LeaveChatRoomResponse,
    JoinChatRoomRequest,
} from "./protos/out/chat/chat_pb";
import grpc from "grpc";

type User = {
    id: number;
    username: string;
    stream: grpc.ServerWritableStream<JoinChatRoomRequest, Message> | null;
};

type ChatRoom = {
    id: number;
    users: User[];
};

let chatRooms: ChatRoom[] = [
    { id: 1, users: [] },
    { id: 2, users: [] },
    { id: 3, users: [] },
];

export class ChatService implements IChatServiceServer {
    joinChatRoom: handleServerStreamingCall<JoinChatRoomRequest, Message> = (
        call
    ) => {
        const request = call.request;
        for (let i = 0; i < chatRooms.length; i++) {
            if (chatRooms[i].id == request.getChatRoomId()) {
                // add the user to the chatroom
                chatRooms[i].users.push({
                    id: request.getUserId(),
                    username: request.getUsername(),
                    stream: call,
                });
                // notify all the users in the chatroom of the new participant
                chatRooms[i].users.forEach((user) => {
                    const msg = new Message();
                    msg.setUsername("Server");
                    msg.setContent(
                        `${request.getUsername()} joined chat room #${request.getChatRoomId()}`
                    );
                    user.stream?.write(msg);
                });
                console.log(
                    `chatrrom #${request.getChatRoomId()} after new user: `,
                    chatRooms[i]
                );
                break;
            }
        }
    };

    sendMessage: handleUnaryCall<SendMessageRequest, SendMessageResponse> = (
        call,
        callback
    ) => {
        const request = call.request;
        try {
            for (let i = 0; i < chatRooms.length; i++) {
                if (chatRooms[i].id == request.getChatRoomId()) {
                    // send the message to all the clients in the chatroom
                    chatRooms[i].users.forEach((user) => {
                        user.stream?.write(request.getMsg());
                    });
                    console.log(
                        `msg sent from ${request
                            .getMsg()
                            ?.getUsername()} in #${request.getChatRoomId()}`
                    );
                    const response = new SendMessageResponse();
                    response.setSuccess(true);
                    callback(null, response);
                }
            }
        } catch (err) {
            console.log(err);
            callback(
                {
                    code: grpc.status.INTERNAL,
                    name: "Error",
                    message: (err as any).message,
                },
                null
            );
        }
    };

    leaveChatRoom: handleUnaryCall<
        LeaveChatRoomRequest,
        LeaveChatRoomResponse
    > = (call, callback) => {
        const request = call.request;
        for (let i = 0; i < chatRooms.length; i++) {
            if (chatRooms[i].id == request.getChatRoomId()) {
                console.log(
                    `chatroom #${request.getChatRoomId()} BEFORE leave: `,
                    chatRooms[i]
                );
                // remove the user from the chat room
                for (let j = 0; j < chatRooms[i].users.length; j++) {
                    if (chatRooms[i].users[j].id == request.getUserId()) {
                        chatRooms[i].users[j].stream?.end();
                        chatRooms[i].users.splice(j, 1);
                        break;
                    }
                }
                console.log(
                    `User ${request.getUserId()} left #${request.getChatRoomId()}`
                );
                console.log(
                    `chatroom #${request.getChatRoomId()} AFTER leave: `,
                    chatRooms[i]
                );
                // notify all the clients in the chatroom
                chatRooms[i].users.forEach((user) => {
                    const msg = new Message();
                    msg.setUsername("Server");
                    msg.setContent(
                        `${request.getUsername()} left chat room #${request.getChatRoomId()}`
                    );
                    user.stream?.write(msg);
                });
                break;
            }
        }

        callback(null, new LeaveChatRoomResponse());
    };
}
