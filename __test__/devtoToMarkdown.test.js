const {
  ensureDevToUrl,
  markdownToReactMarkdown
} = require('../lib/devtoToMarkdown');

describe('ensureDevToUrl', () => {
  test('throws an error if no URL provided', () => {
    expect(() => {
      ensureDevToUrl();
    }).toThrow('Please provide a URL');
  });

  test('throws an error if URL is invalid', () => {
    expect(() => {
      ensureDevToUrl('https://example.com');
    }).toThrow('Invalid URL: Must be a valid https://dev.to URL');
  });

  test('throws an error if URL is invalid', () => {
    expect(() => {
      ensureDevToUrl('dev.to/some-article');
    }).toThrow('Invalid URL: Must be a valid https://dev.to URL');
  });

  test('does not throw an error for a valid dev.to URL', () => {
    expect(() => {
      ensureDevToUrl('https://dev.to/some-article');
    }).not.toThrow();
  });
});

describe('markdownToReactMarkdown', () => {
  test('converts newline characters to "  \\n"', () => {
    const input = 'Line 1\nLine 2\nLine 3';
    const expectedOutput = 'Line 1  \nLine 2  \nLine 3';
    const output = markdownToReactMarkdown(input);
    expect(output).toEqual(expectedOutput);
  });
});
