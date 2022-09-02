function generate() {
    var quotes = {
        "-Nelson Mandela": '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        "-Walt Disney": '"The way to get started is to quit talking and begin doing."',
        "-Steve Jobs": '"Your time is limited, so donot waste it living someone else is life. Donot be trapped by dogma - which is living with the results of other people is thinking. "',
        "-Steve Jobs": '"Your time is limited, so donot waste it living someone else is life. Donot be trapped by dogma - which is living with the results of other people is thinking. "',
        "-Steve Jobs": '"Your time is limited, so donot waste it living someone else is life. Donot be trapped by dogma - which is living with the results of other people is thinking. "',
        "-Steve Jobs": '"Your time is limited, so donot waste it living someone else is life. Donot be trapped by dogma - which is living with the results of other people is thinking. "',
        "-Steve Jobs": '"Your time is limited, so donot waste it living someone else is life. Donot be trapped by dogma - which is living with the results of other people is thinking. "',
        "-Steve Jobs": '"Your time is limited, so donot waste it living someone else is life. Donot be trapped by dogma - which is living with the results of other people is thinking. "',
        "-Steve Jobs": '"Your time is limited, so donot waste it living someone else is life. Donot be trapped by dogma - which is living with the results of other people is thinking. "'
    }

    var authors = Object.keys(quotes);

    // console.log(authors);

    var author = authors[Math.floor(Math.random() * authors.length)];

var quote = quotes[author]

    // console.log(quote);

// console.log(author);

    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;




}