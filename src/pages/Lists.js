import React from 'react';
import '../styles/main.css';
import ListCard from '../components/ListCard';
import { useState, useEffect } from 'react';
import AddNewListButton from '../components/AddNewListButton';

function Lists() {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    // see if there are any lists in localstorage
    const lists = JSON.parse(localStorage.getItem('lists')) || [];
    // set the lists in state
    setLists(lists);
  }, []);


  if (lists.length === 0) {
    return (
      <div className="page-background center-stuffs">
        <h1 className="page-title">Lists</h1>
        <p>No lists yet. Add a new list.</p>
        <AddNewListButton className="my-8" />
      </div>
    );
  } else {
      return (
        <div className="page-background center-stuffs">
            <h1 className="page-title">Lists</h1>
            {lists.map(list => (
              <ListCard key={list.id} item={list} />
            ))
          }
          <AddNewListButton className="my-8" />
        </div>
      );

  }

}

export default Lists;