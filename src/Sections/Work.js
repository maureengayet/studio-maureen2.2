const Work = () => {
	return (
		<section className="bg-1 py-32">
			<div class="max-w wide">
				<h3 className="text-8xl serif">Selected Work</h3>
				<div className="preview">
					<div className="preview-img"></div>
				</div>
				<div className="container">
					<div className="projects">
						<div className="project">
							<div className="client">
								<p>Client</p>
							</div>
							<div className="category">
								<p>category</p>
							</div>
							<div className="tools">
								<p>Tools</p>
							</div>
							<div className="year">
								<p>Year</p>
							</div>
						</div>
						<div className="project">
							<div className="client">
								<p>Voltact</p>
							</div>
							<div className="category">
								<p>Branding</p>
							</div>
							<div className="tools">
								<p>Figma</p>
							</div>
							<div className="year">
								<p>2024</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
