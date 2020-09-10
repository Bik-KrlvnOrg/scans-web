#! /bin/sh

# GATEWAY BUILD
cd gateway &&

yarn copy:protos &&

yarn gen:proto && 

yarn build && 

yarn copy:proto-dist && cd - 


# REGISTER BUILD
cd microservice/register-svc &&

yarn copy:protos &&

yarn gen:proto && 

yarn build && 

yarn copy:proto-dist && cd -
