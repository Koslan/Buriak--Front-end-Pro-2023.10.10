import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import AppRouter from './components/AppRouter';
import { fetchUserData } from './api/user';
import { sortedList } from './store/index';
import { SET_LIST } from './store/slice';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await fetchUserData();
        dispatch(SET_LIST(sortedList(data)));
      } catch (error) {
        console.error('Error fetching user data:', error);
        // Handle the error appropriately here
      }
    };

    loadData();
  }, [dispatch]);

  return <AppRouter />;
}

export default App;
