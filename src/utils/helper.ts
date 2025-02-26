import { Linking } from 'react-native';

export const goBack = (navigation: any) => {
  if (navigation?.canGoBack()) {
    navigation?.goBack();
  }
};

export const getFileNameFromPath = (path: string) => {
  return path?.replace(/^.*[\\/]/, '') || '';
};

export const openURL = async (path: string) => {
  try {
    await Linking.openURL(path ?? '');
  } catch (err) {}
};

export const getOrdinalSuffix = day => {
  if (day > 3 && day < 21) return 'th'; // Handle special case for 11th to 13th
  switch (day % 10) {
    case 1:
      return 'st';
    case 2:
      return 'nd';
    case 3:
      return 'rd';
    default:
      return 'th';
  }
};

// Function to format the date
export const formatDateFull = date => {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  return `${day}${getOrdinalSuffix(day)} ${month}`;
};

export const increaseMonthAndGetFullMonthName = dateString => {
  // Step 1: Parse the input date string
  const date = new Date(dateString);

  // Step 2: Increase the month
  date.setMonth(date.getMonth() + 1);

  // Step 3: Get the full month name using Intl.DateTimeFormat
  const monthName = date.toLocaleString('en-US', { month: 'long' });

  // Return the updated date and month name
  return { monthName };
};

export default {};
