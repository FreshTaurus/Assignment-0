function sumOfMinimumAndMaximum(nums) {
    if (nums.length === 0) return 0;
     let min = Math.min(...nums);
     let max = Math.max(...nums);
     return min + max;// Insert code here;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
