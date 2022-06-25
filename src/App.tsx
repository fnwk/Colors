import { Options, Title, Wrapper } from './GlobalStyles';

import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/productList/Index';
import Pagination from './components/pagination/Index';
import Searchbar from './components/searchbar/Index';
import SelectProductPerPage from './components/selectProductsPerPage/Index';

const App = () => {
  return (
    <Provider store={store}>
      <Title>Find your colors</Title>

      <Wrapper>
        <Options>
          <SelectProductPerPage />
          <Searchbar />
        </Options>
        <ProductList />
      </Wrapper>

      <Pagination />
    </Provider>
  );
};

export default App;
