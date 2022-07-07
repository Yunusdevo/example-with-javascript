/*var i=0;
for(i=10;i<=100;i++){
    console.log(i);
}*/
/*for(i=10;i<=100;i++){;
if(i%5==0){
    console.log(i);
}
}*/
var username= prompt('Kullanıcı Adı Giriniz: ');
var password= prompt("şifre giriniz:");
var i= false;
while(i==false){
if(username=="emre" && password== "123"){
    console.log("oturum açıldı.");
    i= true;
}else{
    console.log("Kullanıcı adı veya şifre yanlış.");
}
}

