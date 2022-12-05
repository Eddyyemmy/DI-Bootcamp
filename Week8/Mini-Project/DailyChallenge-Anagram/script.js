function anagram(sentence, sentence2) {
    const str = sentence.toLowerCase().split(" ").join("");
    const str2 = sentence2.toLowerCase().split(" ").join("");
    if (str.length != str2.length) return false;

    const total = {};
    for (const letter of str) {
        total[letter] = total[letter] +1 || 1;
    }

    for(const letter of str2) {
        total[letter] = total[letter] ? total[letter] -1 : -1;
    }

    const differences = Object.values(total);
    return differences.every((num) => num === 0);
}


const boolean = anagram("sdsd","sdds");
console.log(boolean);