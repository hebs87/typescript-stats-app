export const dateStringToDate = (dateString: string): Date => {
  // Split the date (day, month, year) and convert the strings to numbers
  const dateParts = dateString.split('/')
    .map((value: string): number => {
      return parseInt(value);
    });

  const day = dateParts[0];
  const month = dateParts[1] - 1;
  const year = dateParts[2];

  // Pass array parts in the following format - year, month - 1, day
  return new Date(year, month, day);
};
