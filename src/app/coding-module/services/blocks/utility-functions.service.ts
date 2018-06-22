import { Injectable } from '@angular/core';

export const computeChildJson = (list) => {
  if (list.length) {
    let childJson = list.map(v => {
      const getValue = () => {
        try {
          return JSON.parse(v);
        }
        catch (e) {
          return v.value
        }
      }
      const value = v.childBlocks_.length ? null : v.nextConnection ? null : getValue();
      return {
        name: v.type,
        value,
        childJson: computeChildJson(v.childBlocks_)
      }
    });
    return childJson;
  }
}
