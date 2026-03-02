const input = window.document.getElementById("input");
const cta = window.document.getElementById("cta");
const ul = window.document.getElementById("ul");
const empty = window.document.getElementById("emptyState");

cta.addEventListener("click", () => {
  const innerText = input.value;
  if (!innerText) return;
  let createList = document.createElement("li");
  createList.innerText = innerText;

  createList.addEventListener("click", () => {
    createList.remove();
    toggleState()
  });

  if(ul.children.length === 0){
    empty.style.display = "block"
  }else { 
    empty.style.display = "none"
  }

  console.log(ul.children.length);
  
  ul.append(createList);
  input.value = "";
});

function toggleState() {
  empty.style.display = ul.children.length === 0 ? "block" : "none";
}
