import {describe, test, expect} from "@jest/globals"

import wordsearch from './wordsearch'

const board = [
  ['u', 'n', 'i', 'x', 'l', 'h', 't', 'u'],
  ['m', 'm', 'k', 'g', 'i', 'o', 'p', 'h'],
  ['m', 'o', 'n', 'z', 'a', 'v', 'o', 'j'],
  ['l', 'e', 'p', 's', 'u', 'x', 'z', 'm'],
  ['b', 'h', 'x', 'g', 'd', 'n', 'y', 'r'],
  ['c', 'o', 'i', 'm', 'i', 'm', 'w', 'a'],
  ['y', 'd', 'o', 'a', 'o', 'p', 'r', 't'],
  ['w', 's', 'q', 'k', 'r', 'i', 'd', 's']
]

describe("wordsearch", () => {
  test("returns true when word is contained in a rows", () => {
    const result = wordsearch.horizontal(board, "unix")
    expect(result).toBe(true);
  })

  test("returns true when word is contained backwards in rows", () => {
    const result = wordsearch.horizontal(board, "xinu")
    expect(result).toBe(true)
  })

  test("returns false when word is not in the rows", () => {
    const result = wordsearch.horizontal(board, "foobar")
    expect(result).toBe(false)
  })

  test("returns true when word is in columns", () => {
    const result = wordsearch.vertical(board, "audio")
    expect(result).toBe(true)
  })

  test("returns true when word is in columns backwords", () => {
    const result = wordsearch.vertical(board, "oidua")
    expect(result).toBe(true)
  })

  test("returns true when word is in diagonal first half", () => {
    const result = wordsearch.diagonalFirstHalf(board, "loom")
    expect(result).toBe(true)
  })

  test("returns true when word is in diagonal backwords first half", () => {
    const result = wordsearch.diagonalFirstHalf(board, "mool")
    expect(result).toBe(true)
  })
  
  test("returns true when word is in diagonal second half", () => {
    const result = wordsearch.diagonalSecondHalf(board, "book")
    expect(result).toBe(true)
  })

  test("returns true when word is in diagonal backwords second half", () => {
    const result = wordsearch.diagonalSecondHalf(board, "koob")
    expect(result).toBe(true)
  })
})
