// import React,{useState,useEffect} from "react"
// function Movie(){
//     const [user, setUser] = useState([]);
//   const noImage="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png"
//   function fetchApi() {
//     fetch(
//       "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
//     )
//       .then((res) => res.json())
//       .then((res) => setUser(res));
//   }
//   function reMove(index) {
//     const filteredData = user.filter((item, id) => id !== index);
//     setUser(filteredData);
//   }
//   useEffect(()=> 
//  {fetchApi()},[]
//   )
//   console.log(user);
//     return(
//         <body>
//     <div className="container">
//       <h1>Hello World!</h1>
      
//       {user.map((item, id) => (
//         <>
//           <div className="Movielist">
//           <img src={item.Poster || noImage}/>
//           <h6>
//           <span className="title">TiTle:{item.Title}</span>
//       <span className="year">Year: {item.Year}</span>
//       <span className="duration">Duration: {item.Runtime}</span>
//       </h6>
//             <button onClick={() => reMove(id)}>Remove</button>
//           </div>
          
            
          
//         </>
//       ))}
//     </div>
//         </body>
//     )
// }
// export default Movie

 

// import React, { useState, useEffect } from "react";


// function Movie() {
//   const [user, setUser] = useState([]);
//   const noImage =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png";

//   function fetchApi() {
//     fetch(
//       "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
//     )
//       .then((res) => res.json())
//       .then((res) => setUser(res));
//   }

//   function reMove(index) {
//     const filteredData = user.filter((item, id) => id !== index);
//     setUser(filteredData);
//   }

//   useEffect(() => {
//     fetchApi();
//   }, []);

//   console.log(user);

//   return (
//     <div className="container">
//       <h1>List!</h1>

//       {user.map((item, id) => (
//         <div className="Movielist" key={id}>
//           <img src={item.Poster || noImage} alt="Movie Poster" />
//           <div className="movie-details">
//             <span className="title">Title: {item.Title}</span>
//             <span className="year">Year: {item.Year}</span>
//             <span className="duration">Duration: {item.Runtime}</span>
//           </div>
//           <div className="button-container">
//             <button className="remove-button" onClick={() => reMove(id)}>
//               Remove
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Movie;


import React, { useState, useEffect } from "react";

function Movie() {
  const [user, setUser] = useState([]);
  const [selectedItem, setSelectedItem] = useState("");
  const noImage =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/No-Image-Placeholder.svg/256px-No-Image-Placeholder.svg.png";

  function fetchApi() {
    fetch(
      "https://my-json-server.typicode.com/horizon-code-academy/fake-movies-api/movies"
    )
      .then((res) => res.json())
      .then((res) => setUser(res));
  }

  // function reMove(index) {
  //   const filteredData = user.filter((item, id) => id !== index);
  //   setUser(filteredData);
  // }

  useEffect(()=> 
 {fetchApi()},[]
  )

  console.log(user);

  const filteredMovies = user.filter((item) =>
    item.Title.toLowerCase().includes(selectedItem.toLowerCase())
  );

  return (
    <body className="body">
    <div className="container">
    <main className="contBox">
      <h1>List Of The Movie!</h1>
  <div className="selectBox">
      <select
        value={selectedItem}
        onChange={(e) => setSelectedItem(e.target.value)}
      >
        <option value="">All</option>
        {user.map((item, id) => (
          <option value={item.Title} key={id}>
            {item.Title}
          </option>
        ))}
      </select>
      </div>
      
      {filteredMovies.map((item, id) => (
        <div className="Movielist" key={id}>
          <img src={item.Poster || noImage} alt="Movie Poster" />
          <div className="movie-details">
            <span className="title">Title: {item.Title}</span>
            <span className="year">Year: {item.Year}</span>
            <span className="duration">Duration: {item.Runtime}</span>
          </div>
          {/* <div className="button-container">
            <button className="remove-button" onClick={() => reMove(id)}>
              Remove
            </button>
          </div> */}
        </div>
      ))}
      </main>
    </div>
        </body>
  );
}

export default Movie;
