import Link from 'next/link';
import Logo from '../lib/Logo';

const DesktopNavbar = ({ navLinks }) => {
	return (
		<div className='hidden lg:flex items-center gap-12 max-w-7xl mx-auto '>
			<Logo height={150} width={150} />
			<NavigationLinks navLinks={navLinks} />
		</div>
	);
};

export default DesktopNavbar;

const NavigationLinks = ({ navLinks }) => {
	return (
		<div className='flex justify-around items-center  w-full '>
			{navLinks.map((link, index) => (
				<Link key={index} href={link.href} passHref>
					<span className='block text-lg font-semibold text-dark hover:text-primary transition cursor-pointer'>
						{link.title}
					</span>
				</Link>
			))}
		</div>
	);
};
