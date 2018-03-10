import React from 'react';
import Header from './Header';
import Options from './Options';
import {Tasks} from './../api/tasks';

export default class Divslider extends React.Component {
    renderForm(e) {
        e.preventDefault();

        let dateCreated = String(new Date()).slice(0.10);
        dateCreated = dateCreated.slice(0, 10);

        Tasks.insert({
            name: e.target.fullName.value,
            project: e.target.projectName.value,
            task: e.target.taskName.value,
            taskDesc: e.target.taskDesc.value,
            taskLink :e.target.taskLink.value,
            active: true,
            custom_id: Tasks.find().fetch().length,
            dateAdded: dateCreated
        });

        e.target.fullName.value = "";
        e.target.projectName.value = "";
        e.target.taskName.value = "";
        e.target.taskDesc.value = "";
        $("#formSubmitInfo1").toggleClass("hidden").css("color", "green");
    }

    emptyDb() {
        Meteor.call('removeAllTasks');
        $("#formSubmitInfo2").toggleClass("hidden").css("color", "green");
    }

    render() {
        return (
            <div>
                <div>
                    <div id="modalForm" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <button type="button" onClick={() => $("#formSubmitInfo1").toggleClass("hidden")} className="close" data-dismiss="modal">&times;</button>
                                    <h4 className="modal-title text-center">Add a new task by entering the info bellow:</h4>
                                </div>

                                <div className="modal-body">
                                    <form onSubmit={this.renderForm.bind(this)}>
                                        <div className="form-group">
                                            <label htmlFor="name">Asigned to (full name):</label>
                                            <input type="text" className="form-control" id="name" name="fullName" required="required" />
                                        </div>
                        
                                        <div className="form-group">
                                            <label htmlFor="project">Project name:</label>
                                            <input type="text" className="form-control" id="project" name="projectName" required="required" />
                                        </div>
            
                                        <div className="form-group">
                                            <label htmlFor="task">Task:</label>
                                            <input type="text" className="form-control" id="task" name="taskName" required="required" />
                                        </div>

                                        <div className="form-group">
                                            <label htmlFor="taskLink">Task link:</label>
                                            <input type="url" className="form-control" id="taskLink" name="taskLink" required="required" />
                                        </div>
                        
                                        <div className="form-group">
                                            <label htmlFor="taskDescription">Task description:</label>
                                            <textarea className="form-control" id="taskDescription" rows="5" name="taskDesc" required="required"></textarea>
                                        </div>
                        
                                        <button className="btn btn-primary" type="submit">SUBMIT</button>
                                        <span id="formSubmitInfo1" className="hidden"><i> The task is inserted!</i></span>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="deleteForm" className="modal fade" role="dialog">
                        <div className="modal-dialog">
                            <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                                <h4 className="modal-title text-center">Really proceed with this step?</h4>
                            </div>
                
                            <div className="modal-body">
                                <button className="emptyDbBtn btn btn-danger" onClick={(e) => {
                                    alert("Successfully done!");
                                    return Meteor.call('removeAllTasks');
                                    } 
                                } type="submit">Yes, empty the tasks list</button>
                                <button type="button" className="emptyDbBtn btn btn-info" data-dismiss="modal">No, get me out of here</button>
                                <span id="formSubmitInfo2" className="hidden"><i> The tasks list is now empty!</i></span>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <Header author={this.props.author} />
                <Options tasks={this.props.tasks} />
            </div>
        );
    }
};