export const formatDateRange = (startDate: Date, endDate: Date): string => {
  const options = { month: 'short', day: 'numeric' } as const;

  const formatter = new Intl.DateTimeFormat('en-US', options);

  const startStr = formatter.format(startDate); // e.g. "Dec 1"
  const endStr = formatter.format(endDate); // e.g. "Dec 12"

  return `${startStr} - ${endStr}`;
};
