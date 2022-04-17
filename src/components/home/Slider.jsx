import React from "react";
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";

import { Line } from "react-chartjs-2";
import { data, options } from "../utils/chart";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function Slider() {
  const image = "/images/02.jpg";
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  const title = "diseño & creatividad";
  const description =
    "Lorem ipsum dolor sit amet consectetur, adipisicing eli Consequatur perferendis expedita adipisci cupiditate sunt aliqua incidunt aliquid recusandae nostrum perspiciatis, ipsa";

  return (
    <ScrollContainer>
      <ScrollPage page={0}>
        <Animator animation={ZoomInScrollOut}>
          <div id="slider ingrid">
            <div className="container">
              <div className="row">
                <div class="centrado col s12 m6 l6">
                  <div className="textSlider">
                    <h4 className="fadein effectLeft">{title}</h4>
                    <h1 className="plus">
                      <span className="fadein effectLeft">Soy</span>
                      <b className="effectRight">Jennifer</b>
                    </h1>
                    <p className="fadein |effectLeft2">{description}</p>
                  </div>
                </div>

                <div class="centrado col s12 m6 l6">
                  <div className="images">
                    <img className="effectUp" src="/images/jennifer.gif" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Animator>
      </ScrollPage>

      <ScrollPage page={1}>
        <div className="container">
          <div className="row">
            <div
              style={{
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div class="col s12 m12 l6">
                <Animator animation={MoveOut(-1000, 0)}>
                  <h1 className="menor third">
                    <span className="fadein effectLeft">Skills</span>
                    <b className="effectRight">Coding</b>
                  </h1>
                  <h4 className="fadein effectLeft">Conocimientos</h4>
                  <div className="space"></div>
                </Animator>
              </div>

              <div class="col s12 m12 l6">
                <div id="techList">
                  <Animator animation={MoveIn(1000, 0)}>
                    <h6 class="react">react</h6>{" "}
                  </Animator>
                  <Animator animation={MoveOut(1000, 0)}>
                    <h6 class="javascript">javascript</h6>{" "}
                  </Animator>
                  <Animator animation={MoveIn(1000, 0)}>
                    <h6 class="html5">html5</h6>{" "}
                  </Animator>
                  <Animator animation={MoveOut(1000, 0)}>
                    <h6 class="wordpress">wordpress</h6>{" "}
                  </Animator>
                  <Animator animation={MoveIn(-1000, 0)}>
                    <h6 class="css">css</h6>{" "}
                  </Animator>
                  <Animator animation={MoveOut(1000, 0)}>
                    <h6 class="express">express</h6>{" "}
                  </Animator>

                  <Animator animation={MoveIn(-1000, 0)}>
                    <h6 class="node">node</h6>{" "}
                  </Animator>
                  <Animator animation={MoveIn(-1000, 0)}>
                    <h6 class="mongodb">mongodb</h6>{" "}
                  </Animator>

                  <Animator animation={MoveOut(1000, 0)}>
                    <h6 class="python">python</h6>
                  </Animator>
                  <Animator animation={MoveOut(1000, 0)}>
                    <h6 class="sql">sql</h6>
                  </Animator>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollPage>

      <div
        style={{
          "background-image": `url('${image}')`,
          "z-index": "1",
          "background-size": "cover",
        }}
      >
        <ScrollPage page={2}>
          <div className="container" style={{ "z-index": 1 }}>
            <div id="slider ingrid">
              <Animator animation={batch(Fade(), MoveOut(0, 100))}>
                <div className="row">
                  <div class="centrado col s12 m6 l6">
                    <div className="textSlider">
                      <h4 className="fadein effectLeft">
                        Estadistica & Realidades
                      </h4>
                      <h1 className="menor">
                        <b>Soluciones</b>
                        <span>Creativas</span>{" "}
                      </h1>
                      <p className="fadein |effectLeft2">
                        Ayudando a las marcas a prosperar en el mundo digital
                      </p>
                    </div>
                  </div>

                  <div class="centrado col s12 m6 l6">
                    <div className="chartSpace">
                      <Line data={data} options={options} type="line" />
                    </div>
                  </div>
                </div>
              </Animator>
            </div>
          </div>
        </ScrollPage>
      </div>
      
      {/* <ScrollPage page={5}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <span style={{ fontSize: "40px" }}>
            <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
            <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
            - I'm Seonghyeok -
            <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
            <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
          </span>
        </div>
      </ScrollPage>
      <ScrollPage page={5}>
        <Animator animation={batch(Fade(), Sticky())}>
          <span style={{ fontSize: "40px" }}>Done</span>
          <br />
          <span style={{ fontSize: "30px" }}>
            There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
          </span>
        </Animator>
      </ScrollPage> */}
    </ScrollContainer>
  );
}

export default Slider;
