"use strict";
// function toString(arg: string) {
//   console.log(arg);
//   return arg;
// }
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// const fetchPosts = async (path: string): Promise<IPost[]> => {
//   const response = await fetch(`http://www.example.com${path}`);
//   return response.json();
// };
// const fetchUsers = async (path: string): Promise<IUser[]> => {
//   const response = await fetch(`http://www.example.com${path}`);
//   return response.json();
// };
const fetchData = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield fetch(`http://www.example.com${path}`);
    return response.json();
});
(() => __awaiter(void 0, void 0, void 0, function* () {
    //   const posts = await fetchPosts("/posts");
    //   const users = await fetchUsers("/users");
    const data = yield fetchData("/users");
    const posts = yield fetchData("/posts");
}))();
