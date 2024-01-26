 /**
  * Получить сумму результатов всех студентов
  * @param {object} scores - результаты студентов
  * @returns {number} - сумма результатов всех студентов
  */

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