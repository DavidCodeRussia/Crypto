import profileReducer, { addPostActionCreator, deletePost } from ".";

let state = {
  posts: [
    { id: 1, message: "Hi Michaella, how's it going?", likes: 2 },
    { id: 2, message: "It's my first post.", likes: 5 },
  ],
};

it("new post should be added", () => {
  let action = addPostActionCreator("Dobbi is free now");
  let newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(3);
});

it("message of new post should be correct", () => {
  let action = addPostActionCreator("Dobbi is free now");
  let newState = profileReducer(state, action);
  expect(newState.posts[2].message).toBe("Dobbi is free now");
});

it("length of posted should be incremented", () => {
  // 1. test data (исходные данные)
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation

  expect(newState.posts.length).toBe(3);
});

it("message of new post should be corrected", () => {
  // 1. test data (исходные данные)
  let action = addPostActionCreator("it-kamasutra.com");

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation

  expect(newState.posts[2].message).toBe("it-kamasutra.com");
});

it("after deleting message length should be decrement ", () => {
  // 1. test data (исходные данные)
  let action = deletePost(1);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation

  expect(newState.posts.length).toBe(1);
});

it(`after deleting length shouldn't be decrement if id is incorrect`, () => {
  // 1. test data (исходные данные)
  let action = deletePost(1000);

  // 2. action
  let newState = profileReducer(state, action);

  // 3. expectation

  expect(newState.posts.length).toBe(2);
});
