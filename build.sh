#!/usr/bin/env bash

PACKAGES=(java.io
  java.lang
  java.lang.native.operator
  java.lang.reflect)

TSC=`pwd`/node_modules/.bin/tsc
$TSC -p tsconfig.prod.json 

ROLLUP=`pwd`/node_modules/.bin/rollup

for PACKAGE in ${PACKAGES[@]}
do
  SRC_DIR=`pwd`/packages/${PACKAGE}
  DST_DIR=`pwd`/dist/packages-dist/${PACKAGE}

  ENTRY=${SRC_DIR}/index.ts
  PACKAGE=${SRC_DIR}/package.json

  MODULES_DIR=${DST_DIR}/@j2se-js
  ES20155_DST=${MODULES_DIR}/${PACKAGE}.js
  ES5_DST=${MODULES_DIR}/${PACKAGE}.es5.js

  BUNDLES_DIR=${DST_DIR}/bundles
  UMD_DST=${BUNDLES_DIR}/${PACKAGE}.umd.js
  UMDMIN_DST=${BUNDLES_DIR}/${PACKAGE}.umd.min.js  

  $ROLLUP -c -i "${ENTRY}" -o "${ES20155_DST}" --environment es2015 --name "${PACKAGE}"
  $ROLLUP -c -i "${ENTRY}" -o "${ES5_DST}" --environment es5 --name "${PACKAGE}"
  $ROLLUP -c -i "${ENTRY}" -o "${UMD_DST}" --environment umd --name "${PACKAGE}"
  $ROLLUP -c -i "${ENTRY}" -o "${UMDMIN_DST}" --environment min --name "${PACKAGE}"

done
