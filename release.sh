#!/usr/bin/env bash

PACKAGES=(java.io
  java.lang
  java.lang.native.operator
  java.lang.reflect)

PACKAGE_VERSION=$(node -p -e "require('./package.json').version")

for PACKAGE in ${PACKAGES[@]}
do

  SRC_DIR=`pwd`/packages/${PACKAGE}
  DST_DIR=`pwd`/dist/packages-dist/${PACKAGE}

  PACKAGE_SRC=${SRC_DIR}/package.json
  PACKAGE_DST=${DST_DIR}/package.json

  while read line
  do  

    echo ${line/'${PACKAGE_VERSION}'/$PACKAGE_VERSION}
  
  done < $PACKAGE_SRC > $PACKAGE_DST

  npm publish "${DST_DIR}"

done
