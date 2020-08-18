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

for IMAGE in `ls *.png`
do
	mv $IMAGE `date +%Y-%m-%d`-$IMAGE
done
