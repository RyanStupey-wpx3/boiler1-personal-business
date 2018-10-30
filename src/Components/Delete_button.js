import React from 'react';

 const Delete_button = (props) => {
    return(<button onClick={() => props.deletePost(props.index)}>delete</button>)
}
export default Delete_button;