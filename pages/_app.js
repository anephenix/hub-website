import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import { Theme, NavBar, Page } from '@anephenix/ui';
import Footer from '../src/components/footer/Footer';
import Logo from '../src/components/logo/Logo';

// Data
import links from '../data/navbar-links';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<title>Hub - A realtime framework</title>
				</Head>
				<Theme>
					<Page>
						<NavBar logo={<Logo />} links={links} loggedIn={false} />
						<div className="page container withSidePadding">
							<Component {...pageProps} />
						</div>
						<Footer />
					</Page>
				</Theme>
			</>
		);
	}
}
export default MyApp;