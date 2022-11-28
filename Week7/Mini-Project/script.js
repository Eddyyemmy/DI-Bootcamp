const arr = [
    {
        id: 0,
        author: 'Nelson Mandela',
        quote: 'After climbing a great hill one only finds that there are many more hills to climb.',
    },
    {
        id: 1,
        author: 'Bill Gate',
        quote: 'If you think your teacher is tough, wait till you get a boss.',
    },
    {
        id: 2,
        author: 'Robert Kiyosaki',
        quote: 'The single most powerful asset we all have is our mind. If it is trained well, it can create enormous wealth.',
    }
]

// generateQuote()

// function generateQuote() {
//     const arrays = arr;
//     for (const arr in arrays) {
//         const details =  arrays[arr];
//         const random = details[Math.floor(Math.random() * arr.length)]
//         // console.log(details);
//         return random;
//     }
//     console.log(random)
// }

function generateQuote() {
    const arrays = arr;
    const random = arrays[Math.floor(Math.random() * arrays.length)]
    for (const arr in random) {
        const details =  random[arr];
        console.log(details);
    }
}