/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var initialPerson = person.firstName[0] + person.lastName[0];
  return initialPerson;
}
