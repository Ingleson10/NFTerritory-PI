const homeController = {
    index: (req, res) => {
        res.render('home')
    },
    paginaEmConstrucao: (req, res) => {
        res.render('paginaEmConstrucao')
    }
}
module.exports = homeController
