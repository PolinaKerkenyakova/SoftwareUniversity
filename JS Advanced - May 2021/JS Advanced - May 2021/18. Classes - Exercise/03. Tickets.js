function tickets(inputArr, sortingCriteria) {

    let tickets = [];

    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }

    inputArr.forEach(line => {
        let [destination, price, status] = line.split('|');

        tickets.push(new Ticket(destination, Number(price), status));
    });

    let sortingMapper = {
        'destination': (a, b) => a.destination.localeCompare(b.destination),
        'status': (a, b) => a.status.localeCompare(b.status),
        'price': (a, b) => a.price - b.price,
    }

    tickets.sort(sortingMapper[sortingCriteria]);

    // return tickets;
}


console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'destination'));

console.log(tickets([
    'Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'
],
    'status'
));