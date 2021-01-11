import React from 'react';
import {ListGroup,ListGroupItem, CustomInput, Button} from 'reactstrap';
import PropTypes from 'prop-types';

//ListItem Component
const ListItem = ({todo,toggleSelect,toggleComplete}) => {
    return(
        <ListGroupItem className='d-flex align-items-center'>

            <CustomInput
                type='checkbox'
                id={todo.id}
                checked={todo.isSelect}
                onChange={() => toggleSelect(todo.id)}
            />
            <div className="mx-3">
                <h4>{todo.text}</h4>
                <p>{todo.time.toDateString()}</p>

            </div>
            <Button className='ml-auto'
                    color={todo.isComplete? 'danger':'success'}
                    onClick={() => toggleComplete(todo.id)}
                >
                    {todo.isComplete? 'Completed': 'Running'}
            </Button>
                
        </ListGroupItem>
    );
};

//PropTypes of ListItem Component
//todo is the object
//toggleSelect and toggleComplete are function()

ListItem.prototype = {
    todo: PropTypes.object.isRequired,
    toggleSelect : PropTypes.func.isRequired,
    toggleComplete : PropTypes.func.isRequired,
}


const ListView = ({todos, toggleSelect, toggleComplete}) => {
    return(
        <ListGroup>
            {todos.map(todo =>(
                <ListItem
                    key={todo.id}
                    todo={todo}
                    toggleSelect={toggleSelect}
                    toggleComplete={toggleComplete}
                />
            ))}
        </ListGroup>

    )

};

//PropTypes of ListView Component
//todo is the object
//toggleSelect and toggleComplete are function()

ListView.prototype={
    todos: PropTypes.object.isRequired,
    toggleSelect: PropTypes.func.isRequired,
    toggleComplete: PropTypes.func.isRequired
};

export default ListView;