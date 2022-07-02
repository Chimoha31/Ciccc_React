import React,{memo} from 'react';

const Child = (props) => {

  console.log("I'm being rendered, {Child Component}");

  const updatedNumber = () => {
    const random = Math.random();
    props.changeNumber(random);
  }
  return (
    <div>
      {/* Child Component - {props.number} */}
      <button onClick={updatedNumber}>Change Number {props.number} </button>
    </div>
  )
}
// Memo - higher order function
export default memo(Child)
