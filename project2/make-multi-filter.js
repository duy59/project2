"use strict";

function MakeMultiFilter(originalArray) {
  let currentArray = originalArray.slice();

  function arrayFilterer(filterCriteria, callback) {
    if (typeof filterCriteria === "function") {
      currentArray = currentArray.filter(filterCriteria);
      if (typeof callback === "function") {
        callback.apply(originalArray, [currentArray]);
      }
      return arrayFilterer;
    } else {
      return currentArray;
    }
  }

  return arrayFilterer;
}

module.exports = MakeMultiFilter;