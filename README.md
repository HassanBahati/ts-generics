
# TypeScript Generics

This is a basic setup demonstrating the use of **TypeScript Generics**. It showcases how generics can be used to create reusable components and functions that work with various types.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v20 or above)
- npm (comes with Node.js)

## Setup

Follow these steps to get the project running on your local machine:

### 1. Clone the Repository
If you haven't already, clone this repository to your local machine:
```bash
git clone <your-repo-url> ts-generics
cd ts-generics
```

### 2. Install Dependencies
Install the necessary packages by running:
```bash
pnpm install
```

This will install `typescript` and `ts-node` required for running and compiling TypeScript files.

### 3. Running the TypeScript Files
The project contains files that demonstrate various use cases of TypeScript generics.

To run a TypeScript file, use the following command:

```bash
npx ts-node <filename.ts>
```

For example, if you want to run a file called `basic-generics.ts`:
```bash
npx ts-node basic-generics.ts
```

### 4. Compile TypeScript to JavaScript
If you want to compile the TypeScript files into JavaScript, run:
```bash
npx tsc
```

This will generate JavaScript files in the same directory as your `.ts` files.

### 5. Running the Compiled JavaScript
Once you've compiled the TypeScript files, you can run the generated JavaScript files using Node.js:

```bash
node <filename.js>
```

## Example Code

Here is a simple example of how a generic function might look in one of the project files:

```typescript
//  basic-generics.ts
function identity<T>(arg: T): T {
    return arg;
}

console.log(identity<number>(42)); // Output: 42
console.log(identity<string>("Hello, TypeScript Generics!")); // Output: Hello, TypeScript Generics!
```

## Project Structure

```bash
ts-generics/
│
├── src/
│   └── basic-generics.ts    # Example of using generics in TypeScript
├── tsconfig.json              # TypeScript compiler configuration
├── package.json               # Project configuration and dependencies
└── node_modules/              # Installed dependencies
```

## Running the Example

After setting up, you can run the example provided in `src/basic-generics.ts` by running:

```bash
npx ts-node src/basic-generics.ts
```

Or, if you've compiled the TypeScript to JavaScript:
```bash
node src/basic-generics.js
```

## Scripts

To make running commands easier, you can use npm scripts. Add the following to your `package.json`:

```json
"scripts": {
  "start": "ts-node src/basic-generics.ts",
  "build": "tsc"
}
```

Then you can use:
- **Run the TypeScript example**: 
  ```bash
  npm start
  ```
- **Compile the TypeScript files**: 
  ```bash
  npm run build
  ```

## License

This project is licensed under the MIT License.
