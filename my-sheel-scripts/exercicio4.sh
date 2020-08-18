#!/bin/bash

FILE="/home/vanessa/test_shell/exercicio1.sh"

if [ -e "$FILE" ]
then 
   echo "O caminho $FILE existe!"
fi
if [ -w "$FILE" ]
then
   echo "Voce tem permissao para editar em $FILE"
else
   echo "Você não foi autorizado a editar $FILE"
fi
