let counter = 0; 
let x = document.getElementById("graphdiv");

function myFunction() {
    if (counter==1) {
    x.style.display = "none";
    counter--
    console.log(counter)
    return
    }

    if (counter==0) {
        x.style.display = "block";
        counter++
        console.log(counter)
        return
        }
}

