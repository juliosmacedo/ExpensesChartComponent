let counter = 0; 
let x = document.getElementById("graphdiv");

function myFunction() {
    if (counter==1) {
    x.style.visibility = "hidden";
    x.style.opacity = 0;
    counter--
    console.log(counter)
    return
    }

    if (counter==0) {
        x.style.visibility = 'visible';
        x.style.opacity = 1;

        counter++
        console.log(counter)
        return
        }
}

