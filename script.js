function Archive(){
var na=document.getElementById("name");
if(na.value =="")
   { alert("الرجاء إدخال الاسم");
na.focus();
return false;}
   var em=document.getElementById("em");
    var pos= em.value.search(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/);
if(pos!=0){
alert("الرجاء إدخال بريد الكتروني صحيح كما هو مكتوب في المثال");
em.focus();
return false;}
else
    return confirm("هل أنت متأكد من معلوماتك ؟");
}

var array=["imag/mps.jpg","imag/mti.jpg","imag/wwo.jpg","imag/obera4.jpg"];
var counter=0;
function nextimg(){
            counter++;
    if(counter>=array.length)
       { counter=0;}
document.getElementById("slide").src=array[counter];
setTimeout("nextimg()",4000);
}
function backimg(){
counter--;
if(counter<0)
    {counter=array.length-1;}
    document.getElementById("slide").src=array[counter];}
    setTimeout("nextimg()",4000);
