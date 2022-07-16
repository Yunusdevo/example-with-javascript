var personel={
    ad:'ali',
    soyad:'yılmaz',
    cinsiyet:'erkek',
    telefon:'02125696969',
    adres:'bursa',
    meslek:'yazılım mühendisi',
    diller:['ingilizce','almanca'],
    hobiler:['sinema', 'spor','kitap okuma']
};
console.log(personel.diller.length);

for(i=0;i<personel.hobiler.length;i++){
console.log(personel.hobiler[i]);
}

personel.hobiler.forEach(function(hobi){
    console.log(hobi);
});

var personeller=[

    {
        ad:'mehmet',
        soyad:'yılmaz',
        cinsiyet:'erkek',
        telefon:'02125696969',
        adres:'hatay',
        meslek:'yazılım mühendisi',
        diller:['ingilizce','almanca'],
        hobiler:['sinema', 'spor','kitap okuma']
    },
    {
        ad:'furkan',
        soyad:'yılmaz',
        cinsiyet:'erkek',
        telefon:'02125696969',
        adres:'diyarbakır',
        meslek:'makine mühendisi',
        diller:['ingilizce','almanca'],
        hobiler:['sinema', 'spor','kitap okuma']
    },
    {
        ad:'zeynep',
        soyad:'yılmaz',
        cinsiyet:'erkek',
        telefon:'02125696969',
        adres:'bursa',
        meslek:'personel müdürü',
        diller:['ingilizce','almanca'],
        hobiler:['sinema', 'spor','kitap okuma']
    }
];
console.log(personeller.length);

personeller.forEach(function(personel){
    console.log(personel.ad+' '+personel.soyad);
});