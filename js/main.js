// MILESTONE 1
    // Per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
    // Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
// MILESTONE 2
    // Dato un container nel DOM, appendi un elemento html con il numero o la stringa corretta.
// MILESTONE 3
    // Applica uno stile differente a seconda del valore dell'indice per i multipli di 3, per i multipli di 5 e per i valori che sono sia multipli di 3 che di 5.

const list= document.querySelector(".list");

for( let i = 1; i <= 100; i++ ){
    const element = document.createElement("li");

    element.classList.add("list-item");
    element.innerText = i;
    list.append(element)

    if(i % 3 === 0){
        element.classList.add("bg-three")
        element.innerText = "Fizz";
        list.append(element)
    }else if(i % 5 === 0){
        element.classList.add("bg-five")
        element.innerText = "Buzz";
        list.append(element)
}




