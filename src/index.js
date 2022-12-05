import "./styles.css";

/*document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>*/
// x lose, y draw, z win
const func = (x, y) => {
  const oponentOptions = {
    A: "rock",
    B: "paper",
    C: "scissors"
  };
  const yourOptions = {
    X: 0,
    Y: 1,
    Z: 2
  };
  const optionScore = {
    rock: 1,
    paper: 2,
    scissors: 3
  };
  const beats = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper"
  };
  const getsBeat = {
    scissors: "rock",
    rock: "paper",
    paper: "scissors"
  };
  const inputValue = document.getElementById("value");
  return inputValue.value
    .trim()
    .split("\n")
    .map((options) => {
      let arrayOfOptions = options.trim().split(" ");
      let opponentMove = oponentOptions[arrayOfOptions[0]];
      let playerMove = "";
      if (yourOptions[arrayOfOptions[1]] === 0) {
        playerMove = beats[opponentMove];
      } else if (yourOptions[arrayOfOptions[1]] === 1) {
        playerMove = opponentMove;
      } else {
        playerMove = getsBeat[opponentMove];
      }
      let formatedChoises = [opponentMove, playerMove];

      return formatedChoises;
    })
    .map((game) => {
      const [opponent, player] = game;
      if (opponent === player) {
        return optionScore[player] + 3;
      } else if (beats[player] === opponent) {
        return optionScore[player] + 6;
      }
      return optionScore[player];
    })
    .reduce((acc, cur) => acc + cur, 0);
};

console.log(func());

/**
 * .map(choise => {
      //let result = choise === ai ? "draw" : beats[player] === ai ? "player" : "ai";
      if(choise[0] === choise[1]){
        return [(optionScore[choise[0]] + 3), (optionScore[choise[1]] + 3)]
      }else if(beats[choise[0]] === choise[1]){
        return [(optionScore[choise[0]] + 6), (optionScore[choise[1]])]
      }

      return [(optionScore[choise[0]]), (optionScore[choise[1]] + 6)]
    })


    opponent
 */
