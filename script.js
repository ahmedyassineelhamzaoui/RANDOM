const number = document.getElementById('number');
const generateBtn = document.getElementById('generateBtn');
const apprenant = ["Abdelkrim Jouidri",
"Abdellah El Hilaly",
"Adnane Khayrou",
"Anass Kassemi",
"Asmae Elkhiraoui",
"Fahd Mahfoudi",
"Hajjou Walkadi",
"Hicham Al Qagh",
"Hind Hansali",
"Imane Rouchdi",
"Youssef Elmati",
"Marouane Tabib",
"Mehdi Ez-zahri",
"Mohammed El Arabi Naciri",
"Mouad El Amraoui",
"Mouad Fifel",
"Youssef Elmati",
"Nouhaila El Housni",
"Oumaima Elmachi",
"Salaheddine Hanaoui",
"Salma Gader",
"Shima Toufik",
"Tarek Ouachani",
"Yassine Sahyane",
"Youness Ahasla",
"Youssef Elmati"];

const randomNumberGenerator = () => {
  const randomNumber = Math.floor(Math.random() * 26);
  number.textContent = apprenant[randomNumber];
  
};

generateBtn.addEventListener('click', randomNumberGenerator);
