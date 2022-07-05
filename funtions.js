let number1 = document.getElementById("number1");
let number2 = document.getElementById("number2") ; 
let number3 = document.getElementById("number3") ;
let number4 = document.getElementById("number4") ;
let number5 = document.getElementById("number5") ;
let number6 =document.getElementById("number6") ; 
let number7 = document.getElementById("number7") ;
let number8 = document.getElementById("number8") ;
let number9 =document.getElementById("number9") ;
let number0 = document.getElementById("number12");
let resultat = document.getElementById("resultat");
let supp_one10 = document.getElementById("supp_one110") ;
let supp_one_1 = document.getElementById("supp_one_1");
let supp_one = document.getElementById("supp_one");
let supp_one99 = document.getElementById("supp_one99");
let supp_one777 = document.getElementById("supp_one777");
let supp_one888 = document.getElementById("supp_one888");
let supp_one1 = document.getElementById("supp_one1");
let supp_one10_p = document.getElementById("supp_one10_");
resultat.value="" ;
let resultat_final=0 ;
number1.onclick = function(){
    if(resultat.value=="")
    {
        resultat_final=1;
        resultat.value="1" ;
        console.log(5) ;
    }else{
        resultat.value = resultat.value + "1" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
number2.onclick = function(){
    if(resultat.value=="")
    {
        resultat_final=2;
        resultat.value="2" ;
        console.log(5) ;
    }else{
        resultat.value = resultat.value + "2" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
number3.onclick = function(){
    if(resultat.value=="")
    {
        resultat_final=3;
        resultat.value="3" ;
    }else{
        resultat.value = resultat.value + "3" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
number4.onclick = function(){
    if(resultat.value=="")
    {
        resultat_final=4;
        resultat.value="4" ;
    }else{
        resultat.value = resultat.value + "4" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
number5.onclick = function(){
    if(resultat.value=="")
    {
        resultat_final=5;
        resultat.value="5" ;
    }else{
        resultat.value = resultat.value + "5" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
number6.onclick = function(){
    if(resultat.value=="")
    {
        resultat_final=6;
        resultat.value="6" ;
    }else{
        resultat.value = resultat.value + "6" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
number7.onclick = function(){
    if(resultat.value=="")
    {
        resultat_final=7;
        resultat.value="7" ;
    }else{
        resultat.value = resultat.value + "7" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
number8.onclick = function(){
    if(resultat.value=="")
    {
        resultat_final=8;
        resultat.value="8" ;
    }else{
        resultat.value = resultat.value + "8" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
number9.onclick = function(){
    if(resultat.value=="")
    {
        resultat_final=9;
        resultat.value="9" ;
    }else{
        resultat.value = resultat.value + "9" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
number0.onclick = function () {
    if(resultat.value=="")
    {
        resultat_final=0;
        resultat.value="0" ;
    }else{
        resultat.value = resultat.value + "0" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
//////////////////////////////////////////////////////
supp_one10.onclick = function() {
    if(resultat.value=="")
    {
        window.alert("vous devez saisir un nombre");
    }else{
        resultat.value = resultat.value + "+" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
///////////////////////////////////////////////////////
supp_one10_p.onclick = function() {
    if(resultat.value=="")
    {
        window.alert("vous devez saisir un nombre");
    }else{
        resultat.value = resultat.value + "%" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
///////////////////////////////////////////////////////
supp_one_1.onclick = function() {
    if(resultat.value=="")
    {
        window.alert("vous devez saisir un nombre");
    }else{
        resultat.value = resultat.value + "-" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
/////////////////////////////////////////////////////////
supp_one.onclick = function() {
    if(resultat.value=="")
    {
        window.alert("vous devez saisir un nombre");
    }else{
        resultat.value = resultat.value + "*" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
//////////////////////////////////////////////////////////
supp_one99.onclick = function() {
    if(resultat.value=="")
    {
        window.alert("vous devez saisir un nombre");
    }else{
        resultat.value = resultat.value + "/" ;
        resultat_final = +resultat.value;
    }
resultat.style.fontSize ="24px" ;
resultat.style.color="black" ;
}
///////////////////////////////////////////////////////////
let egal = document.getElementById("egal");
egal.onclick = function() {
    let total = resultat.value;
    let value1 ;
    let value2 ;
    for(let i=0;i<total.length;i++)
    {
        if (total[i] == "+")
        {
            value1 = total.substr(0,i) ;
            value2 = total.substr(i+1);
            value1=+value1;
            value2=+value2 ;
            resultat.value = value1+ value2 ;
            break;
        }
        if (total[i] == "*")
        {
            value1 = total.substr(0,i) ;
            value2 = total.substr(i+1);
            value1=+value1;
            value2=+value2 ;
            resultat.value = value1* value2 ;
            break;
        }
        if (total[i] == "/")
        {
            value1 = total.substr(0,i) ;
            value2 = total.substr(i+1);
            value1=+value1;
            value2=+value2 ;
            resultat.value = value1/ value2 ;
            break;
        }
        if (total[i] == "-")
        {
            value1 = total.substr(0,i) ;
            value2 = total.substr(i+1);
            value1=+value1;
            value2=+value2 ;
            resultat.value = value1- value2 ;
            break;
        }
        if (total[i] == "%")
        {
            value1 = total.substr(0,i) ;
            value2 = total.substr(i+1);
            value1=+value1;
            value2=+value2 ;
            resultat.value = value1/ value2 ;
            break;
        }
    }
}
supp_one777.onclick =function() {
    resultat.value = "" ;
}
supp_one888.onclick = function() {
    resultat.value = "" ;
}
supp_one1.onclick = function() {
   let pp = resultat.value ;
   let rr = pp.substr(0,pp.length-1) ;
   resultat.value=rr  ; 
}
