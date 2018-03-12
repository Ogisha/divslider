import React from 'react';
import Options from './Options';
import Task from './Task';
import DivSlider from './Divslider';
import {Tasks} from './../api/tasks';
import PropTypes from 'prop-types';

let count = 0;
export default class TasksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            custId: 0,
        };
    }

    returnCustomId(x) {
        let count = x;
        count = Number(count.slice(-1));
        this.setState({
            custId: count
        });
    }
    
    sortTasks() {
        switch (this.props.active) {
            case "yes": 
                orderedTasks = Tasks.find({active: true}, {$sort: {custom_id: -1}}).fetch(); 
                pagNum = Tasks.find({active: true}).fetch().length;
                break;          
            case "no":
                orderedTasks = Tasks.find({active: false}, {$sort: {custom_id: -1}}).fetch();
                pagNum = Tasks.find({active: false}).fetch().length;
                break;
            case "all":
                orderedTasks = Tasks.find({}).fetch();
                pagNum = Tasks.find().fetch().length;
                break;
        }  
    }

    renderTasks() {
        if (pagNum == 0) {
            return <p><br />No tasks to display.</p>
        }

        else {
            if($(window).width() < 768) {
                const temp = this.state.custId;
                let newObj = [];

                for (let i = 0; i < orderedTasks.length; i++) {
                    newObj.push(orderedTasks[i]);
                    orderedTasks[i].custom_id = i;
                }

                if (!!newObj[temp])
                    return <Task key={task._id} cols={this.props.cols} task={newObj[temp]} />
                    
                else
                    return <Task key={task._id} cols={this.props.cols} task={newObj[0]} />
            }

            else {
                const option = `col-sm-6 col-md-4 col-lg-${12/Number(this.props.cols)}`;
                return orderedTasks.map((task) => {
                    return <Task key={task._id} task={task} cols={this.props.cols}/>
                });
            }           
        }
    }

    renderPagination() {
        var lis = [];

        for (let i = 0; i < pagNum; i++) {
            let pagId = "li" + i;
            lis.push(
                <li key={i}>
                    <a href="#/">
                        <i id={orderedTasks[i].custom_id} className="fa fa-circle" onClick={(e) => this.returnCustomId(e.target.id)}></i>
                    </a>
                </li>
            );
        }
        return lis;
    }

    render() {
        return (
            <div className="tasksComponent">
                <div className="container-fluid">
                    {this.sortTasks()}
                    {this.renderTasks()}
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 text-center">
                            <ul className="pagination">
                                {this.renderPagination()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


