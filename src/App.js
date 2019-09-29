import React, { Component } from 'react';
import Slide from './Slide/Slide';
import Lightbox from './Lightbox/Lightbox';
import './App.css';
class App extends Component {
  basePath =
    'https://s3-eu-west-1.amazonaws.com/michaeldsharp.com/assets/thumbs/';
  state = {
    slides: [
      {
        url: this.basePath + 'alien_invasion-screenshot-1.png',
        label: 'Alien Invasion',
        id: 0
      },
      {
        url: this.basePath + 'block-screenshot-1.png',
        label: 'BLOCK',
        id: 1
      },
      {
        url: this.basePath + 'mapwork-screenshot-1.png',
        label: 'Map Work',
        id: 2
      },
      {
        url: this.basePath + 'meteor_defence-screenshot-1.png',
        label: 'Meteor Defence',
        id: 3
      },
      {
        url: this.basePath + 'rebound-screenshot-1.png',
        label: 'Rebound',
        id: 4
      }
    ],
    showingLightbox: false,
    selectedSlideIndex: 0
  };
  onSlideSelected(id) {
    this.setState({
      showingLightbox: true,
      selectedSlideIndex: id
    });
  }
  nextGallerySlide(event) {
    event.stopPropagation();
    let slideIndex = -1;
    if (this.state.selectedSlideIndex === this.state.slides.length - 1) {
      slideIndex = 0;
    } else {
      slideIndex = this.state.selectedSlideIndex + 1;
    }
    this.setState({
      selectedSlideIndex: slideIndex
    });
  }
  dismissLightbox() {
    this.setState({
      showingLightbox: false
    });
  }
  previousGallerySlide(event) {
    event.stopPropagation();
    let slideIndex = -1;
    if (this.state.selectedSlideIndex === 0) {
      slideIndex = this.state.slides.length - 1;
    } else {
      slideIndex = this.state.selectedSlideIndex - 1;
    }
    this.setState({
      selectedSlideIndex: slideIndex
    });
  }
  isSlideSelected(index) {
    return (
      this.state.showingLightbox && this.state.selectedSlideIndex === index
    );
  }
  handleSlideChange(event) {
    switch (event.keyCode) {
      case 27: {
        this.dismissLightbox();
        break;
      }
      case 37: {
        this.previousGallerySlide(event);
        break;
      }
      case 39: {
        this.nextGallerySlide(event);
        break;
      }
      default:
        break;
    }
  }
  componentDidMount() {
    document.addEventListener(
      'keyup',
      event => {
        console.log('key press detected');
        this.handleSlideChange(event);
      },
      false
    );
  }
  componentWillUnmount() {
    document.removeEventListener(this.handleSlideChange);
  }
  render() {
    let slides = null;
    let lightBox = null;
    let selectedSlide = this.state.slides[this.state.selectedSlideIndex];
    slides = (
      <div className="Gallery">
        {this.state.slides.map((slide, idx) => {
          return (
            <Slide
              url={slide.url}
              label={slide.label}
              key={slide.id}
              selected={this.isSlideSelected(idx)}
              slideSelected={() => this.onSlideSelected(slide.id)}
            />
          );
        })}
      </div>
    );
    if (this.state.showingLightbox) {
      lightBox = (
        <div
          className="Lightbox-container"
          onClick={() => this.dismissLightbox()}
        >
          <Lightbox
            url={selectedSlide.url}
            label={selectedSlide.label}
            previousSlide={event => this.previousGallerySlide(event)}
            nextSlide={event => this.nextGallerySlide(event)}
          />
        </div>
      );
    }
    return (
      <div className="App">
        {lightBox}
        {slides}
      </div>
    );
  }
}

export default App;
