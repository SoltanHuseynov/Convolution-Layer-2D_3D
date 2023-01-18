/*
TensorFlow.js syntax for creating convolutional models using the TensorFlow.js Layers API.
Formulating classification tasks in TensorFlow.js
*/
import express from "express"
import * as tf from "@tensorflow/tfjs"
// to product  
const App=express()
let port=7070

//Defines a simple logistic regression model with 5x5x5 dimensional input
const input=tf.input({shape:[6,6,3]})
//filters-> the output space's dimensionality
//kernelSize-> the convolution window's dimensions.
const conv2dLayer=tf.layers.conv2d({filters:2,kernelSize:3})
const output=conv2dLayer.apply(input)

//create the model based on the inputs
const model=tf.model({inputs:input,outputs:output})
//model.predict(tf.ones([1,6,6,3])).print()

//conv2d vs conv3d
/*
conv2d-> that operates  on 2D data, typically images
conv3d-> that operates on 3D data,such as videos or volumetric data.
*/

//conv3d
let convImage={shape:[5,5,5,5]}//the convolutional layer is 5x5x5x5 ,so it's input
let  kernelsize=[3,3,3]//the convolutional kernel is 3x3x3
const input3d=tf.input(convImage)

const conv3d=tf.layers.conv3d({
    kernelSize:kernelsize,
    filters:4,//there are 4 in the layer
    strides:1,//the stride is 1
    activation:`relu`,//Activation function of the layer
    kernelInitializer:`varianceScaling`// this argument is initialize for the convolutional kerner weights matrix 
}).apply(input3d)
const  model3d=tf.model({inputs:input3d,outputs:conv3d})
//the prediction method is used to make predictions with a trained model.
model3d.predict(tf.ones([1,5,5,5,5])).print()


// App.get("/",(res,req)=>{
//     req.send(`list ${predict}`)
    
// })

// // to product a array
// const testArray=[1,2,3,4]
// tf.tensor(testArray)

// App.listen(port,()=>{
//     console.info(`http://localhost:${port}`)
// })