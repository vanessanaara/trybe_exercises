#!/bin/bash

DIRETORIO=$1

if [ -d "$DIRETORIO" ]
then
	LINHAS=`ls -l $DIRETORIO | wc -l`
	echo "O $DIRETORIO tem $LINHAS arquivos"
else
	echo "$DIRETORIO não é um diretório"
fi

