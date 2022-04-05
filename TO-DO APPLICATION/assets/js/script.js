const toDo = document.getElementById('form-control');
const toDoUl = document.getElementById('toDo-ul');

function addTask() {
    if (toDo.value.trim() === '') {
        alert("Enter a Task !");
    }
    else{
        console.log(toDo.value.trim());
        const liTag = document.createElement('li');
        const spanText = document.createElement('span');
        const textNode = document.createTextNode(toDo.value.trim());
        spanText.appendChild(textNode);
        spanText.addEventListener('click', (e) => {
            console.log(e.target);
            e.target.classList.toggle('done');
        })
        const spanClose = document.createElement('span');
        spanClose.classList.add('close');
        spanClose.innerHTML = '&times;' ;
        spanClose.addEventListener('click', (e) => {
            console.log(e.target.parentElement);
            const li = e.target.parentElement;
            li.parentElement.removeChild(li);
        })
        liTag.appendChild(spanText);
        liTag.appendChild(spanClose);
        toDoUl.appendChild(liTag);
        toDo.value = '' ;

        
    }
}
