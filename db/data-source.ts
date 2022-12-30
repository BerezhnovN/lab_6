import { DataSourceOptions, DataSource } from 'typeorm';

export const dataSourceOption: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  entities: ['dist/**/**/*.entity.js'],
  migrations: ['dist/db/migrations/*.js'],
  synchronize: true,
}


const dataSource = new DataSource(dataSourceOption);
export default dataSource;
