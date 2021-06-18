/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {number}
 */
var respace = function (dictionary, sentence) {
    var n = sentence.length;
    if (n == 0) return 0;
    if (dictionary.length == 0) return n;

    // 构造 Trie
    var root = new Trie();
    for (const word of dictionary) root.insert(word);

    var dp = Array.from({ length: n + 1 }, () => 1001);
    dp[0] = 0;
    
    // console.log(dp);
    for (var i = 1; i <= n; ++i) {
        dp[i] = dp[i - 1] + 1;
        
        var curPos = root;
        for (var j = i; j >= 1; --j) {
            var t = sentence.codePointAt(j - 1) - 97;
            
            if (curPos.next[t] == null)  break; // trie 为空, 没有这个单词
            else if (curPos.next[t].isEnd) dp[i] = Math.min(dp[i], dp[j - 1]);  // 单词的末尾位置
            if (dp[i] == 0) break;
            
            curPos = curPos.next[t]
        }
    }

    return dp[n]
}

function Trie() {
    this.next = Array.from({ length: 26 }, () => null);
    this.char = '';
    this.isEnd = false;
    return this;
}

Trie.prototype.insert = function (word) {
    var root = this;
    var curPos = root;

    for (let i = word.length - 1; i >= 0; --i) {
        var t = word[i].codePointAt() - 97;        
        if (curPos.next[t] == null) curPos.next[t] = new Trie();
        curPos = curPos.next[t];
        curPos.char = word[i];
    }
    curPos.isEnd = true;
}
// console.log(respace(["looked","just","like","her","brother"], "jesslookedjustliketimherbrother"))
// console.log(respace(["a"], "a"))
// console.log(respace(["potimzz"], "potimzzpotimzz"))
// console.log(respace(["bt","vbtbvtvvbbvtbvvbbbvbtbbv","bvvbbbvvvbvttbtbvtvtvvbttbbbtvvvb","btttbvbbbtbbtbvvttbvbvtvbtbbttb","bt","vvbvbvbvtbvbvvvvtv","tbvvvtttvtbvbtttvvbtvvvvtvvbvvtvvbbvbbbvb","v","bvb","vvtbvtvbttbttvvbvttbt","btbtbtttvbbtbttbtvvttbvtbtvtbvvtbbbb","bttbvbbttvvbtvvvvb","bvvbvbvttbvtbvvtbttvvvvtvbtvbttbbvvtvtvv","vbtttt","btbvbbbvbtvtbvvv","b","tbtbtv","vbvbbvvbvbbvvb","vbvvtvbvbvbttvbvbtvbtbtvtbvbbtb","bvvbvvttttttbtvvvttvbvtvvbvtbtvtbvttvvtbt","bvtbttv","bbbt","vtt","ttvv","b","vbb","vtvvbtttvtbbvvbbtbb","vvv","vvvvbbbtbbbvbbbb","ttvvbtvv","v","btvbbvtbbvbvtvttvvbbbtbvvvtbtb","vv","btbttbtbbvbvvbvttbttvtbbtbvtttvbbtbbtvtvvvvbbttvtvvbbbv","ttvbbbbttbtbtb","tvvbvbvvb","vv","ttbttvtvbtbbbbv","bvvvtbbvvvbtvbvtvtvvvvbb","vtbvvbvvvvvttvbbttbbvtvt","tbvbbt","b","v","tvbbtvvtvvtbtbttvvvb","tbttbttbbbtbtvtvtvtbbbvvtbbbvbbvvvbbttvvt","bbvttvtvvtbvbbttvbbtbvvttbvbvbtbvvvbbbvbvbvbtvbtvvvtvvtbttbttbbvbbbttvvvbvvtb","vttvvbvv","tbttbvvttvbtvvtbbvvv","bvbbbbbbbb","vtbvvtbbvtt","bvttbvvbvb","tvttttbbvvvbbtttvvv"], "btbvtttttbvttbvvbbtvvbvbvvbtbtbtvbtttbvbbbtbbtbvvttbvbvtvbtbbttbvvbvbtttbvttbvvbbvvv"))
