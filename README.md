# Sort Visualizer

This is a web app built using React and is used to visualize classic sorting algorithms such as insertion sort, merge sort, quick sort, heap sort, etc.

This app is deployed with Github and can be accessed [here](https://jeewhiz113.github.io/algovisualization/).

## Purpose

I wish to gain better understanding of React and the classic sorting algorithms.In the end, this project was a great way to achieve both objectives at the same time.

## Installation

If you wish to run this app locally, clone this repo and install the dependencies.

```
$ git clone "https://github.com/ramiz-rahman/sort-visualizer.git" (New Linke here)
$ cd sort-visualizer
$ npm install
$ npm start
```

### Learn More

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## App Conventions

The `src` folder contains three subdirectories:

- `algorithms` - Each sorting algorithm is contained in its own file and imports helper functions from the `helpers.js` file, which is also present inside this folder. 

- `_settings` - This folder contains the the CSS files that only contain CSS custom properties declarations (also known as CSS variables) for the entirety of the app. These files are used to determine the overall look and feel of the application as all components rely upon these variables.

- `components` - This folder is broken down into AlgoCodeBlocks, AlgoDescription, Chart, Elements and VisualArea subfolders.

  - The `AlgoCodeBlock` folder contains the code for each algorith, and we used the package [primsjs](https://www.npmjs.com/package/react-prism) to help us show the code in the proper format.
  - The `AlgoDescription` folder contains more the overall mechanics of the sorting algorithm and its runtime and space complexity.
  - The `Chart` folder contains component which shows the bars corresponding to the generate array.
  - The `Elements` folder contains the smaller subcomponents for the overall visualization area of the app.  Those include the bars, color keys, controls and the progress bar.
  - The `VisualArea` folder contains the wrapper for the Chart as well as the smaller components in the Elements subfolder.

## App Design

The design of the app was largely inspired by Google's [Material Design Guidelines](https://material.io/design/).

The app is responsive, meaning it works across a variety of screen sizes and dimensions.

![Sort Visualizer](https://i.imgur.com/8gF08Dk.png)

## License

Sort Visualizer is released under the [MIT License](https://choosealicense.com/licenses/mit/)