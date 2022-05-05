

let content = document.querySelector('.js-generated.content')

//Creates Rizzo header, make dog-name class, and append to content div

let header = document.createElement('h1')

header.textContent = 'Rizzo'

header.setAttribute('class','dog-name')

content.append(header)
//Create dog-content div
let dogContent = document.createElement('div');
dogContent.setAttribute('class','dog-content')
dogContent.style.padding = '10px';
dogContent.style.display = 'flex'

//Append Rizzo's picture
let dogImage = document.createElement('img')

dogImage.setAttribute('class','dog-name')
dogImage.setAttribute('src','./assets/rizzo.jpg')
dogImage.style.width = '200px';


//Dog details div creation
let dogDetails = document.createElement('div');
dogDetails.setAttribute('class','dog-details')

//Dog Description header
let description = document.createElement('h3');
description.textContent = 'Description:';
dogDetails.append(description);

//paragraph
let paragraph = document.createElement('p')
paragraph.textContent = 'Paragraph content'
dogDetails.append(paragraph);

//H3 Feeding Times

let ulElement = document.createElement('ul')
let liOne = document.createElement('li')
liOne.textContent = '9:00 AM'
ulElement.append(liOne)
let liTwo = document.createElement('li')
liTwo.textContent = '12:00 AM'
ulElement.append(liTwo)
let liThree = document.createElement('li')
liThree.textContent = '5:00 PM'
ulElement.append(liThree)

dogDetails.append(ulElement)

//appending
dogContent.append(dogImage)
content.append(dogDetails)
content.append(dogContent)





