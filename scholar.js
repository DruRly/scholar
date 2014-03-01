//if (Meteor.isClient) {
//Template.hello.greeting = function () {
//return "Welcome to scholar.";
//};

//Template.hello.events({
//'click input': function () {
//template data, if any, is available in 'this'
//if (typeof console !== 'undefined')
//console.log("You pressed the button");
//}
//});
//}
Volunteers = new Meteor.Collection('volunteers');


if (Meteor.isClient) {
    Template.success.name = function(){
      return "ok";
    }
  Template.hello.events({'submit form' : function(event, template) {
    event.preventDefault();

    name = $("#name").val();
    email = $("#email_address").val();
    linked_in = $("#linked_in").val();
    phone_number = $("#phone_number").val();
    area_of_interest = $("#area_of_interest").val();
    why = $("#why").val();

    data = {
      name: name,
      email: email,
      linked_in: linked_in,
      phone_number: phone_number,
      area_of_interest: area_of_interest,
      why: why
    };

    Volunteers.insert(data, function(err) { /* handle error */ });

    var templateName = "success";
    var fragment = Meteor.render(function(){
      return Template[templateName](data);
    });
    $("body").html(fragment);
  }});
}
