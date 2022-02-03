// code your solution here
// function superbowlWin(record){
//     for (const item of record) if(
//         item.result === "W"){
//             return item.year
//         }
//     }
// let superbowlWin= record.find(win)
// function win(super)
function superbowlWin(record){
    let winner = record.find((record) => record.result === "W");
    if (!winner) return undefined;
    else return winner.year;
}