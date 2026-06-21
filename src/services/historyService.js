const fs = require("fs");
const path = require("path");

const historyPath = path.join(__dirname, "../data/history.json");

function getHistory() {
    if (!fs.existsSync(historyPath)) {
        fs.writeFileSync(historyPath, "[]");
    }

    const data = fs.readFileSync(historyPath);

    return JSON.parse(data);
}

function saveConversation(message) {

    const history = getHistory();

    history.push(message);

    fs.writeFileSync(
        historyPath,
        JSON.stringify(history, null, 2)
    );
}

module.exports = {
    getHistory,
    saveConversation
};