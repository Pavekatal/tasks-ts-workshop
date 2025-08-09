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
