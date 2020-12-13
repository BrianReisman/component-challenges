import React from 'react';

const Stat = ({data, title}) => {
console.log(data, title);

  return(
    <div className='statBox'>
      <p>{title}</p>
      <h2>{data}</h2>
    </div>
  )
}

export default Stat;