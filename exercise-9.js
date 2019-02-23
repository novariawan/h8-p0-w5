// Logic Challenge - Cari Pelaku (Regex)

function cariPelaku(str) {
    var tampung = '';
    tampung = str.match(/abc/gi);
    return tampung.length;
// you can only write your code here!
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2