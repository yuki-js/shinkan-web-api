module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'shinkan_web',
  synchronize: true,
  entities: ['src/database/entity/*.ts'],
  migrations: ['src/database/migration/*.ts'],
  cli: { migrationsDir: 'src/database/migration' },
}
