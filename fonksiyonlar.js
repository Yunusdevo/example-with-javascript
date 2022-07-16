/*function topla(a,b){
return a+b;
}
var sonuc= topla(10,20);
console.log(sonuc);
var sonuc= topla(100,20);
console.log(sonuc);*/

var now=2018;
function yas (yashesapla){
return now-yashesapla;
}
var ahmet =yas(1960);
var ali=yas(1999);

console.log(ahmet);
console.log(ali);

function emeklilikhesapla(ad,yas){
    var kullaniciyas= yas;
    var emeklilik=65-kullaniciyas;
    if (emeklilik>0){
        console.log(ad + ' ' + emeklilik + ' yıl sonra emekli olabilir');
    }else{
        console.log(ad + ' zaten' + (emeklilik*-1) + ' yıl önce emekli olmuş');
    }
}
emeklilikhesapla('yunus',60);
