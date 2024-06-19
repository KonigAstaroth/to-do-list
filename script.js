let IdCounter = 0;
const input = document.querySelector('input[type="text"]');
userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    addTask();
});
    
let addTask = ()=>{
    IdCounter ++;
 
    let newValue =input.value;
    list.innerHTML += `
    <div class="task-container" id="$(IdCounter)">
        <label>
            <input type="checkbox">
            ${newValue}
        </label>
        <img src="/bin.png" class="clBtn">
    </div>
     `  
     input.value= ''; 
     updatestats();
}; 

list.addEventListener('click', (event)=>{
    if(event.srcElement.nodeName == 'INPUT'){
        updatestats();
    }else if(event.srcElement.nodeName == 'IMG'){
        deleteTask(event.srcElement.parentNode.id);
       }
   
});

let updatestats = ()=>{
    let element = list.querySelectorAll('div');
    let checkbox = list.querySelectorAll('input[type="checkbox"]:checked');
    stats.innerHTML = `<p>Tareas agregadas: ${element.length} / Completadas: ${checkbox.length}</p>`;
}

let deleteTask = (id)=>{
    let taskToDelete = document.getElementById(id);
    list.removeChild(taskToDelete);
    updatestats();
}