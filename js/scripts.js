var contactArray = [];



// business logic
function Contact(first, last) {
  this.firstName = first;
  this.lastName = last;
  this.addresses = [];
  this.id = last + ", " + first
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

function Address(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
}

// user interface

function alertContact() {
  console.log(contactArray[0]);
  alert(contactArray[0].firstName);
}

$(document).ready(function() {
  $('h1').click(function() {
    alertContact();
  });

  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
    '<div class="form-group">' +
    ' <label for ="new-street">Street</label>' +
    '<input type="text" class="form-control new-street">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-city">City</label>' +
    '<input type="text" class="form-control new-city">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="new-state">State</label>' +
    '<input type="text" class="form-control new-state">' +
    '</div>' +
    '</div>')
        console.log(newContact + "Outside");
  })

  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var currentContact = ""
    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLastName = $("input#new-last-name").val();
    var newContact = new Contact(inputtedFirstName, inputtedLastName);
    contactArray.push(newContact);
    console.log(contactArray[0]);

    $(".new-address").each(function() {
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find(
        "input.new-city").val();
        var inputtedState = $(this).find("input.new-state").val();
        var newAddress = new Address(inputtedStreet, inputtedCity, inputtedState)
        newContact.addresses.push(newAddress)
      });
      $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

      $(".contact").last().click(function(){
        console.log(this);
        console.log(newContact);
        $("#show-contact").show();
        $("#show-contact h2").text(newContact.fullName());
        $(".first-name").text(newContact.firstName);
        $(".last-name").text(newContact.lastName);
        $("ul#addresses").text("");
        newContact.addresses.forEach(function(address) {
          $("ul#addresses").append("<li>" + address.street + ", " + address.city + " " + address.state + "</li>");
          $("input#new-first-name").val(newContact.firstName);
          $("input#new-last-name").val(newContact.lastName);
          $("input.new-street").val(address.street);
          $("input.new-city").val(address.city);
          $("input.new-state").val(address.state);
          currentContact = newContact.id
        });
      })
      $("form#edit").click(function(event){
        event.preventDefault();

        find contact with id = currentContact

        overwrite current contact with field values

        change name in contacts list

      });
      // $("input#new-first-name").val("");
      // $("input#new-last-name").val("");
      // $("input.new-street").val("");
      // $("input.new-city").val("");
      // $("input.new-state").val("");
    });

  });
