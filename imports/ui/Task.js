import React from 'react';
import {Tasks} from './../api/tasks';
import PropTypes from 'prop-types';

export default class Task extends React.Component {
    returnCols() {
        return `col-sm-6 col-md-4 col-lg-${12/Number(this.props.cols)}`;
    }

    getShortId() {
        let shortId = this.props.task._id;
        return shortId.slice(0,3).toUpperCase();
    }

    isChecked(e) {
        if (!this.checked) 
            console.log("on");
        else    
            console.log("off");
        
        Tasks.update({_id: this.props.task._id}, {$set: {active: false}});
        console.log($(this))

    }

    render() {
        return (
            <div className={this.returnCols()}>
                <div className="task">
                    <p>
                        <a href="/#">{this.props.task.project}</a>  -  Task no.{this.props.task.custom_id}
                    </p>

                    <p>Created by {this.props.task.name} on <span id={this.getShortId()}>{this.props.task.dateAdded}</span></p><br />

                    <label><span className="hidden">completed</span>
                    <input type="checkbox" name="taskCompleted" onClick={(e) => {
                        if (e.target.checked) {
                           Tasks.update({_id: this.props.task._id}, {$set: {active: false}});
                           console.log("Set: false - complete");
                        }

                        else {
                            Tasks.update({_id: this.props.task._id}, {$set: {active: true}});
                            console.log("Set: true - complete");
                        }
                    } 
                } />

                    </label>

                    <h3>{this.props.task.task}</h3>

                    <a id="regA" href="/#">{this.props.task.taskLink}</a><br />

                    <p>Short description:</p>

                    <blockquote>{this.props.task.taskDesc}
                    </blockquote>

                    <p className="text-right"><i className="small">task ID</i>: {this.getShortId()}</p>
                </div>
          </div>
        );

    }
};
/*
Task.propTypes = {
    task: PropTypes.object.isRequired
}*/