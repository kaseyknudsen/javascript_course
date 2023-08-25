const user = document.getElementById("randomUser");
const userProfile = document.querySelector(".userProfile");
document.body.appendChild(user);
const userName = document.createElement("h2");
const age = document.createElement("h3");
const gender = document.createElement("h3");
const userLocation = document.createElement("h3");
const phone = document.createElement("h3");
const email = document.createElement("h3");
userProfile.appendChild(userName);
userProfile.appendChild(age);
userProfile.appendChild(gender);
userProfile.appendChild(userLocation);
userProfile.appendChild(phone);
userProfile.appendChild(email);

const fetchUser = () => {
  fetch("https://randomuser.me/api")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      displayUser(data.results[0]);
    });
};

const displayUser = (user) => {
  if (user.gender === "female") {
    document.body.style.backgroundColor = "purple";
  } else {
    document.body.style.backgroundColor = "steel blue";
  }
  userName.textContent = `Name: ${user.name.title} ${user.name.first} ${user.name.last}`
  gender.textContent = `${user.gender}`
  age.textContent = `Age: ${user.age}`
  userLocation.textContent = `Location: ${user.location.city} ${user.location.state}`
  email.textContent = `Email: ${user.email}`
 
};

fetchUser();
