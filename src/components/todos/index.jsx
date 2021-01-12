import React from 'react';
import ListView from '../listview';
import TableView from '../tableview';





class Todos extends React.Component{

    state = {
        todos: [
            {
                id: '1',
                text: 'my first text',
                description: 'this is first text description',
                time: new Date(),
                isComplete: true,
                isSelect: false,
            },
            {
                id: '2',
                text: 'my second text',
                description: 'this is second text description',
                time: new Date(),
                isComplete: true,
                isSelect: false,
            }            
        ]
    };    

    toggleSelect = todoId => {

    };

    toggleComplete = todoId => {

    };

    render(){
        return(
        <div>
            <h1 className="display-4 text-center mb-5"><strong>My Todo App</strong></h1>
        
            <div>
                <ListView
                todos={this.state.todos}
                toggleSelect={this.state.toggleSelect}
                toggleComplete={this.state.toggleComplete}
                
                />
            </div>

            <div>
                <TableView
                    todos={this.state.todos}
                    toggleSelect={this.state.toggleSelect}
                    toggleComplete={this.state.toggleComplete}

                />
            </div>

        </div>
        

        );

    }
}

export default Todos;

