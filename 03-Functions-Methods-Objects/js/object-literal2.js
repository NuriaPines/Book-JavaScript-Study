let hotel = {
    name: 'Park',
    rooms: 120,
    booked: 77,
    checkAvailability: function(){
        return this.rooms - this.booked;
    }
}

let elemHotelName = document.getElementById('hotelName')
elemHotelName.textContent = hotel.name

let elemRooms = document.getElementById('rooms');
elemRooms.textContent = hotel.checkAvailability();