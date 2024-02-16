const playerElement = document.getElementById('players');
let playerList = [];



const displayPlayers = (players) => {
    players.forEach(player => {
      let article = document.createElement('article');
      let h3 = document.createElement('h3');
      h3.textContent = player.playerName;
      let img = document.createElement('img');
      img.src = player.imageName;
      img.alt = player.playerName;
      article.appendChild(h3);
      article.appendChild(img);
      playersElement.appendChild(article);
    });
  };



const displayStats = (players) => {
  temples.forEach(player => {
    let article = document.createElement('article');
    let h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    let img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
  });
};

const getPlayers = async () => {
    const response = await fetch(`${process.env.PUBLIC_URL}jsonFolder/playerRankings.json`);
    playerList = await response.json();
    displayPlayers(playerList);
  };

//const getStats = async () => {
    //const response = await fetch("jsonFolder/statList.json");
    //statList = await response.json();
    //displayPlayers(statList);
  //}



const searchEngine = () => {
    reset();
    let filter = document.getElementById('filtered').value;
    let filteredPlayers;
    switch (filter) {
      case 'warriors':
        filteredPlayers = statList.filter(player => team.location.includes("GSW"));
        break;
      case 'bulls':
        filteredPlayers = statList.filter(player => team.location.includes("CHI"));
        break;
        case 'lakers':
          filteredPlayers = statList.filter(player => team.location.includes("LAL"));
          break;
        case 'spurs':
          filteredPlayers = statList.filter(player => team.location.includes("SAS"));
        case 'hornets':
          filteredPlayers = statList.filter(player => team.location.includes("CHA"));
          break;
      case 'all':
      default:
        filteredPlayers = playerList;
        break;
    }
    displayPlayers(filteredPlayers);
  };

const clearButton = document.getElementById('clear')

clearButton.addEventListener("click", () => {


})


document.getElementById('filtered').addEventListener('change', searchEngine);

getPlayers();