const list = [];

// players-cart
function displayPlayers() {
  const totalPlayers = document.getElementById("total-players");
  totalPlayers.innerText = list.length;

  const listContainer = document.getElementById("selected-player");
  listContainer.textContent = "";

  for (let i = 0; i < list.length; i++) {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th class="text-white text-center">${i + 1}</th>
        <td class="text-white text-center" >${list[i].pLName}</td>
        `;
    listContainer.appendChild(tr);
  }
}
cnt = 0;
function addList(element) {
  cnt++;

  if (cnt > 5) {
    alert("you can not buy more than 5 players!");
    return;
  }
  const pLName = element.parentNode.children[0].innerText;

  const pL = {
    pLName: pLName,
  };
  if (list.length < 5) {
    list.push(pL);
  }
  displayPlayers();

  element.style.color = "gray";

  element.disabled = true;
}
let totalPlayerCost = 0;
function playerExp(element) {
  const tp = document.getElementById("total-players");
  totalPlayerCost = tp.innerText * 1000;
  console.log(totalPlayerCost);

  const tpCost = document.getElementById("playerExp");
  tpCost.textContent = "";

  const tr1 = document.createElement("span");
  tr1.innerHTML = `<span class="text-white text-center fw-bold" style="border: hidden;">$${totalPlayerCost}</span>`;
  tpCost.appendChild(tr1);
}
