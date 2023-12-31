const IMG_PATH = 'images/';

// Car constructor from name and image source
class Car {
    constructor(name, imageSource) {
        this.clickCount = 0;
        this.name = name;
        this.imgSrc = IMG_PATH + imageSource;
    }
};

// Model
const carModel = {
    currentCar: null,
    cars: [
        new Car('クープ・マセラティ', 'black-convertible-coupe.jpeg'),
        new Car('カマロ　S S　１ L E', 'chevrolet-camaro.jpeg'),
        new Car('１９７０年のドジャー・チャルジャー', 'dodge-charger.jpeg'),
        new Car('１９６６年のフォード・マスタング', 'ford-mustang.jpeg'),
        new Car('１９６２年の１９０　S  L　ロードスター', 'mercedes-benz.jpeg')
    ]
};

const carController = {
    init() {
        carModel.currentCar = carModel.cars[0];
        carListView.init();
        carView.init();
    },
    getCurrentCar() {
        return carModel.currentCar;
    },
    getCars() {
        return carModel.cars;
    },
    setCurrentCar(car) {
        carModel.currentCar = car;
    },
    incrementCounter() {
        carModel.currentCar.clickCount++;
        console.log(carModel.currentCar.clickCount)
        carView.render();
    }
};

const carView = {
    init() {
        this.carElem = document.getElementById('car');
        this.carNameElem = document.getElementById('car-name');
        this.carImageElem = document.getElementById('car-img');
        this.countElem = document.getElementById('car-count');
        this.carImageElem.addEventListener('click', this.clickHandler);
        this.render();
    },
    clickHandler() {
        return carController.incrementCounter();
    },
    render() {
        const currentCar = carController.getCurrentCar();
        this.countElem.textContent = currentCar.clickCount;
        this.carNameElem.textContent = currentCar.name;
        this.carImageElem.src = currentCar.imgSrc;
        this.carImageElem.style.cursor = 'pointer';
    }
}
const carListView = {
    init() {
        this.carListElem = document.getElementById('car-list');
        this.render();
    },
    render() {
        let car, elem;
        const cars = carController.getCars();
        this.carListElem.innerHTML = ' ';
        for(let i = 0; i < cars.length; i++) {
            car = cars[i];
            elem = document.createElement('li');
            elem.className = 'list-group-item d-flex justify-content-between lh-condensed';
            elem.style.cursor = 'pointer';
            elem.textContent = car.name;
            elem.addEventListener('click', (function(carCopy) {
                return function() {
                    carController.setCurrentCar(carCopy);
                    carView.render();
                };
            })(car));
            this.carListElem.appendChild(elem);
        }
    }
}
carController.init();