class Hotel {
    constructor(name,roomRate,discount){
        this.name = name
        this.roomRate = roomRate
        this.discount = discount
    }
    
    offerPrice(){
        let offerRate = this.roomRate * ((100 - this.discount) / 100);
        return offerRate
    }
}

let elemHotelName, elemRoomRate, elemSpecialRate;

elemHotelName = document.getElementById('hotelName')
elemRoomRate = document.getElementById('roomRate')
elemSpecialRate = document.getElementById('specialRate')

let hotel = new Hotel('Park', 240, 15);

elemHotelName.textContent = hotel.name;
elemRoomRate.textContent = '$' + hotel.roomRate.toFixed(2)
elemSpecialRate.textContent = '$' + hotel.offerPrice();

// Second part
let expiryMsg;
let today;
let elemEnds;

function offerExpires(today){
    let weekFromToday, day, date, month, year, dayNames, monthNames;

    weekFromToday = new Date(today.getTime() + 7 * 24 * 60 * 1000);

    dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];

    day = dayNames[weekFromToday.getDay()]
    date = weekFromToday.getDate()
    month = monthNames[weekFromToday.getMonth()]
    year = weekFromToday.getFullYear()

    expiryMsg = 'Offer expires next ';
    expiryMsg += day + ' <br>(' + date + ' '+ month + ' ' + year + ')';
    return expiryMsg;
}

today = new Date();
elemEnds = document.getElementById('offerEnds')
elemEnds.innerHTML = offerExpires(today)
