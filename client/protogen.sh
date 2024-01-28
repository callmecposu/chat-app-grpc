npx grpc_tools_node_protoc \
--js_out=import_style=commonjs:./src/protos/out \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/protos/out \
--proto_path=./src/protos/src \
./src/protos/src/chat/chat.proto