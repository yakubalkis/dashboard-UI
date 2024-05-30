interface Identifiable {
  id: number;
}

export const transformTableData = <T>(items: T[]): (T & Identifiable)[] => {
  return items.map((item, index) => ({
    ...item,
    id: index + 1,
  }));
};
