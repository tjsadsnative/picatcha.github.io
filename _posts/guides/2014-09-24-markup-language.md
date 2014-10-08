---
layout: post
title: "Native Markup Language"
folder: "Placement Guides"
date: 2014-09-24
author: Dhawal Mujumdar
categories: 
- guides 
img: ""
thumb: ""
excerpt: "Native Markup Language helps you to build native placements for your site"
---
# AdsNative Markup Language

Note: Tags follow strict syntax. If a space or comma is off, it will throw an error.
Additionally, all variable values, except booleans, need to be in quotations.


## Ad Content Information

### Post Title

#### {{ post_title() }}

| Name | Type  | Default | Description |
| --- | --- | --- | --- |
| class | String | `null` | Class applied to the `<a>` tag |
| style | CSS | `null` | CSS styling applied to the `<a>` tag |
| a | Boolean | `true` | Hyperlinks the element |
| h | String | `null` | Specify the h element of the title |
| h_class | String | `null` | Class applied to the h element of the title |
| h_style | CSS | `null` | Specify the h element of the title |

##### Examples

{% raw %} `{{ post_title(a=false, h="h2", h_class="large_title", h_style="color:#fff;") }}` {% endraw %}

### Post Summary

#### {{ post_summary() }}

| Name | Type  | Default | Description |
| --- | --- | --- | --- |
| class | String | `null` | Class applied to the element tag |
| style | CSS | `null` | CSS styling applied to the element tag |
| tagName | String | `null` | Specifies the element tag, otherwise it is injected as a raw test |

##### Examples

| Syntax | Rendered HTML  |
| --- | --- |
|   |   |


###Feature Image

#### {{ feature_image() }}

| Name | Type  | Default | Description |
| --- | --- | --- | --- |
| class | String | `null` | Class applied to the `<img>` tag |
| style | CSS | `null` | CSS styling applied to the `<img>` tag |
| a | Boolean | `false` | Hyperlinks the element |
| a_class | String | `null` | Class assigned to the hyperlink |
| a_style | CSS | `null` | CSS styling applied to the hyperlink |
| resize | boolean | `false` | Will set the image as a background-img of a div and crop it to specified dimentions |

##### Examples

| Syntax | Rendered HTML  |
| --- | --- |
|   |   |


## Brand Information

### Brand Image

#### {{ brand_image() }}

| Name | Type  | Default | Description |
| --- | --- | --- | --- |
| class | String | `null` | Class applied to the `<img>` tag |
| style | CSS | `null` | CSS styling applied to the `<img>` tag |
| a | Boolean | `false` | Hyperlinks the element |
| a_class | String | `null` | Class assigned to the hyperlink |
| a_style | CSS | `null` | CSS styling applied to the hyperlink |
| width | String | `null` | Specifies the width of the brand image |
| height | String | `null` | Specifies the height of the brand image |

##### Examples

| Syntax | Rendered HTML  |
| --- | --- |
|   |   |

### Brand Name 

#### {{ post_author() }}

| Name | Type  | Default | Description |
| --- | --- | --- | --- |
| class | String | `null` | Class applied to the element tag |
| style | CSS | `null` | CSS styling applied to the element tag |
| tagName | String | `null` | Specifies the element tag, otherwise injected as raw test |
| a | Boolean | `false` | Hyperlinks the element |
| a_class | String | `null` | Class assigned to the hyperlink |
| a_style | CSS | `null` | CSS styling applied to the hyperlink |
| prefix | Boolean | `true` | Add prefix such as 'Promoted by' and then brand name |

##### Examples

| Syntax | Rendered HTML  |
| --- | --- |
|   |   |

## Post Click Behavior

### Post Click URL

#### {{ post_url() }}

| Name | Type  | Default | Description |
| --- | --- | --- | --- |
| a | Boolean | `true` | Hyperlinks the element |

##### Examples

| Syntax | Rendered HTML  |
| --- | --- |
|   |   |
