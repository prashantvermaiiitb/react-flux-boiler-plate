# react-flux-boiler-plate

Simple React Flux Boiler plate to understand the concept for the Flux architecture.

App is simple where on the button click we are generating the random number and what is getting generated
is being appened in the UI with '/' separated.

Concepts that we learn here is the flow of the data among the components.

The initial setup and index / configuration files for the project have been taken from my [react-stand-alone](https://github.com/prashantvermaiiitb/simple-react-node-app) App code.

Remaining Directory Structure :-

src/ js / actions : for having the action creator functions
src/ js / components : for having the components used in app
src/ js / dispatcher : for the dispatcher that connects actions to Store
src/ js / store : for store to provide initial and updated state
src/ js / utils : for utility functions or constants


Below is the flow :-
1. <App/> : This component has to be created to be shown on the UI 
2. Store : will have :-
   1. The initial Data  
   2. As well as method to generate new Data
   3. This will be able to emit events & add / remove the Listeners
   4. For this to happen this will extend EventEmitter.prototype
   5. This will also register with AppDispatcher for any data-update and then emitting the change
3. Action : These are simple functions that are being called from the UI and will be generating a JSON
4. Dispatcher : registry of callbacks with Store and Actions intact and let the communication happen between them.

For running the Project please use :-
1.  for running the development server and check http://localhost:8080
    >npm run dev

2. for running the production version of the code
    >npm run build: 