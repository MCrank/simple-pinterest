import { loadBoards } from "../data/boardsData.js";

const bindEvents = () => {
  $("#user-boards").on("click", ".board-card", e => {
    const clickedBoardId = $(e.target)
      .closest(".board-card")
      .attr("id");
    $("#boards-page").hide();
    $("#pins-page").show();
  });
};

const writeBoards = boards => {
  let domString = "";
  boards.forEach(board => {
    domString += `
    <div class="board-card p-2" id="${board.id}">
        <img class="card-img-top" src="" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${board.name}</h5>
            <p class="card-text">42 Pins</p>
        </div>
    </div>
    `;
  });

  $("#user-boards").append(domString);
};

const initBoardView = () => {
  console.log("hello!");
  loadBoards()
    .then(boards => {
      writeBoards(boards);
      bindEvents();
    })
    .catch(error => {
      console.error(error);
    });
};

export { initBoardView };
