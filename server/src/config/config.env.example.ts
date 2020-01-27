const db = '';
const dbPort = '';
const dbHost = '';
const dbUser = '';
const dbPassword = '';
const processPort = '';

export const config = {
    serverPort: processPort,
    database: {
        user: dbUser,
        password: dbPassword,
        url: 'mongodb://' + dbHost + ':' + dbPort + '/' + db
    }
};