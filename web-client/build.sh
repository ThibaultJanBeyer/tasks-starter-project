#!/bin/bash

echo '====== Docker image builder ======'
echo
echo '*** STEP 1. Building ***'
echo

CONFIG="./package.json"
IMG_NAME=`cat ${CONFIG} | grep '"name"' | awk 'BEGIN{FS="\""} {print $4}'`
IMG_VER=`cat ${CONFIG} | grep '"version"' | awk 'BEGIN{FS="\""} {print $4}'`

echo "[START] Building Package: tsp/${IMG_NAME}:${IMG_VER}"

docker build . -f ./dockerfile -t tsp/${IMG_NAME}:latest -t tsp/${IMG_NAME}:${IMG_VER}

echo "[END] Building Package: tsp/${IMG_NAME}:${IMG_VER}"
