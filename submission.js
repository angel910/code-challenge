const findSum = function (array) {
    const findSum = function (array) {
        let sum = 0;

        for (const number of array) {
            sum += number
        }

        return sum;
    }
};

const findFrequency = function (array) {
    let countObj = {};
    let scoreArr = [];
    let frequency = [];

    array.forEach(string => {
        if (string in countObj) {
            countObj[string]++
        } else {
            countObj[string] = 1;
        }
    });

    for (const string in countObj) {
        let count = countObj[string];

        scoreArr.push(count)
    };

    scoreArr.sort();

    let highscore = scoreArr.pop();
    let lowScore = scoreArr.shift();

    for (const score in countObj) {
        if (countObj[score] == highscore) {
            frequency.push(`most: ${score}`)
        } else {
            continue
        }
    }

    for (const score in countObj) {
        if (countObj[score] == lowScore) {
            frequency.push(`least: ${score}`)
        } else {
            continue
        }
    }

    return frequency;
};

const isPalindrome = function (str) {
    let splitString = str.split('');
    let numberOfCharacters = splitString.length + 1;
    let repeat = numberOfCharacters / 2;
    let palindrome = true;

    do {
        let first = splitString.pop();
        let last = splitString.shift();


        if (first !== undefined && last === undefined) {
            continue
        } else if (first !== last) {
            palindrome = false
        }

        repeat--
    } while ((repeat > 0));

    return palindrome

};

const largestPair = function (array) {
    let products = [];
    for (let i = 0; i < array.length; i++) {
        const number = array[i];
        const nextNumber = array[i + 1]
        const product = number * nextNumber;


        if (product >= 0) {
            products.push(product)
        }

    }

    return Math.max(...products)
};;

const removeParenth = function (str) {
    let before = str.split("(")
    let after = str.split(")")
    let joined = before.shift() + after.pop()


    return joined
};

const scoreScrabble = function (str) {

    const letterValues = [
        { letters: ["a", "e", "i", "o", "u", "l", "n", "r", "s", "t"], value: 1 },
        { letters: ["d", "g"], value: 2 },
        { letters: ["b", "c", "m", "p"], value: 3 },
        { letters: ["f", "h", "v", "w", "y"], value: 4 },
        { letters: ["k"], value: 5 },
        { letters: ["j", "x"], value: 8 },
        { letters: ["q", "z"], value: 10 }
    ]

    let splitString = str.split("");
    let wordValue = 0;

    splitString.forEach(letter => {
        for (let i = 0; i < letterValues.length; i++) {
            const letters = letterValues[i].letters;
            const value = letterValues[i].value;

            if (letters.includes(letter)) {
                wordValue += value
            }

        }
    });

    return wordValue

};
