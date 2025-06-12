
import {PropTypes} from 'prop-types';

export default function CounterButton({by,incrementMethod,decrementMethod}){  

    // useState is an array which has 2 elements 1:0, 2: function{for updating}
    // i.e. [0,f]
    // Here assigning variables to these 2 array elements
    //const [count,setCount] = useState(0);

    //function incrementCounterFunction(){
        // since setCount is function to update value we are updating by incrementing 
        // current element by 1
        //setCount(count+by);
        //incrementMethod(by)

    //}

    //function decrementCounterFunction(){
        // since setCount is function to update value we are updating by decrementing 
        // current element by 1
        //setCount(count-by);
        //decrementMethod(by)

    //}

    return(
        <div className="Counter">

            <div>
            <button className="counterButton" 
                onClick={()=>incrementMethod(by)}>+{by}
            </button>
            <button className="counterButton" 
                onClick={()=>decrementMethod(by)}>-{by}
            </button>

            </div>
        </div>
    );
}

//Adding constraint to only accept integer input
CounterButton.propTypes = {
    by: PropTypes.number
}

//Adding default value for by if value is not specified
CounterButton.defaultProps = {
    by: 5
}