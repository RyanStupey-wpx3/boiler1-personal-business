import React from 'react';

 const Edit_button = (props) => {
    return(<button onClick={() => props.toggleState(props.index)}>edit</button>)
}
export default Edit_button;