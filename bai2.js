// bai1 ngày19/1/2024
function isPrime(number) {
    // Kiểm tra các trường hợp đặc biệt
    if (number <= 1) {
      return false;
    }
    if (number <= 3) {
      return true;
    }
  
    // Kiểm tra xem số có chia hết cho các số từ 2 đến căn bậc hai của số đó hay không
    const limit = Math.sqrt(number);
    for (let i = 2; i <= limit; i++) {
      if (number % i === 0) {
        return false;
      }
    }
  
    return true;
  }
  
  // Sử dụng hàm để kiểm tra một số
  const numberToCheck = 19;
  if (isPrime(numberToCheck)) {
    console.log(numberToCheck + " là số nguyên tố.");
  } else {
    console.log(numberToCheck + " không là số nguyên tố.");
  }