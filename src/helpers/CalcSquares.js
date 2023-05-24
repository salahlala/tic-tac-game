const lines = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const CalcWinner = (squares) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];

    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return {
        winner: squares[a],
        line: lines[i],
      };
    }
  }
  return null;
};

let checkLines = [];
const calcBestMove = (squares, cpuPlayer, curPlayer) => {
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (
      (squares[a] && squares[b]) ||
      (squares[b] && squares[c]) ||
      (squares[a] && squares[c])
    ) {
      if (checkLines.indexOf(lines[i]) === -1) {
        checkLines.push(lines[i]);
      }
    }
    // checkMove(squares, lines[i]);
  }
  if (checkLines.length !== 0) {
    for (let i = 0; i < checkLines.length; i++) {
      const [a, b, c] = checkLines[i];

      // check if cpu can win
      if (
        squares[a] === cpuPlayer &&
        squares[b] === cpuPlayer &&
        squares[c] === ""
      ) {
        return c;
      } else if (
        squares[a] === cpuPlayer &&
        squares[b] === "" &&
        squares[c] === cpuPlayer
      ) {
        return b;
      } else if (
        squares[a] === "" &&
        squares[b] === cpuPlayer &&
        squares[c] === cpuPlayer
      ) {
        return a;
      }
      // check if player can win
      if (
        squares[a] === curPlayer &&
        squares[b] === curPlayer &&
        squares[c] === ""
      ) {
        return c;
      } else if (
        squares[a] === curPlayer &&
        squares[b] === "" &&
        squares[c] === curPlayer
      ) {
        return b;
      } else if (
        squares[a] === "" &&
        squares[b] === curPlayer &&
        squares[c] === curPlayer
      ) {
        return a;
      }
    }

    // console.log(checkLines);
    let checkArr = checkLines[checkLines.length - 1];
    let checkEmpty = checkArr.every((val) => val !== "");
    if (checkArr) {
      for (let i = 0; i < checkArr.length; i++) {
        if (squares[checkArr[i]] === "") {
          return checkArr[i];
        }
      }
    }
    if (checkEmpty) {
      for (let i = 0; i < lines.length; i++) {
        for (let j = 0; j < lines[i].length; j++) {
          if (squares[lines[i][j]] === "") {
            return lines[i][j];
          }
        }
      }
    }
  } else {
    for (let i = 0; i < squares.length; i++) {
      let radnomIndex = Math.floor(Math.random() * squares.length);
      if (squares[radnomIndex] === "") {
        return radnomIndex;
      }
    }

    // for (let i = 0; i < squares.length; i++) {
    //   if (squares[i] === "") {
    //     return i;
    //   }
    // }
  }
  // const dublicateCount = (arr) => {
  //   let count = 0;

  //   arr.forEach((ar) => {
  //     if (squares[ar] === player) {
  //       count += 1;
  //     }
  //     return count;
  //   });
  // };

  // const sortedLines = lines.sort((a, b) => {
  //   const aDuplicate = dublicateCount(a);
  //   const bDuplicate = dublicateCount(b);

  //   return aDuplicate - bDuplicate;
  // });
  // for (let i = 0; i < sortedLines.length; i++) {
  //   let val = sortedLines[i].find((el) => {
  //     if (squares[el] === "") {
  //       return el + "";
  //     }
  //     return null;
  //   });
  //   if (!val) {
  //     continue;
  //   }
  //   // if (val === 0) {
  //   //   return 0;
  //   // }

  //   return +val;
  // }
  // if (squares[0] === "") {
  //   return 0;
  // }
  return null;
};

export { CalcWinner, calcBestMove };
