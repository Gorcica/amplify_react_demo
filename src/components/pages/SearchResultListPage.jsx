import React from 'react';

import Header from '../modules/Header';
import SearchResultList from '../modules/SearchResultList';
import StickyFooter from '../modules/Footer';
import ProductListSortForms from '../modules/ProductListSortForms';



const SearchResultListPage = () => (
  <div>
    <Header />
    <ProductListSortForms categoryHidden />
    <SearchResultList />
    <StickyFooter />
  </div>
);

export default SearchResultListPage;