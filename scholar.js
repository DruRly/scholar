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
  Template.hello.events({'submit form' : function(event, template) {
    event.preventDefault();

    name = template.find("input[name=name]");
    email = template.find("input[name=email_address]");
    linked_in = template.find("input[name=linked_in]");
    phone_number = template.find("input[name=phone_number]");
    area_of_interest = template.find("input[name=area_of_interest]");
    why = template.find("textarea[name=why]");

    var data = {
      name: name.value,
      email: email.value,
      linked_in: linked_in.value,
      phone_number: phone_number.value,
      area_of_interest: area_of_interest.value,
      why: why.value
    };

    name.value=""
    email.value=""
    linked_in.value=""
    phone_number.value=""
    area_of_interest.value=""
    why.value=""

    Volunteers.insert(data, function(err) { /* handle error */ });
    var email_params = {
      from: "scholar@drurly.com",
      to: "rileydru5@gmail.com",
      subject: "test",
      html: "test"
    }
    Email.send(email_params)
  }});
}
