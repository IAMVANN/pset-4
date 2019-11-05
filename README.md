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

Your code needs to support all numbers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`], and should reject anything not in this range. The lower bound, of course, must be less than the upper bound. Continuously prompt the user until you receive a value in the supported range.

![Exercise 1 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/sum.png)

* Your code must be written in a file named `sum.js`.
* Your message must be grammatically correct and match mine **exactly**.

### Exercise 2

Prompt the user to enter a positive integer. Without using any `String` methods, print the digits of this integer in reverse order. Separate each digit with a comma.

Your code needs to support all numbers in the range [`1`, `Number.MAX_SAFE_INTEGER`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range.

![Exercise 2 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/reverse.png)

* Your code must be written in a file named `reverse.js`.
* The use of `String` methods to solve this problem is strictly prohibited.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 3

Prompt the user to enter a positive integer. Without using any `String` methods, compute the sum of all of the odd digits in the integer.

Your code needs to support all numbers in the range [`Number.MIN_SAFE_INTEGER`, `Number.MAX_SAFE_INTEGER`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range.

![Exercise 3 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/odd.png)

* Your code must be written in a file named `odd.js`.
* The use of `String` methods to solve this problem is strictly prohibited.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 4

Prompt the user to enter a series of non-negative integers. When the user enters a negative integer, you can assume he or she is done entering values. Discounting the negative integer, what is the average of the values entered?

Your code needs to support all numbers in the range [`0`, `Number.MAX_SAFE_INTEGER`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range (meaning invalid values should be ignored entirely).

![Exercise 4 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/average.png)

* Your code must be written in a file named `average.js`.
* Round the result to three decimals, and format it with separating commas (if needed).
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 5

Prompt the user to enter a non-negative integer. Is this number prime?

Your code needs to support all numbers in the range [`0`, `Number.MAX_SAFE_INTEGER`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range.

There are two possible outputs.
* `Prime.`
* `Not prime.`

![Exercise 5 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/prime.png)

* Your code must be written in a file named `prime.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 6

Prompt the user to enter a positive integer. If the integer the user enters is called `n`, what is the `n`th Fibonacci number?

Your code needs to support all numbers in the range [`1`, `78`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range.

![Exercise 6 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/fibonacci.png)

* Your code must be written in a file named `fibonacci.js`.
* Format the result with separating commas (if needed).
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 7

Prompt the user to enter a positive integer. What are its factors? Take note of the order in which factors are printed, and whether or not factors are repeated.

Your code needs to support all numbers in the range [`1`, `Number.MAX_SAFE_INTEGER`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range.

![Exercise 7 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/factors.png)

* Your code must be written in a file named `factors.js`.
* Print factors in paired sequences (smallest, largest, second smallest, second largest, etc.).
* Print each factor only once (i.e., no duplicatin factors for perfect squares).
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 8

Prompt the user to enter an integer. Print a Super Mario-style half-pyramid of the specified height.

Your code needs to support all numbers in the range [`1`, `24`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range.

![Exercise 8 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/mario.png)

* Your code must be written in a file named `mario.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 9

Prompt the user to enter an integer. Print a Super Mario-style full pyramid of the specified height.

Your code needs to support all numbers in the range [`1`, `24`], and should reject anything not in this range. Continuously prompt the user until you receive a value in the supported range.

![Exercise 9 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/luigi.png)

* Your code must be written in a file named `luigi.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

### Exercise 10

Prompt the user to enter a credit card number (not a real one!). According to [Luhn's algorithm](https://www.geeksforgeeks.org/luhn-algorithm/), is the credit card number valid?

Luhn's algorithm works as follows.
* Multiply every other digit of the card number by two, starting with the second-to-last digit.
* Add the products of those digits.
* Add the digits that were not initially multiplied by two.
* Add the sums from Steps 2 and 3.
* If the last digit of the sum from Step 4 is a zero, then the card number is valid.
  - American Express uses 15-digit numbers, starting with 34 or 37.
  - Mastercard uses 16-digit numbers, starting with 51, 52, 53, 54, or 55.
  - Visa uses 13- or 16-digit numbers, starting with 4.

Here's an example using an American Express card: 378282246310005.

First, you should identify the digits to be multiplied: every other digit, starting with the second-to-last digit.
```
3 7 8 2 8 2 2 4 6 3 1 0 0 0 5
```
Now, multiply these digits by two.
```
7 x 2 + 2 x 2 + 2 x 2 + 4 x 2 + 3 x 2 + 0 x 2 + 0 x 2
```
Now, you have the products.
```
14 + 4 + 4 + 8 + 6 + 0 + 0
```
You need to add the digits of these products (not the products themselves).
```
1 + 4 + 4 + 4 + 8 + 6 + 0 + 0 = 27
```
Next, add that sum (i.e., 27) to the sum of the digits that weren't multiplied by two.
```
27 + 3 + 8 + 8 + 2 + 6 + 1 + 0 + 5 = 60
```
Since the checksum ends in in a zero, then the card number is valid. Because the original number is 15 digits and starts with a 37, it is an Amex.

There are four possible outputs.
* `Amex.`
* `Mastercard.`
* `Visa.`
* `Invalid.`

Here a few examples you can use for testing.
* `378282246310005` and `371449635398431` should verify as `Amex`.
* `5555555555554444` and `5105105105105100` should verify as `Mastercard`.
* `4111111111111111` and `4012888888881881` should verify as `Visa`.

![Exercise 10 Output](https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/credit.png)

* Your code must be written in a file named `credit.js`.
* Your prompt and message must be grammatically correct and match mine **exactly**.

## Deliverables

You can run all of your problem set files in a single shot using the following command. Make sure you're in your `src` directory when you do so.
```
node sum.js; node reverse.js; node odd.js; node average.js; node prime.js; node fibonacci.js; node factors.js; node mario.js; node luigi.js; node credit.js
```

Pay close attention to this output because your code will be graded against it. There is exactly one line break at the beginning and end of the output. THere are exactly two line breaks between exercises.

When you run the chained command and enter the same values, your output should match mine exactly.

<span>
  <img src="https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/deliverable-1.png" alt="Problem Set 4 Output" width="49.75%"/> <img src="https://github.com/ap-principles-ucvts/pset-4-skeleton/blob/master/images/deliverable-2.png" alt="Problem Set 4 Output" width="49.75%"/>
</span>

## Deadline

Please read very carefully. Historically, most students lose points on problem sets for simply failing to read the instructions and requirements.

* November 24, 2019, at 11:59pm.

If you submit your problem set at midnight (i.e., November 25, 2019, at 12:00am), it is considered **late**!

### Submission Requirements

* Your code **must** compile. Code that fails to meet this minimum requirement will not be accepted.
* There must be **at least** 10 unique commits to your repository.
* Your code must meet each requirement outlined in the Exercises and Deliverables sections.
* Your code must adhere to the course style guidelines.

Happy coding!
