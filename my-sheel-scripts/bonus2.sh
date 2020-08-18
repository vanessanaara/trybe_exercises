#!/bin/bash

CAMINHO=$@

for FILE in $CAMINHO
do
	if [ -f "$FILE" ]
	then 
		echo "É um arquivo!"
	elif [ -d "$FILE" ]
	then
		echo "É um diretório"
	else 
		echo "é outra coisa"
	fi
	ls -l $FILE
done
