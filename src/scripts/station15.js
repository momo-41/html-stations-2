function displayList() {
  const fruitsDiv = document.getElementById("fruits");

  const ulElement = document.createElement("ul");

  const fruitItems = fruitsDiv.querySelectorAll("p");
  fruitItems.forEach((item) => {
    const liElement = document.createElement("li");
    liElement.textContent = item.textContent; // pをそれぞれliにしている

    ulElement.appendChild(liElement); // ulElementにliElementを追加
    // ulのタグが生成されているところにli化したフルーツのリストを追加している
  });

  fruitsDiv.innerHTML = "";
  fruitsDiv.appendChild(ulElement); // fruitsDivにulElementを追加(置き換え？)
}
