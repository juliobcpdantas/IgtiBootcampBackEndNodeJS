import pg from "pg";

async function connect() {
    if (global.connection) {
        return global.connection.connect();
    }

    const pool = new pg.Pool({
        connectionString: "	postgres://ljicuwap:g9iX0UuwBoWICsZnpDTa34KBn1v8FXhd@chunee.db.elephantsql.com/ljicuwap"
    });
    global.connection = pool;
    
    return pool.connect();
}

export {
    connect
}