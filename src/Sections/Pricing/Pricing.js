import { styles } from "./Pricing.css";
import { CheckIcon } from "@heroicons/react/20/solid";

const Pricing = () => {
	return (
		<section className="Pricing">
			<div className="section-header">
				<p className="small-caps">Packages</p>
				<h2>Choose the right service for you.</h2>
			</div>
			<div className="packages">
				<div className="package">
					<div className="description">
						<h4 className="small-caps">Shopify/WordPress</h4>
						<p>Theme Development for your WordPress or Shopify site, designed to fit your needs and preferences.</p>
					</div>
					<ul>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							Provide your own design
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							Easy customization
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							Responsive design
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							Fast loading times
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							SEO-friendly
						</li>
					</ul>
				</div>
				<div class="package">
					<div className="description">
						<h4 className="small-caps">UI/UX Design and Development</h4>
						<p>Expert UI/UX design and app development services to create intuitive experiences.</p>
					</div>
					<ul>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							Custom icon design
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							User-centered design
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							Enhanced user engagement
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							Scalable solutions
						</li>
					</ul>
				</div>
				<div class="package">
					<div className="description">
						<h4 className="small-caps">Custom</h4>
						<p>From small adjustments to major projects, I offer a customisable service to meet any of your digital needs.</p>
					</div>
					<ul>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							Flexible scope
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							Personalised solutions
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							End-to-end support
						</li>
						<li>
							<CheckIcon class="size-5 text-accent inline mr-2" />
							High-quality deliverables
						</li>
					</ul>
				</div>
			</div>
		</section>
	);
};

export default Pricing;
