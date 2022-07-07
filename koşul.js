var marka='opel';
var model= 'astra';
var otomatik= 'yes';

if(otomatik=='yes'){
    console.log('Evet araba Otomatik');
}else{
    console.log("araç otomatik değildir.");
}
otomatik = true;
if(otomatik){
    console.log(marka + ' ' + model + ' otomatik');
}
vites="1"; 
switch(vites){
    case "1":
    console.log('araç manuel');
    break;
    case "2":
    console.log('araç otomatik');
    break;
    default:
    console.log('yanlış değer');
}