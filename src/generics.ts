// function toString(arg: string) {
//   console.log(arg);
//   return arg;
// }

// toString("hello");

// function toNumber(arg: number) {
//   console.log(arg);
//   return arg;
// }

// toNumber(4);

// function toArr(arg: any[]) {
//   console.log(arg);
//   return arg;
// }

// toArr([4, 5, "hello"]);

// // generics
// function logAnything<T>(arg: T): T {
//   console.log(arg);
//   return arg;
// }

// logAnything("hello");

// interface HasAge {
//   age: number;
// }

// // this extends HasAge means it should contain age property
// function getOldest<T extends HasAge>(people: T[]): T {
//   return people.sort((a, b) => b.age - a.age)[0];
// }

// const people: HasAge[] = [{ age: 30 }, { age: 40 }, { age: 50 }];

// interface Player {
//   name: string;
//   age: number;
// }

// const players: Player[] = [
//   { name: "Ashik", age: 21 },
//   { name: "arman", age: 11 },
//   { name: "anis", age: 24 },
// ];

// // assertion
// // getOldest(players) as Player;

// const person = getOldest(people);
// person.age;

interface IPost {
  title: string;
  id: number;
  description: string;
}

interface IUser {
  id: number;
  name: string;
  age: number;
}

// const fetchPosts = async (path: string): Promise<IPost[]> => {
//   const response = await fetch(`http://www.example.com${path}`);
//   return response.json();
// };

// const fetchUsers = async (path: string): Promise<IUser[]> => {
//   const response = await fetch(`http://www.example.com${path}`);
//   return response.json();
// };

const fetchData = async <T>(path: string): Promise<T> => {
  const response = await fetch(`http://www.example.com${path}`);
  return response.json();
};

(async () => {
  //   const posts = await fetchPosts("/posts");
  //   const users = await fetchUsers("/users");
  const data = await fetchData<IUser[]>("/users");
  const posts = await fetchData<IPost[]>("/posts");
})();
