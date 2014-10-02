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
# **'Generalized' RenderJS** (default behaviour)

The following are default ad tags provided by AdsNative, which will automatically render configured placements or native ads in the correct location on the intended pages. It is called "Generalized" RenderJS because you can use the same piece of code for any placement and site domain you have, making it easier for publishers to install the tags on their sites. Insert the following tags in your webpage in `<head>` section of your site (i.e. just before `</head>` tag).


```
<!-- Begin ADSNATIVE Code -->
<script type="text/javascript" src="http://static.adsnative.com/static/js/render.v1.js">
</script>
<!-- End ADSNATIVE Code -->
```

### Making RenderJS Effective

"Generalized" RenderJS uses a configured CSS Path to search and insert the native ad into the correct location. Sometimes this adds to latency when rendering the ad. If this seems to be the case, you can choose one of the following approaches to reduce  latency.

#### Option 1

In this option you can insert the following tags directly into the location where the native ad should be rendered.

```
<!-- Begin ADSNATIVE Code -->
<script type="text/javascript">
var _AdsNativeOpts = {
	'zid': '<ADZONE_KEY>',
};
</script>
<script type="text/javascript" src="http://static.adsnative.com/static/js/render.v1.js"></script>
<!-- End ADSNATIVE Code -->
```

#### Option 2

In this option you can insert the following tags just before </body> tags. This requires you to specify the element ID where the native ad should be rendered. It is also required that the given element is empty. When the native ad is rendered, it will replace that element.


````
<!-- Begin ADSNATIVE Code -->
<script type="text/javascript">
var _AdsNativeOpts = {
    adUnits: [
	{
	'zid': '<ADZONE_KEY_1>',
	'nativeAdElementId': 'div-id-1'
	},
	{
	'zid': '<ADZONE_KEY_2>',
	'nativeAdElementId': 'div-id-2'
	},
]
};
</script>
<script type="text/javascript" src="http://static.adsnative.com/static/js/render.v1.js"></script>
<!-- End ADSNATIVE Code -->
````
