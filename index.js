import "./style.css";

let editId;
let allTasks = [];

const formSelector = "#tasksForm";

const API = {
  CREATE: {
    URL: "http://localhost:3000/tasks-json/create",
    METHOD: "POST"
  },
  READ: {
    URL: "http://localhost:3000/tasks-json",
    METHOD: "GET"
  },
  UPDATE: {
    URL: "http://localhost:3000/tasks-json/update",
    METHOD: "PUT"
  },
  DELETE: {
    URL: "http://localhost:3000/tasks-json/delete",
    METHOD: "DELETE"
  }
};

//for demo purposes..
if (location.host === "teodoravermesan.github.io") {
  API.READ.URL = "data/tasks.json";
  API.DELETE.URL = "data/delete.json";
  API.CREATE.URL = "data/create.json";
  API.UPDATE.URL = "data/update.json";
}

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

// function loadTasks() {
//   return fetch(API.READ.URL)
//     .then(res => res.json())
//     .then(data => {
//       allTasks = data;
//       renderTasks(data);
//     });
// }

async function loadTasks() {
  const tasks = await loadTaskRequest();
  allTasks = tasks;
  renderTasks(tasks);
}

async function loadTaskRequest() {
  const method = API.READ.METHOD;
  const r = await fetch(API.READ.URL, {
    method,
    headers: {
      "Content-Type": "application/json"
    }
  });
  return await r.json();
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

function onSubmit(e) {
  e.preventDefault();
  mask(formSelector);
  const task = getTaskValues();
  if (editId) {
    updateTask1(task);
    unMask(formSelector);
  } else {
    saveTask(task);
    unMask(formSelector);
  }
}

function updateTask1(task) {
  task.id = editId;
  const method = API.UPDATE.METHOD;
  fetch(API.UPDATE.URL, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: method === "GET" ? null : JSON.stringify(task)
  })
    .then(res => res.json())
    .then(r => {
      if (r.success) {
        allTasks = updateTask(allTasks, task);
        renderTasks(allTasks);
        $("#tasksForm").reset();
      }
    });
  unMask(formSelector);
}

function saveTask(task) {
  const method = API.CREATE.METHOD;
  fetch(API.CREATE.URL, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: method === "GET" ? null : JSON.stringify(task)
  })
    .then(res => res.json())
    .then(r => {
      console.warn(r);
      if (r.success) {
        task.id = r.id;
        allTasks = [...allTasks, task];
        renderTasks(allTasks);
        $("#tasksForm").reset();
      }
    });
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
      deleteTaskRequest(id);
    } else if (e.target.matches("button.edit-btn")) {
      const { id } = e.target.dataset;
      startEdit(id);
    }
  });
}

function deleteTaskRequest(id) {
  const method = API.DELETE.METHOD;
  return fetch(API.DELETE.URL, {
    method,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: method === "GET" ? null : JSON.stringify({ id })
  })
    .then(r => r.json())
    .then(r => {
      if (r.success) {
        allTasks = allTasks.filter(task => task.id !== id);
        renderTasks(allTasks);
      }
      unMask(formSelector);
    });
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

initEvents();

mask(formSelector);

loadTasks().then(() => {
  unMask(formSelector);
});
