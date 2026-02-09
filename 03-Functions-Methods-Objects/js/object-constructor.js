let hotel = new Object();

hotel.name = 'Park';
hotel.rooms = 120;
hotel.booked = 77;
hotel.checkAvailability = function(){
    return this.rooms - this.booked;
}

let elemHotelName = document.getElementById('hotelName')
elemHotelName.textContent = hotel.name

let elemRooms = document.getElementById('rooms');
elemRooms.textContent = hotel.checkAvailability();