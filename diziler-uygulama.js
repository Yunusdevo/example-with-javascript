var now= 2022;
var marka=["opel","mercedes","audi","ford","toyata"];
var years= ['2018','2022','2015','2016','2019']
for(i=0;i<marka.length;i++){
    console.log(marka[i]);
}
/*console.log(marka[0],years[0],"model ve", now-years[0], "yaşında bir araçtır");
console.log(marka[1],years[1],"model ve", now-years[1], "yaşında bir araçtır");
console.log(marka[2],years[2],"model ve", now-years[2], "yaşında bir araçtır");
console.log(marka[3],years[3],"model ve", now-years[3], "yaşında bir araçtır");
console.log(marka[4],years[4],"model ve", now-years[4], "yaşında bir araçtır");*/
/*for(i=0;i<marka.length;i++){
    console.log([marka[i]+" "+years[i]+" model ve "+(now-years[i])+" yaşında bir araçtır."]);
}*/
var model= prompt('model giriniz:');
var year= prompt('arabanın yılını giriniz:');
marka.push(model);
years.push(year);
for(i=0;i<marka.length;i++){
    console.log([marka[i]+" "+years[i]+" model ve "+(now-years[i])+" yaşında bir araçtır."]);
}
