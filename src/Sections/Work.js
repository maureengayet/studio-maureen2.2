// import "./Work.css";
// import gsap from "gsap";

// const Work = () => {
// 	const projects = document.querySelector(".projects");
// 	const preview = document.querySelector(".preview");
// 	const previewImg = document.querySelector(".preview-img");

// 	let isInside = false;

// 	const bgPositions = {
// 		p1: "0 0",
// 		p2: "0 25%",
// 		p3: "0 500px",
// 		p4: "0 750px",
// 	}

// 	const moveStuff = (e) => {
// 		const mouseInside = isMouseInsideContainer(e);

// 		if (mouseInside !== isInside) {
// 			isInside = mouseInside;
// 			if (isInside) {
// 				gsap.to(preview, {
// 					duration: 0.3,
// 					scale: 1
// 				});
// 			} else {
// 				gsap.to(preview, {
// 					duration: 0.3,
// 					scale: 0
// 				});
// 			}
// 		}
// 	}

// 	const moveProject = (e) => {
// 		const previewRect = preview.getBoundingClientRect();
// 		const offsetX = previewRect.width / 2;
// 		const offsetY = previewRect.height /2;

// 		preview.style.left = e.pageX - offsetX + "px";
// 		preview.style.top = e.pageY - offsetY + "px";
// 	}

// 	const moveProjectImg = (project) => {
// 		const projectId = project.id;
// 		gsap.to(previewImg, {
// 			duration: 0.4,
// 			backgroundPosition: bgPositions[projectId] || "0 0"
// 		});
// 	}

// 	const isMouseInsideContainer = (e) => {
// 		const containerRect = projects.getBoundingClientRect();
// 		return (
// 			e.pageX >= containerRect.left &&
// 			e.pageX <= containerRect.right &&
// 			e.pageY >= containerRect.top &&
// 			e.pageY <= containerRect.bottom
// 		);
// 	}

// 	window.addEventListener("mousemove", moveStuff);

// 	Array.from(projects.children).forEach((project => {
// 		project.addEventListener("mousemove", moveProject);
// 		project.addEventListener("mousemove", moveProjectImg.bind(null, project));
// 	}))

// 	return (
// 		<section className="work bg-1 py-24">
// 			<div class="max-w w-full">
// 				<h3 className="text-8xl serif pb-24">Selected Work</h3>

// 				<div className="preview">
// 					<div className="preview-img"></div>
// 				</div>

// 				<div className="work-container">
// 					<div className="projects">
// 						<div id="header" className="project cursor-pointer">
// 							<div className="client">
// 								<p className="font-semibold text-small small-caps">Client</p>
// 							</div>
// 							<div className="category">
// 								<p className="font-semibold text-small small-caps">category</p>
// 							</div>
// 							<div className="tools">
// 								<p className="font-semibold text-small small-caps">Tools</p>
// 							</div>
// 							<div className="year">
// 								<p className="font-semibold text-small small-caps">Year</p>
// 							</div>
// 						</div>
// 						<div className="max-w w-full h-px bg-[var(--color-white)] opacity-20" ></div>
// 						<div id="p1" className="project cursor-pointer">
// 							<div className="client">
// 								<p className="text-small small-caps">Voltact</p>
// 							</div>
// 							<div className="category">
// 								<p className="text-small small-caps">Branding</p>
// 							</div>
// 							<div className="tools">
// 								<p className="text-small small-caps">Figma</p>
// 							</div>
// 							<div className="year">
// 								<p className="text-small small-caps">2024</p>
// 							</div>
// 						</div>
// 						<div className="max-w w-full h-px bg-[var(--color-white)] opacity-20" ></div>
// 						<div id="p2" className="project cursor-pointer">
// 							<div className="client">
// 								<p className="text-small small-caps">Air To Ground</p>
// 							</div>
// 							<div className="category">
// 								<p className="text-small small-caps">Branding</p>
// 							</div>
// 							<div className="tools">
// 								<p className="text-small small-caps">Figma</p>
// 							</div>
// 							<div className="year">
// 								<p className="text-small small-caps">2023</p>
// 							</div>
// 						</div>
						
// 						<div className="max-w w-full h-px bg-[var(--color-white)] opacity-20" ></div>
// 						<div id="p3" className="project cursor-pointer">
// 							<div className="client">
// 								<p className="text-small small-caps">Melano Jewelry</p>
// 							</div>
// 							<div className="category">
// 								<p className="text-small small-caps">Development</p>
// 							</div>
// 							<div className="tools">
// 								<p className="text-small small-caps">Shopify</p>
// 							</div>
// 							<div className="year">
// 								<p className="text-small small-caps">2022</p>
// 							</div>
// 						</div>
// 						<div className="max-w w-full h-px bg-[var(--color-white)] opacity-20" ></div>
// 						<div id="p4" className="project cursor-pointer">
// 							<div className="client">
// 								<p className="text-small small-caps">Shop Ateljé</p>
// 							</div>
// 							<div className="category">
// 								<p className="text-small small-caps">Development</p>
// 							</div>
// 							<div className="tools">
// 								<p className="text-small small-caps">Shopify</p>
// 							</div>
// 							<div className="year">
// 								<p className="text-small small-caps">2022</p>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Work;


import React, { useRef, useEffect } from "react";
import "./Work.css";
import gsap from "gsap";

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
      p2: "0 250px",
      p3: "0 500px",
      p4: "0 750px",
    };

    const moveStuff = (e) => {
		const mouseInside = isMouseInsideContainer(e);
	  
		if (mouseInside !== isInside) {
		  isInside = mouseInside;
		  if (isInside) {
			gsap.to(preview, { duration: 0.3, scale: 1 });
			console.log('hovering');
		  } else {
			gsap.to(preview, { duration: 0.3, scale: 0});
			console.log('not hovering');	
		}
		}
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
		  duration: 0.4,
		  backgroundPosition: bgPosition,
		});
	  };

    const isMouseInsideContainer = (e) => {
      const containerRect = projects.getBoundingClientRect();
      return (
        e.pageX >= containerRect.left &&
        e.pageX <= containerRect.right &&
        e.pageY >= containerRect.top &&
        e.pageY <= containerRect.bottom
      );
    };

    window.addEventListener("mousemove", moveStuff);

    Array.from(projects.children).forEach((project) => {
      project.addEventListener("mousemove", moveProject);
      project.addEventListener("mousemove", moveProjectImg.bind(null, project));
    });

    return () => {
      window.removeEventListener("mousemove", moveStuff);
      Array.from(projects.children).forEach((project) => {
        project.removeEventListener("mousemove", moveProject);
        project.removeEventListener("mousemove", moveProjectImg.bind(null, project));
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
          <div className="projects" ref={projectsRef}>
            <div id="header" className="project cursor-pointer">
              <div className="client">
                <p className="font-semibold text-small small-caps">Client</p>
              </div>
              <div className="category">
                <p className="font-semibold text-small small-caps">Category</p>
              </div>
              <div className="tools">
                <p className="font-semibold text-small small-caps">Tools</p>
              </div>
              <div className="year">
                <p className="font-semibold text-small small-caps">Year</p>
              </div>
            </div>
            <div className="max-w w-full h-px bg-[var(--color-white)] opacity-20"></div>
            <div id="p1" className="project cursor-pointer">
              <div className="client">
                <p className="text-small small-caps">Voltact</p>
              </div>
              <div className="category">
                <p className="text-small small-caps">Branding</p>
              </div>
              <div className="tools">
                <p className="text-small small-caps">Figma</p>
              </div>
              <div className="year">
                <p className="text-small small-caps">2024</p>
              </div>
            </div>
            <div className="max-w w-full h-px bg-[var(--color-white)] opacity-20"></div>
            <div id="p2" className="project cursor-pointer">
              <div className="client">
                <p className="text-small small-caps">Air To Ground</p>
              </div>
              <div className="category">
                <p className="text-small small-caps">Branding</p>
              </div>
              <div className="tools">
                <p className="text-small small-caps">Figma</p>
              </div>
              <div className="year">
                <p className="text-small small-caps">2023</p>
              </div>
            </div>
            <div className="max-w w-full h-px bg-[var(--color-white)] opacity-20"></div>
            <div id="p3" className="project cursor-pointer">
              <div className="client">
                <p className="text-small small-caps">Melano Jewelry</p>
              </div>
              <div className="category">
                <p className="text-small small-caps">Development</p>
              </div>
              <div className="tools">
                <p className="text-small small-caps">Shopify</p>
              </div>
              <div className="year">
                <p className="text-small small-caps">2022</p>
              </div>
            </div>
            <div className="max-w w-full h-px bg-[var(--color-white)] opacity-20"></div>
            <div id="p4" className="project cursor-pointer">
              <div className="client">
                <p className="text-small small-caps">Shop Ateljé</p>
              </div>
              <div className="category">
                <p className="text-small small-caps">Development</p>
              </div>
              <div className="tools">
                <p className="text-small small-caps">Shopify</p>
              </div>
              <div className="year">
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
