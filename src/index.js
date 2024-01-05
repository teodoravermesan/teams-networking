import "./style.css";
let editId;
let allTeams = [];

console.time("app-ready");

function getTeamAsHTML({ id, promotion, members, name, url }) {
  const displayUrl = url.startsWith('https/"') ? url.substring(19) : url;
  return `<tr>
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
  console.time("render");
  const teamsHTML = teams.map(getTeamAsHTML);

  $("#teamsTable tbody").innerHTML = teamsHTML.join("");
  console.timeEnd("render");
}

async function loadTeams() {
  const teams = await loadTeamRequest();
  allTeams = teams;
  renderTeams(teams);
}

function loadTeamRequest() {
  return fetch("http://localhost:3000/teams-json", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(r => r.json());
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

function setValues({ promotion, members, name, url }) {
  $("input[name=promotion").value = promotion;
  $("input[name=members").value = members;
  $("input[name=name").value = name;
  $("input[name=url").value = url;
}

function updateTeam(teams, team) {
  return teams.map(t => {
    if (t.id === team.id) {
      console.info("edited", t, team);
      return {
        ...t,
        ...team
      };
    }
    return t;
  });
}

function onSubmit(e) {
  e.preventDefault();
  const team = getTeamValues();

  if (editId) {
    team.id = editId;
    updateTeamRequest(team).then(status => {
      if (status.success) {
        // window.location.reload();
        //update ...allTeams + copy
        allTeams = updateTeam(allTeams, team);
        renderTeams(allTeams);
        $("#teamsForm").reset();
      }
    });
  } else {
    createTeamRequest(team).then(status => {
      if (status.success) {
        team.id = status.id;
        // allTeams = allTeams.map(team => team);
        // allTeams.push(team);
        //copy
        //spread ele
        //add at the beggining
        allTeams = [team, ...allTeams];
        //add at the end
        allTeams = [...allTeams, team];
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
  return teams.filter(({ promotion, members, name, url }) => {
    return (
      promotion.toLowerCase().includes(search) ||
      members.toLowerCase().includes(search) ||
      name.toLowerCase().includes(search) ||
      url.toLowerCase().includes(search)
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
      //  const id = e.target.dataset.id;
      const { id } = e.target.dataset;
      deleteTeamRequest(id).then(status => {
        if (status.success) {
          if (status.success) {
            allTeams = allTeams.filter(team => team.id !== id);
            renderTeams(allTeams);
          }
        }
      });
    } else if (e.target.matches("button.edit-btn")) {
      const { id } = e.target.dataset;
      startEdit(id);
    }
  });
}

initEvents();
//this code blocks
// await loadTeams();

loadTeams().then(() => {
  console.timeEnd("app-ready");
});
