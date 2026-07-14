console.log("prueba de conexion");
function fizzbuzz(){
    for(let i = 1; i <= 100; i++) {

        if (i % 3  === 0 && i % 5 === 0){
            alert("Fizzbuzz");
        } else if (i % 3  === 0){
            alert("Fizz");
        } else if(i % 5 === 0){
            alert("Buzz")
        }else{
            alert(`${i}`);
        }
    }
}