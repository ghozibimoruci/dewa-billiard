// Data Pertandingan Selesai
const doneMatches = [
  {
    player_1: "Rabbani Ridho Ihsani",
    player_2: "Vinanda Kristianti",
    winner: "Vinanda Kristianti",
    date: "2026-05-11 12:00"
  },
  {
    player_1: "Sigit Suparno Putra",
    player_2: "AW",
    winner: "Sigit Suparno Putra",
    date: "2026-05-11 12:00"
  },
  {
    player_1: "Yustinus",
    player_2: "Gestyar Satrio Adji",
    winner: "Gestyar Satrio Adji",
    date: "2026-05-11 12:00"
  },
  {
    player_1: "Resti",
    player_2: "Suyudi",
    winner: "Resti",
    date: "2026-05-11 17:30"
  },
  {
    player_1: "Resti",
    player_2: "Vinanda Kristianti",
    winner: "Resti",
    date: "2026-05-11 17:30"
  },
  {
    player_1: "King Ali",
    player_2: "Suyudi",
    winner: "Suyudi",
    date: "2026-05-11 17:30"
  },
  {
    player_1: "Enrico Raynaldo",
    player_2: "Martian Logi Otama",
    winner: "Martian Logi Otama",
    date: "2026-05-12 12:00"
  },
  {
    player_1: "Martian Logi Otama",
    player_2: "Asnan Asrawi",
    winner: "Asnan Asrawi",
    date: "2026-05-12 12:00"
  },
  {
    player_1: "Gestyar Satrio Adji",
    player_2: "Ryan Jonathan",
    winner: "Gestyar Satrio Adji",
    date: "2026-05-12 12:00"
  },
  {
    player_1: "Enrico Raynaldo",
    player_2: "Asnan Asrawi",
    winner: "Enrico Raynaldo",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "King Ali",
    player_2: "Lukas Sinambela",
    winner: "Lukas Sinambela",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "Enrico Raynaldo",
    player_2: "Zakaria",
    winner: "Enrico Raynaldo",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "King Ali",
    player_2: "Rabbani Ridho Ihsani",
    winner: "King Ali",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "King Ali",
    player_2: "Vinanda Kristianti",
    winner: "Vinanda Kristianti",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "Zakaria",
    player_2: "Asnan Asrawi",
    winner: "Asnan Asrawi",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "Karno",
    winner: "Arif Setiadi",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Martian Logi Otama",
    winner: "Martian Logi Otama",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Asnan Asrawi",
    winner: "Rheza Rivaldi",
    date: "2026-05-12 17:30"
  },
  {
    player_1: "Ryan Jonathan",
    player_2: "Yustinus",
    winner: "Ryan Jonathan",
    date: "2026-05-13 12:00"
  },
  {
    player_1: "Wildan Viado Elvana Putra",
    player_2: "Karno",
    winner: "Wildan Viado Elvana Putra",
    date: "2026-05-13 12:00"
  },
  {
    player_1: "M. Aqsa Munzir Muflihan",
    player_2: "Gestyar Satrio Adji",
    winner: "M. Aqsa Munzir Muflihan",
    date: "2026-05-13 12:00"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Zakaria",
    winner: "Zakaria",
    date: "2026-05-13 12:00"
  },
  {
    player_1: "Enrico Raynaldo",
    player_2: "Rifki Dwi Setyanto",
    winner: "Enrico Raynaldo",
    date: "2026-05-13 12:00"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Rifki Dwi Setyanto",
    winner: "Rifki Dwi Setyanto",
    date: "2026-05-13 12:00"
  },
  {
    player_1: "Ryan Jonathan",
    player_2: "M. Aqsa Munzir Muflihan",
    winner: "Ryan Jonathan",
    date: "2026-05-13 12:00"
  },
  {
    player_1: "Rheza Rivaldi",
    player_2: "Enrico Raynaldo",
    winner: "Enrico Raynaldo",
    date: "2026-05-13 17:30"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "AW",
    winner: "Arif Setiadi",
    date: "2026-05-15 12:00"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "Ghozi Bimo Ruci",
    winner: "Arif Setiadi",
    date: "2026-05-15 12:00"
  },
  {
    player_1: "Ghozi Bimo Ruci",
    player_2: "AW",
    winner: "Ghozi Bimo Ruci",
    date: "2026-05-15 12:00"
  },
  {
    player_1: "Karno",
    player_2: "AW",
    winner: "Karno",
    date: "2026-05-15 12:00"
  },
  {
    player_1: "Rifki Dwi Setyanto",
    player_2: "Asnan Asrawi",
    winner: "Asnan Asrawi",
    date: "2026-05-18 12:00"
  },
  {
    player_1: "Wildan Viado Elvana Putra",
    player_2: "AW",
    winner: "AW",
    date: "2026-05-18 12:00"
  },
  {
    player_1: "Ghozi Bimo Ruci",
    player_2: "Karno",
    winner: "Ghozi Bimo Ruci",
    date: "2026-05-18 17:30"
  },
  {
    player_1: "Zakaria",
    player_2: "Martian Logi Otama",
    winner: "Zakaria",
    date: "2026-05-19 12:00"
  },
  {
    player_1: "Wildan Viado Elvana Putra",
    player_2: "Sigit Suparno Putra",
    winner: "Wildan Viado Elvana Putra",
    date: "2026-05-19 12:00"
  },
  {
    player_1: "Karno",
    player_2: "Sigit Suparno Putra",
    winner: "Sigit Suparno Putra",
    date: "2026-05-19 12:00"
  },
  {
    player_1: "Ghozi Bimo Ruci",
    player_2: "Sigit Suparno Putra",
    winner: "Sigit Suparno Putra",
    date: "2026-05-19 12:00"
  },

  {
    player_1: "Suyudi",
    player_2: "Vinanda Kristianti",
    winner: "Vinanda Kristianti",
    date: "2026-05-19 17:30"
  },
  {
    player_1: "Suyudi",
    player_2: "Rabbani Ridho Ihsani",
    winner: "Rabbani Ridho Ihsani",
    date: "2026-05-19 17:30"
  },
  {
    player_1: "Fathur Rahman",
    player_2: "Gestyar Satrio Adji",
    winner: "Gestyar Satrio Adji",
    date: "2026-05-20 12:00"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "Wildan Viado Elvana Putra",
    winner: "Arif Setiadi",
    date: "2026-05-20 12:00"
  },
  {
    player_1: "Ghozi Bimo Ruci",
    player_2: "Wildan Viado Elvana Putra",
    winner: "Wildan Viado Elvana Putra",
    date: "2026-05-20 17:30"
  },
  {
    player_1: "Lukas Sinambela",
    player_2: "Rabbani Ridho Ihsani",
    winner: "Rabbani Ridho Ihsani",
    date: "2026-05-21 12:00"
  },
  {
    player_1: "Lukas Sinambela",
    player_2: "Vinanda Kristianti",
    winner: "Vinanda Kristianti",
    date: "2026-05-21 12:00"
  },
  {
    player_1: "Rifki Dwi Setyanto",
    player_2: "Martian Logi Otama",
    winner: "Rifki Dwi Setyanto",
    date: "2026-05-21 17:30"
  },
  {
    player_1: "Arif Setiadi",
    player_2: "Sigit Suparno Putra",
    winner: "Arif Setiadi",
    date: "2026-05-22 12:00"
  },
  {
    player_1: "Juwandy Susilo",
    player_2: "Fathur Rahman",
    winner: "Juwandy Susilo",
    date: "2026-05-22 17:30"
  },
  {
    player_1: "Juwandy Susilo",
    player_2: "Gestyar Satrio Adji",
    winner: "Gestyar Satrio Adji",
    date: "2026-05-22 17:30"
  },
  {
    player_1: "Fathur Rahman",
    player_2: "M. Aqsa Munzir Muflihan",
    winner: "M. Aqsa Munzir Muflihan",
    date: "2026-05-22 17:30"
  },
  {
    player_1: "Juwandy Susilo",
    player_2: "M. Aqsa Munzir Muflihan",
    winner: "Juwandy Susilo",
    date: "2026-05-22 17:30"
  },
  {
    player_1: "Fathur Rahman",
    player_2: "Ryan Jonathan",
    winner: "Ryan Jonathan",
    date: "2026-05-22 17:30"
  },
  {
    player_1: "Juwandy Susilo",
    player_2: "Ryan Jonathan",
    winner: "Juwandy Susilo",
    date: "2026-05-22 17:30"
  },
  {
    player_1: "Rifki Dwi Setyanto",
    player_2: "Zakaria",
    winner: "Zakaria",
    date: "2026-05-25 12:00"
  }
];
