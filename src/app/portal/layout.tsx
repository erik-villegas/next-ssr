import "../globals.css";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="bg-blue-500 p-4">
            <div className="text-center text-white text-4xl font-bold">
              Header Component
            </div>
          </header>

          <div className="m-32">
            {children}
          </div>

          <div className="flex-grow"></div>
          
          <footer className="bg-blue-500 p-4 text-white">
            <div className="text-center">
              <div className="flex gap-4 flex-col">
                <div className="text-center text-white text-lg font-bold">
                  Footer Component
                </div>
                <ul className="flex justify-center space-x-4">
                  <li>
                    <a href="#" className="hover:text-yellow-300">
                      <FaFacebook size={32} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-300">
                      <FaTwitter size={32} />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-yellow-300">
                      <FaInstagram size={32} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
