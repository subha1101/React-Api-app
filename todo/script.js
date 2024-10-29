const myInput = document.getElementById("myInput");
const myUL = document.getElementById("myUL");

function addTask() {
    const taskText = myInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task");
      return; 
    }
  
    const li = document.createElement("li");
    li.classList.add("list-group-item"); 
  
    
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("form-check-input");
    checkbox.addEventListener("change", function() {
        saveData(); 
        li.classList.toggle("checked"); 
    });
  
    
    const taskSpan = document.createElement("span");
    taskSpan.classList.add("task-text"); 
    taskSpan.textContent = taskText;
  

    const editSpan = document.createElement("span");
    editSpan.classList.add("edit");
    editSpan.innerHTML = '<i class="fa-solid fa-pen-to-square me-3" style="color:purple;"></i>'; // Use innerHTML for the icon
    editSpan.addEventListener("click", function() {
      editTask(editSpan);
    });

    
    const closeSpan = document.createElement("span");
    closeSpan.classList.add("close");
    closeSpan.textContent = "×";
    closeSpan.addEventListener("click", function() {
      li.remove();
      saveData(); 
    });
  
   
    li.appendChild(checkbox);
    li.appendChild(taskSpan);
    li.appendChild(editSpan); 
    li.appendChild(closeSpan); 
    myUL.appendChild(li);
    
    myInput.value = ""; 
    saveData(); 
  }

function editTask(editSpan) {
    const li = editSpan.parentElement;
    const taskText = li.querySelector('.task-text');
    const originalText = taskText.textContent;


    if (li.querySelector('input[type="text"]')) {
        li.removeChild(li.querySelector('input[type="text"]')); 
    } else {
        const input = document.createElement("input");
        input.type = "text";
        input.value = originalText;
        input.classList.add("form-control"); 
        taskText.textContent = ""; 

        li.insertBefore(input, taskText.nextSibling); 
        input.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                saveEditedItem(input, li); 
            }
        });
    }
}

function saveEditedItem(input, li) {
    const taskText = li.querySelector('.task-text'); 
    taskText.textContent = input.value; 
    li.removeChild(input); 
    saveData(); 
}

function saveData() {
    const toDoListItems = [];
    const listItems = myUL.querySelectorAll('li');

    listItems.forEach(item => {
        const isChecked = item.querySelector('.form-check-input').checked; 
        const taskText = item.querySelector('.task-text').textContent;
        toDoListItems.push({ text: taskText, checked: isChecked });
    });

    localStorage.setItem('toDoList', JSON.stringify(toDoListItems));
}

function loadData() {
    const savedData = localStorage.getItem('toDoList');
    if (savedData) {
        const toDoListItems = JSON.parse(savedData);
        toDoListItems.forEach(item => {
            const li = document.createElement("li");
            li.classList.add("list-group-item"); 

            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.classList.add("form-check-input");
            checkbox.checked = item.checked; 
            checkbox.addEventListener("change", function() {
                li.classList.toggle("checked");
                saveData(); 
            });

            const taskSpan = document.createElement("span");
            taskSpan.classList.add("task-text"); 
            taskSpan.textContent = item.text;

            const editSpan = document.createElement("span");
            editSpan.classList.add("edit");
            editSpan.innerHTML = '<i class="fa-solid fa-pen-to-square me-3" style="color:purple;"></i>'; // Use innerHTML for the icon
            editSpan.addEventListener("click", function() {
                editTask(editSpan);
            });

            const closeSpan = document.createElement("span");
            closeSpan.classList.add("close");
            closeSpan.textContent = "×";
            closeSpan.addEventListener("click", function() {
                li.remove();
                saveData();
            });

            li.appendChild(checkbox);
            li.appendChild(taskSpan);
            li.appendChild(editSpan);
            li.appendChild(closeSpan); 
            myUL.appendChild(li);
        });
    }
}

loadData();
