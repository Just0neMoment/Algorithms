function solution(money) {
  const pricePerCup = 5500;
  const maxCups = Math.floor(money / pricePerCup);
  const remainingMoney = money % pricePerCup;

  return [maxCups, remainingMoney];
}