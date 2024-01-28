npx grpc_tools_node_protoc \
--js_out=import_style=commonjs,binary:./protos/out \
--ts_out=./protos/out \
--grpc_out=./protos/out \
--proto_path=./protos/src \
./protos/src/chat/chat.proto
# clear the src protos in the client folder
rm -r ../client/src/protos/src
# copy the proto source files to the client folder
cp -r ./protos/src ../client/src/protos
# run the client protogen script
cd ../client
./protogen.sh