import React from 'react';
import 'antd/dist/antd.min.css';
import './index.css';
import { AutoComplete } from 'antd';
const options = [
  {
    value: 'Gym',
  },
  {
    value: 'Swimming',
  },
  {
    value: 'Basketball',
  }
];

const Search = () => {
    const handleSelect = () => {
        window.open("https://google.com")
    }
    return (
  <div style={{margin: '30vh 50vh'}}>
    
  <AutoComplete classname="App-search"
    style={{
        width: 550,
        marginRight: '100vh'
    }}
    options={options}
    onSelect={handleSelect}
    placeholder="Try writing gym, swimming, basketball"
    filterOption={(inputValue, option) =>
        option.value.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1
    }
    />
    </div>
)};
export default Search;