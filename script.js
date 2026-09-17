let numarr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for(let x in numarr) {
    if(numarr[x] % 2 == 0){
        console.log(numarr[x], "er et partall")
    } else {
        console.log(numarr[x], "er et oddetall")
    }
}