import React, { useRef, useEffect } from "react";
import "./Work.css";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  const projectsRef = useRef(null);
  const previewRef = useRef(null);
  const previewImgRef = useRef(null);

  useEffect(() => {
    const projects = projectsRef.current;
    const preview = previewRef.current;
    const previewImg = previewImgRef.current;

    if (!projects || !preview || !previewImg) {
      console.error("One of the required elements was not found in the DOM.");
      return;
    }

    let isInside = false;

    const bgPositions = {
      p1: "0 0",
      p2: "0 33.33%",
      p3: "0 66.66%",
      p4: "0 100%",
    };

    const moveProject = (e) => {
      const previewRect = preview.getBoundingClientRect();
      const offsetX = previewRect.width / 2;
      const offsetY = previewRect.height / 2;

      preview.style.left = e.clientX - offsetX + "px";
      preview.style.top = e.clientY - offsetY + "px";
    };

    const moveProjectImg = (project) => {
      const projectId = project.id;
      const bgPosition = bgPositions[projectId] || "0 0";

      gsap.to(previewImg, {
        duration: 0.9,
        backgroundPosition: bgPosition,
      });
    };

    const isMouseInsideContainer = (e) => {
      const containerRect = projects.getBoundingClientRect();
      return (
        e.clientX >= containerRect.left &&
        e.clientX <= containerRect.right &&
        e.clientY >= containerRect.top &&
        e.clientY <= containerRect.bottom
      );
    };

    const moveStuff = (e) => {
      if (preview !== undefined) {
        const mouseInside = isMouseInsideContainer(e);
        if (mouseInside !== isInside) {
          isInside = mouseInside;
          if (isInside) {
            console.log("Animating scale to 1");
            gsap.to(previewRef, { scale: 1, duration: 0.8 });
            preview.style.opacity = 1;
          } else {
            console.log("Animating scale to 0");
            gsap.to(previewRef, { scale: 0, duration: 0.2 });
            preview.style.opacity = 0;
          }
        }
      }
      console.log("Mouse move detected");
    };

    window.addEventListener("mousemove", moveStuff);
    window.addEventListener("scroll", moveStuff);

    Array.from(projects.children).forEach((project) => {
      project.addEventListener("mousemove", moveProject);
      project.addEventListener("mousemove", moveProjectImg.bind(null, project));
    });

    return () => {
      window.removeEventListener("mousemove", moveStuff);
      Array.from(projects.children).forEach((project) => {
        project.removeEventListener("mousemove", moveProject);
        project.removeEventListener(
          "mousemove",
          moveProjectImg.bind(null, project)
        );
      });
    };
  }, []);

  return (
    <section className="work bg-1 py-24">
      <div className="max-w w-full">
        <h3 className="text-8xl serif pb-24">Selected Work</h3>

        <div className="preview" ref={previewRef}>
          <div className="preview-img" ref={previewImgRef}></div>
        </div>

        <div className="work-container">
          <div id="header" className="project flex flex-row py-14">
            <div className="client w-1/4">
              <p className="font-semibold text-small small-caps pl-4">Client</p>
            </div>
			<div className="deliverables w-1/4">
				<p className="font-semibold text-small small-caps">Deliverables</p>
			  </div>
            <div className="category w-1/4">
              <p className="font-semibold text-small small-caps ">Category</p>
            </div>
            <div className="tools w-1/4">
              <p className="font-semibold text-small small-caps ">Tools</p>
            </div>
            <div className="year w-1/12">
              <p className="font-semibold text-small small-caps ">Year</p>
            </div>
          </div>
          <div className="projects" ref={projectsRef}>
            <div className="max-w w-full h-px bg-[var(--text-color)] opacity-20"></div>
            <div id="p1" className="project flex flex-row cursor-pointer py-12">
              <div className="client w-1/4">
                <p className="text-small small-caps pl-4">Voltact</p>
              </div>
			  <div className="deliverables w-1/4">
				<p className="text-small small-caps ">Logo, Cards, Branding</p>
			  </div>
              <div className="category w-1/4">
                <p className="text-small small-caps ">Design</p>
              </div>
              <div className="tools w-1/4">
                <p className="text-small small-caps ">Figma</p>
              </div>
              <div className="year w-1/12">
                <p className="text-small small-caps">2024</p>
              </div>
            </div>
            <div className="max-w w-full h-px bg-[var(--text-color)] opacity-20"></div>
            <div id="p2" className="project flex flex-row cursor-pointer py-12">
              <div className="client w-1/4">
                <p className="text-small small-caps pl-4">Air To Ground</p>
              </div>
			  <div className="deliverables w-1/4">
				<p className="text-small small-caps ">Logo, Cards</p>
			  </div>
              <div className="category w-1/4">
                <p className="text-small small-caps ">Design</p>
              </div>
              <div className="tools w-1/4">
                <p className="text-small small-caps ">Figma</p>
              </div>
              <div className="year w-1/12">
                <p className="text-small small-caps ">2023</p>
              </div>
            </div>
            <div className="max-w w-full h-px bg-[var(--text-color)] opacity-20"></div>
            <div id="p3" className="project flex flex-row cursor-pointer py-12">
              <div className="client w-1/4">
                <p className="text-small small-caps pl-4">Melano Jewelry</p>
              </div>
			  <div className="deliverables w-1/4">
				<p className="text-small small-caps ">Shopify Theme</p>
			  </div>
              <div className="category w-1/4">
                <p className="text-small small-caps">Development</p>
              </div>
              <div className="tools w-1/4">
                <p className="text-small small-caps ">Liquid</p>
              </div>
              <div className="year w-1/12">
                <p className="text-small small-caps">2022</p>
              </div>
            </div>
            <div className="max-w w-full h-px bg-[var(--text-color)] opacity-20"></div>
            <div id="p4" className="project flex flex-row cursor-pointer py-12">
              <div className="client w-1/4">
                <p className="text-small small-caps pl-4">Shop Ateljé</p>
              </div>
			  <div className="deliverables w-1/4">
				<p className="text-small small-caps">Shopify Theme</p>
			  </div>
              <div className="category w-1/4">
                <p className="text-small small-caps">Development</p>
              </div>
              <div className="tools w-1/4">
                <p className="text-small small-caps ">Liquid</p>
              </div>
              <div className="year w-1/12">
                <p className="text-small small-caps">2022</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
