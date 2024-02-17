// interface Transaction {
//   payerNumber: number;
//   payNumber: number;
// }

// interface BankAccount {
//   accountName: string;
//   accountNumber: number;
//   balance: number;
//   isActive: boolean;
//   transactions: Transaction[];
// }

// const transaction1: Transaction = {
//   payerNumber: 11,
//   payNumber: 125,
// };

// const transaction2: Transaction = {
//   payerNumber: 145,
//   payNumber: 5552,
// };

// const bankAccount: BankAccount = {
//   accountName: "Ashik",
//   accountNumber: 1254,
//   balance: 10,
//   isActive: true,
//   transactions: [transaction1, transaction2],
// };

// extends - take value from another interface

// interface Book {
//   name: string;
//   price: number;
// }

// interface EBook extends Book {
//   //     name: string;
//   //   price: number;
//   fileSize: number;
//   fileType: string;
// }

// interface AudioBook extends EBook {
//   //     name: string;
//   //   price: number;
//   //   fileSize: number;
//   //   fileType: string;
//   duration: number;
// }

// const book: AudioBook = {
//   name: "Money lending",
//   price: 120,
//   fileSize: 14,
//   fileType: "PDF",
//   duration: 12,
// };

// merging interfaces
// interface Book {
//   name: string;
//   price: number;
// }

// interface Book {
//   size: number;
// }

// const book: Book = {
//   name: "money lend",
//   price: 12,
//   size: 114,
// };

// unions
// type Id = number | string;

// narrowing the both union type value - cuz' there is nor number or string so its cant be uppercase because it could be number
// function printId(id: Id) {
//   if (typeof id === "string") {
//     console.log(id.toUpperCase());
//   } else {
//     console.log(id);
//   }
// }

// printId("Hello");

// a array of number can be sliced but not a number
function getFirstThree(x: string | number[]) {
  return x.slice(0, 3);
}

console.log(getFirstThree([1, 2, 132, 4, 5, 6]));
