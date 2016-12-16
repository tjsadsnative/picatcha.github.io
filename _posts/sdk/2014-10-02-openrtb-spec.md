---
layout: post
title: "OpenRTB Spec"
folder: "SDKs & Integrations"
date: 2014-10-02
author: Brad Thorson
categories: 
- sdk 
img: ""
thumb: ""
excerpt: "AdsNative OpenRTB Native Ad Specs"
---
# **AdsNative OpenRTB Native Ad Specs**

## Overview

1. AdsNative receives a request on page load 
2. AdsNative Exchange makes bid requests via a JSON HTTP POST to our bidding partners endpoints
3. AdsNative Exchange uses DSI (demand source integration) technology to award the impression to one of the following sources at the second highest price:
	a. Adsnative Marketplace
	b. Direct Sold campaigns via AdsNative Platform
	c. Bidders on AdsNative Exchange(you)
4. If a bidder wins the auction, AdsNative Exchange will send an HTTP GET to the url you have specified in “nurl” with all OpenRTB 2.2 macros replaced

---

## 1. OpenRTB Request

The RTB request will mainly stay the same for native ads with the following changes:

In Impression Object, a new type of object will be sent called as ‘Native Object’ which has the information related to given native ad placement, which is included in ‘ext’ field of impression object. The object fields are as follows,

### 1.1 Native Object

Field | Scope | Type | Default | Description
---|---|---|---|---
ver|required|string|1.0|Version of OpenRTB native extension.  Will correspond with supply-side support of speciﬁc ﬁelds.  Default will be exchange dependent.
admsupport|recommended|object|-|Native Ad Markup supported: List of supported creative ﬁelds in response’s “admjson” ﬁeld. If, for example, “excerpt” isn’t in admsupport, the publisher format will not show a text even if provided by the bidder. Supported fields are divided between optional and required fields. DSPs can choose to ignore optional fields, but required fields should be passed in the response.<br><br>Example:<br>{ "required": [ "title", "excerpt", "media" ], "optional": [ "icon", "brandname", "ctatext" ]},<br><br>Supported fields<br>1. title<br>2. excerpt<br>3. image<br>4. video<br>5. media (video OR image)<br>6. icon<br>7. brandname<br>8. ctatext
atype|recommended|integer|0|Native ad placement type. See table 1.1.1
seq|optional|integer|0|Sequence number of the ad in the stream. 0 for the ﬁrst ad, 1 for the second ad, and so on. This is not the sequence number of the native ad in the stream overall.
title|recommended|object|-|Defines the asset requirements for ‘title’ field. See table 1.1.2
excerpt|recommended|object|-|Defines the asset requirements for ‘excerpt’ field. See table 1.1.2
icon|recommended|object|-|Defines the asset requirements for ‘icon’ field. See table 1.1.3
media|recommended|object|-|Defines the asset requirements for ‘media’ (video or image) field. See table 1.1.3
brandname|recommended|object|-|Defines the asset requirements for ‘brandname’’ (video or image) field. See table 1.1.2
ctatext|recommended|object|-|Defines the asset requirements for ‘ctatext’ (video or image) field. See table 1.1.2

#### 1.1.1 Ad Unit Types (Field: atype)

Defined by the IAB Native Playbook - http://www.iab.net/media/file/IAB-Native-Advertising-Playbook2.pdf

Value | Name | Notes
---|---|---
0|Unknown|
1|In Feed|
2|Search|
3|Recommendation widget|Suggested articles, etc..
4|Promoted Listings|
5|In ad native|Native placement inside IAB standard ad unit
6|Custom|”Can’t Be Contained” 

#### 1.1.2 Title/Excerpt/Brand-name/ctatext Object

Field | Scope | Type | Default | Description
---|---|---|---|---
length|recommended|integer|140|Maximum length that can be displayed in the ctatext ﬁeld. If bidder supplies text that’s longer, text may be truncated when it’s displayed.

#### 1.1.3 Media/Icon Object

Field | Scope | Type | Default | Description
---|---|---|---|---
aspectratio|recommended|float|-|Width of the brand image in pixels
minwidth|recommended|integer|-|Minimum width of the main image or video in pixels that should be provided. DSP can choose to provide bigger image/video than minwidth and AdsNative will take care of resizing it to given placement width. Minwidth is also the final width of the placement media size that will be rendered in.
maxwidth|optional|integer|-|Maximum width of the main image or video in pixels. Typically in AdsNative this field will not be passed and in that case it means there is no max size limit on image/video that can be passed.

---

## 2. OpenRTB Response

The RTB Response for a native ad only differs from the typical RTB 2.x response in a few ways:

>  - adm: creative is passed as JSON in the “ext.admjson” object rather than passed in adm.

### 2.1 Bid Object

Field | Scope | Type | Default | Description
---|---|---|---|---
adm|optional|string|empty string|Pass as empty string for native ads
crtype|recommended|string|“native”|Please code creative type to “native” for native ads. 
price|required|float|-|CPM price of bid
nurl|recomended|string|-|Win Notify URL.  NOTE:  OpenRTB defined macro substitutions are supported, but any returned markup from nurl response will be IGNORED
ext|required|object|-|Container for admjson object

### 2.2 admjson Object

Field | Scope | Type | Default | Description
---|---|---|---|---
title|required|string|-|Title of the native ad. Required for all native ads.
clk|required|string|-|Destination click URL. Required for all native ads.
excerpt|recommended|string|-|Post excerpt. 
image|recommended|string|-|URL for the post image to be shown in the native ad. Supports jpg, gif and png.
video|recommended|string|-|URL for the iframe to be shown in the native ad. 
brandname|recommended|string|-|Brand Name that should appear with the native ad - typically shown as ‘Sponsored by BrandName’
icon|recommended|string|-|URL for the icon image to be shown in the native ad. Supports jpg, gif and png.
ctatext|recommended|string|-|Call to action text
imptracker|recommended|array of strings|-|Array of impression tracking URLs— typically only passed when using 3rd party trackers.
viewtracker|recommended|array of strings|-|Array of video view tracking URLs— typically only passed when using 3rd party trackers.

---

## 3. OpenRTB Example Request

```JSON
{
   "id":"1234567890",
   "tmax":120,
   "site":{
      "page":"http://test.com/abc",
      "sectioncat":[
         "IAB1",
         "IAB2",
               ],
      "domain":"test.com",
      "id":11
   },
   "imp":[
      {
         "id":1,
         "tagid":"avbOrp1HxO48ljsNKImICytOIuc_LXRHQmhAzS7g",
         "bidfloorcur":"USD",
         "bidfloor":0.2,
         "ext":{
            "native":{
               "ver":1.0,
               "atype":1,
               "admsupport":{
                  "required":[
                     "title",
                     "excerpt",
                     "media"
                  ],
                  "optional":[
                     "icon",
                     "brandname",
                     "ctatext"
                  ]
               },
               "title":{
                  "length":120
               },
               "excerpt":{
                  "length":140
               },
               "icon":{
                  "minwidth":75,
                  "aspectratio":1
               },
               "media":{
                  "minwidth":280,
                  "aspectratio":1.33
               },
               "brandname":{
                  "length":20
               },
               "ctatext":{
                  "length":60
               }
            }
         }
      }
   ],
   "user":{
      "id":"2724126367da1792a4d1ec4522c17e7230c30aea"
   },
   "device":{
      "ip":"127.0.0.1",
      "osv":"10.9.2",
      "dnt":0,
      "ua":"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/35.0.1916.153 Safari/537.36",
      "devicetype":2,
      "model":"Other",
      "os":"Mac OS X"
   },
   "id":"513263a3-d76c-43ec-96e5-fd26f672e208",
   "at":2
}
```

---

## 4. OpenRTB Example Response

```JSON
{
   "id":"1234567890",
   "seatbid":[
      {
         "bid":[
            {
               "id":"1",
               "impid":"1",
               "price":9.43,
               "adid":"314",
               "nurl":"http://adserver.com/winnotice?impid=102",
               "adm":"",
               "adomain":[
                  "advertiserdomain.com"
               ],
               "cid":"campaign111",
               "crid":"creative112",
               "attr":[
                  1,
                  2,
                  4,
                  5,
                  6,
                  7,
                  12
               ],
               "ext":{
                  "admjson":{
                     "title": "Ad Title",
                     "excerpt": "This is where you can describe the post",
                     "brandname": "Brand Name",
                     "image":"http://adserver.com/pathtoiconimage",
                     "icon":"http://adserver.com/pathtomainimage",
                     "clk":"https://itunes.apple.com/us/app/mygame",
                     "imptracker":[
                        "http://3rdpartyadserver.com/imptracker?impid=102",
                        "http://anotheradserver.com/imptracker?impid=102"
                     ]
                  }
               }
            }
         ],
         "seat":"512"
      }
   ],
   "bidid":"abc1123",
   "cur":"USD"
}
```
