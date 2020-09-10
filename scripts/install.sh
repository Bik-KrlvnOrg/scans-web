#! /bin/sh

# Install Dependencies

# API GATEWAY
cd gateway && yarn install && cd -

# REGISTER SERVICE
cd microservice/register-svc && yarn install && cd -