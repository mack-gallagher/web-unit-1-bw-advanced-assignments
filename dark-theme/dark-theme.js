const toggleButton = document.querySelector(".toggle-theme");

const myStyleSheets = document.styleSheets;
for (let i = 0; i < myStyleSheets.length; i++) {
  console.log(myStyleSheets[i].ownerNode.id);
  if (myStyleSheets[i].ownerNode.id === "dark-theme") {
    var darkStyleSheet = myStyleSheets[i];
  } else if (myStyleSheets[i].ownerNode.id === "light-theme") {
    var lightStyleSheet = myStyleSheets[i];
    lightStyleSheet.disabled = true;
  }
}

function toggleTheme(firstSheet,secondSheet) { 
  firstSheet.disabled = !firstSheet.disabled;
  secondSheet.disabled = !secondSheet.disabled;
}

toggleButton.addEventListener("click",event => toggleTheme(darkStyleSheet,lightStyleSheet));


