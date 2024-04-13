//B1: get id movie
let url = location.href; //Lay url hien tai trang detail chua id
let params = new URLSearchParams(document.location.search);

let id = params.get("id");
console.log(id);
