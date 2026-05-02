class Holiday {
  constructor(name, month, day) {
    this.name = name;
    this.month = month;
    this.day = day;
  }
}

export const holidays = [
  new Holiday("Nyårsdagen", 1, 1),
  new Holiday("Trettondedag jul", 1, 6),
  new Holiday("Långfredagen", 4, 3),
  new Holiday("Påskdagen", 4, 5),
  new Holiday("Annandag påsk", 4, 6),
  new Holiday("Första maj", 5, 1),
  new Holiday("Kristi himmelsfärdsdag", 5, 14),
  new Holiday("Pingstdagen", 5, 24),
  new Holiday("Sveriges nationaldag", 6, 6),
  new Holiday("Alla helgons dag", 11, 1),
  new Holiday("Juldagen", 12, 25),
  new Holiday("Annandag jul", 12, 26),
];
