import { DataSourceOptions, DataSource } from 'typeorm';

// export const dataSourceOption: DataSourceOptions = {
//   type: 'postgres',
//   host: process.env.DATABASE_HOST,
//   database: process.env.DATABASE_NAME,
//   username: process.env.DATABASE_USERNAME,
//   password: process.env.DATABASE_PASSWORD,
//   entities: ['dist/**/**/*.entity.js'],
//   migrations: ['dist/db/migrations/*.js'],
//   synchronize: true,
// }

export const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: 'localhost',
  database: 'postgres',
  port: 5432,
  username: 'postgres',
  password: 'nik2701',
  entities: ['dist/**/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'], 
};

const dataSource = new DataSource(dataSourceOption);
export default dataSource;
