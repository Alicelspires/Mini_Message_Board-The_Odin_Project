const messages = require("../db");

function getMessages(req, res) {
    res.render("home", { 
        title: "Mini Messageboard",
        links: [
            { href: "/", text: "Home" },
            { href: "/new", text: "New Message" }
        ],
        messages,
        postitColorCount: 3
    });
}

function createMessage(req, res) {
    const { user, title, message } = req.body;

    if (!user || !title || !message) {
        return res.status(400).send("Campos faltando");
    }

    messages.push({
        title: title,
        user: user,
        text: message,
        createdDate: new Date(),
    });

    res.redirect("/");
}

module.exports = {
    getMessages,
    createMessage
};
