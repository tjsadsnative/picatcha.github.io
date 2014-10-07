---
layout: post
title: "RenderJS"
folder: "SDKs & Integrations"
date: 2014-09-24
author: Dhawal Mujumdar
categories: 
- sdk 
img: ""
thumb: ""
excerpt: "AdsNative uses RenderJS to render native ads"
---
# **'Generalized' RenderJS** (default behavior)

The following are default ad tags provided by AdsNative, which will automatically render configured placements or native ads in the correct location on the intended pages. It is called "Generalized" RenderJS because you can use the same piece of code for any placement and site domain you have, making it easier for publishers to install the tags on their sites. Insert the following tags in your webpage in `<head>` section of your site (i.e. just before `</head>` tag).


```
<!-- Begin ADSNATIVE Code -->
  <script type="text/javascript" src="http://static.adsnative.com/static/js/render.v1.js">
  </script>
<!-- End ADSNATIVE Code -->
```

### Making RenderJS Effective

“Generalized” RenderJS uses a configured CSS Path to search and insert the native ad into the correct location. The harder the CSS Path is to locate, the higher the rendering latency. The shortest and best CSS Path is a unique div id.

The optimal way to set up RenderJS to manage all your native inventory is to place RenderJS in your header and then hardcode in anchor divs to be injected into.

#### Option 1

In this option you can insert the following tags directly into the location where the native ad should be rendered.

```
<body>
  <div id=“native-adzone-1”></div>

  <div id=“native-adzone-2”></div>
</body>
```

If latency is still an issue, you can insert the following tags directly into the location where the native ad should be rendered.

```
<!-- Begin ADSNATIVE Code -->
  <script type="text/javascript">
    var _AdsNativeOpts = {
      'zid': '<ADZONE_KEY>',
    };
  </script>
  <script type="text/javascript" src="http://static.adsnative.com/static/js/render.v1.js"></script>
<!-- End ADSNATIVE Code -->
````
