const brain = require('brain.js');

// provide optional config object (or undefined). Defaults shown.
const config = {
    binaryThresh: 0.5,
    hiddenLayers: [3], // array of ints for the sizes of the hidden layers in the network
    activation: 'sigmoid', // supported activation types: ['sigmoid', 'relu', 'leaky-relu', 'tanh'],
    leakyReluAlpha: 0.01, // supported for activation type 'leaky-relu'
};

// create a simple feed forward neural network with backpropagation
const net = new brain.NeuralNetwork(config)

net.train([
    { input: [2, 3], output: [0] },
    { input: [6, 4], output: [1] },
    { input: [8, 9], output: [1] },
    { input: [2, 7], output: [0] }
], {
    log: (error) => console.log(error),
    logPeriod: 100
});

const output = net.run([2,9]); // [0.987]
console.log(output);