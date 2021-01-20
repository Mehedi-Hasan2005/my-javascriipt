var mangoPrich = 155;
console.log(typeof  mangoPrich);


var eidGift ="rose";
console.log(eidGift);

var kotha ="Basi kotha bolo na .";
console.log(kotha);


var isNormal = true;
console.log(typeof isNormal);

var isHot = false;
console.log(typeof isHot)

var promise ="I Promise I Will HARD WORK.";
console.log(promise.indexOf("HARD"));


var promise ="I Promise I Will HARD WORK.";
console.log(promise.split(" "));
        // Goyoug Korar Niom
var price1 = 60;
var price2 = 41;
var total  = price1 + price2 ;
console.log(total);
        // Biyoug Korar niom
var price3 = 300;
var price4 = 200;
var total2  = price3 - price4 ;
console.log(total2);

            // Gon Korar Niom
var price5 = 5;
var price6 = 5;
var total3  = price5 * price6 ;
console.log(total3);
        // Vag Thaker Niom
var price7 =  60;
var price8 =  40;
var total4 = price7 / price8;
console.log(total4);

        // Vag Shes Dhaker Niom
var price9 =  43;
var price10 =  6;
var total5 = price9 % price10;
console.log(total5);

var pri = 50;
pri++;
console.log(pri);

var foodyes = 50;
if (foodyes == 45) {
        
        console.log("I Will Cacthing Foodyes");
}

else{

console.log("Sorry viya I'M Not cacthing Foodyes");


}

var jobPaiso = true;
var savingAmount = 50000;

if (jobPaiso == true || savingAmount >20000) {
        console.log("Cholo amara gai");
}

else{

        console.log("Ame to Jabo Na");
};

var friendsAge = [15, 16, 17, 18];

var abidAge = friendsAge[1];

friendsAge[1] = 21;

console.log(abidAge);

friendsAge.push(19);

console.log(friendsAge.length);

var teline = ['kalam' , 'jamal', 'abid',];

teline.push('mehedi');

console.log(teline);


var bad = "mehedi"
console.log(bad)


function goodBoy(){

        console.log("ke koro viya")
        console.log("ame akhon gum ta jabo")
}

goodBoy();

function double(nums){
        var result = nums * 2;

        return result;
        


}

var frist = double(10);
var second =double(55);
var total = frist+second;
console.log(total);


// Inch TO Feet-- Coding Start 


function inToFet(inch){

        var feet = inch/12;

        return feet;
}

var ResultInToFet = inToFet(160);
console.log(ResultInToFet);

// Inch TO Feet End 

var namei = "Javed Akbor";

if (namei.length > 10 ){

        console.log(namei.length)
        namei= "Javed MiaVi";
}

console.log(namei);

//Ex-change number

var m =  5;
var n = 10;

[m, n] = [n, m];

console.log("after swap: m =", m, "n =", n);
//Ex-change number End

//Mojar Matha See You 
var num = 2.3;
var result66 = Math.floor(num);
var result67 = Math.ceil(num);
var result68 = Math.round(num);
console.log(result66);
console.log(result67);
console.log(result68);
//Ludo Khalbo javaScript Diya
var nam = Math.random()*6;
var output = Math.round(nam);
console.log(output);

//Khida boro Thar Somadan Javascript  Diya.

var business = 850;
var minister = 151;
var  socib = 950;
 if ( business> minister){

         if (business>socib){
                console.log("Business is Biger");
        }
        else{
                console.log("Ara Amar socib is Biger");        }
      
 }

else{
        console.log("minister is biger");
}

//hight number khar tomadar vathota satha korbo js diya .

var marks = [42, 43, 65, 76, 98, 33, 45 ];
var max = marks[0];
for(var i = 0; i< marks.length; i++){
        var element=marks[i];
        if(element > max){
                max = element;
        }
}

console.log("Highest number is : ", max);

//Total number bai korba js diya.

var boi = [40, 43, 65, 76, 98, 33, 45 ];
var sum = 0;
for(var i = 0; i< boi.length; i++){
        var elements = boi[i];
        sum = sum + elements;
        
}
console.log("Total number  : ", sum);


var dublicat = [2, 2, 4,5 ,6, 7, 8, 9, 7, 6,5,4,67,44,33,22,44,33,99,999,];

var hog = [];

//Dublicat ka kivaba remove korbo js diya.

for(var i = 0; i < dublicat.length; i++ ){

        var elementio = dublicat[i];
        var indexb = hog.indexOf(elementio);
        if(indexb == -1){
                hog.push(elementio);
        }


}
console.log(hog);

//Word count ki vaba korbo js diya.

var speech = "Hi   ame   mehedi   hasan.   iam   a  web   devloper.  good   boy";
var count = 0;
for(var i=0; i < speech.length; i++){

        var char = speech[i];
        if(char == " " && speech[i-1] != " "){
                count++;
        }
}
count++;
console.log(count);

//Word count end.


//Reverse A String.

function reverseString(str){

        var reverse = "";
        for(var i = 0; i<str.length; i++){
                var char = str[i];
                reverse = char + reverse ;

        }
        return reverse;
}

var bokta = "mehedi hasan";
var foraline = reverseString(bokta);
console.log(foraline);
