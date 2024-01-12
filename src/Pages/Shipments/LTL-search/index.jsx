import React from 'react'
import SearchForm from '../../../components/SearchForm';
import DataTable from '../../../components/shipments/DataTable';

const LtlSearch = () => {
  return (
    <>
        <SearchForm/>
        <DataTable data={[]}/>
    </>
  )
}

export default LtlSearch;