let appConfig = {};

appConfig.port = 3001;
appConfig.allowedCorsOrigin ="*";
appConfig.env = "dev";
appConfig.db={
    url:'mongodb+srv://admin:admin@akhil-2lnnc.mongodb.net/thadepalligudem?retryWrites=true&w=majority',
}
appConfig.apiVersion = '/api/';

module.exports={
    port:appConfig.port,
    allowedCorsOrigin : appConfig.allowedCorsOrigin,
    env : appConfig.env,
    db : appConfig.db,
    apiVersion : appConfig.apiVersion
} // end of module export