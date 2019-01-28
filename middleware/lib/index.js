// middleware

const logger = (req, res, next) => {
    console.log(`
    METHOD: ${req.method}
    URL: ${req.path}
    HOST: ${req.port}
    PORT: ${req.port}
    PARAMS: ${JSON.stringify(req.params)}
    QUERY: ${JSON.stringify(req.query)}
    BODY: ${JSON.stringify(req.body)}
    `);
}

module.exports = {
    logger
}