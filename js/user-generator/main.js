var btn = document.querySelector('#btn');
var img = document.querySelector('#avatar');
var fullname = document.querySelector('#fullname');
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var city = document.querySelector('#city');
var userProfile = document.querySelector('.user-profile');

init();

setTimeout(function(){
  userProfile.style.visibility = 'visible';
},400);

btn.addEventListener('click',function(){
  init();
});

function handleErrors(request){
  if(!request.ok){
    throw Error(request.status);
  }
  return request;
}

function jsonify(response){
  console.log('Everything is fine');
  return response.json();  
}

function newProfile(data){
  var profile = data.results[0]
  img.src = profile.picture.medium;
  var name = profile.name;
  fullname.textContent = name.title + ' ' + name.first + ' ' + name.last;
  username.textContent = profile.login.username;
  email.textContent = profile.email;
  city.textContent = profile.location.city;  
}

function problem(error){
  console.log(error);
}

function init(){
  var url = 'https://randomuser.me/api/';
  fetch(url)
  .then(handleErrors)
  .then(jsonify)
  .then(newProfile)
  .catch(problem);  
}