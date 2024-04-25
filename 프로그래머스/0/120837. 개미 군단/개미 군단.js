function solution(hp) {
  let general = Math.floor(hp / 5);
  let boss = hp % 5;

  let sergeant = Math.floor(boss / 3);
  boss %= 3;

  let worker = boss;

  return general + sergeant + worker;
}