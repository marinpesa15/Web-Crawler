import { test, expect } from "@jest/globals"
import { normalizeURL, getURLsFromHTML } from "./crawl"


test('normalizeURL protocol', () => {
    const input = 'https://blog.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
  
test('normalizeURL slash', () => {
    const input = 'https://blog.boot.dev/path/'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
  
test('normalizeURL capitals', () => {
    const input = 'https://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})
  
test('normalizeURL http', () => {
    const input = 'http://BLOG.boot.dev/path'
    const actual = normalizeURL(input)
    const expected = 'blog.boot.dev/path'
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML anchor", () => {
    const html = "<a href=https://boot.dev/test1>Learn Backend Development</a>"
    const baseURL = "https://boot.dev"
    const actual = getURLsFromHTML(html, baseURL)
    const expected = ["https://boot.dev/test1"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML multipleAnchors", () => {
    const html = "<a href=https://boot.dev/test1>Test1</a><a href=https://boot.dev/test2>Test2</a><a href=https://boot.dev/test3>Test3</a>"
    const baseURL = "https://boot.dev"
    const actual = getURLsFromHTML(html, baseURL)
    const expected = ["https://boot.dev/test1", "https://boot.dev/test2", "https://boot.dev/test3"]
    expect(actual).toEqual(expected)
})

test("getURLsFromHTML relativePaths", () => {
    const html = "<a href=/test1>Learn Backend Development</a>"
    const baseURL = "https://boot.dev"
    const actual = getURLsFromHTML(html, baseURL)
    const expected = ["https://boot.dev/test1"]
    expect(actual).toEqual(expected)
})