var marka=["opel","mercedes","audi","ford","toyata"];
var model=new Array("corsa","c180","A3","focus","yaris");
console.log(marka);
console.log(model);
console.log(marka[1]);
console.log(model[1]);
model[0]= "astra";
console.log(model);

var auris= ["toyata","hb",42,"true"];
auris.push('blue');
auris.unshift('hb');
auris.pop();
auris.shift();
console.log(auris);
for(i=0; i<marka.length;i++){
    console.log(marka[i]);
}
if (marka.indexOf('opel')!==-1){
console.log('bulundu');
}else{
    console.log('bulunamadı')
}