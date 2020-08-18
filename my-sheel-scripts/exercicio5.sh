#!/bin/bash

echo "Insira o caminho"
read CAMINHO

if [ -f "$CAMINHO" ]
then 
	echo "É um arquivo!"
elif [ -d "$CAMINHO" ]
then
	echo "É um diretório"
else 
	echo "é outra coisa"
fi
ls -l $CAMINHO
