let content = document.querySelector('.js-generated.content')
//Creates Rizzo header, make dog-name class, and append to content div
let header = document.createElement('h1')

header.textContent = 'Rizzo'

header.setAttribute('class','dog-name')

content.append(header)
//Create dog-content div
let dogContent = document.createElement('div');

dogContent.setAttribute('class','dog-content')

//Append Rizzo's picture
let dogImage = document.createElement('img')

dogImage.setAttribute('class','dog-name')
dogImage.setAttribute('src','./assets/rizzo.jpg')
dogImage.style.width = '200px';
dogImage.style.height = '350px';

dogContent.append(dogImage)

//Dog details div creation
let dogDetails = document.createElement('div');


//Dog Description header
let description = document.createElement('h3');

description.textContent = 'Description:'

dogDetails.append(description)

//put DogDetails in content
content.append(dogDetails)

//Put DogContent into content
content.append(dogContent)





