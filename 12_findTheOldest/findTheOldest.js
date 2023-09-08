const findTheOldest = function(people) {
  return people.reduce((oldestPerson, currentPerson) => {
    const currentPersonAge = ('yearOfDeath' in currentPerson) ?
                             (currentPerson.yearOfDeath - currentPerson.yearOfBirth)
                             :
                             ((new Date().getFullYear()) - currentPerson.yearOfBirth);

    const oldestPersonAge = ('yearOfDeath' in oldestPerson) ?
                             (oldestPerson.yearOfDeath - oldestPerson.yearOfBirth)
                             :
                             ((new Date().getFullYear()) - oldestPerson.yearOfBirth);

    return (currentPersonAge > oldestPersonAge) ? currentPerson : oldestPerson;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
