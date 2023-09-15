import React,{useState} from 'react';
import Products from './products';
import './App.css';

const App =() => {
  const [search,setSearch]=useState(' ');
  const [data,setData] = useState([]);
  const YOUR_APP_ID='02e498a8';
  const YOUR_APP_KEY='8cf315c874d95f976758583c3d24ddf7';
  const submitHandler = e =>{
    e.preventDefault();
    fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=12&calories=591-722&health=alcohol-free`).then(
      response => response.json()
    ).then(
      data=> setData(data.hits)
    )
  }

  return (
    <div>
      <center>
        <h2>Food Recipe Finder</h2>
        <form onSubmit={submitHandler}>
          <input type="text" value={search} onChange={(e)=> setSearch(e.target.value)} /><br/>
          <input type='submit' className='btn btn-primary' value='Search'/>
        </form>
        {data.length>=1 ? <Products  data={data}/>:null}
      </center>
    </div>
  );
}

export default App;
