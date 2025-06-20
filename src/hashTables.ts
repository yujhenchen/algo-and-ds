/**
 * char.charCodeAt(0) — This returns the ASCII (or Unicode) number of the character. For example:

'a'.charCodeAt(0) is 97
'b'.charCodeAt(0) is 98
'c'.charCodeAt(0) is 99

- 96 — This turns it into:

'a' → 1
'b' → 2
'c' → 3

etc.

Assumes input is lowercase letters. 'z'.charCodeAt(0) - 96 → 26
 */
export function hash(key: string, arrayLen: number): number {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}


/*
 * hash function with prime
 * @param key
 * @param arrayLen
 * @returns
 */
export function hash2(key: string, arrayLen: number): number {
  let total = 0;
  let WEIRD_PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let char = key[i];
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

export class HashClass {
  public keyMap: Array<Array<[string, number]>> = [];

  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  private hash(key: string): number {
    let total = 0;
    let WEIRD_PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0) - 96;
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  public set(key: string, value: number): void {
    const index = this.hash(key);
    // if the index of keyMap has nothing now, add empty array into the index of the array
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }

  public get(key: string): [string, number] | undefined {
    const index = this.hash(key);
    const found = this.keyMap[index];
    if (!found) {
      return undefined;
    }

    for (let i = 0; i < found.length; i++) {
      if (found[i][0] === key) {
        return found[i];
      }
    }
    // return found ? found : undefined;
  }

  public keys(): Array<string> {
    const keys = [];
    for (let element of this.keyMap) {
      if (Array.isArray(element) && element.length > 0) {
        for (let i = 0; i < element.length; i++) {
          keys.push(element[i][0]);
        }
      }
    }
    return keys;
  }

  public values(): Array<number> {
    const valueArray: Array<number> = [];
    for (let element of this.keyMap) {
      if (Array.isArray(element) && element.length > 0) {
        for (let i = 0; i < element.length; i++) {
          // NOTE: make sure only get unique values
          const value = element[i][1];
          if (valueArray.indexOf(value) === -1) {
            valueArray.push(value);
          }
        }
      }
    }
    return valueArray;
  }
}