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
        <div className="max-w-6xl mx-auto px-5 sm:px-6">{children}</div>
			<Footer />
		</>
	);
}

export default Page;
