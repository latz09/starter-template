import Link from 'next/link';
import Logo from '../lib/Logo';


const currentYear = new Date().getFullYear();
const CLIENT_BUSINESS_NAME = 'Your Business Name';

const Footer = () => {
	return (
		<footer>
            <div className="py-16 grid place-items-center ">
                <Logo 
                    height = {200}
                    width = {200}
                />
            </div>
			<CopyRight />
		</footer>
	);
};

export default Footer;

const CopyRight = () => {
	// Get the current year
	

	return (
		<div className='text-center pb-3 mt-2 px-2  grid gap-3 text-dark'>
			<Link href='/legal/privacy-policy'>
				<span className='text-xs font-semibold'>Privacy Policy</span>
			</Link>
			<a
				href='https://www.latzwebdesign.com'
				target='_blank'
				rel='noopener noreferrer'
				className='flex items-center justify-center gap-2  text-dark '
			>
				<p>
					{`© ${currentYear} by ${CLIENT_BUSINESS_NAME}. Handcrafted with care by `}
					<span className='font-bold '>LatzWebDesign.</span>
				</p>
			</a>
		</div>
	);
};