let elemName = document.getElementById('hotelName')
let elemPool = document.getElementById('pool')
let elemGym = document.getElementById('gym')

let hotel = {
    name: 'Park',
    rooms: 120,
    booked: 70
}

//Adding and removing properties
hotel.gym = true;
hotel.pool = false;
delete hotel.booked;

elemName.textContent = hotel.name
elemPool.className = 'Pool: ' + hotel.pool;
elemGym.className = 'Gym: ' + hotel.gym