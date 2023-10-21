const cl=console.log;

const submitForm=document.getElementById("ListForm");
const getTodoList=document.getElementById("todoList");
const submitbtn=document.getElementById("submitbtn");
const updatebtn =document.getElementById("Updatebtn"); 
const userDeatail=document.getElementById("userDeatail");



const onEdit=(ele)=>{
let getEditId = ele.parentNode.parentNode.id
cl(getEditId)
let getobj=arry.find(todo=>{
   return  todo.Userid == getEditId
})
// cl(getobj)
todoList.value =getobj.name
submitbtn.classList.add("d-none");
updatebtn.classList.remove("d-none")

}

let arry=[{
    name:"sachin",
    Userid: 1,
}]
const tempelt=(element)=>{
    let result=` <ul class="list-group">`;
    element.forEach(ele=>{
        result+=`<li class="list-group-item d-flex justify-content-between" id="${ele.Userid}"> 
                  <span> ${ele.name}</span>
                  <span>
                  <button class="btn btn-primary" type="button" onclick="onEdit(this)"> Edit</button>
                     <button class="btn btn-danger"type="button"> Delete</button>
                    </span>
                    </li> `
    });
    result += `</ul>`
    // cl(result)
    userDeatail.innerHTML=result
}

if(localStorage.getItem('todoarry')){
    arry=JSON.parse(localStorage.getItem('todoarry'))
};

tempelt(arry)
// cl(arry)
const onsubmit=((eve,)=>{
    eve.preventDefault()
  
    let obj={
        name:getTodoList.value,
        Userid: uuidv4()
      
    }
    arry.push(obj)
    localStorage.setItem('todoarry',JSON.stringify(arry))
    cl(obj)
    // tempelt(arry)
    eve.target.reset()
})

tempelt(arry);
submitForm.addEventListener("submit",onsubmit)


function uuidv4() { 
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
    .replace(/[xy]/g, function (c) { 
        const r = Math.random() * 16 | 0,  
            v = c == 'x' ? r : (r & 0x3 | 0x8); 
        return v.toString(16); 
    }); 
}

















