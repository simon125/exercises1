/**
 * usuń/odfiltruj wszystkie stringi z tablicy które mają mniej znaków niż 3
 *
 * wynik wykonsoluj przy użyciu metody console.table lub wyświetl dane w dowolny znany Ci sposób
 */

// const strings2 = ["adsfasdf", "qweqwdasd", null, "as", "assadwq", "s", ""];

// const newString = strings2.filter((string) => {
//   if (string === null) {
//     return false;
//   }

//   return string.length >= 3;
// });

// console.log(newString);

// const newString = strings2.filter(function (string) {
//   return string.length >= 3;
// });

// function filterToShortString(string) {
//   return string.length >= 3;
// }

// const newStrings = strings2.filter(filterToShortString);

// console.log(newStrings);

/**
 * Przerób podaną tablicę tak aby zawierała osoby pełnoletnie w świetle polskiego prawa
 *
 * wynik wykonsoluj przy użyciu metody console.table lub wyświetl dane w dowolny znany Ci sposób
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const users = [
  { name: "John", age: 12 },
  { name: "Jane", age: 22 },
  { name: "Joe", age: 55 },
  { name: "Kate", age: "9" },
];
//   const adultUser = users.filter(({age}) => age >= 18 ? true : false);
//   console.log(adultUser);

// users.forEach((element, index) => {
//   if (element.age < 18) {
//     users.splice(index, 1);
//   }
// });

// users.forEach((element) => {
//   console.log(`imię: ${element.name} , wiek: ${element.age}`);
// });

/**
 * dodaj do każdego stringa w tablicy znak specjalny * w taki sposób żeby był pomiędzy każdą literką
 * np cześć => c*z*e*ś*ć
 *
 * wynik wykonsoluj za pomocą console.table
 *
 */

const strings1 = ["adsfasdf", "qweqwdasd", "as", "assadwq", "s", "", 123];

// const strings2 = strings1.map((string) => {
//   if (typeof string === "number") {
//     const numberAsASrting = string.toString();
//     const stringAsArray = numberAsASrting.split("");
//     const newString = stringAsArray.join("*");

//     return newString;
//   }

//   const stringAsArray = string.split("");
//   const newString = stringAsArray.join("*");

//   return newString;
// });

// console.log(strings2);

/**
 * "jakisstring".split('s'); // tworzy tablice ze stringa
 * [1,2,3,4].join('');  // łączy elmenty w tablicy tworząc stringa
 */

/**
 * Stwórz funkcję która będzie zwracać "zresetowaną" tablicę todos
 * tzn mając tablice todos z różnymi statusami przetwórz daną tablicę tak żeby wszystkie statusy
 * były ustawione na todo - zwróć uwage jak wygląda podany kształ danych
 *
 * wynik wyświetl za pomocą console.table
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

const todos0 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się JSa", status: "wehfkjshbfbds" },
];

const resetedTodos = todos0.map((todo) => {
  const newTodo = { ...todo };

  newTodo.status = "todo";

  return newTodo;
});

// console.table(todos0);
// console.table(resetedTodos);

/**
 * Stwórz funkcję która będzie zwracać "zarchiwizowaną" tablicę todos
 * tzn dodaj dodatkowe pole typu boolean do kazdego obiektu w tablicy
 * pole niech się nazywa archived i niech będzie ustawione na true
 *
 * wynik wyświetl za pomocą console.table
 *
 * ⭐ możesz wyświetlić dane w tabeli w HTMLu - ćwiczenie z DOMa
 */

// const todos1 = [
//   { task: "wyspać się", status: "in progress" },
//   { task: "mieć dobry chumor", status: "todo" },
//   { task: "pouczyć się CSSa", status: "in progress" },
//   { task: "pouczyć się JSa", status: "todo" },
// ];

// const archived = todos1.map((todo) => {
//   todo.archived = true;
//   return todo;
// });

// console.table(archived);

/**
 * stwórz funkcje która obsłuży search bar (np taki jak w aplikacjach do wyszukiwania rekordów)
 *
 * funckja będzie szukać w tablicy na podstawie pola "task",
 * funckja ma zwracać pierwszy pasujący element
 *
 *
 * ⭐ ⭐ dla chętnych niech funckja posiada drugi parametr określający czy chcemy dostać
 * wszystkie pasujące elementy np podając słowo "pouczyć się" funkcja powinna zwrócić dwa elmenty z poniższej tablicy
 * gdy drugi parametr funkcji określa np że chcemy konretny rekord/element tablicy niech funckja
 * wyszukuje pierwszy pasujący element
 *
 *
 */

const todos2 = [
  { task: "wyspać się", status: "in progress" },
  { task: "mieć dobry chumor", status: "todo" },
  { task: "pouczyć się JSa", status: "todo" },
  { task: "pouczyć się CSSa", status: "in progress" },
  { task: "pouczyć się htmla", status: "in progress" },
];

// const searchRecord = (searchPhrase) => {
//   const results = todos2.filter((todo) => {
//     return todo.task.includes(searchPhrase);
//   });

//   if (results.length > 1) {
//     return results;
//   }

//   return results[0];
// };

// const szuakaneRekordy = searchRecord("pouczyć");

// const szuakanyRekord = searchRecord("mieć");

// console.log(szuakaneRekordy);
// console.log(szuakanyRekord);

/**
 * podana tablica skłąda się ze studenów którzy są przyporządkowani każdy do jakiejś grupy
 * jednak są oni w tej samej tablicy
 *
 * swtórz funkcje która stworzy dwie lub więcej tablic w tablicy na podstawie pola group
 * dzięki temu pogrupujesz studentów i będzie można ich wyświetlić pogrupowancyh do
 * czego zachęcam żeby przećwiczyć operacje na DOMie
 */

const students = [
  { name: "John", age: 12, group: 1 },
  { name: "Joe", age: 55, group: 1 },
  { name: "Jane", age: 22, group: 2 },
  { name: "Jamie", age: 22, group: 4 },
  { name: "Jack", age: 22, group: 3 },
  { name: "Kate", age: 9, group: 2 },
];

const ageSum = students.reduce((sum, student) => {
  console.log(["SUM", sum]);
  console.log(["student", student]);

  const newSum = sum + student.age;

  return newSum; // ta wartośc będzie aktualizować pamięć podręczną
}, 0);

const avarage = ageSum / students.length;

console.log(avarage);

// 12
// 55
// 22
// 22
// 22
// 9  wszystko to musicie dodać i podzielić przez liczbę studentów czyli students.lenght

// const arr = ["jhon", "jane"];

// const groupedStudents = students
//   .reduce((groups, student, index, arr) => {
//     if (groups[student.group]) {
//       groups[student.group].push(student);
//     } else {
//       groups[student.group] = [student];
//     }

//     return groups;
//   }, [])
//   .filter(Boolean);

// console.log(groupedStudents);

// [
//   [
//     { name: "John", age: 12, group: 1 },
//     { name: "Joe", age: 55, group: 1 },
//   ],
//   [
//     { name: "Jane", age: 22, group: 2 },
//     { name: "Kate", age: 9, group: 2 },
//   ],
//   [{ name: "Jamie", age: 22, group: 4 }],
//   [{ name: "Jack", age: 22, group: 3 }],
// ];
