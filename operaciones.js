const sumar=function(a,b) {
    return a+b
}
const restar=function(a,b) {
    return a-b
}
const multiplicar=function(a,b) {
    return a*b
}
const dividir=function(a,b) {
    if(a===0||b===0){
        return console.log('no se puede dividir por 0')
    }
    return a/b
    
}

module.exports={
    sumar:sumar,
    restar:restar,
    multiplicar,
    dividir
    //o se puede pasar solo el nombre de la variable
}