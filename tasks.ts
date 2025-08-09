// Task 1. isAdult
// Напишите функцию, которая принимает объект пользователя {name: string; age: number} и возвращает true, если возраст - 18+.
type UserType = {
  name: string;
  age: number;
};

const user: UserType = {
  name: "Alice",
  age: 15,
};

const isAdult = (user: UserType) => {
  if (user.age >= 18) {
    return true;
  } else {
    return false;
  }
};

console.log(isAdult(user));

// Task 2. Интерфейс Movie.
// Создайте интерфейс Movie с полями:
// title: string
// year: number
// rating?: number
// readonly id: string
// Создайте переменную movie этого типа.

interface Movie {
  title: string;
  year: number;
  rating?: number;
  readonly id: string;
}

const movie: Movie = {
  id: "01",
  title: "Tenet",
  year: 2020,
  rating: 7,
};

console.log(movie);

// Task 3. Enum + switch
// Определите enum Direction с вариантами 'Up', 'Down', 'Left', 'Right'.
// Напишите функцию move(direction: Direction): string, возвращающую строку:
// "Moving up" и т.п.

enum Direction {
  Up,
  Down,
  Left,
  Right,
}

const move = (direction: Direction): string => {
  let directionName;
  switch (direction) {
    case Direction.Up:
      directionName = "up";
      break;
    case Direction.Down:
      directionName = "down";
      break;
    case Direction.Left:
      directionName = "left";
      break;
    case Direction.Right:
      directionName = "right";
      break;
    default:
      break;
  }
  return `Moving ${directionName}`;
};

console.log(move(Direction.Down));
console.log(move(Direction.Right));
console.log(move(Direction.Up));
console.log(move(Direction.Left));

// Task 4. Сортировка пользователей
// Напишите функцию sortByAge(users): User[], возвращающую
// отсортированный массив по возрасту

type User = {
  name: string;
  age: number;
};

const users: User[] = [
  { name: "Alice", age: 15 },
  { name: "Alex", age: 21 },
  { name: "Ivan", age: 24 },
  { name: "Julya", age: 18 },
];

const sortByAge = (users: User[]) => {
  const sortUsers = [...users].sort((a, b) => a.age - b.age);
  console.log("sortUsers:", sortUsers);
  return sortUsers;
};
console.log("users:", users);
sortByAge(users);

// Task 5. Union-Тип Status
// Создайте тип Status = "idle" | "loading" | "success" | "error"
// Реализуйте функцию getStatusMessage(status: Status): string,
// которая возвращает сообщение в зависимости от статуса.

type Status = "idle" | "loading" | "success" | "error";

const getStatusMessage = (status: Status): string => {
  let nameStatus;
  if (status === "idle") {
    nameStatus = "принято";
  } else if (status === "loading") {
    nameStatus = "в обработке";
  } else if (status === "success") {
    nameStatus = "обработано успешно";
  } else {
    nameStatus = "обработано с ошибкой";
  }
  return `Сообщение ${nameStatus}`;
};

console.log(getStatusMessage("idle"));
console.log(getStatusMessage("loading"));
console.log(getStatusMessage("success"));
console.log(getStatusMessage("error"));
