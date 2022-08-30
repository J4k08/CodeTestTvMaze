# TVMAZE Code Test

A react native code test (WIP)

## Work in progress:

TODO: 
* The API call in Search.tsx doesn't wait for the returned promise to download fully and so 
the code will continue with empty objects instead. Figure out how to process the promise.

* Error handling: data from api could be null, the parse function in TVMaze.ts must be better prepared for that.

* Better Design options

* More user feedback (eg, if request turns up empty, if there's no internet connection, etc etc)


## Node modules

After cloning project download and install all packages needed by using the command below
```bash
npm install
```

## Install and run


```bash
react-native run-android
```
    ||

```bash
npx react-native run-ios
```

## How to use

There's dummy data loaded, unfortunately it's the only data that works now.
It's added to the list on line 47 in Search.tsx. My idea was to test with this and then 
simply swap in the parsed return from the api call, replace the dummy data and use real data instead.

<FlatList
          data={Shows}
          renderItem={({ item }) => (
