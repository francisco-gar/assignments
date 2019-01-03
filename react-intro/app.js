// model is data
// view is what you see on page
// controller is intermediator between the two.
// it looks to see if the data has been changed then tells the view about it and vice a versa
// this is angular, two way binding that gets too convoluted


// REACT syncrhonizing changes in data witht the change in the view. one way
// state ----> virtual dom -----> view then cycles in a circle
// virtual DOM is a big object(clone) that gets compared to real dom(actual DOM) using a difference algo
// state changes are made by user on DOM, then you have a render() on virtual DOM then again compared to actual DOM

// React is component based. Creating an application one component at a time. each component is a function
// used virtual Dom
// Is declarative -  telling something what to do
// Uni-directional data flow(single direction)

