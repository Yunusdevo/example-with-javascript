/*function b (sayı){
    if(sayı%2==0){
        return true;
    }else{
        return false;
    }
}
var sayı=b(14);
console.log(sayı);*/
55

/*var sayi = prompt("Lütfen bir sayı giriniz.");
    
        var faktoriyel = 1;
    
        if(sayi < 0) {
            console.log("Lütfen pozitif bir tamsayı giriniz!")
        } else{
    
            for(let i = 1; i <= sayi; i++){
                faktoriyel = faktoriyel * i;
            }
            console.log("Faktöriyel : " + faktoriyel);
        }*/

        var marka= ['Nike','adidas','puma','lumberjack'];
        var modeller=['revulation','sneaker','a95','j138'];
        function yazdır(ayakkabı){
            ayakkabı.forEach(function(item){
                console.log(item);
            });
        }
        yazdır(marka);
        yazdır(modeller);