import React from 'react';


const Results = (props) => {
  if (!props.count) {
    return <div> </div>
  }

  if (props.count === 1) {
    return <div> Found result: {props.count} </div>
  }

  if (props.count <= 15) {
    return <div> Found {props.count} results </div>
  }

  return (
    <div> Found {props.count} results. Showing first 15 results. </div>
  )

}



export default Results
