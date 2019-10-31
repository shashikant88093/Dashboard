import React from 'react';
import {Draggable} from 'react-beautiful-dnd'

import styled from 'styled-components'
const Container =styled.div`
border:1px solid lightgrey;
border-radius:2px;
padding:8px;
margin-bottom:8px;
width:220px;
background-color: ${props =>(props.isDragging? '#DDDDDD':'white')}
`;


class Task extends React.Component{
    render()
    {
        return (<div>
           
                <Draggable draggableId={this.props.task.id} index={this.props.index}>
                {(provided,snapshot)=>(
                <Container {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
               >
                {this.props.task.name}
          
                </Container>)
                }

                </Draggable> 
      
            <br></br>
            </div>
        )
    }
}
export default Task;
