/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {
    name: 'Jacob Martin',
    photo: 'images/guy.jpg',


    favoriteFoods: [
      'Ice Cream',
      'Tikka Masala',
      'Prioshki',
      'Shrimp',
      'Sushi'
    ],
    hobbies: [
        'Chess', 
        'Basketball',
        'Video Games',
        'Reading'
    ],
    placesLived:[

    ],
};


myProfile.placesLived.push(
    {
      place: 'San Jose, CA',
      length: '3 years'
    }
  );

  myProfile.placesLived.push(
    {
      place: 'Orlando, FL',
      length: '2 years'
    }
  );


  myProfile.placesLived.push(
    {
      place: 'Tuolumne, CA',
      length: '18 years'
    }
  );


document.querySelector('#name').textContent = myProfile.name;
document.querySelector('#photo').textContent = myProfile.photo;

const imageElement = document.querySelector('picture img');

imageElement.setAttribute("src", myProfile.photo);
imageElement.setAttribute('alt', `Profile image of ${myProfile.name}`);

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });

/* Hobbies List */


myProfile.hobbies.forEach(hobbie => {
    let ul = document.createElement('ul');
    ul.textContent = hobbie;
    document.querySelector('#hobbies').appendChild(ul);
  });

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length; //I always find the javascript formatting so wonky

 //document.querySelector('#places-lived').appendChild(dl);

 document.querySelector('#places-lived').appendChild(dt);
 document.querySelector('#places-lived').appendChild(dd);
});

