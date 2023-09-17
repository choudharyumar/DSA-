let money = 100;
let TotalApple = 0;

function BuyApple(x) {
  if (x >= 20) {
    console.log("price remaining", x, "total apple", TotalApple);
    TotalApple++;
    BuyMore(x);
  } else {
    console.log("i donot have sufficient money");
  }
}

function BuyMore(x) {
  BuyApple(x - 20);
}
BuyApple(money);
