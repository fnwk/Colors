import { useDispatch, useSelector } from 'react-redux';

import { nextPage, prevPage } from '../../slices/pageSlice';
import { PaginationContainer, PaginationBtn } from './style';

import Page from '../../models/page';

const Pagination = () => {
  const dispatch = useDispatch();

  const totalPages = useSelector(
    (state: { page: Page }) => state.page.totalPages
  );
  const page = useSelector((state: { page: Page }) => state.page.page);

  return (
    <PaginationContainer>
      {page > 1 && (
        <PaginationBtn onClick={() => dispatch(prevPage())}>
          <img src='https://img.icons8.com/ios/50/000000/circled-chevron-left.png' />
        </PaginationBtn>
      )}

      {page <= totalPages && (
        <PaginationBtn onClick={() => dispatch(nextPage())}>
          <img src='https://img.icons8.com/ios/50/000000/circled-chevron-right.png' />
        </PaginationBtn>
      )}
    </PaginationContainer>
  );
};

export default Pagination;
