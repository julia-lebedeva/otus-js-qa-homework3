 let getScores = (scores) => {
    let result = 0;
    for (let key in scores) {
      result = result + scores[key];
    }
    return result;
  }
  
  const scores = {
    Anna: 10,
    Olga: 1,
    Ivan: 5,
  };
  
  console.log("Total score", getScores(scores));