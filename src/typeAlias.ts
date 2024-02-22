// defining type of object
type User = {
  name: string;
  age: number;
  address?: string; // optional
};

const user: User = {
  name: "45",
  age: 45,
};

// used object type in function
function login(userData: User): User {
  return userData;
}

console.log(login(user));

type ID = number | string; // union
const userId: ID = 12;
