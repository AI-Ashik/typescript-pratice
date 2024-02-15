# TypeScript Pracitce

TypeScript: Supercharge your JavaScript!

It's like JavaScript, but with training wheels: catches errors early for smoother coding.
Makes your code cleaner and easier to understand, even for others.
Smarter tools and future-proof: editors help you more, and keeps pace with JavaScript improvements.
Great for both beginners and pros: write rock-solid code, big or small.
Ready to level up your JavaScript? Try TypeScript!

## A Basic TypeScript Program

```
// Function to greet someone with their name and return a greeting message
function greet(name: string): string {
  // Type annotation for the return value: a string
  return `Hello, ${name}!`;
}

// Function call with a string argument
const message = greet("Alice");
console.log(message); // Output: Hello, Alice!
```

<!-- TABLE OF CONTENTS -->

## Table of Contents

- [Update Node](#update-node)
  - [Windows](#windows)
  - [Mac](#mac)
- [Install and Update Yarn](#install-and-update-yarn)
  - [Windows](#on-windows)
  - [Mac](#on-mac)
- [VS Code Editor Setup](#vs-code-editor-setup)
  - [Extensions](#extensions)
  - [Settings](#settings)
  <!-- UPDATE NODE -->

## Update Node

Please follow the below instructions to update node in your machine:

### Windows

1. Update npm
   ```sh
   npm install npm@latest -g
   ```
2. Clear npm cache
   ```sh
   npm cache clean -f
   ```
3. Install n
   ```sh
   npm install -g n
   ```
4. Update node to latest version
   ```sh
   n latest
   ```

### Mac

1. With Homebrew
   ```sh
   brew update
   brew upgrade node
   ```

<!-- INSTALL & UPDATE YARN -->

## Install TypeScript

Please follow the below instructions to install or update TypeScript in your machine.

### Install Typescript via npm

```sh
npm install -g typescript

### Extensions

Install the below extensions:

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [Path Autocomplete](https://marketplace.visualstudio.com/items?itemName=ionutvmi.path-autocomplete)

### Settings


<!-- CONTACT -->

## Contact

A.I Ashik - [arifulislamashik07@gmail.com](mailto:arifulislamashik07@gmail.com)

Repository Link: [https://github.com/AI-Ashik/typescript-pratice](https://github.com/AI-Ashik/typescript-pratice)
```
