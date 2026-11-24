let nama = 'fadil'
let hasil = ''
for (i = 0; i < nama.length; i++) {
    let validasi = i % 2
    if (validasi == 1) {
        hasil += nama[i].toUpperCase()
    } else {
        hasil += nama[i]
    }
}
console.log(hasil)