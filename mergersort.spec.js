describe('Merge Sort', function(){



  it('is able to merge two sorted arrays', function(){
	expect(merge([3,5,7],[1,2,8])).toEqual([1,2,3,5,7,8]);
	expect(merge([1,2,8], [3,5,7])).toEqual([1,2,3,5,7,8]);
   });


  it('is able to split an array into two halves', function() {
    expect(splitArr([1,2,3,4,5,6])).toEqual([[1,2,3],[4,5,6]]);
    expect(splitArr([1,2,3,4,5])).toEqual([[1,2],[3,4,5]]);
  });



   it('is able to sort small arrays', function() {
    expect(mergeSort([4,1,3,2])).toEqual([1,2,3,4]);
  });
  it('is able to sort big arrays', function() {
    expect(mergeSort([38, 27, 43, 3, 9, 82, 10])).toEqual([3, 9, 10, 27, 38, 43, 82]);
  });    
});

