let elemHotel1 = document.getElementById('hotel1');
let elemHotel2 = document.getElementById('hotel2');


function Hotel(name, rooms, booked){
    this.name = name;
    this.rooms = rooms;
    this.booked = booked;
    this.checkAvailability = function(){
        return this.rooms - this.booked;
    }
}

let quayHotel = new Hotel('Quay', 40, 25);
let parkHotel = new Hotel('Park', 120, 77);

let details1 = quayHotel.name + ' rooms: ';
details1 += quayHotel.checkAvailability();

let details2 = parkHotel.name + ' rooms: ';
details2 += parkHotel.checkAvailability();


elemHotel1.textContent = details1;
elemHotel2.textContent = details2