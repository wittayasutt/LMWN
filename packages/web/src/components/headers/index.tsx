import { Helmet } from 'react-helmet-async';

type HeaderProps = {
	title: string;
	description: string;
};

const DefaultHeader = ({ title, description }: HeaderProps) => {
	return (
		<Helmet>
			<title>{title}</title>
			<link rel='icon' href='/favicon.ico' />
			<meta name='viewport' content='width=device-width, initial-scale=1' />
			<meta name='description' content={description} />
			<meta name='keywords' content={title} />

			<meta property='og:site_name' content={title} />
			<meta property='og:title' content={title} />
			<meta property='og:description' content={description} />
		</Helmet>
	);
};

export default DefaultHeader;
