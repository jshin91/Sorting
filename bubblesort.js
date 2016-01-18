'use strict';

function bubbleSort(arr) { // 4, 1, 3, 2
	var swapped = true;
	var counter = 0;

	while(swapped) {
		swapped = false;
		counter ++;
		for(var i = 0; i < arr.length - 1; i++) {
			if(arr[i] > arr[i+1]) {
				var temp = arr[i];
				arr[i] = arr[i+1];
				arr[i+1] = temp;
				swapped = true;
			}
		}	
	}
	return arr;
}

