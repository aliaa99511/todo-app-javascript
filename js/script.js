



var plus=document.getElementById("plus");
var inputt=document.querySelector("input");
var items=document.getElementById("items");


plus.addEventListener("click",function(){

    var mydiv=document.createElement("div");
    mydiv.style="word-break: break-all;display: flex;justify-content: space-between;border-bottom: 1px solid #80808029;margin-top: 13px;";

    var mypara=document.createElement("p");
    mypara.style="font-size: 19px;margin-bottom: 15px;margin-right: 5px;"
    mydiv.appendChild(mypara)

    var myicon=document.createElement("img");
    myicon.setAttribute("src","images/trash.png");
    myicon.style="margin-bottom: 15px;margin-right: 5px;cursor: pointer;width: 26px;height: 29px;";
    mydiv.appendChild(myicon);


    items.appendChild(mydiv);

    mypara.innerHTML=inputt.value;

    inputt.value=null;

    
       
    myicon.addEventListener("click",function(){
        mydiv.style.display="none";
    })
        

});



/*    
localStorage.setItem("todo",inputt.value);
document.body.classList.add(localStorage.getItem("todo"));
*/



/*
var plus=document.getElementById("plus");
var inputt=document.querySelector("input");
var items=document.getElementById("items");


plus.addEventListener("click",function(){

    var mydiv=document.createElement("div");
    mydiv.style="display: flex;border-bottom: 1px solid #80808029;margin-top: 13px;";

    var myinput=document.createElement("input");
    myinput.setAttribute("type","text");
    myinput.setAttribute("disabled","");
    myinput.style="width: 300px;font-size: 19px;margin-bottom: 15px;";
    mydiv.appendChild(myinput);

    var myedit=document.createElement("img");
    myedit.setAttribute("src","images/edit.png");
    myedit.style="margin-bottom: 15px;cursor: pointer;width: 26px;height: 29px;";
    mydiv.appendChild(myedit);

    var myicon=document.createElement("img");
    myicon.setAttribute("src","images/trash.png");
    myicon.style="margin-bottom: 15px;cursor: pointer;width: 26px;height: 29px;";
    mydiv.appendChild(myicon);


    items.appendChild(mydiv);

    myinput.value=inputt.value;

    inputt.value=null;

    
       
    myicon.addEventListener("click",function(){
        mydiv.style.display="none";
    })
        
    myedit.addEventListener("click",function(){
        myinput.removeAttribute("disabled");
        myinput.setAttribute("autofocus","on")
    })

});*/