

var car1 = new Boolean(false);
var car2 = new Boolean(false);
var car3 = new Boolean(false);
var car4 = new Boolean(false);
var car5 = new Boolean(false);
var car6 = new Boolean(false);
var car7 = new Boolean(false);
var car8 = new Boolean(false);
let cars = [car1, car2, car3, car4, car5, car6, car7, car8]



function setup(){
    let parkinglot = document.getElementById("park");
    /*document.addEventListener("keyup", function(event) {
        for (let i = 0; i < cars.length; i++) {
            if (event.keyCode == i+49){
                if (cars[i]){
                    cars[i]=false
                }
                else{
                    cars[i]= true
                }
            }   
          }
    });
    */
    

    setInterval(loop, 5);
    function loop(){

        //sensor data
        distance = document.getElementById("distance").innerHTML
        position = document.getElementById("position").innerHTML

        //Check for cars
        if(distance<15){
            cars[position]= true;
        }
        else{
            cars[position]= false
        }


        //Draw cars
        var string = "<img src=" +"images/project/emptyparkinglot.png "+ "id="+"emptypark"+">";
        for (let i = 0; i < cars.length; i++) {
            if (cars[i] == true){
                string += "<img src=images/project/car3.png id= car"+(i+1).toString()+">";
            }   
          }
        parkinglot.innerHTML = string
    }


    
}



