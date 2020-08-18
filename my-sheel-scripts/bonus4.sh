#!/bin/bash

#DAY=`date +%Y-%m-%d`
#DIRETORIO=`ls /home/vanessa/test_shell`

#for IMAGE in `ls *.png`
#do
	#if [ "$IMAGE" == `ls *.png` ]
	#then 
		#mv $IMAGE `date +%Y-%m-%d`-$IMAGE
	#fi
#done

DIRETORIO=$1
EXTENSAO=$2
DAY=`date +%Y-%m-%d`

cd $DIRETORIO

for IMAGE in `ls *.$EXTENSAO`
do
	echo "O arquivo se chamava $IMAGE, e passará a se chamar $DAY-$IMAGE"
	mv $IMAGE $DAY-$IMAGE
done
