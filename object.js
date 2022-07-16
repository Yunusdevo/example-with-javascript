var opel={
    marka: 'opel',
    model: 'corsa',
    yıl: '2015',
    renk: 'mavi',
    otomatik: 'true'
};
console.log(opel);
console.log(opel.model);
console.log(opel.otomatik);

var toyota= new Object();
toyota.marka= 'toyota';
toyota.model='crolla';
toyota.yıl= '2020';
toyota.renk='sarı';
toyota.otomatik='true';
console.log(toyota);

var arabalar=[
   { marka: 'opel',
    model: 'corsa',
    yıl: '2015',
    renk: 'mavi',
    otomatik: 'true'},
{    marka: 'tofaş',
    model: 'şahin',
    yıl: '1999',
    renk: 'beyaz',
    otomatik: 'false'
}
];
console.log(arabalar[0].renk);
for(var i=0;i<arabalar.length;i++){
console.log(arabalar[i].marka);
}
