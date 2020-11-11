const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
      if (users[id]) {
        return resolve(users[id]);
      }

      return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

test('returns the user name when user id exists', () => {
  expect.assertions(1);
  return getUserName(4).then(response => expect(response).toEqual('Mark'));
});

test('returs error mesage when user id does not exists', () => {
  expect.assertions(1);
  return getUserName(2).catch(error => expect(error).toEqual({error: 'User with 2 not found.'}));
});

describe('getUserName test using async/await', () => {
  test('returns the user name when user id exists', async() => {
    expect.assertions(1);
    const response = await getUserName(4);
    expect(response).toEqual('Mark');
  });

  test('returs error mesage when user id does not exists', async () => {
    expect.assertions(1);
    try {
      await getUserName(2);
    } catch(error) {
      expect(error).toEqual({error: 'User with 2 not found.'});
    } 
  });
});
