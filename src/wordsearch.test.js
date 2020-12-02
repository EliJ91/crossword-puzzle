import {describe, test, expect} from "@jest/globals"

import wordsearch from './wordsearch'

const board = [
  ['u', 'n', 'i', 'x', 'o', 'h', 't', 'u'],
  ['m', 'm', 'k', 'g', 'i', 'y', 'p', 'h'],
  ['m', 'o', 'n', 'z', 'a', 'v', 'k', 'j'],
  ['l', 'e', 'p', 's', 'u', 'x', 'z', 'c'],
  ['k', 'h', 'x', 'g', 'd', 'n', 'y', 'r'],
  ['c', 'c', 'i', 'm', 'i', 'm', 'w', 'a'],
  ['y', 'd', 'x', 'a', 'o', 'p', 'r', 't'],
  ['w', 's', 'q', 'b', 'r', 'i', 'd', 's']
]

describe("wordsearch.horizontal", () => {
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

  test("returns true when word is in diagonal", () => {
    const result = wordsearch.diagonal(board, "nsdm")
    expect(result).toBe(true)
  })

  test("returns true when word is in diagonal backwords", () => {
    const result = wordsearch.diagonal(board, "mdsn")
    expect(result).toBe(true)
  })
})
