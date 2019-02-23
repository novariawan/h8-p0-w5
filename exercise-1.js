// Logic Challenge - Most Frequent Largest Numbers

function sorting(arrNumber) {
    var swapped;
    do {
        swapped = false;
        for (var i=0; i < arrNumber.length-1; i++) {
            if (arrNumber[i] < arrNumber[i+1]) {
                var temp = arrNumber[i];
                arrNumber[i] = arrNumber[i+1];
                arrNumber[i+1] = temp;
                swapped = true;
            } 
        }
    } while (swapped);
return arrNumber;
  // code di sini
}

function getTotal(arrNumber) {
    var max = 0;
    var countMax = 0;
    var result = ""

    for (var i = 0; i < arrNumber.length; i++) {
        if (arrNumber[i] === max) {
            countMax++;
        } else if (arrNumber[i] > max) {
            max = arrNumber[i];
            countMax = 1;
        }
    } 
    if (arrNumber.length !== 0) {
        result = 'angka paling besar adalah ' + max + ' dan jumlah kemunculan sebanyak ' + countMax + ' kali';
    }
return result;
  // code di sini
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);
return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
