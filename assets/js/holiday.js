class Holiday {
  constructor(name, day, month) {
    this.name = name;
    this.day = day;
    this.month = month;
  }
}

export const holidays = [
  new Holiday("New Year", 1),
  new Holiday("Midsummer", 6),
];
