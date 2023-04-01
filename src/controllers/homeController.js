const path = require('path')
const homeController = {
    home: (req,res) => res.sendFile(path.join(__dirname, '../views/home.html'))
}
module.exports = homeController