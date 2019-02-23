function totalDigitRekursif(angka) {
    if (angka<0) {
        angka = 0 - angka
    }
    if (Math.floor(angka / 10) === 0) {
        return angka;
    } else {
        return angka % 10 + totalDigitRekursif(Math.floor(angka / 10));
    }
    // you can only write your code here!
}
  
  // TEST CASES
  console.log(totalDigitRekursif(512)); // 8
  console.log(totalDigitRekursif(1542)); // 12
  console.log(totalDigitRekursif(5)); // 5
  console.log(totalDigitRekursif(21)); // 3
  console.log(totalDigitRekursif(11111)); // 5