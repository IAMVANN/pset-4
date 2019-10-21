# Problem Set 4

It's time to put your skills to the test. This problem set focuses on programming in JavaScript. More specifically, it focuses on using loops to introduce repetition to your programs.

## Getting Started

To get started, create a [GitHub](https://github.com/) repository to store your code. When you're finished, clone my skeleton to get all of the starter code and instructions. Setup a remote to push your code to your repository instead of mine.

### Setup

1. Login to your GitHub account and create a new repository named `pset-4`.
2. In the terminal, navigate to your `APCSP` directory on the `Desktop`.
```
$ cd ~/Desktop/APCSP
```
3. Clone my skeleton repository into a directory named `pset-4`.
```
$ git clone git@github.com:ap-principles-ucvts/pset-4-skeleton.git pset-4
````
4. Change into your newly created `pset-4` directory.
```
$ cd pset-4
```
5. Overwrite the remote, which originally points at my skeleton repository.
```
$ git remote rename origin upstream
```
6. Add a new remote that points at your `pset-4` repository. Replace `YOUR-USERNAME` with your actual username.
```
$ git remote add origin git@github.com:YOUR-USERNAME/pset-4.git
```
7. Install the required packages for reading user input. This command should be executed in the `pset-4` folder, and will create a `node_modules` folder that contains everything you need.
```
$ npm install
```
8. Create a `src` folder. All your `.js` files should go in the `src` folder.
```
$ mkdir src
```

## Exercises

The specifications for each exercise are outlined below. Your job is to write lines of code to solve the problems. Your code must meet the requirements set forth in this section. Each solution must be written in its own file, and named accordingly.

Work through these exercises on your own. Experiment, make mistakes, ask questions, and fix your mistakes. It's the only way to get good at programming.

### Exercise 1

Prompt the user to enter two integers. The first integer is a lower bound, and the second integer is an upper bound. Compute the sum of all even integers between the lower and upper bounds, including the bounds themselves.

Your code needs to support all numbers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range.

![Exercise 1 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/sum.png)

* Your code must be written in a file named `sum.js`.
* Use `const` variables to represent the lower and upper bounds.
* Your message must be grammatically correct and match mine **exactly**.

### Exercise 2

Prompt the user to enter a positive integer. Without using any `String` methods, print the digits of this integer in reverse order. Separate each digit with a comma.

Your code needs to support all numbers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range.

![Exercise 2 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/reverse.png)

* Your code must be written in a file named `reverse.js`.
* The use of `String` methods to solve this problem is prohibited.
* Your prompt and message must be grammatically correct and match mine **exactly**.

## Deadline

Please read very carefully. Historically, most students lose points on problem sets for simply failing to read the instructions and requirements.

* November 6, 2019, at 11:59pm.

If you submit your problem set at midnight (i.e., November 7, 2019, at 12:00am), it is considered **late**!

### Submission Requirements

* Your code **must** compile. Code that fails to meet this minimum requirement will not be accepted.
* There must be **at least** 10 unique commits to your repository.
* Your code must meet each requirement outlined in the Exercises and Deliverables sections.
* Your code must adhere to the course style guidelines.

Happy coding!
