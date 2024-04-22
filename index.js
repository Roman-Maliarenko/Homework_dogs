const dogs = document.getElementById("dogs")

fetch("https://dog.ceo/api/breeds/image/random")
.then(response=>response.json())
.then(json=>render(json))

const render =({message, status})=>{
    
    const statElm = document.createElement("p")
    const imgElem = document.createElement("img")

    // mesElem.innerText = `message: ${message}`;
    statElm.innerText = `status: ${status}`;
    imgElem.src = message;
    imgElem.alt = "Dog image"

    dogs.append(statElm,imgElem)
}
