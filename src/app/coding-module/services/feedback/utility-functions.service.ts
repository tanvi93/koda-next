import { Injectable } from '@angular/core';
import { sequence } from '@angular/animations';

export const checkSequence = (sequence, spriteStatus) => {
    let k = 0;
    let step = 0;
    let errorMsg = `Sequence is not correct.`;
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