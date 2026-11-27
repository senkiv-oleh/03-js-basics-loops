/**
 * Task 3.1: Обчислити суму всіх цілих чисел від 1 до n включно за допомогою циклу while.
 * Якщо n <= 0, повернути 0.
 * @param {number} n
 * @returns {number} Example: 5 -> 15 (1+2+3+4+5)
 */
function sumWithWhile(n) {
  let sum = 0;
  let i = 1;
  while (i <= n) {
    sum += i;
    i++;
  }
  return sum;
}

/**
 * Task 3.2: Створити рядок із чисел, відлічуючи від start назад до 1 через пробіл.
 * Використати цикл while (start) з декрементом start--.
 * @param {number} start
 * @returns {string} Example: 3 -> "3 2 1"
 */
function countDownString(start) {
  if (!Number.isInteger(start) || start <= 0) {
    return "";
  }
  let result = "";
  while (start) {
    result += start === 1 ? `${start}` : `${start} `;
    start--;
  }
  return result;
}

/**
 * Task 3.3: Повторити рядок str вказану кількість разів (times) за допомогою циклу do...while.
 * Цикл має виконатися щонайменше один раз, навіть якщо times <= 0.
 * @param {string} str
 * @param {number} times
 * @returns {string} Example: ("hi", 3) -> "hihihi", ("hi", 0) -> "hi"
 */
function doWhileAtLeastOnce(str, times) {
  let result = "";
  let i = 0;
  do {
    result += str;
    i++;
  } while (i < times);
  return result;
}

/**
 * Task 3.4: Обчислити факторіал числа n (n!) за допомогою циклу for.
 * За визначенням: 0! = 1, 1! = 1.
 * @param {number} n
 * @returns {number} Example: 5 -> 120 (1 * 2 * 3 * 4 * 5)
 */
function factorialWithFor(n) {
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

/**
 * Task 3.5: Обчислити суму всіх парних чисел від 2 до max включно за допомогою циклу for з кроком i += 2.
 * @param {number} max
 * @returns {number} Example: 10 -> 30 (2+4+6+8+10)
 */
function sumEvenUpTo(max) {
  let sum = 0;
  for (let i = 2; i <= max; i += 2) {
    sum += i;
  }
  return sum;
}

/**
 * Task 3.6: Знайти перше ціле число, більше або рівне start, яке націло ділиться на divisor.
 * Використати цикл for без секції оголошення "початку" (for (; ;)).
 * @param {number} start
 * @param {number} divisor
 * @returns {number} Example: (7, 3) -> 9
 */
function findFirstDivisible(start, divisor) {
  if (divisor === 0 || Number.isNaN(divisor)) {
    return NaN;
  }
  let i = Math.ceil(start);
  for (; ; i++) {
    if (i % divisor === 0) {
      return i + 0; // "+ 0" перетворює -0 на 0
    }
  }
}

/**
 * Task 3.7: Отримати підрядок із символів рядка str до першого входження stopChar.
 * Використати цикл та директиву break для переривання циклу при виявленні stopChar.
 * @param {string} str
 * @param {string} stopChar
 * @returns {string} Example: ("hello world", " ") -> "hello"
 */
function collectCharsUntilStop(str, stopChar) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] === stopChar) {
      break;
    }
    result += str[i];
  }
  return result;
}

/**
 * Task 3.8: Створити рядок тільки з непарних цифр із переданого рядка цифр.
 * Використати цикл та директиву continue для пропуску парних цифр.
 * @param {string} strOfDigits
 * @returns {string} Example: "123456" -> "135"
 */
function collectOddDigits(strOfDigits) {
  let result = "";
  for (let i = 0; i < strOfDigits.length; i++) {
    if (Number(strOfDigits[i]) % 2 === 0) {
      continue;
    }
    result += strOfDigits[i];
  }
  return result;
}

/**
 * Task 3.9: Згенерувати рядок координат у форматі "(r,c)" для сітки розміром rows x cols.
 * Якщо координата дорівнює stopR та stopC, негайно зупинити ВСІ цикли за допомогою мітки та break label.
 * @param {number} rows
 * @param {number} cols
 * @param {number} stopR
 * @param {number} stopC
 * @returns {string} Example: (2, 2, 0, 1) -> "(0,0) (0,1)"
 */
function generateGridUntilTarget(rows, cols, stopR, stopC) {
  const parts = [];
  outer: for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      parts.push(`(${r},${c})`);
      if (r === stopR && c === stopC) {
        break outer;
      }
    }
  }
  return parts.join(" ");
}

/**
 * Task 3.10: Помножувати start на multiplier у циклі while, поки значення менше за target.
 * Повернути кількість виконаних ітерацій (помножень).
 * @param {number} start
 * @param {number} multiplier
 * @param {number} target
 * @returns {number} Example: (2, 2, 9) -> 3 (2*2=4, 4*2=8, 8*2=16 -> 3 iterations)
 */
function countIterationsToTarget(start, multiplier, target) {
  // Якщо значення ніколи не зросте, цикл був би нескінченним
  if (start < target && (start <= 0 || multiplier <= 1)) {
    return 0;
  }
  let count = 0;
  while (start < target) {
    start *= multiplier;
    count++;
  }
  return count;
}

module.exports = {
  sumWithWhile,
  countDownString,
  doWhileAtLeastOnce,
  factorialWithFor,
  sumEvenUpTo,
  findFirstDivisible,
  collectCharsUntilStop,
  collectOddDigits,
  generateGridUntilTarget,
  countIterationsToTarget
};
