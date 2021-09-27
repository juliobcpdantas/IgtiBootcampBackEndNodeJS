let employees = [];
let roles = [];
const listE1 = document.querySelector("ul");
const formE1 = document.querySelector("form");

async function init() {
  try {
    [employees, roles] = await Promise.all([listEmployees(), listRoles()]);
    renderData();
  } catch (erro) {
    showError(erro);
  }
}
init();

function renderData() {
  for (const employee of employees) {
    let role = roles.find((role) => role.id == employee.role_id);
    const li = document.createElement("li");
    const divName = document.createElement("div");
    divName.textContent = employee.name;
    const divRole = document.createElement("li");
    divRole.textContent = role.name;
    li.appendChild(divName);
    li.appendChild(divRole);
    listE1.appendChild(li);
  }
}

function showError(error) {
  document.getElementById("app").innerHTML = "Erro ao carregar dados.";
  console.error(error);
}
