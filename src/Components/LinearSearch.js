import React, { Component } from 'react'

export default class LinearSearch extends Component {
    render() {
        a.call();
        return (
            <div>

            </div>
        )
    }
}


let a = function linearSearch() {
    let array = [1, 2, 3, 4, 5];
    let elementToFind = 5;
    console.log(iterateThroughArray(array, elementToFind));
}


/**
 * In Linear search time complixity is O(n)
 * @param {*} array 
 * @param {*} elementToFind 
 */
function iterateThroughArray(array, elementToFind) {
    let i = 0;
    for (i = 0; i < array.length; i++) {
        if (array[i] === elementToFind) {
            return i;
        }
    }
    return -1
}

// Improve Linear Search Worst-Case Complexity

// if element Found at last  O(n) to O(1)
// if element Not found O(n) to O(n/2)
