import grpc from "grpc";
import { ChatServiceClient } from "./protos/out/chat/chat_grpc_pb";
import {
    JoinChatRoomRequest,
    LeaveChatRoomRequest,
    Message,
    SendMessageRequest,
} from "./protos/out/chat/chat_pb";
import readline from "readline";

const prompt = require("prompt-sync")();

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const question = (q: string) =>
    new Promise<string>((resolve, reject) => {
        rl.question(q, (input) => {
            resolve(input);
        });
    });

const getMessages = async (
    userId: number,
    username: string,
    chatRoomId: number,
    senderClient: ChatServiceClient
) => {
    let flag = true;
    while (flag) {
        const msgContent = await question("");
        if (msgContent == "quit") {
            const leaveReq = new LeaveChatRoomRequest();
            leaveReq.setChatRoomId(chatRoomId);
            leaveReq.setUserId(userId);
            leaveReq.setUsername(username);
            senderClient.leaveChatRoom(leaveReq, (err, resp) => {
                console.log("--- left successfully ---");
                flag = false;
            });
        } else {
            const msg = new Message();
            msg.setUsername(username);
            msg.setContent(msgContent);
            const sendMsgRequest = new SendMessageRequest();
            sendMsgRequest.setChatRoomId(chatRoomId);
            sendMsgRequest.setMsg(msg);
            senderClient.sendMessage(sendMsgRequest, (err, resp) => {
                if (err) {
                    console.log("ERROR: ", err);
                }
            });
        }
    }
};

const main = async () => {
    const streamClient = new ChatServiceClient(
        "localhost:50017",
        grpc.credentials.createInsecure()
    );

    while (true) {
        console.log("--------");
        const userId = prompt("Enter User ID: ");
        const username = prompt("Enter Username: ");
        const chatRoomId = prompt("Enter Chat Room Id: ");

        const joinChatRoomRequest = new JoinChatRoomRequest();
        joinChatRoomRequest.setUserId(userId);
        joinChatRoomRequest.setUsername(username);
        joinChatRoomRequest.setChatRoomId(chatRoomId);

        const stream = streamClient.joinChatRoom(joinChatRoomRequest);
        console.log("--------");

        stream.on("data", (resp: Message) => {
            console.log(`${resp.getUsername()} says: ${resp.getContent()}`);
        });

        // start reading input
        await getMessages(userId, username, chatRoomId, streamClient);
    }
};

main();
