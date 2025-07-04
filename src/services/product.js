import { ProductsCollection } from '../db/models/product.js';
import { calculatePagination } from '../utils/calculatePagination.js';

export const allProducts = async (
  search,
  page,
  perPage,
  sortOrder,
  sortBy,
  filter,
) => {
  const limit = perPage;
  const skipe = (page - 1) * perPage;

  // const productsQuery = ProductsCollection.find({
  //   $or: [{ name: { $regex: `${search.search}`, $options: 'i' } }],
  // });
  const productsQuery = ProductsCollection.find();
  if (filter.type) {
    productsQuery.where('category').equals(filter.type);
  }
  if (search.search) {
    productsQuery.where('name').equals(search.search);
  }

  const productsCount = await ProductsCollection.find()
    .merge(productsQuery)
    .countDocuments();

  const products = await productsQuery
    .skip(skipe)
    .limit(limit)
    .sort({ [sortBy]: sortOrder })
    .exec();

  const pagination = calculatePagination(productsCount, page, perPage);

  return { data: products, ...pagination };
};

export const idProducts = async (id) => {
  const product = await ProductsCollection.findOne({ _id: id });

  return product;
};
