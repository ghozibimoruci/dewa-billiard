// Data Jadwal Turnamen
const scheduleData = [
  {
    player_1: "Resti",
    player_2: "Suyudi",
    date: "2026-05-11 17:30"
  },
  {
    player_1: "Resti",
    player_2: "Vinanda Kristianti",
    date: "2026-05-11 17:30"
  },
  {
    player_1: "King Ali",
    player_2: "Suyudi",
    date: "2026-05-11 17:30"
  },
  {
    player_1: "Enrico Raynaldo",
    player_2: "Martian Logi Otama",
    date: "2026-05-12 12:00"
  },
  {
    player_1: "Martian Logi Otama",
    player_2: "Asnan Asrawi",
    date: "2026-05-12 12:00"
  },
  {
    player_1: "Gestyar Satrio Adji",
    player_2: "Ryan Jonathan",
    date: "2026-05-12 12:00"
  },
  {
    player_1: "Enrico Raynaldo",
    player_2: "Zakaria",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "Enrico Raynaldo",
    player_2: "Asnan Asrawi",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "Suyudi",
    player_2: "Rabbani Ridho Ihsani",
    date: "2026-05-13 12:00"
  },
  {
    player_1: "Zakaria",
    player_2: "Asnan Asrawi",
    date: "2026-05-13 12:00"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "AW",
    date: "2026-05-15 12:00"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "Ghozi Bimo Ruci",
    date: "2026-05-15 12:00"
  },
  {
    player_1: "Karno",
    player_2: "AW",
    date: "2026-05-18 12:00"
  },
  {
    player_1: "Suyudi",
    player_2: "Vinanda Kristianti",
    date: "2026-05-18 12:00"
  },
  {
    player_1: "Zakaria",
    player_2: "Martian Logi Otama",
    date: "2026-05-19 12:00"
  },
  {
    player_1: "Ryan Jonathan",
    player_2: "Yustinus",
    date: "2026-05-19 12:00"
  },
  {
    player_1: "Karno",
    player_2: "Sigit Suparno Putra",
    date: "2026-05-19 12:00"
  },
  {
    player_1: "Lukas Sinambela",
    player_2: "Rabbani Ridho Ihsani",
    date: "2026-05-20 12:00"
  },
  {
    player_1: "Rifki Dwi Setyanto",
    player_2: "Asnan Asrawi",
    date: "2026-05-20 12:00"
  },
  {
    player_1: "M. Aqsa Munzir Muflihan",
    player_2: "Gestyar Satrio Adji",
    date: "2026-05-20 12:00"
  },
  {
    player_1: "Wildan Viado Elvana Putra",
    player_2: "AW",
    date: "2026-05-21 12:00"
  },
  {
    player_1: "Lukas Sinambela",
    player_2: "Vinanda Kristianti",
    date: "2026-05-21 12:00"
  },
  {
    player_1: "Rifki Dwi Setyanto",
    player_2: "Martian Logi Otama",
    date: "2026-05-21 12:00"
  },
  {
    player_1: "M. Aqsa Munzir Muflihan",
    player_2: "Yustinus",
    date: "2026-05-22 12:00"
  },
  {
    player_1: "Wildan Viado Elvana Putra",
    player_2: "Sigit Suparno Putra",
    date: "2026-05-22 12:00"
  },
  {
    player_1: "Lukas Sinambela",
    player_2: "Suyudi",
    date: "2026-05-22 12:00"
  },
  {
    player_1: "Rifki Dwi Setyanto",
    player_2: "Zakaria",
    date: "2026-05-25 12:00"
  },
  {
    player_1: "M. Aqsa Munzir Muflihan",
    player_2: "Ryan Jonathan",
    date: "2026-05-25 12:00"
  },
  {
    player_1: "Wildan Viado Elvana Putra",
    player_2: "Karno",
    date: "2026-05-25 12:00"
  },
  {
    player_1: "King Ali",
    player_2: "Rabbani Ridho Ihsani",
    date: "2026-05-26 12:00"
  },
  {
    player_1: "Fathur Rahman",
    player_2: "Gestyar Satrio Adji",
    date: "2026-05-26 12:00"
  },
  {
    player_1: "King Ali",
    player_2: "Vinanda Kristianti",
    date: "2026-05-28 12:00"
  },
  {
    player_1: "Fathur Rahman",
    player_2: "Yustinus",
    date: "2026-05-29 12:00"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "Sigit Suparno Putra",
    date: "2026-05-29 12:00"
  },
  {
    player_1: "Fathur Rahman",
    player_2: "Ryan Jonathan",
    date: "2026-06-02 12:00"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "Karno",
    date: "2026-06-02 12:00"
  },
  {
    player_1: "King Ali",
    player_2: "Lukas Sinambela",
    date: "2026-06-03 12:00"
  },
  {
    player_1: "Enrico Raynaldo",
    player_2: "Rifki Dwi Setyanto",
    date: "2026-06-03 12:00"
  },
  {
    player_1: "Fathur Rahman",
    player_2: "M. Aqsa Munzir Muflihan",
    date: "2026-06-03 12:00"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "Wildan Viado Elvana Putra",
    date: "2026-06-04 12:00"
  },
  {
    player_1: "Resti",
    player_2: "Rabbani Ridho Ihsani",
    date: "2026-06-04 12:00"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Asnan Asrawi",
    date: "2026-06-04 12:00"
  },
  {
    player_1: "Juwandy Susilo",
    player_2: "Gestyar Satrio Adji",
    date: "2026-06-05 12:00"
  },
  {
    player_1: "Ghozi Bimo Ruci",
    player_2: "AW",
    date: "2026-06-05 12:00"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Martian Logi Otama",
    date: "2026-06-08 12:00"
  },
  {
    player_1: "Juwandy Susilo",
    player_2: "Yustinus",
    date: "2026-06-08 12:00"
  },
  {
    player_1: "Ghozi Bimo Ruci",
    player_2: "Sigit Suparno Putra",
    date: "2026-06-08 12:00"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Zakaria",
    date: "2026-06-09 12:00"
  },
  {
    player_1: "Juwandy Susilo",
    player_2: "Ryan Jonathan",
    date: "2026-06-09 12:00"
  },
  {
    player_1: "Ghozi Bimo Ruci",
    player_2: "Karno",
    date: "2026-06-10 12:00"
  },
  {
    player_1: "Resti",
    player_2: "Lukas Sinambela",
    date: "2026-06-10 12:00"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Rifki Dwi Setyanto",
    date: "2026-06-10 12:00"
  },
  {
    player_1: "Juwandy Susilo",
    player_2: "M. Aqsa Munzir Muflihan",
    date: "2026-06-11 12:00"
  },
  {
    player_1: "Ghozi Bimo Ruci",
    player_2: "Wildan Viado Elvana Putra",
    date: "2026-06-11 12:00"
  },
  {
    player_1: "Resti",
    player_2: "King Ali",
    date: "2026-06-11 12:00"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Enrico Raynaldo",
    date: "2026-06-12 12:00"
  },
  {
    player_1: "Juwandy Susilo",
    player_2: "Fathur Rahman",
    date: "2026-06-12 12:00"
  }
];
