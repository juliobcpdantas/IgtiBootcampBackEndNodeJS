import pg from "pg";

async function connect() {
  if (global.connection) {
    return global.connection.connect();
  }
  const pool = new pg.Pool({
    connectionString:
      "postgres://irqqzeex:Ah-GODbkhqeteX-PJrKUlVFt3UFK_2Qo@chunee.db.elephantsql.com/irqqzeex",
  });
  global.connection = pool;
  return pool.connect();
}

export { connect };
