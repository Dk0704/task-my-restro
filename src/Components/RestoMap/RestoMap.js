import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToBookmark, addToFav, removeFav, selectRestro } from '../../features/counter/restroSlice';
import './restomap.css'
import { Button } from '@mui/material';


const RestoMap = ({ r }) => {
    const dispatch = useDispatch();
//   const restos = useSelector(selectRestro);
    return (
        <div>
            <div>
                <div className='map'>
                <iframe width="400" height="300" src={`https://datastudio.google.com/u/0/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B"ds2.name2":"Wendys"%7D`} frameborder="0" allowfullscreen></iframe>
                </div>
                {r.name}
            </div>
            <div>
            <Button variant="contained" className='add' onClick={() => dispatch(addToBookmark({ id: r.id, name: r.name }))}> BookMark </Button>
            <Button variant="contained" className='add' onClick={() => dispatch(removeFav(r.id))}> Remove </Button>
            </div>
        </div>
    )
}

export default RestoMap
