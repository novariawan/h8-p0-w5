// Logic Challenge - Password Generator

function changeVocals (str) {
    var dict = [
        ["a", "b"], ["i", "j"], ["u", "v"], ["e", "f"], ["o", "p"],
        ["A", "B"], ["I", "J"], ["U", "V"], ["E", "F"], ["O", "P"]
    ]
    var arrIn = [];
    arrIn = str.split("");
    for (var i = 0; i < arrIn.length; i++) {
        for (var j = 0; j < dict.length; j++) {
            if (arrIn[i] === dict[j][0]) {
                arrIn[i] = dict[j][1];
            }
        }
    }
return arrIn.join("");
//code di sini
}

function reverseWord (str) {
    var output = "";
    for (var i = str.length - 1; i > -1; i--) {
        output += str[i];
    }
return output;
//code di sini
}

function setLowerUpperCase (str) {
    var arrIn = [];
    arrIn = str.split("");
    for (var i = 0; i < arrIn.length; i++) {
        if (arrIn[i] === arrIn[i].toLowerCase()) {
            arrIn[i] = arrIn[i].toUpperCase();
        } else if (arrIn[i] === arrIn[i].toUpperCase()) {
            arrIn[i] = arrIn[i].toLowerCase();
        }
    }
return arrIn.join("");
//code di sini
}

function removeSpaces (str) {
    var output = "";
    for (var i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            output += str[i];
        }
    }
return output;
//code di sini
}

function passwordGenerator (name) {
    if (name.length < 5) {
        return "Minimal karakter yang diinputkan adalah 5 karakter"
    } else {
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))));
    }
//code di sini
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'