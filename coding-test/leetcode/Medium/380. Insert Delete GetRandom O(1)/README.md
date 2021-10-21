# 문제
https://leetcode.com/problems/insert-delete-getrandom-o1/

# 380. Insert Delete GetRandom O(1)

## 1차 풀이 답
``` javascript
var RandomizedSet = function() {
    this.set = new Set();
};

RandomizedSet.prototype.insert = function(val) {
    if (this.set.has(val)) return false;
    this.set.add(val);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    if (!this.set.has(val)) return false;
    this.set.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    const key = Math.floor(Math.random() * this.set.size);
    return Array.from(this.set)[key];
};
```
Set를 이용해 구현

<br>

## 2차 풀이 답

``` javascript
var RandomizedSet = function() {
    this.map = new Map();
    this.list = [];
};

RandomizedSet.prototype.insert = function(val) {
    if (this.map.get(val) !== undefined) return false;
    this.list.push(val);
    this.map.set(val, this.list.length - 1);
    return true;
};

RandomizedSet.prototype.remove = function(val) {
    const key = this.map.get(val);
    if (key === undefined) return false;
    const n = this.list.length - 1;
    
    if (key !== n) {
        this.list[key] = this.list[n];
        this.map.set(this.list[n], key);
    }
    this.list.pop();
    this.map.delete(val);
    return true;
};

RandomizedSet.prototype.getRandom = function() {
    const key = Math.floor(Math.random() * this.list.length);
    return this.list[key];
};
```
Map를 이용해 구현
