export function getDifferenceYear(year) {
  return new Date().getFullYear() - year;
}

export function brandCalculate(brand) {
  let increment;

  switch (brand) {
    case "BMW":
      increment = 1.5;
      break;
    case "Ducati":
      increment = 1.3;
      break;
    case "Harley":
      increment = 1.4;
      break;
    case "Kawasaki":
      increment = 1.6;
      break;
    default:
      break;
  }
  return increment;
}

export function getPlan(plan) {
  return plan === "basico" ? 1.2 : 1.5;
}

export function firstLetterMayus(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}
