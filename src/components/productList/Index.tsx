import { Table, HeaderRow, TableHeader } from './style';
import { useState, useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { setTotalPages } from '../../slices/pageSlice';

import ProductType from '../../models/product';
import Page from '../../models/page';

import Product from '../product/Index';

const ProductList = () => {
  const dispatch = useDispatch();

  const [productList, setProductList] = useState<ProductType[]>([]);

  const id = useSelector((state: { id: { id: number } }) => state.id);
  const currentPage = useSelector((state: { page: Page }) => state.page.page);
  const prodPerPage = useSelector(
    (state: { page: Page }) => state.page.prodPerPage
  );

  const getProduct = async () => {
    const res = await fetch(
      `https://reqres.in/api/products?page=${currentPage}&per_page=${prodPerPage}${
        id.id !== 0 ? '&id=' + id.id : ''
      }`
    );
    const json = await res.json();

    if (id.id === 0) {
      setProductList(json.data);
    } else if (Object.keys(json).length !== 0) {
      setProductList([json.data]);
    } else {
      setProductList([]);
    }

    dispatch(setTotalPages(json.total_pages));
  };

  useEffect(() => {
    getProduct();
  }, [prodPerPage, id, currentPage]);

  return (
    <Table>
      <HeaderRow>
        <TableHeader>Name:</TableHeader>
        <TableHeader>Year:</TableHeader>
        <TableHeader className='id'>Id:</TableHeader>
      </HeaderRow>
      {productList.map((product) => (
        <Product
          name={product.name}
          year={product.year}
          color={product.color}
          id={product.id}
          key={product.id}
        />
      ))}
    </Table>
  );
};

export default ProductList;
