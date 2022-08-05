import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  FadeIn,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import Slider1 from "../sliderPresentation_1/Slider1";
import Slider2 from "../sliderPresentation_2/Slider2";
function Slider() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <ScrollContainer>

      <ScrollPage page={0}>
        <Animator animation={ZoomInScrollOut} classname="custom">
          <Slider1 />
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
      <Slider2/>
      </ScrollPage>

    

    </ScrollContainer>
  );
}

export default Slider;
