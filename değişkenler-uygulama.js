var isim = prompt('Adınızı Giriniz');
var ogrno = prompt('Öğrenci numaranızı giriniz');
var cinsiyet= prompt('true');
var ders = prompt('Ders adı giriniz');
var not1= prompt('1. Sınavınızı giriniz');
var not2= prompt('2. Notunuzu giriniz');
var ortlama= (not1*0.4) + (not2*0.6);
console.log(ogrno + " numaralı " + isim + " isimli öğrencinin " + ders + " dersinden aldığı ortalama = " + ortlama);