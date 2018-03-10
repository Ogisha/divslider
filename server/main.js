import {Meteor} from 'meteor/meteor';
import {Tasks} from './../imports/api/tasks';

Meteor.startup(function() {
  return Meteor.methods({
    removeAllTasks() {
      return Tasks.remove({});
    }
  });
});