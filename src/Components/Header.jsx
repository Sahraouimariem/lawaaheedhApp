import React from "react";

function Header() {
  return (
    <header className="text-gray-600 body-font h-20 bg-gray-200">
      <div className="container mx-auto flex flex-wrap py-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 md:mb-0">
          <img style={{borderRadius:"50%",height:"50px"}}
            src="https://scontent.ftun1-2.fna.fbcdn.net/v/t39.30808-6/438174567_1019723182843887_2638632724819371443_n.jpg?stp=c0.155.1131.1131a_dst-jpg_s206x206_tt6&_nc_cat=105&ccb=1-7&_nc_sid=52bb43&_nc_ohc=TAKN6ga2hbsQ7kNvgH9zTT2&_nc_zt=23&_nc_ht=scontent.ftun1-2.fna&_nc_gid=Afsub-lm2QU1vXPowhj3rFT&oh=00_AYC001OWahGkDmSq4BmmS9AxJlbdBFXi38peK2hDi4xbPg&oe=67819D8F"
            alt=""
          />
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <a id="home" href="/" className="mr-5  text-gray-950 hover:text-red-800 no-underline font-bold">Home</a>
          <a href="/Chocolats" className="mr-5 text-gray-950 hover:text-red-800 no-underline font-bold">Chocolats & Macarons</a>
          <a href="/products" className="mr-5 text-gray-950 hover:text-red-800 no-underline font-bold">Products</a>
          <a className="mr-5 text-gray-950 hover:text-red-800 no-underline font-bold">Mariage & Naissance</a>
        </nav>
        <a className="d-inline-block" href="#">
          <svg
            width={16}
            height={16}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.5 0.5H2.16667L2.5 2.16667M3.83333 8.83333H12.1667L15.5 2.16667H2.5M3.83333 8.83333L2.5 2.16667M3.83333 8.83333L1.92259 10.7441C1.39762 11.269 1.76942 12.1667 2.51184 12.1667H12.1667M12.1667 12.1667C11.2462 12.1667 10.5 12.9129 10.5 13.8333C10.5 14.7538 11.2462 15.5 12.1667 15.5C13.0871 15.5 13.8333 14.7538 13.8333 13.8333C13.8333 12.9129 13.0871 12.1667 12.1667 12.1667ZM5.5 13.8333C5.5 14.7538 4.75381 15.5 3.83333 15.5C2.91286 15.5 2.16667 14.7538 2.16667 13.8333C2.16667 12.9129 2.91286 12.1667 3.83333 12.1667C4.75381 12.1667 5.5 12.9129 5.5 13.8333Z"
              stroke="black"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </header>
  );
}

export default Header;
