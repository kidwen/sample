"use strict"

const isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length != s3.length) return false
    let h = (i, j, k) => {
        if (k == s3.length) return true
        let flag = false
        if (i < s1.length && s1[i] == s3[k]) flag = h(i + 1, j, k + 1)
        if (j < s2.length && s2[j] == s3[k]) flag = flag || h(i, j + 1, k + 1)
        return flag
    }
    return h(0, 0, 0)
}

console.log(isInterleave('AGGGCT', 'CGGAT', 'ACGGGCGGATT'));
console.log(isInterleave('AGCT', 'TCGA', 'AGTCTCGA'));
console.log(isInterleave('AGCTT', 'CCCC', 'ACCCCGTTC'));
console.log(isInterleave('ACT', 'ACG', 'ACGACT'));
