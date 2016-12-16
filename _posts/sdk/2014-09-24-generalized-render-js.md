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

The following are default ad tags provided by AdsNative, which will automatically render configured placements or native ads in the correct location on the intended pages. It is called "Generalized" RenderJS because you can use the same piece of code for any placement and site domain you have, making it easier for publishers to install the tags on their sites. Best practice it to insert the following tag at the bottom of your webpage as the first script in the footer.


```HTML
<!-- Begin ADSNATIVE Code -->
  <script type="text/javascript" src="http://static.adsnative.com/static/js/render.v1.js">
  </script>
<!-- End ADSNATIVE Code -->
```

### Making RenderJS Effective

“Generalized” RenderJS uses a configured CSS Path to search and insert the native ad into the correct location. The harder the CSS Path is to locate, the higher the rendering latency. The shortest and best CSS Path is a unique div id.

The optimal way to set up RenderJS to manage all your native inventory is to place RenderJS in your header and then hardcode in anchor divs in your body at the exact location you want ads to be injected.

```HTML
<body>
  <div class="article" id="story-1"></div>
  
  <div id=“native-adzone-1”></div>
  
  <div class="article" id="story-2"></div>
  
  <div id=“native-adzone-2”></div>
  
  <div class="article" id="story-3"></div>
</body>
```

If latency is still an issue, you can insert the following tags directly into the location where the native ad should be rendered.

```HTML
<!-- Begin ADSNATIVE Code -->
  <script type="text/javascript">
    var _AdsNativeOpts = {
      'zid': '<ADZONE_KEY>',
    };
  </script>
  <script type="text/javascript" src="http://static.adsnative.com/static/js/render.v1.js"></script>
<!-- End ADSNATIVE Code -->
````
