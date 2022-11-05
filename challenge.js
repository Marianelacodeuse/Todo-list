document.getElementById("push").onclick = () => {
  // ==============Création d'une nouvelle div================
  document.getElementById("tasks").innerHTML += `
       <div class = "content1" draggable="true">
          <div class = "task">
             <input type="checkbox" class="my-checkbox">
             <span id="taskname">
             ${document.querySelector("#newtask input").value}
             </span>
          </div>
          <i class='bx bx-dots-vertical-rounded icones' id="icone"></i>
       </div>
     
    `;

  let icon = document.querySelectorAll(".icones");
  let Content = document.querySelectorAll(".content1");

  // ====================Ajout de la poubelle=======================
  for (let i = 0; i < icon.length; i++) {
    icon[i].onclick = () => {
      // for (let i = 0; i < icône.length; i++) {
      icon[i].classList.replace("bx-dots-vertical-rounded", "bx-trash");
      icon[i].id = "trash";

      for (let j = 0; j < icon.length; j++) {
        if (j == i) {
          continue;
        }
        Content[j].classList.add("white");
        icon[j].classList.replace("bx-trash", "bx-dots-vertical-rounded");
        icon[j].id = "icone";
      }
      Content[i].classList.add("color");

      icon[i].onclick = () => {
        if (icon[i].id == "trash") {
          Content[i].remove();
        }
      };
    };
  }

  // =====================Checkbox===========================
  let check = document.querySelectorAll(".task");
  let text = document.querySelectorAll("#taskname");
  let checkbox = document.querySelectorAll(".my-checkbox");
  for (let i = 0; i < check.length; i++) {
    check[i].onclick = () => {
      if (checkbox[i].checked) {
        text[i].classList.add("barré");
      } else {
        text[i].classList.remove("barré");
      }
    };
  }
  document.querySelector("#newtask input").value = "";

  // =================drag & dro==========================

  // ===============Je n'arrive pas à récuppérer le tableau pour faire le drop===========

//   const boxs = document.querySelectorAll(".content1");
//   let dragged;
//   for (let box of boxs) {
//     box.ondragstart = (e) => {
//       dragged = box;
//       e.dataTransfer.setData("text/plain", box.innerHTML);
//       box.classList.add("dragged");
//     };

//     box.ondragover = (e) => {
//       e.preventDefault();
//     };

//     box.ondragenter = () => {
//       box.classList.add("dropover");
//     };

//     box.ondragleave = () => {
//       box.classList.remove("dropover");
//     };

//     box.ondragend = () => {
//       box.classList.remove("dragged");
//     };

//     box.ondrop = (e) => {
//       dragged.innerHTML = box.innerHTML;
//       box.innerHTML = e.dataTransfer.getData("text/plain");
//       box.classList.remove("dropover");
//     };
//   }
// };

// ======================Fin du drag & drop====================


// ===============ClearAll=================
const Clear = document.querySelector(".clearAll");

Clear.onclick = () => {
  let icon = document.querySelectorAll(".icones");
  let Content = document.querySelectorAll(".content1");
  let checkbox = document.querySelectorAll(".my-checkbox");
  for (let i = 0; i < icon.length; i++) {
    if (checkbox[i].checked) {
      Content[i].remove();
    }
  }
}
};
