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


let a = function binarySearch() {
    let array = [1, 2, 3, 4, 5, 6, 7, 8];
    let elementToFind = 5;
    console.log(binarySearchGoingOn(array, elementToFind));

}


function binarySearchGoingOn(array, elementToFind) {

    let left = 0;
    let right = array.length - 1;


    while (left <= right) {
        let mid = parseInt(left + (right - 1) / 2);
        console.log("left=" + left + "right=" + right + "mid=" + mid);

        console.log("ArrayMId"+array[mid])
        if (array[mid] === elementToFind) {
            return mid;
        }

        else if (array[mid] > elementToFind) {
            console.log("im here")
            right = mid - 1;
        }

        else {
            console.log("yes")
            left = mid + 1;
        }

        
    }
    return -1;

}


