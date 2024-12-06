window.function = function(date) {
  if (!date || typeof date.value !== "string") {
    throw new Error("Invalid input. Please provide a valid date string.");
  }

  const inputDate = new Date(date.value);

  if (isNaN(inputDate)) {
    throw new Error("Invalid date format. Please provide a valid date string.");
  }

  const day = inputDate.getDate();
  const year = inputDate.getFullYear();
  const month = inputDate.getMonth();

  let resultDate;

  if (day < 15) {
    // Last day of the current month
    resultDate = new Date(year, month + 1, 0); // 0th day of the next month gives the last day of the current month
  } else {
    // Last day of the next month
    resultDate = new Date(year, month + 2, 0); // 0th day of the month after next
  }

  return resultDate.toISOString().split("T")[0]; // Return in YYYY-MM-DD format
};