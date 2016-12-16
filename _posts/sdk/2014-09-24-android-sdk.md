---
layout: post
title: "Android SDK"
folder: "SDKs & Integrations"
date: 2014-09-24
author: Dhawal Mujumdar
categories: 
- sdk 
img: ""
thumb: ""
excerpt: "AdsNative Android SDK documentation and links"
---

# **Android SDK**

## Download

<a href="https://github.com/picatcha/adsnative_android_sdk/archive/master.zip">ZIP File</a>

## Installing AdsNative into your project ##

**1.** Download AdsNativeAndroidSDK.jar and copy it to your */libs/* folder inside of your application project.


**For Android Studio users:**

Open the build.gradle file and edit your dependencies to include the new .jar file:

```Groovy
#!groovy
dependencies {
    compile files('libs/AdsNativeAndroidSDK.jar')
}
```

or 

Go to *File > Project structure*. Choose your module and add dependency to your project by *+ > File dependency* and choose *AdsNativeAndroidSDK.jar* from your */libs/* folder. 


** For Eclipse users:**

Go to *Project > Properties > Java Build Path > Libraries > Add external Jar* and choose *AdsNativeAndroidSDK.jar* from your */libs/* folder.



**2.** Add [Google Play Services](http://developer.android.com/google/play-services/setup.html) to your project.

**3.** Add permissions to your *AndroidManifest.xml* file:

```XML
#!xml

<uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />   
<uses-permission android:name="android.permission.INTERNET" />
```

**4.** Add WebViewActivity to your *AndroidManifest.xml* file:

```XML
#!xml

<activity android:name="com.adsnative.android.sdk.WebViewActivity"
               android:configChanges="orientation|screenSize" />
```

**5.** Minimum Android SDK: Android 2.3 API (9)

## Using AdsNative APIs ##

### Integrating sponsored stories into ListView in ListActivity ###

We tried to make this as simple as possible. All you have to do is create an array of integers containing positions of sponsored stories in a ListView. Then create new *AdsNativeListAdapter*.

```Java
#!java

int[] sponsoredStoryPositions = {0, 4, 13, 69};
AdsNativeListAdapter adsNativeListAdapter = 
    new AdsNativeListAdapter(getBaseContext(), myAdapter, sponsoredStoryPositions, AD_UNIT_ID);
setListAdapter(adsNativeListAdapter);

//fetch and add SponsoredStories to the ListView
adsNativeListAdapter.loadSponsoredStories();  
```

Sponsored stories are going to be fetched and added to the ListView.

* myAdapter - developers' list adapter
* sponsoredStoryPositions - positions on the ListView where sponsored stories are going to be added.
* AD_UNIT_ID - AdsNative user ID

### Fetching single SponsoredStory ###

We use SponsoredStoryController to fetch and manage our SponsoredStory. 
Method getSponsoredStoryView( ... ) also sets time and impression logging listeners.


```Java
#!java

SponsoredStoryController sponsoredStoryController = new SponsoredStoryController(getBaseContext());

//fetches sponsored story
sponsoredStoryController.fetchSponsoredStory(AD_UNIT_ID); 

//listener when sponsored story is completely fetched 
sponsoredStoryController.setOnSponsoredStoryListener(new OnSponsoredStoryListener() {
            @Override
            public void onSponsoredStory(SponsoredStory sponsoredStory) {
                View view = sponsoredStoryController.getSponsoredStoryView(sponsoredStory);
            }

            @Override
            public void onFailure(FailureMessage failureMessage) {
                Log.e(ERROR_TAG, failureMessage.getMessage());
            }
});
```

* view - View object with default layout for SponsoredStory with layout_width = "match_parent" and layout_height="wrap_content"

### Examples ###

#### Put SponsoredStory at the bottom of the screen. ####


```Java
#!java

RelativeLayout relativeLayout = (RelativeLayout) findViewById(R.id.my_activty_relative_layout);

sponsoredStoryController.setOnSponsoredStoryListener(new OnSponsoredStoryListener() {
            @Override
            public void onSponsoredStory(SponsoredStory sponsoredStory) {
                View view = sponsoredStoryController.getSponsoredStoryView(sponsoredStory);
                RelativeLayout.LayoutParams layoutParams = 
                              new RelativeLayout.LayoutParams(
                                             ViewGroup.LayoutParams.WRAP_CONTENT, 
                                             ViewGroup.LayoutParams.WRAP_CONTENT);
                layoutParams.addRule(RelativeLayout.ALIGN_PARENT_BOTTOM); 
                relativeLayout.addView(view, layoutParams);
            }

            @Override
            public void onFailure(FailureMessage failureMessage) {
                Log.e(ERROR_TAG, failureMessage.getMessage());
            }
});
```

#### Attach data to the developer's custom Views located inside a specified layout. Make sure that the layout has already been attached to some sort of a parent, i.e. in xml layout files. ####

Adding a session ID tag to the developer's custom View is obligatory in order to protect from render conflicts.

```Java
#!java

//textView is a child of relativeLayout
RelativeLayout relativeLayout = (RelativeLayout) findViewById(R.id.my_sponsored_story_layout);
TextView textView = (TextView) findViewById(R.id.my_sponsored_story_text);

//Attach SponsoredStory to specified container (container has to be an instance of RelativeLayout) 
sponsoredStoryController.setOnSponsoredStoryListener(new OnSponsoredStoryListener() {
            @Override
            public void onSponsoredStory(SponsoredStory sponsoredStory) {
                textView.set("I'm SponsoredStory with title: " + sponsoredStory.getSponsoredStoryData().getTitle());
                relativeLayout.setTag(sponsoredStory.getSponsoredStoryData().getSessionId());
                sponsoredStoryController.getSponsoredStoryView(sponsoredStory, relativeLayout);
            }

            @Override
            public void onFailure(FailureMessage failureMessage) {
                Log.e(ERROR_TAG, failureMessage.getMessage());
            }
});
```

#### Attach data to the developer's custom Views that are inside a specified layout that has NOT been attached to any parent. #####

Adding session ID tag to the developer's custom View is obligatory, in order to protect from render conflicts.

```Java
#!java

RelativeLayout mParent = (RelativeLayout) findViewById(R.id.my_activity_main_relative_layout);

//textView is a child of relativeLayout.
RelativeLayout relativeLayout = (RelativeLayout) findViewById(R.id.my_sponsored_story_layout);
TextView textView = (TextView) findViewById(R.id.my_sponsored_story_text);

//Attach SponsoredStory to specified container (container has to be an instance of RelativeLayout) 
sponsoredStoryController.setOnSponsoredStoryListener(new OnSponsoredStoryListener() {
            @Override
            public void onSponsoredStory(SponsoredStory sponsoredStory) {
                textView.set("I'm SponsoredStory with title: " + sponsoredStory.getSponsoredStoryData().getTitle());
                relativeLayout.setTag(sponsoredStory.getSponsoredStoryData().getSessionId());
                sponsoredStoryController.getSponsoredStoryView(sponsoredStory, relativeLayout, mParent);
            }

            @Override
            public void onFailure(FailureMessage failureMessage) {
                Log.e(ERROR_TAG, failureMessage.getMessage());
            }
});
```

XML file:


```XML
#!xml
<RelativeLayout xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/my_activity_main_relative_layout"
    android:layout_width="match_parent"
    android:layout_height="match_parent">

    <RelativeLayout
        android:id="@+id/my_sponsored_story_layout"
        android:layout_width="match_parent"
        android:layout_height="wrap_content" >

        <TextView
            android:id="@+id/my_sponsored_story_text"
            android:layout_width="wrap_content"
            android:layout_height="wrap_content" />

    </RelativeLayout>
</RelativeLayout>
```
