import grpc from 'grpc'
import { ChatServiceService } from './protos/out/chat/chat_grpc_pb'
import { ChatService } from './implementation'

const server = new grpc.Server()
server.addService(ChatServiceService, new ChatService())
server.bind('0.0.0.0:50017', grpc.ServerCredentials.createInsecure())
console.log('Server now listening on port 50017...')
server.start()