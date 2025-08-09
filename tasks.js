const user = {
    name: "Alice",
    age: 15,
};
const isAdult = (user) => {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
};
console.log(isAdult(user));
const movie = {
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
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
const move = (direction) => {
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
const users = [
    { name: "Alice", age: 15 },
    { name: "Alex", age: 21 },
    { name: "Ivan", age: 24 },
    { name: "Julya", age: 18 },
];
const sortByAge = (users) => {
    const sortUsers = [...users].sort((a, b) => a.age - b.age);
    console.log("sortUsers:", sortUsers);
};
console.log("users:", users);
sortByAge(users);
export {};
//# sourceMappingURL=tasks.js.map