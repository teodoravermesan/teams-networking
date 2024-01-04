import "./style.css";
let editId;
let allTeams = [];

function getTeamAsHTML(team) {
  return `<tr>
  <td>${team.promotion}</td>
  <td>${team.members}</td>
  <td>${team.name}</td>
  <td>${team.url}</td>
  <td>
  <button type= "button" data-id= "${team.id}" class="action-btn delete-btn"> ♻ </button>
  <button type= "button" data-id= "${team.id}" class="action-btn edit-btn"> ✏️ </button>

  </td>
</tr>`;
}

function renderTeams(teams) {
  const teamsHTML = teams.map(getTeamAsHTML);
  $("#teamsTable tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("http://localhost:3000/teams-json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(r => r.json())
    .then(teams => {
      allTeams = teams;
      renderTeams(teams);
    });
}

function createTeamRequest(team) {
  return fetch("http://localhost:3000/teams-json/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}

function deleteTeamRequest(id) {
  return fetch("http://localhost:3000/teams-json/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ id: id })
  }).then(r => r.json());
}

function updateTeamRequest(team) {
  return fetch("http://localhost:3000/teams-json/update", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}

function startEdit(id) {
  editId = id;
  const team = allTeams.find(team => team.id === id);
  setValues(team);
}

function $(selector) {
  return document.querySelector(selector);
}

function setValues(team) {
  $("input[name=promotion").value = team.promotion;
  $("input[name=members").value = team.members;
  $("input[name=name").value = team.name;
  $("input[name=url").value = team.url;
}

function onSubmit(e) {
  e.preventDefault();
  const team = getTeamValues();

  if (editId) {
    team.id = editId;
    updateTeamRequest(team).then(status => {
      if (status.success) {
        window, location.reload();
      }
    });
  } else {
    createTeamRequest(team).then(status => {
      if (status.success) {
        window, location.reload();
      }
    });
  }
}

function getTeamValues() {
  const promotion = $("input[name=promotion]").value;
  const members = $("input[name=members]").value;
  const name = $("input[name=name]").value;
  const url = $("input[name=url]").value;
  return {
    promotion: promotion,
    members: members,
    name: name,
    url: url
  };
}

function initEvents() {
  $("#teamsForm").addEventListener("submit", onSubmit);

  $("#teamsTable tbody").addEventListener("click", e => {
    if (e.target.matches("button.delete-btn")) {
      const id = e.target.dataset.id;
      deleteTeamRequest(id).then(status => {
        if (status.success) {
          window.location.reload();
        }
      });
    } else if (e.target.matches("button.edit-btn")) {
      const id = e.target.dataset.id;
      startEdit(id);
    }
  });
}

initEvents();
loadTeams();
