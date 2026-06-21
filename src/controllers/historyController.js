const historyService = require("../services/historyService");

exports.getHistory = (req, res) => {

    const history = historyService.getHistory();

    res.json(history);

};

exports.saveHistory = (req, res) => {

    historyService.saveConversation(req.body);

    res.json({
        message: "Conversación guardada"
    });

};