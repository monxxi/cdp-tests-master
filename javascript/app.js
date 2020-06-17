#!/usr/bin/env node


const filterAnimals = (data, filterTerm) => {

    return data.filter(country => {
        country.people = country.people.filter(
            person => {
                return person.animals.length > 0
            });
        return country.people.length > 0;
    });
};

module.exports = {filterAnimals}
