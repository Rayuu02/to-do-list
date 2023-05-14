{
    const tasks = [
        {
            content: "zadanie 1",
            done: false,
        },
        {
            content: "zadanie 2",
            done: true,
        },
    ];

 const addNewTask = (newTaskContent) => {

    tasks.push({
        content: newTaskContent,
    });
    render();
 };

 const removeTask = (taskIndex) => {
    tasks.splice(taskIndex, 1);
    render();
 }

 const toggleTaskDone = (taskIndex) => {
    task[taskIndex],done = !tasks[taskIndex].done;
    render();
 }
 const bindEvents = () => {
    const removeButtons = document.querySelectorAll(".js-remove");

    removeButtons.forEach((removeButton, index) => {
        removeButton.addEventListener("click", () => {
            removeTask(index);
        });
    });

    const toggleDoneButtons = document.querySelectorAll(".js-done");

    toggleDoneButtons.forEach((toggleDoneButtons, index) => {
        toggleDoneButtons.addEventListener("click", () => {
            toggleTaskDone(index);
        });
    });
 }

 const render = () => {
    let htmlString = "";

    for (const task of tasks) {
        htmlString += `
    <li class="list__item">
    <button class="js-done form__button--done">${task.done ? "✔" : ""}</button>
    <span class="list__item--text ${task.done ? " list__item--done" : ""}">${task.content}</span>
    <button class="js-remove form__button--remove">🗑️</button>
    </li>
    `;
    }
    document.querySelector(".js-tasks").innerHTML = htmlString;
    bindEvents();
};


    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskInput = document.querySelector(".js-newTask");
        const newTaskContent = newTaskInput.value.trim();

        if(newTaskContent !== "") {
         addNewTask(newTaskContent);
         newTaskInput.value = "";
        }
        newTaskInput.focus();
     };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);
    };

    init();
 

}