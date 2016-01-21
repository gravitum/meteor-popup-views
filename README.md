Popup Views
=========================

Popups  is a Meteor package that adds helper functions and event listener  for easily creating  and removeing views, without directly specifying them in HTML (Jade or whatever). It's especially convenient for popup management. Supports bootstrap modals.


## Methods


`
Meteor.popUp("templateName", data)
`
Template.templateName will be rendered into the dom with data as data context. If the template contains  bootstrap modal , it will be shown.


`
Meteor.popDown("templateName")
`
If Template.templateName is rendered into the dom by popUp it will be removed.

## Events

`
popDown
`
Custom DOM event, which , if propagated through the template instantiation, will result in removal of that template from the DOM.
For example,  if a modal was created with Meteor.popUp, it can be removed from the by triggering this event

`
Template.templatename.events({
  "click .done": function(event){
    $(event.target). trigger("popDown")
  }
})
`

Bootstrap modals will be automatically removed from the DOM if they are closed and do not require popDown event or method. 