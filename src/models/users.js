const connection = require("./db_connection");

const User = function (user) {
    this.id = user.id;
    this.username = user.username;
    this.password = user.password;
}

User.create = async (newUser) => {
    try {
        let result = await connection.awaitQuery(`INSERT INTO users SET ?`, newUser);
        return result.affectedRows;
    } catch (error) {
        return 0;
    }

}
User.getall = async () => {
    connection.on(`error`, (err) => {
        console.log(`Connection error ${err.code}`);
    });

    let result = await connection.awaitQuery(`SELECT * FROM users`);
    
    return result;
}

module.exports = User;