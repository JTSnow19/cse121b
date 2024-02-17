


const urlParams = new URLSearchParams(window.location.search); // credit to https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams and stackoverflow.com
const playerName = urlParams.get('playerName');

document.getElementById('playerName').textContent = playerName;

const displayPlayers = (items) => {
    const playerNameElement = document.getElementById('playerName');
    const filteredItems = items.filter(item => item.PLAYER === playerName);
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    if (playerName == "Kareem Abdul-Jabar") {
        h2.textContent = `His stats didn't translate due to the time-period`
    } else if(playerName == "Runner Ups") {
        h2.textContent = `All of these players are incredible in their own right (except podz, I just think he's goofy to watch) and each could be better than many listed. However, these rankings are based off of my bias and not objective when it comes to skill. I didn't even mention Shaq or Lebron, but I find the two to be eh. Being a warriors fan in the 2010's has lead to a dislike of Lebron so yea...`
    } else{
        h2.textContent = `SEASON | TM  | GP | GS | MIN | FGM | FGA | FG% | 3PM | 3PA | 3P% | FTM |FTA |FT% |OREB | DREB | REB | AST | STL | BLK | TOV | PF |PTS `
    }
    article.appendChild(h2);
    playerNameElement.appendChild(article);
    //I know repeating code is bad... but it's so much faster on personal projects plus I can't squeeze in the stat columns not doing somethin like this without messing up the formatting
    filteredItems.forEach(item => {
        let article = document.createElement('article');
        let h2 = document.createElement('h2');
        h2.textContent = `${item.SEASON} | ${item.TM} | ${item.GP} | ${item.GS} | ${item.MIN} | ${item.FGM} | ${item.FGA} | ${item['FG%']} | ${item['3PM']} | ${item['3PA']} | ${item['3P%']} | ${item.FTM} | ${item.FTA} | ${item['FT%']} | ${item.OREB} | ${item.DREB} | ${item.REB} | ${item.AST} | ${item.STL} | ${item.BLK} | ${item.TOV} | ${item.PF} | ${item.PTS}`;
        article.appendChild(h2);
        playerNameElement.appendChild(article);
    });
};


const getStats = async () => {
    const response = await fetch("https://JTSnow19.github.io/cse121b/finalProject/jsonFolder/playerStats.json");
    const playerList = await response.json();
    displayPlayers(playerList);
};

getStats();

let photoName;
if (playerName == "Kareem Abdul-Jabar") { //I misspelled his name and it ruined the image formatting BUT this should count for the conditional branching points haha (was not planned)
    photoName = `fImages/kareemAbdul.png`;

} else {
    let splitname = playerName.split(" ");
    let fname = splitname[0].toLowerCase();
    let lname = splitname[1].charAt(0).toUpperCase() + splitname[1].slice(1);
    photoName = `fImages/${fname}${lname}.png`;
}

const imageElement = document.querySelector('#imageName');
imageElement.setAttribute("src", photoName);
imageElement.setAttribute('alt', `Image of ${playerName}`);
