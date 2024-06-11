import React from 'react';
import './App.css';
import List from "./components/List";
import {ListItemProps} from "./components/types";
import {observableListStore} from "./store/store";

const initialListItemsData:ListItemProps[] = [
  {
    key: '1',
    value: 'List Item 1',
    id: '1',
    childrenArray: []
  }
]

function App() {
  return (
    <div className="app">
     <List store={observableListStore} />
    </div>
  );
}

export default App;
