"use strict";

const users = [
  {
    id: 1,
    name: "Юрій",
    age: 45,
    gender: "man",
  },
  {
    id: 2,
    name: "Андрій",
    age: 12,
    gender: "man",
  },
  {
    id: 3,
    name: "Анна",
    age: 25,
    gender: "woman",
  },
  {
    id: 4,
    name: "Юрій",
    age: 15,
    gender: "man",
  },
  {
    id: 5,
    name: "Софія",
    age: 40,
    gender: "woman",
  },
  {
    id: 6,
    name: "Юлія",
    age: 70,
    gender: "woman",
  },
  {
    id: 7,
    name: "Дмитро",
    age: 30,
    gender: "man",
  },
  {
    id: 8,
    name: "Дмитро",
    age: 35,
    gender: "man",
  },
];

// перше
// const searchName = users.map(function (names) {
//   return names.name;
// });
// console.log(searchName);

// друге

// const searchMale = users.filter(function (genders) {
//   return genders.gender === "man";
// });

// console.log(searchMale);

// третє

// function repeatName(users) {
//   for (let i = 0; i < users.length - 1; i++) {
//     for (let s = i + 1; s < users.length; s++) {
//       if (users[i].name === users[s].name) {
//         return true;
//       }
//     }
//   }
//   return false;
// }
// console.log(repeatName(users));
// четверте

// const searchOld = users.filter(function (old) {
//   return old.age > 30;
// });
// console.log(searchOld);

// п'яте
// let at = prompt("Введіть імя");
// const searchName = users.filter(function (nam) {
//   return nam.name === at;
// });

// console.log(searchName);
