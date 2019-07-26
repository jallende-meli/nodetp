var sortBy = require('underscore');

function orderAgencies(agencies, crit, order) {
    var sortedAgenciesList = sortBy(agencies, function (jsonElement) {
        return [nestedObject == null ? jsonElement(crit) : jsonElement[nestedObject](crit)];
    });
    if ('desc' === order) {
        sortedAgenciesList = sortedAgenciesList.reverse();
    }
    return sortedAgenciesList;
}

module.exports = {
    orderAgencies: orderAgencies,
};