import Footer from './components/navigation/Footer';
import NavigationContainer from './components/navigation/NavigationContainer';
import './globals.css';

import { Roboto } from 'next/font/google';
// import Footer from '@/components/navigation/Footer';

const roboto = Roboto({
	weight: ['100', '300', '400', '500', '700', '900'],
	style: ['normal', 'italic'],
	subsets: ['latin'],
	display: 'swap',
});

export const metadata = {
	metadataBase: new URL('https://www.latzwebdesign.com/'),
	title: {
		default: 'Starter - Latz Web Design',
		template: `%s | Latz Web Design `,
	},
	description: ``,
	twitter: {
		card: 'summary_large_image',
	},
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={roboto.className}>
				<NavigationContainer />
				{children}
				<Footer />
			</body>
		</html>
	);
}
