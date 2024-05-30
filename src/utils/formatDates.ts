export const formatDates = (dates: string[]): string[] => {
  return dates.map((date) => {
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`;
  });
};

export const formatDate = (date: string): string => {
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};
