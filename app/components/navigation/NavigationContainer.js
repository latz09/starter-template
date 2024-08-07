import MobileNavbar from '../utils/modals/MobileNavbar';
import DesktopNavbar from './DesktopNavbar';
import { navigationLinks } from '@/data/navigationLinks';
const NavigationContainer = () => {
	return (
		<div className=' py-6  '>
			<MobileNavbar navLinks={navigationLinks}/>
			<DesktopNavbar navLinks={navigationLinks}/>
		</div>
	);
};

export default NavigationContainer;
