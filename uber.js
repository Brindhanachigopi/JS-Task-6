// 4. Write a class to calculate the Uber price.


class UberPriceCalculator {
  constructor() {
    this.baseFare = 60;
    this.costPerKilometer = 15;
    this.costPerMinute = 2.5;
    this.bookingFee = 30;
  }

  calculatePrice(distanceInKilometers, timeInMinutes) {

    const distanceCost = this.costPerKilometer * distanceInKilometers;
    const timeCost = this.costPerMinute * timeInMinutes;

    const totalPrice =
      this.baseFare + distanceCost + timeCost + this.bookingFee;

    return totalPrice;
  }
}

const calculator = new UberPriceCalculator();
const distanceInKilometers =7.5; 
const timeInMinutes = 10; 

const estimatedPriceINR = calculator.calculatePrice(
  distanceInKilometers,
  timeInMinutes
);
console.log(`Estimated Uber price in INR: ₹${estimatedPriceINR}`);
