import React, { Component } from 'react'

export default class BinarySearch extends Component {
    render() {
        a.call();
        return (
            <div>

            </div>
        )
    }
}

/**
 * Time complexity of B Search is O(log n)
 * 
 * 
 * There are two methods we can impliment binary search
 * 
 * 1. Iterative method
 * 
 * 2. Recursive method
 */
let a = function binarySearch() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8, 1231, 2123123];
    let elementToFind = 1231;
    console.log(array);
    console.log(binarySearchRecursiveMethod(array, elementToFind, 0, array.length - 1));

}

/**
 * Through iterative method
 */
function binarySearchIteratorMethod(array, elementToFind) {
    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        let mid = parseInt(left + (right - left) / 2);

        if (array[mid] === elementToFind) {
            return mid;
        }

        else if (array[mid] < elementToFind) {
            left = mid + 1;
        }
        else {
            right = mid - 1;
        }

    }
    return -1;
}

/**
 * Through recursive method method
 */
function binarySearchRecursiveMethod(array, elementToFind, left, right) {

    if (right >= left) {
        let mid = parseInt(left + (right - left) / 2);
        if (array[mid] === elementToFind) {
            return mid;
        }

        if (array[mid] > elementToFind) {
            return binarySearchRecursiveMethod(array, elementToFind, left, mid - 1);
        }

        else {
            return binarySearchRecursiveMethod(array, elementToFind, mid + 1, right);
        }
    }
    return -1;
}

/**
 * O(1) in case of iterative implementation. In case of recursive implementation, O(Logn) recursion call stack space.
 */


