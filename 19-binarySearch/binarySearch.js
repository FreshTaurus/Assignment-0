class MySolution {
  constructor() {
    this.flag = false; // optional, you don’t have to use this
  }

    binarySearch(nums, target, left = 0, right = nums.length - 1) {
      if (left > right) return false;
      const mid = Math.floor((left + right) / 2);
      if (nums[mid] === target) return true;
      if (nums[mid] > target) {
        return this.binarySearch(nums, target, left, mid - 1);
      }
      return this.binarySearch(nums, target, mid + 1, right);
    }
}

let StudentSolution = MySolution;
module.exports = StudentSolution;
