https://neetcode.io/problems/top-k-elements-in-list?list=neetcode150

// use a hashmap to count the frequency of each element
function topKFrequent(nums, k) {    
    const frequencyMap = new Map();
    
    // Count the frequency of each number
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }
    
    // Convert the map to an array of [num, frequency] pairs
    const frequencyArray = Array.from(frequencyMap.entries());
    
    // Sort the array by frequency in descending order
    frequencyArray.sort((a, b) => b[1] - a[1]);
    
    // Extract the top k elements
    return frequencyArray.slice(0, k).map(pair => pair[0]);
}