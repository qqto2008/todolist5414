var todo=[];
window.addEventListener("load",function(){

  addCordovaEvents();
  loadTask(todo);
  document.getElementById("task-list").addEventListener("touchend",function(event){
    var id=event.target.getAttribute("id");
    var elm=document.getElementById(id);

  });
});
function createTask(){
  var currentTime=new Date();
  var id=currentTime.getTime();
  var name=document.getElementById("task-input").value;
  var status=0;
  if(name!==""){
    var taskitem={id:id,name:name,status:status};

    todo.push(taskitem);


  }else{

    document.getElementById("task-input").style.border="1px solid red";
    document.getElementById("task-input").placeholder="No Empty Task";
  }
  saveTask(todo);
  renderTask("task-list",todo);


}
function saveTask(todolist){
  if(window.localStorage){
    localStorage.setItem('liststorage',JSON.stringify(todolist));
  }
}
function renderTask(list,todolist){
  var listContainer = document.getElementById(list);
  saveTask(todolist);
  listContainer.innerHTML="";
  taskCounter=todolist.length;
  for(i=0;i<taskCounter;i++){
    task=todolist[i];
    taskRow=document.createElement("LI");
    taskName=document.createTextNode(task.name);
    taskRow.appendChild(taskName);
    taskRow.setAttribute("id",task.id);
    taskRow.setAttribute("data-status",task.status);
    listContainer.appendChild(taskRow);
  }

}
function renderFinishedTask(list,todolist){
  var listContainer = document.getElementById(list);
  saveTask(todolist);
  listContainer.innerHTML="";
  taskCounter=todolist.length;
  for(i=0;i<taskCounter;i++){
    task=todolist[i];
    taskRow=document.createElement("LI");
    taskName=document.createTextNode(task.name);
    taskRow.appendChild(taskName);
    taskRow.setAttribute("id",task.id);
    taskRow.setAttribute("data-status",task.status);
    listContainer.appendChild(taskRow);
  }
}
function loadTask(todolist){
  if(window.localStorage){
    try{
      if(JSON.parse(localStorage.getItem("liststorage"))){
        todo=JSON.parse(localStorage.getItem("liststorage"));
      }
    }
    catch(e){
      throw e;

    }

  }
  renderTask("task-list",todo);
}

function swipeLeft(){

}
function swipeRight(){

}
function changeStatus(taskId,status){
  if(status==1){

    for(i=0;i<liststorage.length;i++){
      if(todo[i].id==taskId){
        todo[i].status=status;
      }
    }
  }else if (status===0) {

    for(i=0;i<liststorage.length;i++){
      if(todo[i].id==taskId){
        todo[i].status=status;
      }
    }
  }
}
function addCordovaEvents(){
  document.addEventListener("deviceready",onDeviceReady,false);
}
function onDeviceReady(){
  document.addEventListener("pause",function(){
    saveList(todo);
  },false);
  document.addEventListener("resume",function(){
    loadList(todo);
  },false);
  document.addEventListener("backbutton",function(){
    saveList(todo);
    navigator.app.exitApp();
  },false);
}
var touchstartX = 0;
var touchstartY = 0;
var touchendX = 0;
var touchendY = 0;

var gesturedZone = document.getElementById('task-list');

gesturedZone.addEventListener('touchstart', function(event) {
    touchstartX = event.changedTouches[0].screenX;
    touchstartY = event.changedTouches[0].screenY;
}, false);

gesturedZone.addEventListener('touchend', function(event) {
    touchendX = event.changedTouches[0].screenX;
    touchendY = event.changedTouches[0].screenY;
    handleGesture();
}, false);

function handleGesture(callback) {

    if (touchendX < touchstartX) {

    }
    if (touchendX > touchstartX) {

    }

}
