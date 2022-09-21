// MIN 


// Створи об'єкт, що описує автомобіль (виробник, модель, рік випуску, середня швидкість, обсяг паливного баку, середня витрата палива на 100 км., водії), і наступні методи для роботи з цим об'єктом:
// Метод, який виводить на екран інформацію про автомобіль.
// Додавання ім’я водія у список
// Перевірка водія на наявність його ім’я у списку
// Підрахунок необхідного часу та кількості палива для подолання переданої відстані з середньою швидкістю. Враховуй, що через кожні 4 години дороги водієві необхідно робити перерву на 1 годину. 

let myCar = {
    manufacturer: 'Skoda',
    model: 'Kamiq',
    year: 2021,
    speed: 110,
    tank: 50,
    fuelAvr: 9,
    drivers: ['Olga'],
    addDrivers: function(drivers){
        this.drivers.push(drivers)
    },
    showInfoCar: function(){ 
        alert (`
        Manufacturer: ${this.manufacturer}, 
        model: ${this.model}, 
        year: ${this.year}, 
        Average Speed: ${this.speedAvr}, 
        tank: ${this.tank}, 
        Average Fuel: ${this.fuelAvr}, 
        Drivers: ${this.drivers}`);
        // console.log(`Manufacturer ${this.manufacturer}, model: ${this.model}, year: ${this.speedAvr}`);
    },
    userDistance: function(distance){
        let distanceAvr = distance / 100 * this.fuelAvr;
        console.log(distanceAvr);
        let timeAvr = distance / this.speed;
        console.log(timeAvr * 60);

        if(timeAvr>=4) {
            let timeToRest = Math.trunc(timeAvr / 4);
            timeAvr = timeAvr + timeToRest;
        }
        console.log(`Fuel ${distance}, time ${(timeAvr * 60).toFixed(0)}`);
        console.log(timeAvr);
    }
};

myCar.addDrivers(" my twin sister")
myCar.showInfoCar()
myCar.userDistance(999)


// NORM 

// Створити об'єкт, що описує час (години, хвилини, секунди), і такі функції для роботи з цим об'єктом:
// Для виведення часу на екран.
// Зміни часу на передану кількість секунд.
// Зміни часу на передану кількість хвилин.
// Зміни часу на передану кількість годин.
// Враховуйте, що в останніх 3-х функціях, при зміні однієї частини часу, може змінитися і інша. Наприклад: якщо до часу «20:59:45» додати 30 секунд, то повинно вийти «21:00:15», а не «20:59:75». Також потрібно передбачити можливість того що користувач може передати 150 секунд, або 75 хвилин.

let time = {
    hour: 1,
    minutes: 49,
    seconds: 25,
    showTime: function(){
        alert(`${this.hour} h, ${this.minutes} m, ${this.seconds} s`)
    },
    setSeconds: function(seconds){
        this.seconds = this.seconds + seconds;
        console.log(this.seconds);
    },
    setMinutes: function(minutes){
        this.minutes = this.minutes + minutes;
        console.log(this.minutes);
    },
    setHours: function(hours){
        this.hour = this.hour + hours;
        console.log(this.hour);
    },
};

console.log(time);
time.showTime()
time.setSeconds(25)
time.setMinutes(5)
time.setHours(5)
