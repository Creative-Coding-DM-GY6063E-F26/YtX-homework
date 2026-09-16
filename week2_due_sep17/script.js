// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!
const quotes = [
  {
    text: "Creative Coding is a loosely defined term used to describe a wide range of artistic practices that use computer code as a medium.",
    source: "CreativeCodeBerlin — FrequentlyAsked",
    url: "https://github.com/CreativeCodeBerlin/FrequentlyAsked"
  },
  {
    text: "Creative coding is a type of computer programming in which the goal is to create something expressive instead of something functional.",
    source: "Wikipedia — Creative coding",
    url: "https://en.wikipedia.org/wiki/Creative_coding"
  },
  {
    text: "Creative coding is the practice of combining programming techniques with artistic expression in order to create aesthetically pleasing and optimized interactive digital experiences.",
    source: "SMU Meadows — What Is Creative Coding?",
    url: "https://www.smu.edu/meadows/newsandevents/news/2023/what-is-creative-coding"
  },
  {
    text: "Creative coding uses software, code and computational processes to be expressive or to create art forms.",
    source: "UAL — How to Start Creative Coding",
    url: "https://www.arts.ac.uk/study-at-ual/short-courses/stories/how-to-start-creative-coding"
  },
  {
    text: "'Creative coding' is a pedagogy centered on the expression of pupils' own original ideas through the medium of code.",
    source: "University of Roehampton — Creative coding",
    url: "https://pure.roehampton.ac.uk/portal/en/publications/creative-coding/"
  },
  {
    text: "Creative coding is a process, based on exploration, iteration, reflection and discovery, where code is used as the primary medium to create a wide range of media artifacts.",
  source: "trcc— What Is Creative Coding?",
  url: "https://trcc.timrodenbroeker.de/what-is-creative-coding/"
  },
  {
    text: "Creative Coding is a place where experience in the field of design, love of explorative creativity and skills as a programmer come together. […]",
    source: "Patrik Hübner — Creative Coding, Data Design Dictionary",
    url: "https://www.patrik-huebner.com/datadesigndictionary/creative-coding/"
  },
  {
    text: "Creative Coding is an approach to programming computers in which the primary goal is to create an aesthetic or expressive experience. […]",
    source: "TCNJ — Creative Coding",
    url: "https://dct.tcnj.edu/program/imm-areas-of-study/creative-coding/"
  },
  {
    text: "Creative Coding explores the expressive side of coding.",
    source: "Kent State University — Creative Coding",
    url: "https://www.kent.edu/emat/creative-coding"
  },
  {
    text: "Creative coding is an experimentation-heavy activity that requires translating high-level visual ideas into code.",
    source: "AniFrame research paper (2024), arXiv",
    url: "https://arxiv.org/abs/2404.10250"
  }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable tht holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomSeed(millis());
  pickQuote(); // calls the function to pick a quote
}

function pickQuote() {
  current = random(quotes);

  let link = document.querySelector("#source-link");
  link.innerHTML = "";

  let a = document.createElement("a");
  a.href = current.url;
  a.textContent = "-" + current.source;
  a.target = "_blank";
  a.rel = "noopener noreferrer";

  link.appendChild(a);
}

function draw() {
  background("#EAF0F4");
  drawQuote(); // draw the quote on screen
}

function drawQuote() {
  fill("#4B6478");
  textAlign(CENTER, CENTER);

  textSize(24);
  textStyle(BOLD);
  text("Creative Coding is.....", width / 2, height / 2 - 120);

  textSize(20);
  textStyle(NORMAL);
  text(
    "“" + current.text + "”",
    width / 2 - 180,
    height / 2 - 80,
    360,
    200
  );
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote();
}