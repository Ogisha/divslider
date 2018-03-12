import React from 'react';
import TasksList from './TasksList';
import {Tasks} from './../api/tasks';

export default class Options extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            active: "all",
            cols: 0
        };
    }

    returnValue(value) {
       this.setState({
        cols: value
           
       });
    }

    returnCols(value) {
        this.setState({
            active: value
        });
    }

    render() {
        return(
            <div id="optionsComponent">
                <div className="container-fluid">
                    <div className="col-xs-6 col-sm-offset-2 col-sm-4 col-md-offset-3 col-md-3 dropdownDiv">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle optionsBtn" type="button" data-toggle="dropdown">VIEW OPTIONS
                                <span className="caret"></span>
                            </button>
                    
                            <ul className="dropdown-menu">
                                <li id="hiddeLi">
                                    <a href="/#">Number of columns in a row:
                                    <ul>
                                        <li>
                                        <form className="text-right">
                                            <label>
                                                <input type="radio" name="tasksNum" value="2" onClick={(e) => this.returnValue(e.target.value)} /> 2
                                            </label>
                
                                            <label>
                                                <input type="radio" name="tasksNum" value="3" onClick={(e) => this.returnValue(e.target.value)} /> 3
                                            </label>
                                            
                                            <label>
                                                <input type="radio" name="tasksNum" value="4" onClick={(e) => this.returnValue(e.target.value)} /> 4
                                            </label>
                
                                            <label>
                                                <input type="radio" name="tasksNum" value="6" onClick={(e) => this.returnValue(e.target.value)} /> 6
                                            </label>
                                        </form>
                                        </li>
                                    </ul>
                                    </a>
                                </li>
        
                                <li>
                                    <a href="/#">View by completion:
                                    <ul>
                                        <li>
                                        <form className="text-right">
                                            <label>
                                                <input type="radio" name="tasksCompleted" value="yes" onClick={(e) => this.returnCols(e.target.value)} /> Active 
                                                <small><i><span className="countTasks">({Tasks.find({active: true}).fetch().length})</span></i></small>
                                            </label>
                
                                            <label>
                                                <input type="radio" name="tasksCompleted" value="no" onClick={(e) => this.returnCols(e.target.value)} /> Completed 
                                                <small><i><span className="countTasks">({Tasks.find({active: false}).fetch().length})</span></i></small>
                                            </label>
                                            
                                            <label>
                                                <input type="radio" name="tasksCompleted" value="all" onClick={(e) => this.returnCols(e.target.value)} /> All 
                                                <small><i><span className="countTasks">({Tasks.find().fetch().length})</span></i></small>
                                            </label>
                                        </form>
                                        </li>
                                    </ul>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
      
                    <div className="col-xs-6 col-sm-6 col-md-3 dropdownDiv">
                        <div className="dropdown">
                            <button className="btn dropdown-toggle optionsBtn" type="button" data-toggle="dropdown">TASKS OPTIONS
                            <span className="caret"></span>
                            </button>
            
                            <ul className="dropdown-menu list-inline">
                            <li><a href="#" data-toggle="modal" data-target="#modalForm">Add new task</a></li>
                            <li><a href="#" data-toggle="modal" data-target="#deleteForm">Delete all tasks</a></li>
                            </ul>
                        </div>           
                    </div>
                </div>
                <TasksList tasks={this.props.tasks} cols={this.state.cols} active={this.state.active} />
            </div>
        );
    }
}