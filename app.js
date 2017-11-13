/*Declarar un array que representará los asientos
del avion con false = vacios y true = ocupado */

var airlineSeats = [
false,
false,
false,
false,
false,
false,
false,
false,
false,
false
];

/*rastreador que nos ayudara a rastrear el n°
de asientos ocupados*/

var busySeats = 0; // porque todos los asientos estan libres en principio

var paintSeats = function(array){
 var containerSeats = document.getElementById("seats");
 for (var i = 0; i < array.length; i++) {
  	var seat= document.createElement("div");
  	seat.className = "seats";

//*Del primer Elemento al Cuarto = Primera Clase. Indice 0 al 3.  

if (i<4){
	seat.style.background = "purple";
  }else{
  	seat.style.background = "yellow";
  } 
  containerSeats.appendChild(seat);
 }
};

var reserve = function(){
	var btn = document.getElementById("btn");
	btn.addEventListener("click", chooseZone);
};

var chooseZone = function(){
	var choice = prompt(
	"En que zona prefieres reservar \n 1.Primera clase \n 2.Economica \n \n Por favor elija su preferencia"
	);


if (choice == 1) {
	checkFirstClassZone();
}
//si la eleccion del usuario es igual a 1, ocurre esta funcion
else if (choice == 2){
	checkEconomicZone();
}
else {
	alert("Por favor ingresa un numero valido");
}
};

var checkFirstClassZone = function(){
	var zone = "primera clase";
/*Recorre del elemento 0 al 3 y verifica cuales estan disponibles */	
	for (var index = 0; index < 4; index ++) {
		if (airlineSeats[index] == false){
			airlineSeats[index] = true;
			reserveSeat(index);
			paintTicket(index, zone);

//Una vez que se haya reservado nuestro asiento nuestro contador incremente en 1
			busySeats++;
//al reservar un asiento no necesitamos seguir recorriendo nuestro arreglo
			break;
			}else if(index==3 && airlineSeats[index]==true){
			reasignEconomicZone();
		}
	}
};

var checkEconomicZone = function(){
	var zone = "Economica";
	for (var index = 4; index < 10; index ++) {
		if (airlineSeats[index] == false){
			airlineSeats[index] = true;
			reserveSeat(index);
			paintTicket(index, zone);

			busySeats++;

			break;
		}else if(index==9 && airlineSeats[index]==true){
			reasignFirstClassZone();

		}
	}
};

var reserveSeat = function(indexToPaint){
	var seat = document.getElementsByClassName("seats");
	seat[indexToPaint].textContent= "Ocupado";
};

var reasignEconomicZone = function(zone){
	if (busySeats==10){
		noSeats();
		nextFlight();
	}
	else{
	var reasign = confirm(
		"ya no quedan asientos disponibles en" + zone +
		":( \n ¿Quieres reservar en zona Economica?"
);

if (reasign == true){
	checkEconomicZone();
}
else{
	nextFlight();
  } 
  } //cierre else BusySeats
};


var reasignFirstClassZone = function(zone){
	if (busySeats==10){
		noSeats();
		nextFlight();
	}
	else{
		var reasign = confirm(
		"ya no quedan asientos disponibles en" + zone +
		":( \n ¿Quieres reservar en Primera Clase?"
);

if (reasign == true){
	checkFirstClassZone()
}
else{
	nextFlight();
 }
 } //cierre del else bussySeats 
};

var paintTicket = function(index, zone){
	var containerTickets = document.getElementById("tickets");
	var ticket = document.createElement("div");
	ticket.className = "seats"
	var title = document.createElement("p");
	var reservedSeating = document.createElement("p");
	var zoneClass = document.createElement("p");
	title.textContent = "PASE DE ABORDAR";
	reservedSeating.textContent = "n° de asiento" + (index + 1);
	zoneClass.textContent = zone;
	ticket.appendChild(title);
	ticket.appendChild(reservedSeating);
	ticket.appendChild(zoneClass);
	containerTickets.appendChild(ticket); 
};

var nextFlight = function(){
	alert("Nuestro proximo vuelo sale en 3 horas");
};

var noSeats = function (){
	alert ("Lo sentimos. \n ya no quedan asientos disponibles en este avion")
};

paintSeats(airlineSeats);
reserve();












