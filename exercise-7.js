// Logic Challenge: Melee Ranged Grouping

function meleeRangedGrouping (str) {
    //your code here
    var arrOut = [];
    var arrTampung = [];
    var arrTemp = [];

    if (str.length !== 0) {
        arrOut = [[], []];
        arrTampung = str.split(",");
        for (var i = 0; i < arrTampung.length; i++) {
            arrTemp.push(arrTampung[i].split("-"));
            if (arrTemp[i][1] === "Ranged") {
                arrOut[0].push(arrTemp[i][0]);
            } else if (arrTemp[i][1] === "Melee") {
                arrOut[1].push(arrTemp[i][0]);
            }
        }
    }

    return arrOut;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []