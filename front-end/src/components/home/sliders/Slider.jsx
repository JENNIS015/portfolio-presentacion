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
import SliderPresentation from "./sliderItems/sliderPresentation/SliderPresentation";
import SliderSkills from "./sliderItems/sliderSkills/SliderSkills";
function Slider() {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

  return (
    <section id="home">
      <ScrollContainer>
        <ScrollPage page={0}>
          <Animator animation={ZoomInScrollOut} classname="custom">
            <SliderPresentation />
          </Animator>
        </ScrollPage>

        <ScrollPage page={1}>
          <SliderSkills />
        </ScrollPage>
      </ScrollContainer>
    </section>
  );
}

export default Slider;
