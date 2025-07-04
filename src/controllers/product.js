import createHttpError from 'http-errors';
import { allProducts, idProducts } from '../services/product.js';
import { parseFilterParams } from '../utils/parseFilterParams.js';
import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSearchParams } from '../utils/parseSearchParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';

export const productsController = async (req, res) => {
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortOrder, sortBy } = parseSortParams(req.query);
  const filter = parseFilterParams(req.query);
  const search = parseSearchParams(req.query);

  const products = await allProducts(
    search,
    page,
    perPage,
    sortOrder,
    sortBy,
    filter,
  );

  products.data.length === 0
    ? res.json({
        status: 200,
        message: 'Nothing found',
        data: { data: products.data },
      })
    : res.json({
        status: 200,
        message: 'Medicines',
        data: {
          data: products.data,
          page: products.page,
          perPage: products.perPage,
          totalItems: products.totalItem,
          totalPages: products.totalPage,
        },
      });
};

export const productsIdController = async (req, res) => {
  const { id } = req.params;
  const product = await idProducts(id);

  if (!product || product.length === 0) {
    throw createHttpError(404, 'There is no such medicine');
  }

  res.status(200).json({
    status: 200,
    message: `Medical drug found ${id}`,
    data: product,
  });
};
