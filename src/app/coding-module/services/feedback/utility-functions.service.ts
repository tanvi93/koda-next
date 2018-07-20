import { Injectable } from '@angular/core';
import { sequence } from '@angular/animations';

const compareData = (values1, values2, diffObj) => {
    return Object.keys(diffObj).every(key => {
        let diff = values1[key] - values2[key];
        switch (diffObj[key].operator.toLowerCase()) {
            case 'equal':
                return diffObj[key].value === diff;
            case 'range':
                return diff >= diffObj[key].value[0] && diff <= diffObj[key].value[1]
        }
    });
}

export const checkSequence = (sequence, spriteStatus) => {
    let k = 0;
    let step = 0;
    let errorMsg = `Sequence is not correct.`;
    let valueStore = {};
    for (let i = 0; i < sequence.length; i++) {
        for (let j = k; j < spriteStatus.length; j++) {
            if (sequence[i].name === spriteStatus[j].name && sequence[i].action === spriteStatus[j].action) {
                if (sequence[i].hasOwnProperty('value')) {
                    let bool = Object.keys(sequence[i].value).every(v => {
                        return sequence[i].value[v] === spriteStatus[j][v];
                    });
                    if (!bool) {
                        return sequence[i].valueError ? sequence[i].valueError : errorMsg;
                    }
                }
                if (sequence[i].getValue) {
                    valueStore[sequence[i].name] = spriteStatus[j][sequence[i].getValue];
                }
                if (sequence[i].compare) {
                    let values1 = valueStore[sequence[i].compare.compareWith];
                    let values2 = spriteStatus[j][sequence[i].compare.compareValues];
                    if (!compareData(values1, values2, sequence[i].compare.difference)) {
                        return sequence[i].compare.error ? sequence[i].compare.error : errorMsg;
                    }
                }
                console.log(i);
                k = j + 1;
                step = i;
                break;
            }
        }
        if (step !== i) {
            return sequence[i].error ? sequence[i].error : errorMsg;
        }
    }
    if (step === sequence.length - 1) {
        return 'success';
    }
}