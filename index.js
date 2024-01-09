import "./style.css";

let editId;
let allTeams = [];

const formSelector = "#teamsForm";

function getTeamAsHTML({ id, promotion, members, name, url }) {
  const displayUrl = url.startsWith('https/"') ? url.substring(19) : url;
  return `<tr>
  <td class = "select-row">
  <input type="checkbox" name="selected" value = "${id}" /></td>
  <td>${promotion}</td>
  <td>${members}</td>
  <td>${name}</td>
  <td>
  <a href ="${url}" target="_blank"> ${displayUrl}</a>
  </td>
  <td>
  <button type= "button" data-id= "${id}" class="action-btn delete-btn"> ♻ </button>
  <button type= "button" data-id= "${id}" class="action-btn edit-btn"> ✏️ </button>
  </td>
</tr>`;
}

let renderedTeams = [];
function areTeamsEqual(renderedTeams, teams) {
  if (renderedTeams === teams) {
    return true;
  }
  if (renderedTeams.length === teams.length) {
    const eq = renderedTeams.every((team, i) => team === teams[i]);
    if (eq) {
      return true;
    }
  }
  return false;
}

function renderTeams(teams) {
  if (areTeamsEqual(renderedTeams, teams)) {
    return false;
  }
  renderedTeams = teams;
  const teamsHTML = teams.map(getTeamAsHTML);
  $("#teamsTable tbody").innerHTML = teamsHTML.join("");
}

async function loadTeams() {
  const teams = await loadTeamRequest();
  allTeams = teams;
  renderTeams(teams);
}

function startEdit(id) {
  editId = id;
  const team = allTeams.find(team => team.id === id);
  setValues(team);
}

function setValues({ promotion, members, name, url }) {
  $("input[name=promotion").value = promotion;
  $("input[name=members").value = members;
  $("input[name=name").value = name;
  $("input[name=url").value = url;
}

function updateTeam(teams, team) {
  return teams.map(t => {
    if (t.id === team.id) {
      return {
        ...t,
        ...team
      };
    }
    return t;
  });
}

async function onSubmit(e) {
  e.preventDefault();
  mask(formSelector);
  const team = getTeamValues();
  if (editId) {
    team.id = editId;
    const status = await updateTeamRequest(team);
    if (status.success) {
      allTeams = updateTeam(allTeams, team);
      renderTeams(allTeams);
      $("#teamsForm").reset();
    }
    unMask(formSelector);
  } else {
    createTeamRequest(team).then(status => {
      if (status.success) {
        team.id = status.id;
        allTeams = [...allTeams, team];
        renderTeams(allTeams);
        $("#teamsForm").reset();
      }
    });
  }
  unMask(formSelector);
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
  return teams.filter(({ promotion, members, name, url }) => {
    return (
      promotion.toLowerCase().includes(search) ||
      members.toLowerCase().includes(search) ||
      name.toLowerCase().includes(search) ||
      url.toLowerCase().includes(search)
    );
  });
}

async function removeSelected() {
  mask("#main");
  const selected = document.querySelectorAll("input[name=selected]:checked");
  const ids = [...selected].map(input => input.value);
  const promises = ids.map(id => deleteTeamRequest(id));
  const statuses = await Promise.allSettled(promises);
  await loadTeams();
  unMask("#main");
}

function initEvents() {
  $("#removeSelected").addEventListener(`click`, removeSelected);

  $("#search").addEventListener("input", e => {
    const search = e.target.value;
    const teams = filterElements(allTeams, search);
    renderTeams(teams);
  });
  $("#selectAll").addEventListener(`input`, e => {
    document.querySelectorAll("input[name=selected]").forEach(check => {
      check.checked = e.target.checked;
    });
  });
  $("#teamsForm").addEventListener("submit", onSubmit);
  $("#teamsForm").addEventListener("reset", () => {
    editId = undefined;
  });

  $("#teamsTable tbody").addEventListener("click", e => {
    if (e.target.matches("button.delete-btn")) {
      const { id } = e.target.dataset;
      mask(formSelector);
      deleteTeamRequest(id).then(status => {
        if (status.success) {
          if (status.success) {
            allTeams = allTeams.filter(team => team.id !== id);
            renderTeams(allTeams);
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

const baseUrl = "http://localhost:3000/teams-json";
function loadTeamRequest() {
  return fetch(baseUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r => r.json());
}

function createTeamRequest(team) {
  return fetch(`${baseUrl}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}

function deleteTeamRequest(id) {
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

function updateTeamRequest(team) {
  return fetch(`${baseUrl}/update`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(team)
  }).then(r => r.json());
}

initEvents();

mask(formSelector);
loadTeams().then(() => {
  unMask(formSelector);
});
