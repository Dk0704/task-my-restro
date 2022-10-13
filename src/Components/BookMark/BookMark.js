import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeBookmark, selectBookMarkRestro } from '../../features/counter/restroSlice';
import RestoMap from '../RestoMap/RestoMap';

const BookMark = () => {
  const dispatch = useDispatch();
  const bookRes = useSelector(selectBookMarkRestro)
  return (
    <div>
      <h1>Bookmarked Restaurants</h1>
      {bookRes.map((r)=>(
        <RestoMap key={r.id} r={r}/>
      ))}
    </div>
  )
}

export default BookMark
