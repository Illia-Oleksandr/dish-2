const questions = {
    be: "What is the famous Belgian chocolate known for its rich flavor?",
    eg: "What traditional Egyptian dish is made from fava beans?",
    il: "What popular Israeli dish is made of ground chickpeas and spices?",
    md: "What is a traditional Moldovan dessert made with honey and nuts?",
    pl: "What is a popular Polish soup made with fermented rye flour and sausage?",
    ae: "What traditional Emirati dish is made with rice, meat, and a blend of spices?",
    tr: "What is the name of the famous Turkish dessert made with layers of filo pastry and nuts?",
    fr: "What is the iconic French pastry that is buttery, flaky, and shaped like a crescent?",
    cn: "What is a traditional Chinese dish made with dumplings filled with meat or vegetables?",
    es: "What is the famous Spanish dish made with rice, saffron, and a variety of seafood or meat?"
};

function showQuestion(countryCode) {
    const questionDiv = document.getElementById('question');
    questionDiv.textContent = questions[countryCode];
}
