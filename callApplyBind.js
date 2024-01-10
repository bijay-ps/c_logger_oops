const indigo = {
  airline: "Indigo",
  flightCode: "6E",
  bookings: [],
  book: function (flightNum, pName) {
    const booking = {
      flight: `${this.flightCode}-${flightNum}`,
      passengerName: pName,
    };
    this.bookings.push(booking);
  },
};

// indigo.book(123, "Bijay Singh");
console.log(indigo.bookings);

const airIndia = {
  airline: "Air India",
  flightCode: "AI",
  bookings: [],
};

const bookingFunc = indigo.book;
// console.log(bookingFunc);
// bookingFunc();

// call, apply and bind
// bookingFunc.call(airIndia, 654, "Jane");
// console.log(airIndia.bookings);
// console.log(indigo.bookings);

// bookingFunc.apply(airIndia, [654, "John"]);
// console.log(airIndia.bookings);

const copyBookFunc = bookingFunc.bind(airIndia, 654, "Rahul");
copyBookFunc();
console.log(airIndia.bookings);
