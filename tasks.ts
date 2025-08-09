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
