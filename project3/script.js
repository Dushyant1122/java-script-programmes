function generate() {
    var quotes = {
        "-Nelson Mandela": '"The greatest glory in living lies not in never falling, but in rising every time we fall."',
        "-Walt Disney": '"The way to get started is to quit talking and begin doing."',
        "-Steve Jobs": '"Your time is limited, so donot waste it living someone else is life. Donot be trapped by dogma - which is living with the results of other people is thinking. "',
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
var index = 0;

function changeColors() {
    var colors = ["red", "blue", "orange", "yellow", "green", "purple"];
    
    // document.getElementsByTagName("body")[0].
    document.getElementsByClassName("container")[0].
    style.background = colors[index++];
    
    console.log(index);

    if (index > colors.length - 1)
        index = 0;
}