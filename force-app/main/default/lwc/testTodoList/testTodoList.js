import { LightningElement,track} from 'lwc';

export default class TestTodoList extends LightningElement {
      @track toDoList=[];
        newTask;
       
        newToDo;
        handleChangeTask(event)
        {
            this.newTask=event.target.value;
        }
        handleAdd(event)
        {
            
            let taskId;
            taskId=this.toDoList.length;
          //  taskId++;
            this.newToDo={
                No:taskId,
                taskName:this.newTask,
            }
           // this.toDoList=[...this.newToDo];
            this.toDoList=[...this.toDoList,this.newToDo];
            console.log('hi');
        console.log(JSON.stringify(this.toDoList));
            //this.newTask="";
            //this.newToDo="";
        }
        handleTaskUpdate(event)
        {
            let checkId;
            checkId=event.target.dataset.id;
            this.toDoList=this.toDoList.filter(ele=>ele.No!==parseInt(checkId));
            console.log(JSON.stringify(this.toDoList));
        //     if(this.toDoList.length==1)
        //     this.toDoList.pop();
        // else{
        //     let checkId;
        //     checkId=event.target.dataset.id;
        //     console.log(checkId);
        //     this.toDoList.splice(parseInt(checkId)-1,1);
        //     console.log(JSON.stringify(this.toDoList));
        // }
        }
        get isToDoEmpty()
        {
            return this.toDoList.length>0;
        }
        // get isLimitReached()
        // {
        //     return this.toDoList.length==5?true:false;
        // }
}