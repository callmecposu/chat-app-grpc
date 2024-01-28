<script>
    import { ChatServiceClient } from "./protos/out/chat/chat_grpc_web_pb";
    import { JoinChatRoomRequest, SendMessageRequest, Message, LeaveChatRoomRequest } from "./protos/out/chat/chat_pb";

    var grpcClient = new ChatServiceClient("http://localhost:13007");

    let userId;
    let username;
    let chatRoomId;

    let stream;

    let msgContent;

    const joinChatRoom = () => {
        let joinChatRequest = new JoinChatRoomRequest();
        joinChatRequest.setUserId(userId);
        joinChatRequest.setUsername(username);
        joinChatRequest.setChatRoomId(chatRoomId);
        stream = grpcClient.joinChatRoom(joinChatRequest);
        stream.on("data", (msg) => {
            document.querySelector("#chat").innerHTML +=
                `<p class="m-2"><span class="text-primary font-semibold">${msg.getUsername()}:</span> <span>${msg.getContent()}</span></p>`;
        });
        console.log("joined chatroom: ", stream);
    };

	const sendMessage = () => {
		let sendMsgRequest = new SendMessageRequest()
		sendMsgRequest.setChatRoomId(chatRoomId)
		let msg = new Message()
		msg.setUsername(username)
		msg.setContent(msgContent)
		sendMsgRequest.setMsg(msg)
		grpcClient.sendMessage(sendMsgRequest, {}, (err, resp) => {
			if (err){
				console.log('err while sending message: ', err)
			} else {
				console.log('msg sent successfully')
				msgContent = null
			}
		})
	}

	const leaveChatRoom = () => {
		let leaveChatRequest = new LeaveChatRoomRequest()
		leaveChatRequest.setUserId(userId)
		leaveChatRequest.setUsername(username)
		leaveChatRequest.setChatRoomId(chatRoomId)
		grpcClient.leaveChatRoom(leaveChatRequest, {}, (err, resp) => {
			if (err){
				console.log('error while leaving chat room: ', err)
			} else {
				userId = null
				username = null
				chatRoomId = null
				stream = null
			}
		})
	}
</script>

<main>
    {#if !stream}
        <div class="hero min-h-screen bg-base-200">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <h1 class="text-5xl font-bold">Join the chat now!</h1>
                    <p class="py-6">Don't let the fun slip by.</p>
                </div>
                <div
                    class="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100"
                >
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label" for="userId">
                                <span class="label-text">User ID</span>
                            </label>
                            <input
                                type="text"
                                name="userId"
                                placeholder="user id"
                                class="input input-bordered"
                                bind:value={userId}
                                required
                            />
                        </div>
                        <div class="form-control">
                            <label class="label" for="username">
                                <span class="label-text">Username</span>
                            </label>
                            <input
                                type="text"
                                name="username"
                                placeholder="username"
                                class="input input-bordered"
                                bind:value={username}
                                required
                            />
                        </div>
                        <div class="form-control">
                            <label class="label" for="chatRoomId">
                                <span class="label-text">Chat Room Number</span>
                            </label>
                            <input
                                type="text"
                                name="chatRoomId"
                                placeholder="chat room id"
                                class="input input-bordered"
                                bind:value={chatRoomId}
                                required
                            />
                        </div>
                        <div class="form-control mt-6">
                            <button
                                class="btn btn-primary"
                                on:click={joinChatRoom}>Join</button
                            >
                        </div>
                    </div>
                </div>
            </div>
        </div>
    {:else}
        <div
            id="chat"
            class="m-4 p-4 border-2 border-primary rounded-xl h-96 overflow-y-scroll scrollbar-thin scrollbar-thumb-primary scrollbar-thumb-rounded-xl"
        ></div>
        <div class="m-4 flex">
            <div class=" w-full me-4">
                <input
                    type="text"
                    placeholder="Type here"
                    class="input input-bordered input-primary w-full"
					bind:value={msgContent}
                />
            </div>
            <button class="btn btn-primary" on:click={sendMessage}>Send</button>
        </div>
        <div class="m-4">
            <button class="btn btn-error w-full" on:click={leaveChatRoom}>Leave Chat Room</button>
        </div>
    {/if}
</main>
