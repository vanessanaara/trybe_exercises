const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};

test('transforms lowercase word to uppercase word', (done) => {
  uppercase('xablau', (string) => {
    expect(string).toBe('XABLAU');
    done();
  });
});