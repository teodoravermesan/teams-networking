import "./style.css";

let editId;
let allTasks = [];

const formSelector = "#tasksForm";

function getTasksAsHTML({ id, activity, domain, details, status }) {
  const displayUrl = status.startsWith('https/"') ? status.substring(19) : status;
  return `<tr>
  <td class = "select-row">
  <input type="checkbox" name="selected" value = "${id}" /></td>
  <td>${activity}</td>
  <td>${domain}</td>
  <td>${details}</td>
  <td>
  <a href ="${status}" target="_blank"> ${displayUrl}</a>
  </td>
  <td>
  <button type= "button" data-id= "${id}" class="action-btn delete-btn"> ♻ </button>
  <button type= "button" data-id= "${id}" class="action-btn edit-btn"> ✏️ </button>
  </td>
</tr>`;
}

let renderedTasks = [];
function areTasksEqual(renderedTasks, tasks) {
  if (renderedTasks === tasks) {
    return true;
  }
  if (renderedTasks.length === tasks.length) {
    const eq = renderedTasks.every((task, i) => task === tasks[i]);
    if (eq) {
      return true;
    }
  }
  return false;
}

function renderTasks(tasks) {
  if (areTasksEqual(renderedTasks, tasks)) {
    return false;
  }
  renderedTasks = tasks;
  const tasksHTML = tasks.map(getTasksAsHTML);
  $("#tasksTable tbody").innerHTML = tasksHTML.join("");
}

async function loadTasks() {
  const tasks = await loadTaskRequest();
  allTasks = tasks;
  renderTasks(tasks);
}

function startEdit(id) {
  editId = id;
  const task = allTasks.find(task => task.id === id);
  setValues(task);
}

function setValues({ activity, domain, details, status }) {
  $("input[name=activity").value = activity;
  $("input[name=domain").value = domain;
  $("input[name=details").value = details;
  $("input[name=status").value = status;
}

function updateTask(tasks, task) {
  return tasks.map(t => {
    if (t.id === task.id) {
      return {
        ...t,
        ...task
      };
    }
    return t;
  });
}

async function onSubmit(e) {
  e.preventDefault();
  mask(formSelector);
  const task = getTaskValues();
  if (editId) {
    task.id = editId;
    const status = await updateTaskRequest(task);
    if (status.success) {
      allTasks = updateTask(allTasks, task);
      renderTasks(allTasks);
      $("#tasksForm").reset();
    }
    unMask(formSelector);
  } else {
    createTaskRequest(task).then(status => {
      if (status.success) {
        task.id = status.id;
        allTasks = [...allTasks, task];
        renderTasks(allTasks);
        $("#tasksForm").reset();
      }
    });
  }
  unMask(formSelector);
}

function getTaskValues() {
  const activity = $("input[name=activity]").value;
  const domain = $("input[name=domain]").value;
  const details = $("input[name=details]").value;
  const status = $("input[name=status]").value;
  return {
    activity: activity,
    domain: domain,
    details: details,
    status: status
  };
}

function filterElements(tasks, search) {
  search = search.toLowerCase();
  return tasks.filter(({ activity, domain, details, status }) => {
    return (
      activity.toLowerCase().includes(search) ||
      domain.toLowerCase().includes(search) ||
      details.toLowerCase().includes(search) ||
      status.toLowerCase().includes(search)
    );
  });
}

async function removeSelected() {
  mask("#main");
  const selected = document.querySelectorAll("input[name=selected]:checked");
  const ids = [...selected].map(input => input.value);
  const promises = ids.map(id => deleteTaskRequest(id));
  const statuses = await Promise.allSettled(promises);
  await loadTasks();
  unMask("#main");
}

function initEvents() {
  $("#removeSelected").addEventListener(`click`, removeSelected);

  $("#search").addEventListener("input", e => {
    const search = e.target.value;
    const tasks = filterElements(allTasks, search);
    renderTasks(tasks);
  });
  $("#selectAll").addEventListener(`input`, e => {
    document.querySelectorAll("input[name=selected]").forEach(check => {
      check.checked = e.target.checked;
    });
  });
  $("#tasksForm").addEventListener("submit", onSubmit);
  $("#tasksForm").addEventListener("reset", () => {
    editId = undefined;
  });

  $("#tasksTable tbody").addEventListener("click", e => {
    if (e.target.matches("button.delete-btn")) {
      const { id } = e.target.dataset;
      mask(formSelector);
      deleteTaskRequest(id).then(status => {
        if (status.success) {
          if (status.success) {
            allTasks = allTasks.filter(task => task.id !== id);
            renderTasks(allTasks);
          }
          unMask(formSelector);
        }
      });
    } else if (e.target.matches("button.edit-btn")) {
      const { id } = e.target.dataset;
      startEdit(id);
    }
  });
}

const baseUrl = "http://localhost:3000/tasks-json";
function loadTaskRequest() {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r => r.json());
}

function createTaskRequest(task) {
  return fetch(`${baseUrl}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  }).then(r => r.json());
}

function deleteTaskRequest(id) {
  return fetch(`${baseUrl}/delete`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  }).then(r => r.json());
}

function $(selector) {
  return document.querySelector(selector);
}

function mask(selector) {
  $(selector).classList.add("loading-mask");
}

function unMask(selector) {
  $(selector).classList.remove("loading-mask");
}

function updateTaskRequest(task) {
  return fetch(`${baseUrl}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(task)
  }).then(r => r.json());
}

initEvents();

mask(formSelector);
loadTasks().then(() => {
  unMask(formSelector);
});
