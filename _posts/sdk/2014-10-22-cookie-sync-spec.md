---
layout: post
title: "Cookie Sync Spec"
folder: "SDKs & Integrations"
date: 2014-10-22
author: Xuening Sun
categories: 
- sdk 
img: ""
thumb: ""
excerpt: "AdsNative Cookie Sync Specs"
---
#  **AdsNative Cookie Sync Specs**

## Overview

- To build an association between AdsNative cookies and DSP cookies, AdsNative provides a simple cookie matching service and hosted match table for clients.  


---

## 1. Components


The main components of the cookie match are:

AdsNative match URL endpoint (**ANcm**):   <code>http://bevo.adsnative.com/cm.gif</code>

DSP-provided match URL endpoint (**DSPcm**): <code>http://ads.dsp.com/cookie.gif</code>

Cookie matching is implemented through 302 redirects between **ANcm** and **DSPcm**



## 2. Parameters

The following parameters may be attached to ANcm:

Parameters | Description 
---|---
dspid (required) | DSP Identifier -  Assigned by Adsnative
buid (required) | DSP User Cookie ID
rurl (optional) | Redirect URL - only allowed for smode=2
smode | Sync Mode (int) <br/> <br/>1 = Adsnative pings **DSPcm** to sync. **[Default]** <br/> 2 = DSPs initiates cookie syncing and pings **ANcm** 

## 3. Sync Modes

To provide flexibility for clients, AdsNative cookie matching services can be accessed with two modes:

>  1. **Default** On request from AdsNative publisher sites, Adsnative will ping **DSPcm** to initiate cookie sync.
>     a. **ANcm** will be served on all AdsNative publisher sites.   
>     b. When a user visits the publisher’s site, AdsNative issues a 302 redirect to the **DSPcm**. 
>     c. If there exists a DSP cookie id, the DSP should 302 redirect back to **ANcm** with the following arguments:
>        -  **dspid** - DSP identifier on the AdsNative Exchange [Provided by Adsnative]
>        -  **buid** - DSP’s user cookie id <br> http://bevo.adsnative.com/cm.gif?dspid=1234&buid=HJPK4VSL 
>     d. AdsNative will then serve a 1x1 gif pixel on user’s browser.
>  2. When user visits a demand partner’s sites, DSPs can ping **ANcm** to initiate cookie sync.
>     a. For use when cookie syncing directly from an advertiser websites. 
>     b. When a user visits any website that the DSP is tracking users on, the DSP should issue a 302 redirect to **ANcm** with the:
>        -  **dspid**
>        -  **buid**
>        -  **smode=2**
>        -  rurl [optional]: DSP may pass an additional **rurl** parameter to specify an url-encoded redirect URL that AdsNative will issue when cookie sync is completed. 
>     c. AdsNative redirect to rurl defined. If no rurl is provided, AdsNative will return a 1x1 transparent pixel to the user’s browser.

**For example:**

```
 http://bevo.adsnative.com/cm.gif?smode=2&dspid=1234&buid=HJPK4VSL&rurl=http%3A//ad.dsp.com/match.gif
```



## 4. OpenRTB Integration

Cookie sync is used in conjunction with the Adsnative RTB Exchange:  The bid request object will contain both the Adsnative User ID, provided in the User.id field, and the matched DSP Cookie ID, provided in the User.buyeruid field.
