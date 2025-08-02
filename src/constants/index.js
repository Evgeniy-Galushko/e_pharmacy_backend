import path from 'node:path';

export const THIRTY_DAYS = 30 * 24 * 60 * 60 * 1000;

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const SWAGGER_PATH = path.join(process.cwd(), 'docs', 'swagger.json');
