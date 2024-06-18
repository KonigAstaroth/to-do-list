userInput.addEventListener('submit', (event)=>{
    event.preventDefault();
    addtask();
});
    
let addtask = ()=>{
    list.innerHTML += `
    <div id ="list" class="list-container">

            <div class="task-container" id="1">
                <label>
                    <input type="checkbox">
                    Tarea 1
                </label>
            </div>

        </div>
     `   
};