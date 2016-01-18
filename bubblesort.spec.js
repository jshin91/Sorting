function numerically (a, b) { return a -b; }

function generateArray(size, lower, upper) {
	var randomArray = [];
	while(size--) {
		var randomNum = Math.floor(lower + Math.random() * upper);
		randomArray.push(randomNum);
	}
	return randomArray;
}



describe('Bubble Sort', function(){
    it('handles an empty array', function(){
        expect( bubbleSort([]) ).toEqual( [] );
    });
    it('sorts an array of length 1', function(){
        expect( bubbleSort([4]) ).toEqual( [4] );
    });
    it('sorts a small array', function(){
        expect( bubbleSort([4,1,3,2]) ).toEqual( [1,2,3,4] );
    });
    it('sorts a large array', function(){
        expect( bubbleSort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82]);
    });

    for(var i = 2; i < 103; i+=20) {
    	it('sorts an array of ' + i + ' random items', function() {
    		var arr = generateArray(i, 0, 100);
    		var sorted = arr.slice(0).sort(numerically);
    		expect( bubbleSort(arr) ).toEqual( sorted );
    	});
    }
    // it('compares the expected number of times',  function() {
    // 	spyOn(window, 'inOrder').and.callThrough();
    // 	bubbleSort([4, 6, 5, 1]);
    // 	expect(inOrder.calls.count()).toEqual(10);
    // })

});
















