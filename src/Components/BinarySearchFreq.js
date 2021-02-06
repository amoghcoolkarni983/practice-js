import React, { Component } from 'react'


//Code yet to test
export default class BinarySearchFreq extends Component {
    render() {
        a.call();
        return (
            <div>

            </div>
        )
    }
}



let a = function binarySearch() {
    let array = [1, 2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 1231, 2123123];    // If we try to solve solve this probelm using linear search time complexity will be O(n + freq)
    let elementToFind = 2;
    let f = frequencyCounter(array, elementToFind);
    if (-1 === f) {
        console.log("No Occurence found");
    }
    else {

        console.log("Number of times " + elementToFind + "Occured is " + f);

    }

}


/**
 * Freq counter in array using improved binary search.
 * 
 * Consider first occurence is i
 * 
 * and last occurence is j
 * 
 * then freq = j - i + 1
 * 
 * Time complexity for this problem is O(log n)
 * 
 * @param {*} array 
 * @param {*} element 
 */
function frequencyCounter(array, element) {
    let freq = lastOccurenceCalculator(array, element) - firstOccurenceCalculator(array, element) + 1;
    if (freq === -1) {
        return -1;
    }

    return freq

}

// Calculating first occurence
function firstOccurenceCalculator(array , element, left, right) {

    let mid = 0;

    if(right >=  left)
    {

         mid  = parseInt(left  + (right  - left) / 2);

        if(mid === 0 || (array[mid] === element && array[mid - 1] < element))
        {
            return mid;
        }

        else if(array[mid] < element)
        {
            return firstOccurenceCalculator(array,element, mid + 1 , right);
        }
        else
        {
            return firstOccurenceCalculator(array,element, left , mid - 1);
        }

    }

    return -1
}

// Calculating last occurence
function lastOccurenceCalculator(array , element, left, right) {
    let mid = 0;
    if(right >=  left)
    {
        mid  = parseInt(left  + (right  - left) / 2);

        if(mid === 0 || (array[mid] === element && array[mid + 1] > element))
        {
            return mid;
        }

        else if(array[mid] > element){
            return lastOccurenceCalculator(array, element , left , mid - 1);
        }

        else 
        {
            return lastOccurenceCalculator(array, element , mid + 1 , right);
        }
    }
    return -1
}