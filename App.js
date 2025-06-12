import './App.css';

import Counter from './components/counter/Counter';
function App(){
  return(
    <div className='App'>
    <Counter/>
    {/* <PlayingWthProps property1="value1" property2="value2" /> */}
    </div>
  );
  
}


// Modern Approach:
// function PlayingWthProps({property1,property2}){
//   console.log(property1)
//   console.log(property2)

//   return(
//     <div>Props</div>
//   );
// }



// Outdated approch for accesing property: 
// function PlayingWthProps(properties){
//   console.log(properties)
//   console.log(properties.property1)
//   return(
//     <div>Props</div>
//   );
// }

export default App;
