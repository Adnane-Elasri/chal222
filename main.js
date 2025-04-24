
const task = document.getElementById('tasksToDo')
const addBtn = document.getElementById('add')
const display = document.getElementById('todo')

addBtn.addEventListener('click', function(){
    const text = task.value;

    if (text == ""){
        alert('Fill the input!!');
        return;
    }


    const div = document.createElement('div');

    const span =  document.createElement('span');

    span.textContent = text

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'delete';

    deleteBtn.addEventListener('click', function(){
        div.remove('span');
        task.value = '';

    })


    const modifyBtn = document.createElement('button');
    modifyBtn.textContent = 'modify';


    modifyBtn.addEventListener('click', function(){
        const newText = prompt('insert modification', span.textContent);
        span.textContent = newText;
    })

    div.appendChild(span);
    div.appendChild(deleteBtn);
    div.appendChild(modifyBtn);

    display.appendChild(div);

    task.value = '';
})
