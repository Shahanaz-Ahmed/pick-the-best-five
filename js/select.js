const playerArray = [];

function display(selectedPlayerName) {
  const totalPlayers = document.getElementById("total-players");
  totalPlayers.innerText = playerArray.length;

  const selectedBody = document.getElementById("selected-players");
  selectedBody.innerHTML = "";

  for (let i = 0; i < selectedPlayerName.length; i++) {
    console.log(i + 1, selectedPlayerName[i]);
    const name = selectedPlayerName[i].innerText;

    const div = document.createElement("div");
    div.innerHTML = `
    <p>${i + 1}.&nbsp;&nbsp; ${selectedPlayerName[i].playerName}</p>
    `;

    selectedBody.appendChild(div);
  }
}

count = 0;
function selectedBestFive(PlayerName) {
  count++;

  if (count > 5) {
    alert("You cant select more than 5 players");
  }

  const playerName = PlayerName.parentNode.children[0].innerText;
  const playerObj = {
    playerName: playerName,
  };

  if (playerArray.length < 5) {
    playerArray.push(playerObj);
  }

  display(playerArray);
  playerName.disabled = true;
}
