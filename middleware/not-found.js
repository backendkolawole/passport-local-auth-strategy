const notFoundMiddleware = (req, res, next) => {
    console.log('Hit not-found middleware')
    res.status(404).type('text').send('Not Found');
}


module.exports = notFoundMiddleware


