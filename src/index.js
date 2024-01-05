import "./style.css";
let editId;
let allTeams = [];

console.time("app-ready");

function getTeamAsHTML(team) {
  const url = team.url;
  const displayUrl = url.startsWith('https/"') ? url.substring(19) : url;
  return `<tr>
  <td>${team.promotion}</td>
  <td>${team.members}</td>
  <td>${team.name}</td>
  <td>
  <a href ="${url}" target="_blank"> ${displayUrl}</a>
  </td>
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
      console.timeEnd("app-ready");
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
        window.location.reload();
      }
    });
  } else {
    createTeamRequest(team).then(status => {
      if (status.success) {
        team.id = status.id;
        allTeams.push(team);
        renderTeams(allTeams);
        $("#teamsForm").reset();
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

function filterElements(teams, search) {
  search = search.toLowerCase();
  return teams.filter(team => {
    return (
      team.promotion.toLowerCase().includes(search) ||
      team.members.toLowerCase().includes(search) ||
      team.name.toLowerCase().includes(search) ||
      team.url.toLowerCase().includes(search)
    );
  });
}

function initEvents() {
  $("#search").addEventListener("input", e => {
    const search = e.target.value;
    const teams = filterElements(allTeams, search);
    renderTeams(teams);
  });
  $("#teamsForm").addEventListener("submit", onSubmit);
  $("#teamsForm").addEventListener("reset", () => {
    editId = undefined;
  });

  $("#teamsTable tbody").addEventListener("click", e => {
    if (e.target.matches("button.delete-btn")) {
      const id = e.target.dataset.id;
      deleteTeamRequest(id).then(status => {
        if (status.success) {
          if (status.success) {
            allTeams = allTeams.filter(team => team.id !== id);
            renderTeams(allTeams);
          }
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
