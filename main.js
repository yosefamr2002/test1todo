var title = document.querySelector("#title");
var desc = document.querySelector("#description");
var btn = document.querySelector("#btn");
var tasklist = document.querySelector(".tasklist");
var arrayoftasks = [];
//make array == local storage 

if(localStorage.getItem("tasks")){
    arrayoftasks=JSON.parse(localStorage.getItem("tasks"));
    addelementtotasklists(arrayoftasks);

}



//delete btn 
tasklist.addEventListener("click",function (e) {
    if(e.target.classList.contains("delete_btn")){
    deleteTaskWith(e.target.parentElement.getAttribute("id"));
    e.target.parentElement.remove() 
    }
    
})


//main
btn.addEventListener("click",function(){
    
    if(title.value!=="" && desc.value!==""){
        const todo = {
            id: Date.now(),
            title : title.value,
            desc : desc.value,
            done : false 
        }
        
        addtodotoarray(todo);
        addelementtotasklists(arrayoftasks);
    
        
        
        title.value=""
        desc.value=""  
    }else {
        window.alert("input is required")
    }
    
   
})



function addtodotoarray(todo){
    arrayoftasks.push(todo);
    addtolocalstorage(arrayoftasks);
}




//display tasks
function addelementtotasklists(arrayoftasks){
   
   //clear the tasklist
    tasklist.innerHTML = "";

    //appear the values is tasklist
    arrayoftasks.forEach((todo) => {
        //create div for task
        var div = document.createElement("div")
        div.id= todo.id;
        div.className = "task";
        div.appendChild(document.createTextNode(todo.title))
        //delte btn 
        var del = document.createElement("button");
        del.className = "delete_btn";
        del.appendChild(document.createTextNode("delete"));
        div.appendChild(del)
        
        tasklist.appendChild(div)        
    });
}

//add to local storage 
function  addtolocalstorage(arrayoftasks){
    localStorage.setItem("tasks",JSON.stringify(arrayoftasks))
}

function gitfromlocalstorage(){
    var data = localStorage.getItem("tasks")
    if(data){
        tasks =JSON.parse(data);
        
    }
}

function deleteTaskWith(id){

    arrayoftasks= arrayoftasks.filter((todo)=>todo.id != id )
    addtolocalstorage(arrayoftasks);
 }




 function logarray(){
    console.log(arrayoftasks);
    
 }
 logarray()
