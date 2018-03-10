import React from 'react';
import ReactDOM from 'react-dom';
import {Meteor} from 'meteor/meteor';
import {Tracker} from 'meteor/tracker';
import {Tasks} from './../imports/api/tasks';
import Divslider from './../imports/ui/Divslider';

Meteor.startup(() => {
  Tracker.autorun(() => {
    let tasks = Tasks.find({}, {"sort" : {custom_id: -1}}).fetch();
    let authorEmail = "pandurevic.o@gmail.com";
    ReactDOM.render(<Divslider author={authorEmail} tasks={tasks} />, document.querySelector("#sliderdemo"));
  });
});




