## Qlik Sense Extension (Simple) Image

This extension simply shows an image and gives some properties for dynamic configuration.

![QlikSense Extension Image](Screenshot1.PNG)

### Parameters

1. Image Path: relative or absolute path to the image file (content library or external)
2. Image File: image file name, use variable expression here for flexibility
3. Image Style CSS: style attribute value for img tag, use "width:100%;" for strech-to-fit, optional
4. Image Title: title attribute value for img tag, is shown as popup on hover, optional
5. Image Link: an URL to create an anchor tag (HTML link), optional

To auto size and center an image, you can use this CSS style:
```
='position:relative;display:block;margin-top:2px;margin-right:auto;margin-bottom:auto;margin-left:auto;max-height:100%;max-width:100%;top:50%;transform:translateY(-50%);'
```

### Author

**Ralf Becher**

+ [irregular.bi](http://irregular.bi)
* [twitter/irregularbi](http://twitter.com/irregularbi)
* [github.com/ralfbecher](http://github.com/ralfbecher)

### License

Copyright © 2016 Ralf Becher

Released under the MIT license.

***