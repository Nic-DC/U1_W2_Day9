let userName = "Gheorghe";
let languageArray = ["RO", "EN", "FR", "PL", "HUN"];
let randomIndex = Math.floor(Math.random() * languageArray.length);

switch (languageArray[randomIndex]) {
  case "RO":
    console.log(`Salut, bine ai venit ${userName}!`);
    break;
  case "EN":
    console.log(`Hi, welcome! ${userName}`);
    break;
  case "FR":
    console.log(`Bon matin! ${userName}`);
    break;
  default:
    console.log(`Language not supported! ${userName}`);
    break;
}

// if (language === "RO") {
//     console.log("Salut, bine ai venit");
//   } else if (language === "EN") {
//     console.log("Hi, welcome");
//   } else if (language === "FR") {
//     console.log("Bienveniu!");
//   } else {
//     console.log("Language not supported");
//   }
