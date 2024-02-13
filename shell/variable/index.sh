vech=Bus
echo "$vech"

Now=$(date)
echo $Now

echo $grandslam

echo ${grandslam=Maria Sharapova}

# If the variable is an empty, you can assign a default value. The syntax is: [ := ]

echo ${arg:=Foo}
bank=HSBC
echo ${bank:=Citi}
unset bank
echo ${bank:=Citi}
echo ${bank= SBI}
echo ${bank= HDFC}
unset bank
echo ${bank=ICICI}
