const getValue = (id) => parseInt(document.getElementById(id).value, 10) || 0;

let wageInput, daysInput, dailyWage, daysWorked, wageWithoutTax, message;

const displayMessage = (messageArray) => {
  message.innerHTML = messageArray.join('<br>');
};

const calculateTax = (taxRate) => {
  const taxAmount = wageWithoutTax * taxRate;
  const totalWage = wageWithoutTax - taxAmount;

  const messages = [
    `حقوق بدون محاسبه مالیات : ${wageWithoutTax}`,
    `مقدار مالیات محاسبه شده : ${taxAmount}`,
    `حقوق با محاسبه مالیات : ${totalWage}`,
  ];

  displayMessage(messages);
};

const calculateWage = () => {
  dailyWage = getValue('salaryInput');
  daysWorked = getValue('daysInput');
  message = document.getElementById('result');

  !dailyWage && !daysWorked
    ? displayMessage(['حقوق و تعداد روز های کاری خود را وارد نمایید'])
    : (wageWithoutTax = dailyWage * daysWorked);

  if (wageWithoutTax <= 12000000) {
    displayMessage([
      'حقوق های کمتر از دوازده میلیون تومان معاف از مالیات هستند',
    ]);
  } else if (wageWithoutTax > 12000000 && wageWithoutTax < 15000000) {
    calculateTax(0.1);
  } else if (wageWithoutTax >= 15000000 && wageWithoutTax < 20000000) {
    calculateTax(0.2);
  } else if (wageWithoutTax >= 20000000 && wageWithoutTax < 30000000) {
    calculateTax(0.3);
  } else if (wageWithoutTax >= 30000000) {
    calculateTax(0.4);
  }
};
