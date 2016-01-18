function merge(left, right) {
	var result = [],
		leftIdx = 0,
		rightIdx = 0,
		leftVal,
		rightVal;

	while(leftIdx < left.length || rightIdx < right.length) {
		leftVal = left[leftIdx];
		rightVal = right[rightIdx];

		if(leftVal < rightVal || rightVal === undefined) {
			result.push(left[leftIdx++]);
		} else {
			result.push(right[rightIdx++]);
		}
	} 
	return result;
}

function splitArr(array) {
    var center = array.length/2;
    var firstHalf = array.slice(0,center);
    var secondHalf = array.slice(center);
    return [firstHalf, secondHalf];
}

function mergeSort(array) {
	if(array.length <= 1) return array;

	var firstHalf = splitArr(array)[0]; 
	var secondHalf = splitArr(array)[1]; 

	var left = mergeSort(firstHalf);
	var right = mergeSort(secondHalf);

	return merge(left, right);
}






	// var firstHalf = splitArr(array)[0]; //[4,1]
	// var secondHalf = splitArr(array)[1]; //[3,2]

	// var sorted = merge(firstHalf, secondHalf) //[1,4,2,3]

	// var left = splitArr(sorted)[0];  //[1,4] 
	// var right = splitArr(sorted)[1];	//[2,3]

	// var result = [];

	// for(var i = 0; i < left.length; i++) {
	// 	var bigger = left[i] > right[i] ? left[i] : right[i];
	// 	if(left[i] < right[i]) result.push(left[i])
	// 	else result.push(right[i]);
	// 	result.push(bigger);
 // 	}
 // 	return result;
// }





