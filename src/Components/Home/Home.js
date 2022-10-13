import React, { useEffect, useState } from 'react'
import { Autocomplete } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import './home.css'
import { useDispatch, useSelector } from 'react-redux';
import { addToBookmark, addToFav, removeFav, selectRestro } from '../../features/counter/restroSlice';
import RestoMap from '../RestoMap/RestoMap';
import { selectUser } from '../../features/counter/userSlice';

const Home = () => {
  const [search, setSearch] = useState('');
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const restos = useSelector(selectRestro);
  const user = useSelector(selectUser)


  console.log(search, restos, user);

  const fetchResto = async () => {
    const restoNames = await fetch('https://api.airtable.com/v0/appjWdL7YgpxIxCKA/restaurants?maxRecords=50&view=Grid%20view', {
      headers: {
        'Authorization': 'Bearer keyfXgn8PL6pB3x32'
      }
    });
    const response = await restoNames.json();
    // console.log(response.records)
    const arr = response.records.map((item) => item.fields["Name"]);
    // console.log(arr)
    setData(arr);
    // const subway = await fetch('https://datastudio.google.com/u/0/reporting/430242fa-4162-4950-a984-824b3b355b3c/page/dQMwC?params=%7B%22ds2.name2%22:%22Wendys%22%7D');
    // console.log(await subway.json())
    // console.log(data.records);
    // console.log(data.records[0].fields['Name']);
    // const keys = Object.keys(data.records.fields);
    // console.log(keys)
  };

  useEffect(() => {
    fetchResto();
  }, [restos])

  const handleClick = () => {
    console.log("clicked", search);
    if (search === '' || search === ' ') alert('Please select a restaurant before adding');
    else {
      dispatch(addToFav({
        id: (restos.length + 1),
        name: search
      }))
    }
  };

  // const removeFav =(e)=>{
  //   console.log(e.target)
  // };

  return (
    <div>
      <div className='searchbar'>
        <Autocomplete
          inputValue={search}
          onInputChange={(event, newInputValue) => {
            setSearch(newInputValue);
          }}
          disablePortal
          id="combo-box-demo"
          options={data}
          sx={{ width: 700 }}
          renderInput={(params) => <TextField {...params} label="Search Restaurant Name" />}
        />
        
        <Button variant="contained" className='add' onClick={handleClick}> Add </Button>
      </div>
      {restos.map((r) => (
          <RestoMap r={r} key={r.id}/>
      ))}
    </div>
  )
}

export default Home
