const initData={
    tasks: {
      'in1':  {
            id: "in1",
            name: "inventory1"
        },
        'in2': {
            id: "in2",
            name: "inventory2"
        },
        'in3':  {
            id: "in3",
            name: "inventory3"
        },
        'in4': {
            id: "in4",
            name: "inventory4"
        },
        'in5':  {
            id: "in5",
            name: "inventory5"
        },
        'in6':  {
            id: "in6",
            name: "inventory6"
        },
        'in7':  {
            id: "in7",
            name: "inventory7"
        }
    },
    columns:{
        'col1':{
            id:"col1",
            title:'Inventory',
            taskIds:['in1','in2','in3','in4','in5','in6','in7']
        },
        'col2':{
            id:"col2",
            title:'Add list',
            taskIds:[]
        }
    },
    columnOrder:['col1','col2'],
    
}
export default initData;