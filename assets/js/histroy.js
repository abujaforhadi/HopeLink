function history(textadd){
    var div = document.createElement("div");
  var h2 = document.createElement("h2");
  var h6 = document.createElement("h6");
  div.className = "border p-8 rounded-2xl";
  h2.innerText=textadd;
  h6.innerText= new Date().toString();
  div.appendChild(h2);
  div.appendChild(h6);
  document.getElementById("histroyPage").appendChild(div);
}