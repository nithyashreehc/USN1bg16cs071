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


var tips=[],bils=[];
function calculatetips(bill)
{
    if(bill<50)
    {
    tip=bill*(20/100);
}
else if(bill<200 && bill>50)
{
    tip=bill*(15/100);

}
else{
    tip=bill*(10/100);
}
tips.push(tip);
bill=Number(bill)+Number(tip);
bils.push(bill);
}
calculatetips('124');
calculatetips('48');
calculatetips('268');
console.log(tips);
console.log(bils);



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
//addevent listner example
//document.getElementById('btn')=changeOnMouseOver;
//document.getElementById('btn')=changeOnMouseOut;
var but =document.getElementById('btn');
but.addEventListener('mouseover',changeOnMouseOver);
but.addEventListener('mouseout',changeOnMouseOut);

function changeOnMouseOver(){
    this.style.background="red"
}

function changeOnMouseOut(){
    this.style.background="blue"
}
//query selctor for text manupilation
document.querySelector("#hid").textContent="java script";
