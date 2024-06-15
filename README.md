# Interactive Image Gallery

A responsive and interactive image gallery with a lightbox feature, built using HTML, CSS, and JavaScript.

## Features

- Display a collection of images in a grid layout.
- Click on any image to view it in a lightbox.
- Smooth transitions and hover effects for better user experience.
- Close the lightbox by clicking the close button or clicking outside the image.

## Demo

[Live Demo](#) <!-- You can add a link to your live demo if hosted somewhere -->

## Screenshots

![Gallery Screenshot](screenshot1.png) <!-- Add your own screenshot -->
![Lightbox Screenshot](screenshot2.png) <!-- Add your own screenshot -->

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/interactive-image-gallery.git
    ```

2. Navigate to the project directory:
    ```bash
    cd interactive-image-gallery
    ```

3. Open `index.html` in your browser to view the gallery.

## Usage

- Add your images to the gallery by placing them in the `img` folder and updating the `src` attributes in `index.html`.

## Code Overview

### HTML

The HTML structure includes a gallery and a lightbox component:

```html
<div class="gallery">
  <img src="DSC_0072.jpg" alt="Image 1" class="gallery-item" />
  <img src="DSC_0082.jpg" alt="Image 2" class="gallery-item" />
  <img src="DSC_0085.jpg" alt="Image 3" class="gallery-item" />
</div>

<div class="lightbox">
  <span class="close">&times;</span>
  <img class="lightbox-image" src="" alt="" />
</div>
