import React from 'react';
import Task from './Task';

import {Droppable} from 'react-beautiful-dnd';
import styled from 'styled-components'
const List =styled.div`
padding:8px;
width:100%;
 transition:background-color 0.2s ease;
 background-color: ${props =>(props.isDraggingOver? '#D3D3D3':'transparent')};
 flex-grow:1
`;
const Title = styled.h4`
padding:8px;`;


const Container = styled.div`
margin:8px;
border-radius:2px;
width:300px;
border: 1px solid lightgrey;
display:flex;
flex-direction:column;
`;

class Column extends React.Component{
    render()
    {
        return (
          <Container>
              <Title>{this.props.column.title}</Title>
                <Droppable droppableId={this.props.column.id}>
                {(provided,snapshot)=> (
                <List
                    
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    ref={provided.innerRef}>
                    {this.props.tasks.map((task,index)=>(<Task key={task.id} task={task} index={index}/>))}
                    {provided.placeholder}
                   
                </List>
                )}
                </Droppable> 
            </Container>
        )
    }
}
export default Column;
