//decision majking
/*var age=18;
if(age<18){
    console.log("minor");
}
else if(age>=18){
    console.log("major");
}
//con?true:false
age>=18?console.log("major"): console.log("minor");*/
//function
/*function nithya(fname,lname)
{
    console.log(fname+''+lname);

}

nithya('shree','hc');*/
//array
/*var names=['nithya','ranjana','nidhi'];
console.log(names);
console.log(names.length);

names.push("sri");

names.unshift("prema");
console.log(names);
names.pop();
names.push(2);
console.log(names);*/


var b1=124,b2=48,b3=268;
if(b1<50)
{
    var tip1=(20/100)*b1;
    console.log("20% of 124",tip1);
}
else if(50<b1<200)
{
     tip1=(15/100)*b1;
    console.log("15% of 124",tip1);
}
else{
     tip1=(10/100)*b1;
    console.log("10% of 124",tip1);
}

if(b2<50)
{
    var tip2=(20/100)*b2;
    console.log("20% of 48",tip2);
}
else if(50<b2<200)
{
     tip2=(15/100)*b2;
    console.log("15% of 48",tip2);
}
else{
     tip2=(10/100)*b2;
    console.log("10% of 48",tip2);
}
if(b3<50)
{
    var tip3=(20/100)*b3;
    console.log("20% of 268",tip3);
}
else if(50>b3>200)
{
     tip3=(15/100)*b3;
    console.log("15% of 268",tip3);
}
else{
     tip3=(10/100)*b3;
    console.log("10% of 268",tip3);
}



var totl_tip=[tip1,tip2,tip3];
console.log("total tip",totl_tip);
var tb1=b1+tip1;
var tb2=b2+tip2;
var tb3=b3+tip3;
var total_bill=[tb1,tb2,tb3];
console.log("total bill",total_bill);

/*
var mydetails={
    fname:'nithya',lname:'shre',dob:1998,family:['nithya','nidhi'],
    calcAge:function(birthYear){
        return 2019-birthYear;
    }
};
console.log(mydetails.fname);
var z='dob';
console.log(mydetails[z]);
mydetails.dob=1999;
console.log(mydetails);
//new object
var sri=new Object();
sri.fname='prema';
console.log(sri);

//
console.log('nithya is '+mydetails.calcAge(1998)+'years old');
*/


