import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header";


interface PageProps {
  children: ReactNode;
}

const Page: React.FC<PageProps> = ({children}) => {
  return (
		<>
			<Header />
				{children}
			<Footer />
		</>
	);
}

export default Page;
