fetch("https://xkcd.now.sh/?comic=latest")
  // Get the response and extract the JSON
  .then(function (response) {
    return response.json();
  })
  // Do something with the JSON
  .then((response) => {
    console.log(response);
    let div = document.querySelector("#div");
    let image = document.querySelector("#image");
    div.appendChild(image);
    image.src = response.img;
  })
  // If something goes wrong
  .catch((error) => console.log(error));