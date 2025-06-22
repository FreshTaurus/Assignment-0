function pairSum(nums, target) {
    if (nums.length < 2) throw new Error("Array must have at least two numbers");
    const seen = new Set();
    for (const num of nums) {
      if (seen.has(target - num)) {
        return true;
      }
      seen.add(num);
    }
    return false; // Insert code here;
}

// Do not edit this line;
module.exports = pairSum;
