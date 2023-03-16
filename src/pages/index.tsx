import Head from "next/head";
import * as css from "../styles";

export default function Home() {
	return (
		<>
			<Head>
				<title>Topup Store</title>
				<meta
					name="description"
					content="Your trusted topup voucher platform"
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<p className={css.Title}>Topup Store</p>
		</>
	);
}
