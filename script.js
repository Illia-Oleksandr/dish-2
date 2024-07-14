const questions = {
    be: 'What is "moules-frites"?',
    eg: "What dish do Egyptians traditionally eat for breakfast?",
    il: "What spices are commonly used in Israeli cuisine?",
    md: "What traditional Moldovan soups do you know?",
    pl: 'What ingredients are used to prepare "zhurek"?',
    ae: "What types of bread are popular in the UAE?",
    tr: "What drink is traditional in Turkey?",
    fr: 'What ingredients are used to make "ratatouille"?',
    cn: 'What is "tofu" and how is it used in Chinese cuisine?',
    es: 'What ingredients are used to make a "tortilla"?'
};

function showQuestion(countryCode) {
    const questionDiv = document.getElementById('question');
    questionDiv.textContent = questions[countryCode];
}
