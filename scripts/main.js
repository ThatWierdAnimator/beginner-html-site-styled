const theImage = document.querySelector('img');

theImage.addEventListener('click', () => {
    const mySrc = theImage.getAttribute('src');
    if (mySrc === 'images/firefox-icon.png') {
        theImage.setAttribute('src', 'images/yomi-guy.png');
    } else {
        theImage.setAttribute('src', 'images/firefox-icon.png');
    }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Mozilla is cool, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
}

myButton.addEventListener("click", () => {
    setUserName();
  });