let tickets = [];  //Her endres  arrayet fra buyTicket til å være globalt tilgjengelig slik at vi kan bruke det senere i deleteTickets

function buyTicket() {

    const chosenMovie = document.getElementById("Movies").value;
    const wrongNumber = document.getElementById("numberTickets").value;
    const chosenFirstName = document.getElementById("chooseFirstName").value;
    const chosenLastName = document.getElementById("chooseLastName").value;
    const chosenPhoneNr = document.getElementById("choosePhoneNr").value;
    const chosenEmail = document.getElementById("chooseMail").value;

    const ticket1 = {  //Oppretter et objekt og legger inn de opprettede variablene.
        movie: chosenMovie,
        number: wrongNumber,
        firstName: chosenFirstName,
        lastName: chosenLastName,
        phoneNr: chosenPhoneNr,
        mail: chosenEmail
    };

    function verification(value, errorMessageId, errorMessage) {
        if (value === "") {
            document.getElementById(errorMessageId).innerHTML = errorMessage;
        } else {
            document.getElementById(errorMessageId).innerHTML = "";
        }
    }

    verification(ticket1.movie,"wrongMovie","Choose a movie")
    verification(ticket1.number, "wrongNumber", "You have to write in an amount from 1-->");
    verification(ticket1.firstName, "wrongFristName", "Write in a first name");
    verification(ticket1.lastName, "wrongLastName", "Write in a first last name");
    verification(ticket1.phoneNr, "wrongPhoneNr", "Write in a phone number");
    verification(ticket1.mail, "wrongMail", "Write in an email");

    function printOut() { //kjører gjennom en for-løkke for å skrive ut verdier vi har laget i objektet og satt inn i arrayet.
        let ut = "";
        for (let i = 0; i < tickets.length; i++) {
            ut += tickets[i].movie + " " + tickets[i].number + " " + tickets[i].firstName
                + " " + tickets[i].lastName + " " + tickets[i].phoneNr +
                " " + tickets[i].mail;
        }
        document.getElementById("utskrift").innerHTML = ut;
    }

    tickets = [];
    function deleteTickets() {
        console.log(tickets);
        printOut();
    }
}