# Convolution Layer
A convolutional layer is a type of layer commonly used in neural networks,
especially in image recognition tasks.
that layer is used term in the field of deep learning or artificial neural networks.

## TensorFlow.js library
that is library for training and deploying machine learning models in javascript 

<img src="https://stanford.edu/~shervine/teaching/cs-230/illustrations/architecture-cnn-en.jpeg?3b7fccd728e29dc619e1bd8022bf71cf">

<img src="https://indoml.files.wordpress.com/2018/03/convolution-with-multiple-filters2.png?w=736">

- tf.input(config)<br>
  Used to instantiate an input to a model.<br>
  `Note:` input is only necessary when using model. When using sequential, specify inputShape for the first layer or
   use inputLayer as the first layer.
  
  ```js
    import * as tf from "@tensorflow/tfjs"
    const input=tf.input({shape:[6,6,3]})
  
  ```
 
  `shape` the convolutional layer is 6x6x3 ,so it's typically image
  
- conv2d(args)<br>
  This layer creates a convolution kernel that is convolved with the layer input to produce a tensor of outputs.
  
  ```js
     cosnt output=tf.layers.conv2d({filter:2,kernelSize:3})
  ```
  
  `filter` The dimensionality of the output space.<br>
  `kernelSize` The dimensions of the convolution window.<br>
  `strides` The strides of the convolution in each dimension.</br> 
  `dataFormat` Format of the data, which determines the ordering of the dimensions in the inputs.<br>
  `activation`  Activation function of the layer.<br>
  `kernelInitializer` Initializer for the convolutional kernel weights matrix.
  
 - model <br>
    A model is a data structure that consists of Layers and defines `inputs` and `outputs`.
    
    ```js
    const model=tf.input({inputs:input,outputs:output})
    ```
    `Note:` The key difference between tf.model() and tf.sequential() is that tf.model() is more generic, supporting an  arbitrary graph (without cycles) of layers. tf.sequential() is less generic and supports only a linear stack of layers.
   
- prediction<br>
  that method is used to make predictions with a trained model. 
  
  ```js
    model.predict(tf.ones([2,6,6,3])).print()
  ```
## Conv2D vs Conv3D
- The main difference between the two is that `tf.layers.conv2d` operates on 2D data, typically images, while `tf.layers.conv3d` operates on 3D data, such as videos or volumetric data.
- they convolve over. `tf.layers.conv2d` convolves over 2 spatial dimensions, height and width and `tf.layers.conv3d ` convolves over 3 spatial dimensions, height, width and depth.

## for Math 
We use multiple convolution filters or kernels that run over the image and compute a dot product. Each filter extracts different features from the image.

Lets consider a filter of size 3x3 and an image of size 5x5. We perform an element wise multiplication between the image pixel values that match the size of the kernel and the the kernel itself and sum them up. This provides us a single value for the feature cell.


<img src="https://miro.medium.com/max/720/1*xBkRA7cVyXGHIrtngV3qlg.webp">

`2*1 + 4*2 + 9*3 + 2*(-4) + 1*7 + 4*4 + 1*2 + 1*(-5) + 2*1 = 51`

<img src="https://miro.medium.com/max/720/1*7CI6Ji1m7u9WbJcZRfECDA.webp">

`4*1 + 9*2 + 1*3 + 1*(-4) + 4*7 + 4*4 + 1*2 + 2*(-5) + 9*1 = 66`

- and soon 

<img src="https://miro.medium.com/max/720/1*67dy99cO6tbl9NoPB2riEA.webp">

`2*1 + 9*2 + 2*3 + 5*(-4) + 1*7 + 3*4 + 4*2 + 8*(-5) + 5*1 = -2`
