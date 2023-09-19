import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Contacts from "@/components/Contacts";
import Products from "@/components/Products";
import SearchProducts from "@/components/SearchProducts";
import Testimonials from "@/components/Testimonials";

const HomePage = async () => {
	return (
		<main className='my-20'>
			<CallToAction />
			<SearchProducts />
			<About />
			<Products />
			<Testimonials />
			<Contacts />
		</main>
	);
};

export default HomePage;
