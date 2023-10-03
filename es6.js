const student = [
  {
    name: "Rafi",
    age: 12,
    address: {
      presentAddress: "Dhaka",
      permanentAddress: "Barisal",
    },
    subject: [
      {
        generalSubject: "Bangla",
      },
      {
        majorSubject: "Math",
      },
    ],
  },
];

let major = student[0].subject[1].majorSubject;
console.log(major);
