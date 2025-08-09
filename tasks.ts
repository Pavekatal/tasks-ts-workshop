// Задача 1. isAdult
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
