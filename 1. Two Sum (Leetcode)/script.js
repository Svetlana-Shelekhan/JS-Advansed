// Two Sum


var twoSum = function(nums, target){
 var outputArray = [],
     i,
     j,
     size = nums.length;

 	for(var i = 0; i < size; i += 1) {
 		for(var j = 1; j < size; j += 1) {
 			if(nums[i] + nums[j] === target && i !== j) {
 				return outputArray = [i, j];
 			}
 		}
	}
}

//console.log(twoSum([3, 3], 6)); //[0,1]
//console.log(twoSum([2,7,11,15], 9)); //[0,1]
//console.log(twoSum([3, 2, 4], 6));  //[1,2]
console.log(twoSum([2, 5, 5, 11], 10));  //[1,2]


