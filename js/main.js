let inputs = document.querySelector(".inputs");
let inputsButton = document.querySelectorAll(".input input");
console.log(inputsButton);
let mobileModel = document.getElementById("mobile-model");
let mobileName = document.getElementById("mobile-name");
let pieces = document.getElementById("pieces");
let imageUrl = document.getElementById("image-url");
let buttons = document.querySelector(".buttons button");
let add = document.querySelector(".add");
let reset = document.querySelector(".reset");
let close = document.querySelector(".close");
let plus = document.querySelector(".plus");
let card = document.querySelector(".card");

//

inputs.style.display = "none";
plus.addEventListener("click", function () {

  if (inputs.style.display === "none" || inputs.style.display === "") {
    inputs.style.display = "flex";

  }
  mobileModel.focus();
});
close.addEventListener("click", function () {
  if (inputs.style.display === "flex") {
    inputs.style.display = "none";
  }
});
buttons.addEventListener("click", function () {
  let paragraph = document.querySelectorAll("body > p");
  paragraph.forEach((paragraph) => {
    paragraph.remove();
  });

  let isEmpty = Array.from(inputsButton).some(
    (input) => input.value.trim() === ""
  );
  if (isEmpty) {
    swal("Please Fill All Fields!");
  } else {
    let mainDiv = document.createElement("div");
    mainDiv.classList.add("main-div");
    let textDiv = document.createElement("div");
    textDiv.classList.add("text-div");
    let image = document.createElement("div");
    image.classList.add("image-div");
    card.appendChild(mainDiv);
    let img = document.createElement("img");
    img.src = imageUrl.value;
    img.alt = "Mobile Photo";
    image.appendChild(img);
    mainDiv.appendChild(image);
    let sold = document.createElement("button");
    let soldText = document.createTextNode("Sold");
    sold.appendChild(soldText);
    textDiv.appendChild(sold);
    let deleteButton = document.createElement("button");
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white";
    let deleteText = document.createTextNode("Delete");
    deleteButton.appendChild(deleteText);
    textDiv.appendChild(deleteButton);
    let spanOne = document.createElement("span");
    let spanOneText = document.createTextNode(`Model: ${mobileModel.value}`);
    spanOne.appendChild(spanOneText);
    let spanTwo = document.createElement("span");
    let spanTwoText = document.createTextNode(`Name: ${mobileName.value}`);
    spanTwo.appendChild(spanTwoText);
    let spanThree = document.createElement("span");
    spanThree.classList.add("span-three");
    let spanThreeText = document.createTextNode(`Pieces: ${pieces.value}`);
    spanThree.appendChild(spanThreeText);
    textDiv.appendChild(spanOne);
    textDiv.appendChild(spanTwo);
    textDiv.appendChild(spanThree);
    mainDiv.appendChild(textDiv);
    mobileModel.value = "";
    mobileName.value = "";
    imageUrl.value = "";

    sold.addEventListener("click", function () {
    if (parseInt(pieces.value) > 0) {
        pieces.value = parseInt(pieces.value) - 1;
        spanThree.textContent = `Pieces: ${pieces.value}`;

    } else {
        sold.style.filter = "grayscale(100%)";
        sold.disabled = true
        swal("All pieces sold!");
        spanThree.innerHTML = "All pieces sold!";
    }
    });

    deleteButton.addEventListener("click", function () {
        mainDiv.remove();
    });
  }
});

reset.onclick = function () {
    mobileModel.value = "";
    mobileName.value = "";
    pieces.value = "";
    imageUrl.value = "";
};
