let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQADMbvtgD_CBG5kIv64DtRNuqYIooQd5F0QiJWi46L2A96U_xoHd-oe-bxMO6rqCMcMsAKKA9H2PF5/pub?gid=0&single=true&output=csv";


function preload() {
  data = loadTable(url, 'csv', 'header');
}

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('data');
  //noLoop();

}

function draw() {
  background(50);

  if (data) {
    let numRows = data.getRowCount();

    let carbs = data.getColumn('Carbs');
    let names = data.getColumn('Food');

    rect(50, 350, carbs[0], 10);

    for (let i = 0; i < numRows; i++) {
      let x = 50;
      let y = 100 + (i * 50);
      let w = carbs[i]*5;
      let h = 10;

      rect(x, y, w, h);

      fill(255);
      textSize(14);
      text(names[i], x, y - 5);
    }
  }
}