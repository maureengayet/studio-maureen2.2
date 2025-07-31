import React, { useRef, useEffect } from "react";
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
				e.clientX >= containerRect.left && e.clientX <= containerRect.right && e.clientY >= containerRect.top && e.clientY <= containerRect.bottom
			);
		};

		const moveStuff = (e) => {
			if (preview !== undefined) {
				const mouseInside = isMouseInsideContainer(e);
				if (mouseInside !== isInside) {
					isInside = mouseInside;
					if (isInside) {
						preview.style.opacity = 1;
					} else {
						preview.style.opacity = 0;
					}
				}
			}
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
				project.removeEventListener("mousemove", moveProjectImg.bind(null, project));
			});
		};
	}, []);

	return (
		<section id="work" className="bg-1 py-10 sm:py-24">
			<div className="inner-p-x">
				<div className="max-w w-full">
					<h3 className="text-5xl md:text-8xl serif pb-10 sm:pb-24">Selected Work</h3>

					<div className="preview" ref={previewRef}>
						<div className="preview-img" ref={previewImgRef}></div>
					</div>

					<div className="work-container">
						<div className="hidden sm:flex project flex-row py-14">
							<div className="client sm:w-1/3">
								<p className="font-semibold text-lg sm:text-small small-caps pl-4">Client</p>
							</div>
							<div className="deliverables sm:w-1/3">
								<p className="font-semibold text-lg sm:text-small small-caps">Deliverables</p>
							</div>
							<div className="category sm:w-1/3">
								<p className="font-semibold text-lg sm:text-small small-caps ">Category</p>
							</div>
							{/* <div className="tools sm:w-1/3">
              <p className="font-semibold sm:text-small small-caps ">Tools</p>
            </div> */}
							<div className="year w-1/12">
								<p className="font-semibold text-lg sm:text-small small-caps ">Year</p>
							</div>
						</div>
						<div className="projects" ref={projectsRef}>
							<div className="hidden sm:flex max-w w-full h-px bg-[var(--text-color)] opacity-20"></div>
							<div id="p1" className="project flex flex-col gap-y-2 sm:flex-row cursor-pointer py-4 sm:py-12">
								<div className="client sm:w-1/3">
									<p className="sm:text-small small-caps sm:pl-4">Voltact</p>
								</div>
								<div className="deliverables sm:w-1/3">
									<p className="sm:text-small small-caps ">Logo, Cards, Branding</p>
								</div>
								<div className="category sm:w-1/3">
									<p className="sm:text-small small-caps ">Design</p>
								</div>
								{/* <div className="tools sm:w-1/3">
                <p className="sm:text-small small-caps ">Figma</p>
              </div> */}
								<div className="year w-1/12">
									<p className="sm:text-small small-caps">2024</p>
								</div>
							</div>
							<div className="max-w w-full h-px bg-[var(--text-color)] opacity-20"></div>
							<div id="p2" className="project flex flex-col gap-y-2 sm:flex-row cursor-pointer py-4 sm:py-12">
								<div className="client sm:w-1/3">
									<p className="sm:text-small small-caps sm:pl-4">Air To Ground</p>
								</div>
								<div className="deliverables sm:w-1/3">
									<p className="sm:text-small small-caps ">Logo, Cards</p>
								</div>
								<div className="category sm:w-1/3">
									<p className="sm:text-small small-caps ">Design</p>
								</div>
								{/* <div className="tools sm:w-1/3">
                <p className="sm:text-small small-caps ">Figma</p>
              </div> */}
								<div className="year w-1/12">
									<p className="sm:text-small small-caps ">2023</p>
								</div>
							</div>
							<div className="max-w w-full h-px bg-[var(--text-color)] opacity-20"></div>
							<div id="p3" className="project flex flex-col gap-y-2 sm:flex-row cursor-pointer py-4 sm:py-12">
								<div className="client sm:w-1/3">
									<p className="sm:text-small small-caps sm:pl-4">Melano Jewelry</p>
								</div>
								<div className="deliverables sm:w-1/3">
									<p className="sm:text-small small-caps ">Shopify Theme</p>
								</div>
								<div className="category sm:w-1/3">
									<p className="sm:text-small small-caps">Development</p>
								</div>
								{/* <div className="tools sm:w-1/3">
                <p className="sm:text-small small-caps ">Liquid</p>
              </div> */}
								<div className="year w-1/12">
									<p className="sm:text-small small-caps">2022</p>
								</div>
							</div>
							<div className="max-w w-full h-px bg-[var(--text-color)] opacity-20"></div>
							<div id="p4" className="project flex flex-col gap-y-2 sm:flex-row cursor-pointer py-4 sm:py-12">
								<div className="client sm:w-1/3">
									<p className="sm:text-small small-caps sm:pl-4">Shop Ateljé</p>
								</div>
								<div className="deliverables sm:w-1/3">
									<p className="sm:text-small small-caps">Shopify Theme</p>
								</div>
								<div className="category sm:w-1/3">
									<p className="sm:text-small small-caps">Development</p>
								</div>
								{/* <div className="tools sm:w-1/3">
                <p className="sm:text-small small-caps ">Liquid</p>
              </div> */}
								<div className="year w-1/12">
									<p className="sm:text-small small-caps">2022</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
