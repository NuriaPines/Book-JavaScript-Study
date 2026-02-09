let hotel = {
    name: 'Quay',
    rooms: 40,
    booked: 25,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
}

let elemHotelName = document.getElementById('hotelName')
elemHotelName.textContent = hotel.name

let elemRooms = document.getElementById('rooms');
elemRooms.textContent = hotel.checkAvailability();