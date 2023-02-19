const arreglo = [10,5,2,3,7,5]
let plusArr = []

let suma = 0
for (let i = 0; i < arreglo.length; i++) {
    for (let j = 0; j < arreglo.length; j++) {
        if (i !== j && i < j && (arreglo[i] + arreglo[j] === 10)){
            plusArr.push([arreglo[i], arreglo[j]])
            
            console.log(arreglo.filter(el => el === arreglo[i]))
            console.log(arreglo.indexOf(arreglo[j]))
            
            // console.log(arreglo[i])
            // console.log(arreglo[j])
        }
    }
}
console.log(plusArr)
console.log(suma)

for (let k = 0; k < plusArr.length; k++){
    console.log(plusArr[k][0])
    console.log(plusArr[k][1])
    console.log(plusArr[k][0] + plusArr[k][1])
}

//arreglo[j]

// for (let i )