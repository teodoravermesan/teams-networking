import "./style.css";

function getTeamAsHTML(team) {
  return `<tr>
  <td>${team.activity}</td>
  <td>${team.domain}</td>
  <td>${team.details}</td>
  <td>${team.status}</td>
  <td>x</td>
</tr>`;
}

function renderTeams(teams) {
  const teamsHTML = teams.map(getTeamAsHTML);
  document.querySelector("#teamsTable tbody").innerHTML = teamsHTML.join("");
}

function loadTeams() {
  fetch("teams.json")
    .then(r => r.json())
    .then(teams => {
      renderTeams(teams);
    });
}
loadTeams();
