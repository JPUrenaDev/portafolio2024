import React from "react";
import "../ui/ProfileCardDesign.css";
import { Link } from "react-router-dom";
export const ProfileCardDesign = ({ projectInformation }) => {
  return (
    <div className="font-Roboto mb-5">
      <div class="card">
        <div class="content">
          <div class="">
            <div class="back-content w-full">
              <img
                src={projectInformation.image}
                alt=""
                className="rounded-t-lg"
              />
              <strong className="font-Roboto text-center mt-5  w-full block mb-4 ">
                {projectInformation?.projectName}
              </strong>
              <p className="text-[13px] text-center px-1 text-justify px-2">
                {projectInformation.description}
              </p>
            </div>
          </div>
          <div class="front">
            <div class="img">
              <div class="circle"></div>
              <div class="circle" id="right"></div>
              <div class="circle" id="bottom"></div>
            </div>

            <div class="front-content">
              <div>
                <small class="badge">Technologies</small>
                <div class="description mt-3">
                  <div class="title">
                    <p class="title mx-auto"></p>
                    <svg
                      fill-rule="nonzero"
                      height="15px"
                      width="15px"
                      viewBox="0,0,256,256"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g
                        text-anchor="none"
                        font-size="none"
                        font-weight="none"
                        font-family="none"
                        stroke-dashoffset="0"
                        stroke-dasharray=""
                        stroke-miterlimit="10"
                        stroke-linejoin="miter"
                        stroke-linecap="butt"
                        stroke-width="1"
                        stroke="none"
                        fill-rule="nonzero"
                        fill="#20c997"
                      >
                        <g transform="scale(8,8)">
                          <path d="M25,27l-9,-6.75l-9,6.75v-23h18z"></path>
                        </g>
                      </g>
                    </svg>
                  </div>
                  <p class="card-footer ">
                    <ul className="list-disc pl-4 text-[14px]">
                      {projectInformation.technologies.map((value) => (
                        <li className="text-white">{value}</li>
                      ))}

<div className="mt-4">

  {projectInformation.gitHub}


</div>
                   
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
