import App from 'next/app';
import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { Theme, NavBar, Page } from '@anephenix/ui';
import Footer from '../src/components/footer/Footer';

// Data
import links from '../data/navbar-links';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;
		const logo = (
			<Link href="/">
				<div
					style={{ fontWeight: 'bold', cursor: 'pointer' }}
					id="logo"
				>
					Hub
				</div>
			</Link>
		);
		return (
			<>
				<Head>
					<meta
						name="viewport"
						content="initial-scale=1.0, width=device-width"
					/>
					<title>Hub - A realtime framework for Node.js</title>
				</Head>
				<Theme>
					<Page>
						<NavBar logo={logo} links={links} loggedIn={false} />
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