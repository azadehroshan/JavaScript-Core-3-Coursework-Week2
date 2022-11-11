const btnAdd = document.getElementById("btn-add");
const btnClear = document.getElementById("btn-clear");
const list = document.getElementById("list");
btnAdd.addEventListener("click", () => {
  fetch(`https://dog.ceo/api/breeds/image/random`)
    .then((res) => res.json())
    .then((data) => {
      createImg(data.message);
    })
    .catch((err) => (list.innerText = "Something went wrong"));
});

function createImg(url) {
  const listItem = document.createElement("li");
  const image = document.createElement("img");
  image.src = url;

  listItem.appendChild(image);
  list.appendChild(listItem);
}

// clear list on button click
btnClear.addEventListener("click", () => {
  list.innerHTML = "";
});












// const ul=document.querySelector("#list");

// const buttonOne = document.createElement("button")
// buttonOne.classList("btn")
// buttonOne.innerText= "get Random Image" ;
// const div= document.querySelector(div)
// div.appendChild(button);

// const btnAdd = document.getElementById("btn-add");
// const btnClear = document.getElementById("btn-clear");
// const list = document.getElementById("list");

// const buttonOne= document.createElement(".btn").addEventListener("click", async ()=> {
//         try {
//             const res=await fetch("https://dog.ceo/api/breeds/image/random");
//             const data=await res.json();

//             if (data.status !=="success") {
//                 console.log(data.message);
//             }

//             else {
                
//                 const ulList= document.setAttribute("id","list")
//                 const li=document.createElement("li");
//                 ulList.appendChild(li);
//                 div.appendChild(ulList)

//                 const img=document.createElement("img");
//                 img.setAttribute("src", data.message);
//                 li.appendChild(img);
               
//             }
//         }

//         catch (e) {
//             console.log(e.message);
//         }
//     });

     