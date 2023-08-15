---
title: 'PAIR DIFFUSION: Object-Level Image Editing with
Structure-and-Appearance Paired Diffusion Models'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'

date: '2023-08-01T00:00:00Z'
doi: ''

# Schedule page publish date (NOT publication's date).
publishDate: '2017-01-01T00:00:00Z'

# Publication type.
# Legend: 0 = Uncategorized; 1 = Conference paper; 2 = Journal article;
# 3 = Preprint / Working Paper; 4 = Report; 5 = Book; 6 = Book section;
# 7 = Thesis; 8 = Patent
publication_types: ['1']

# Publication name and optional abbreviated publication name.
publication: pre-print arXiv
publication_short: arXiv

abstract: Image editing using diffusion models has witnessed extremely fast-paced growth recently. There are various ways in which previous works enable controlling and editing images. Some works use high-level conditioning such as text, while others use low-level conditioning. Nevertheless, most of them lack fine-grained control over the properties of the different objects present in the image, i.e. object-level image editing. In this work, we consider an image as a composition of multiple objects, each defined by various properties. Out of these properties, we identify structure and appearance as the most intuitive to understand and useful for editing purposes. We propose Structure-and-Appearance Paired Diffusion model (PAIR-Diffusion), which is trained using structure and appearance information explicitly extracted from the images. The proposed model enables users to inject a reference image's appearance into the input image at both the object and global levels. Additionally, PAIR-Diffusion allows editing the structure while maintaining the style of individual components of the image unchanged. We extensively evaluate our method on LSUN datasets and the CelebA-HQ face dataset, and we demonstrate fine-grained control over both structure and appearance at the object level. We also applied the method to Stable Diffusion to edit any real image at the object level.

# Summary. An optional shortened abstract.
summary: We show that designing a framework motivated by the observation that images are composed of various objects gives us comprehensive editing capabilities.

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_project: 'https://github.com/Picsart-AI-Research/PAIR-Diffusion'
url_pdf: 'https://arxiv.org/pdf/2303.17546.pdf'
url_code: 'https://github.com/Picsart-AI-Research/PAIR-Diffusion'
# url_dataset: 'https://github.com/wowchemy/wowchemy-hugo-themes'

# url_source: 'https://github.com/wowchemy/wowchemy-hugo-themes'
# url_video: 'https://youtube.com'

# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.
image:
  # caption: 'Image credit: [**Unsplash**](https://unsplash.com/photos/pLCdAaMFLTE)'
  focal_point: ''
  preview_only: false

# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
# projects:
#   - example

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
# slides: example
---

<!-- {{% callout note %}}
Click the _Cite_ button above to demo the feature to enable visitors to import publication metadata into their reference management software.
{{% /callout %}}

{{% callout note %}}
Create your slides in Markdown - click the _Slides_ button to check out the example.
{{% /callout %}} -->

<!-- Supplementary notes can be added here, including [code, math, and images](https://wowchemy.com/docs/writing-markdown-latex/). -->
