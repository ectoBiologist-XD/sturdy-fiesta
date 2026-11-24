let huruf = 'abcdefghijklmnopqrstuvwxyz'
let input = 'hello'
let angka = ''
for (let i = 0; i < input.length; i++) {
    for (let a = 0; a < huruf.length; a++) {
        if (input[i] == huruf[a]) {
            angka += a + 1
        }
    }
}
console.log(angka)