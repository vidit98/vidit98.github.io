---
title: Visual Recognition using Graph
subtitle: It describes the paper Beyond Grids Learning Graph Representations for Visual Recognition published in Neurips 2018

# Summary for listings and search engines
summary: It describes the paper Beyond Grids Learning Graph Representations for Visual Recognition published in Neurips 2018

# Link this post with a project
projects: []

# Date published
date: '2019-06-27T00:00:00Z'

# Date updated
lastmod: '2019-06-27T00:00:00Z'

# Is this an unpublished draft?
draft: false

# Show this page in the Featured widget?
featured: false

# Featured image
# Place an image named `featured.jpg/png` in this page's folder and customize its options here.
image:
  caption: 'Image credit: [**Li et. al.**](https://proceedings.neurips.cc/paper_files/paper/2018/file/4efb80f630ccecb2d3b9b2087b0f9c89-Paper.pdf)'
  focal_point: ''
  placement: 2
  preview_only: false

authors:
  - admin

tags:
  - Academic

categories:
  - Tutorial
---

## Overview

Convolution neural networks have been a great success in visual recognition tasks. This article particularly focuses on semantic segmentation. The logic behind using CNN is that images have a sense of locality that is, the pixels which are near to each other are more related. CNNs are able to capture this by convolution operations and the local region that comes into consideration (formally known as receptive field) depends on the kernel size. There are also long-range dependencies in an image which can help in visual recognition tasks. For that the concept is to stack may convolution layers which will theoretically increase the receptive field. So now both long range and short range dependencies are taken into account, put the network on the training and you get the results easy right!

But I am sure you are well aware that not many times things match in theory and practical. Recently a paper ( by Luo, Wenjie, et al.) was published which showed that receptive fields do not grow linearly with the number of convolution layers moreover they are severely limited. Furthermore, the receptive field depends on various other factors such as initialization schemes. So what is the solution?

Find the solution [Medium Article](https://towardsdatascience.com/visual-recognition-using-graphs-9c446005736e)
<!-- 
## Get Started

- 👉 [**Create a new site**](https://wowchemy.com/templates/)
- 📚 [**Personalize your site**](https://wowchemy.com/docs/)
- 💬 [Chat with the **Wowchemy community**](https://discord.gg/z8wNYzb) or [**Hugo community**](https://discourse.gohugo.io)
- 🐦 Twitter: [@wowchemy](https://twitter.com/wowchemy) [@GeorgeCushen](https://twitter.com/GeorgeCushen) [#MadeWithWowchemy](https://twitter.com/search?q=%23MadeWithWowchemy&src=typed_query)
- 💡 [Request a **feature** or report a **bug** for _Wowchemy_](https://github.com/wowchemy/wowchemy-hugo-themes/issues)
- ⬆️ **Updating Wowchemy?** View the [Update Tutorial](https://wowchemy.com/docs/hugo-tutorials/update/) and [Release Notes](https://wowchemy.com/updates/) -->
