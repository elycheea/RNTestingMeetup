# Testing Workshop Exercises

This repo contains a React Native app with exercises for the React Native Testing Workshop hosted by React ATL.

## Requirements

- [git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/en/) recommended (if not installed, substitute `npm` commands)
- React Native CLI: `npm install -g react-native-cli`
- Either [Xcode](https://itunes.apple.com/us/app/xcode/id497799835?mt=12) or [Android Studio](https://developer.android.com/studio/index.html)

## Installation

```
$ git clone https://github.com/CodingItWrong/RNTestingMeetup.git
$ cd RNTestingMeetup
$ yarn install
```

## Running the App

You don't need to run the app to run the tests, but it can be helpful to visualize how the app works.

In one terminal:

```
$ yarn start
```

In another terminal:

```
$ react-native run-ios
```

Or, start an Android emulator then run:

```
$ react-native run-android
```

## Running tests

```
$ yarn test --watch
```

The test runner will stay open, and when files change the tests will be rerun. Press control-C to quit the test runner.

## The Exercise

The project comes with one test file, `__tests__/TodoList.spec.js`. It has four placeholder tests:

```
it('displays passed-in todos', ...);

describe('adding a todo', () => {
  it('displays the new todo', ...);
  it('clears the text field', ...);
});

it('allows deleting a todo', ...);
```

All tests except the first are skipped, so if you run the tests you will only get one error.

Implement each test one at a time, using Jest and React Native Testing Library. After each one is passing, on the next test change `it.skip(` to `it(` so that the next test will run.

For reference on how to use React Native Testing Library, check [ReactNativeTesting.io's page on Testing Components](https://reactnativetesting.io/component/testing.html)

Solutions are available on the `solutions` branch.

## License

Apache-2.0
