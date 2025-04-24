"use client";
import Link from "next/link";
import "./NavBar.css";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const [isClickINEA, setisClickINEA] = useState(false);

  const [isClickOE, setisClickOE] = useState(false);
  const [isClickS, setisClickS] = useState(false);
  const [isClickCE, setisClickCE] = useState(false);
  const [isClickI, setisClickI] = useState(false);

  const navRef = useRef(null); // Referencia para el Navbar

  const toggleOE = () => {
    setisClickOE(!isClickOE);
    setisClickS(false);
    setisClickCE(false);
    setisClickI(false);
  };

  const toggleS = () => {
    setisClickOE(false);
    setisClickS(!isClickS);
    setisClickCE(false);
    setisClickI(false);
  };

  const toggleCE = () => {
    setisClickCE(!isClickCE);
    setisClickOE(false);
    setisClickS(false);
    setisClickI(false);
  };

  const toggleI = () => {
    setisClickI(!isClickI);
    setisClickOE(false);
    setisClickS(false);
    setisClickCE(false);
  };

  const toggleNavBar = () => {
    setisClick(!isClick);
  };
  const toggleNavBarINEA = () => {
    setisClickINEA(!isClickINEA);
  };
  const closeAllMenus = () => {
    setisClickOE(false);
    setisClickS(false);
    setisClickCE(false);
    setisClickI(false);
  };

  const closeMobileMenu = () => {
    setisClickINEA(false);
    setisClick(false);
  };
  // Detecta clics fuera del navbar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        closeAllMenus();
        closeMobileMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    // <div className="navBar text-white ">
    <div
      ref={navRef}
      className="navBar w-screen max-w-full"
    >
      <div className="bg-[#611232] w-full">
        {/* Menú gobierno */}
        <nav className="bg-[#611232]">
          <div className="flex items-center justify-between py-[0.1rem] px-4 md:px-[40px]">
            <div
              className="flex items-center justify-between"
              id="Msup"
            >
              <div className="flex items-center">
                <Link
                  href="https://www.gob.mx/sep"
                  passHref
                >
                  <img
                    src="/Logo_educacion_white_2025.svg"
                    alt="Educacion"
                    className=" hover:text-[#8B6C41]  rounded inline-block py-[0.3rem] mr-[1rem]"
                  />
                </Link>
              </div>
              <div
                className="flex items-center space-x-7"
                id="contenidoSup"
              >
                <div className="hidden md:block">
                  <div className="ml-4 flex items-end space-x-5">
                    <Link
                      href="/"
                      passHref
                      className="hover:text-[#D3C09B] p-1 rounded"
                    >
                      Sobre el INEA
                    </Link>
                    <Link
                      href="/#ubicacion"
                      passHref
                      className="hover:text-[#D3C09B] p-1 rounded"
                    >
                      Contacto
                    </Link>
                    <Link
                      href="/"
                      passHref
                      className="hover:text-[#D3C09B] p-1 rounded"
                    >
                      Mapa del sitio
                    </Link>
                    <Link
                      href="https://www.gob.mx/busqueda?utf8=%E2%9C%93"
                      passHref
                      className="hover:text-[#D3C09B] p-1 rounded"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

              {/*Boton para desplegable hamburguesa */}
              <div className="md:hidden flex items-end mr-[8vw]">
                <button
                  className="inline-flex items-center w-auto h-auto rounded-md text-white hover:text-[#E4CDA7]
                 focus:outline-none focus:ring-2 p-2 focus:ring-inset focus:ring-[#E4CDA7] px-auto"
                  onClick={toggleNavBar}
                >
                  {isClick ? (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>
          {isClick && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full">
                <Link
                  href="/"
                  passHref
                  className="hover:text-[#D3C09B] hover:bg-[#611232] block p-2 rounded w-full text-start"
                >
                  Sobre el INEA
                </Link>
                <Link
                  href="/#ubicacion"
                  passHref
                  className="hover:text-[#D3C09B] hover:bg-[#611232] block p-2 rounded w-full text-start"
                >
                  Contacto
                </Link>
                <Link
                  href="/"
                  passHref
                  className="hover:text-[#D3C09B] hover:bg-[#611232] block p-2 rounded w-full text-start"
                >
                  Mapa del sitio
                </Link>
                <Link
                  href="https://www.gob.mx/busqueda?utf8=%E2%9C%93"
                  passHref
                  className="hover:text-[#D3C09B] hover:bg-[#611232] p-2 rounded flex items-center justify-between w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-6 w-6 m-1"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          )}
        </nav>

        {/* Menú inferior */}
        <nav className="bg-[#A57F2C] lg:h-37px">
          <div className="flex items-center justify-between py-[0.06rem] px-4 md:px-[40px] h-37px">
            <div
              className="flex items-end justify-end"
              id="Minf"
            >
              <div className="flex items-end space-x-10">
                <div className="hidden md:block">
                  <div className="ml-4 flex items-end space-x-5">
                    <Link
                      href="/"
                      passHref
                      className="hover:text-[#CBB486] p-2 rounded grid grid-cols-2 grid-rows-1 gap-0 content-center "
                    >
                      <div>
                        <svg
                          fill="none"
                          viewBox="0 0 4 24"
                          stroke="currentColor"
                          className="h-5 w-full m-0 mr-1 text-base items-end"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </div>
                      <div>Inicio</div>
                    </Link>

                    {/* Servicios */}
                    <div className="group relative">
                      <Link
                        href="#"
                        onClick={toggleOE}
                        className="hover:text-[#CBB486] p-2 flex items-center justify-between w-full cursor-pointer"
                      >
                        Oferta educativa
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                          />
                        </svg>
                      </Link>
                      <div
                        className={`absolute left-0 mt-0.5  ${
                          // isClickOE ? "opacity-100" : "opacity-0"
                          isClickOE ? "block" : "hidden"
                        } bg-gray-100 text-black rounded shadow-lg transition-opacity duration-300 ease-in-out delay-200 z-50`}
                      >
                        <Link
                          href="/oferta-educativa/que-modalidad-elijo"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded truncate"
                        >
                          ¿Qué modalidad elijo?
                        </Link>
                        <Link
                          href="/oferta-educativa/presencial"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Presencial
                        </Link>
                        <Link
                          href="/oferta-educativa/enlinea"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded truncate"
                        >
                          En línea / APRENDEINEA
                        </Link>
                        <Link
                          href="/oferta-educativa/examen-unico"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Examen único
                        </Link>
                        <Link
                          href="/oferta-educativa/examen-diagnostico"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Exámenes diagnósticos
                        </Link>
                      </div>
                    </div>

                    {/* Trámites */}
                    <div className="group relative">
                      <Link
                        href="#"
                        onClick={toggleS}
                        className="hover:text-[#CBB486]  p-2 flex items-center justify-between w-full cursor-pointer"
                      >
                        Servicios
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                          />
                        </svg>
                      </Link>

                      <div
                        className={`absolute left-0 mt-0.5  ${
                          isClickS ? "block" : "hidden"
                        } bg-gray-100 text-black rounded shadow-lg transition-opacity duration-300 ease-in-out delay-200 z-50`}
                      >
                        <Link
                          href="http://certificacion.inea.gob.mx/DescCertificado.aspx"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded truncate"
                        >
                          Descarga tu certificado
                        </Link>
                        <Link
                          href="/servicios/solicitud-duplicados/"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded truncate"
                        >
                          Solicitud de duplicados
                        </Link>
                        <Link
                          href="https://www.gob.mx/curp/"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Consulta tu CURP
                        </Link>
                        <Link
                          href="/servicios/constancia-comipems"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Constancia COMIPEMS
                        </Link>
                        <Link
                          href="/servicios/reposicion-certificados"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Reposición certificados SEP
                        </Link>
                        <Link
                          href="/servicios/descargar-modulos"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Descarga material de estudio
                        </Link>
                        <Link
                          href="/servicios/revalidacion-extranjeros"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded truncate"
                        >
                          Revalidación a extranjeros
                        </Link>
                        <Link
                          href="/servicios/te-contactamos"
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded truncate">
                         Te contactamos
                         </Link>
                      </div>
                    </div>

                    {/* Ubicación */}
                    <div className="group relative ">
                      <Link
                        href="/ubicacion"
                        onClick={closeAllMenus}
                        className="hover:text-[#CBB486] p-2 rounded flex items-center justify-between w-full "
                      >
                        Ubicación
                      </Link>
                    </div>

                    {/* Control escolar */}
                    <div className="group relative">
                      <Link
                        href="#"
                        // onClick={() => setisClickCE(!isClickCE)}
                        onClick={toggleCE}
                        className="hover:text-[#CBB486] p-2 flex items-center justify-between w-full cursor-pointer"
                      >
                        Control escolar
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                          />
                        </svg>
                      </Link>
                      <div
                        className={`absolute left-0 mt-0.5  ${
                          isClickCE ? "block" : "hidden"
                        } bg-gray-100 text-black rounded shadow-lg transition-opacity duration-300 ease-in-out delay-200 z-50`}
                      >
                        {/* <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-300 delay-200 absolute bg-gray-100 text-black mt-2 rounded shadow-lg z-50"> */}
                        <Link
                          onClick={closeAllMenus}
                          href="http://www.inea.gob.mx/servicios_en_linea/Consulta_avance_academico.html"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded truncate"
                        >
                          Consulta tu avance académico
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://siga.inea.gob.mx/PEC/Account/Login?ReturnUrl=%2FPEC%2F"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          SIGA PEC
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://siga.inea.gob.mx/figuras/Account/Login?ReturnUrl=%2Ffiguras%2F"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          SIGA FIGURAS
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://sael.inea.gob.mx/Login.aspx?ReturnUrl=/&AspxAutoDetectCookieSupport=1"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          SAEL
                        </Link>
                        <Link
                          href=""
                          onClick={closeAllMenus}
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Departamento de Planeación
                        </Link>
                      </div>
                    </div>

                    {/* INTRANET */}
                    <div className="group relative">
                      <Link
                        href="#"
                        // onClick={() => setisClickI(!isClickI)}
                        onClick={toggleI}
                        className="hover:text-[#CBB486] p-2 flex items-center justify-between w-full cursor-pointer"
                      >
                        INTRANET
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 20 10"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1"
                            d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                          />
                        </svg>
                      </Link>

                      <div
                        className={`absolute left-0 mt-0.5  ${
                          isClickI ? "block" : "hidden"
                        } bg-gray-100 text-black rounded shadow-lg transition-opacity duration-300 ease-in-out delay-200 z-50`}
                      >
                        {/* <div className="opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-300 delay-200 absolute bg-gray-100 text-black mt-2 rounded shadow-lg z-50"> */}
                        <Link
                          onClick={closeAllMenus}
                          href="http://cdmx.inea.gob.mx/CATN2/login.asp"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded truncate"
                        >
                          Mesa de servicios
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://cdmx.inea.gob.mx/gestion/"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Sistema de Gestión
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://cdmx.inea.gob.mx/oficios/"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Sistema de Oficios
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://cdmx.inea.gob.mx/SIMA/"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          SIMA
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://sibiplac.inea.gob.mx/Sibiplac/Login.aspx?ReturnUrl=%2fSibiplac%2fReportes.aspx"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          SIBIPLAC
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://plazas.conevyt.org.mx:8080/plazas/"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          SINAPLAC
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://cdmx.inea.gob.mx/comipems/login.asp"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded truncate"
                        >
                          Constancias COMIPEMS
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://df.sasa.inea.gob.mx/INEAGUI/guiLogin.aspx?ReturnUrl=%2fINEAGUI%2fdefault.aspx"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          SASA
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="http://satic.inea.gob.mx/"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          SATIC
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="https://login.microsoftonline.com/login.srf?wa=wsignin1.0&rpsnv=4&ct=1420848406&rver=6.4.6456.0&wp=MCMBI&wreply=https://portal.office.com/landing.aspx?target=%2fdefault.aspx&lc=2058&id=501392&sso_reload=true"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Correo Institucional
                        </Link>
                        <Link
                          onClick={closeAllMenus}
                          href="/src/app/INTRANET/inicio-sesion"
                          className="block text-gray-900 hover:bg-[#A57F2C] hover:text-white p-2 rounded"
                        >
                          Iniciar sesion
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Boton hamburguesa */}
              <div className="md:hidden flex mr-[15px]">
                <button
                  className="inline-flex items-center justify-center  p-2 rounded-md text-white hover:text-[#E4CDA7]
                 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#E4CDA7]"
                  onClick={toggleNavBarINEA}
                >
                  {isClickINEA ? (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="h-6 w-6"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 6h16M4 12h16m-7 6h7"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          </div>

          {isClickINEA && (
            <div className="md:hidden block bg-[#A57F2C]">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 w-full">
                <Link
                  href="/"
                  passHref
                  onClick={closeAllMenus && closeMobileMenu}
                  className="hover:text-[#611232] p-1 rounded flex items-center justify-between w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="h-5 w-auto m-1 mr-2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>
                  <span className="w-full mr-0">Inicio</span>
                </Link>

                {/* Oferta educativa */}
                <div className="group relative">
                  <button
                    onClick={toggleOE}
                    //
                    // hover:text-[#D3C09B] p-2 flex items-center justify-between w-full
                    className="text-left hover:text-[#611232] p-2  flex items-center justify-between w-full "
                  >
                    Oferta educativa
                    <svg
                      className="w-2.5 h-2.5 ms-2.5 hover:text-[#611232]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                      />
                    </svg>
                  </button>

                  {isClickOE && (
                    // hidden group-hover:block absolute bg-gray-100 mt-2 rounded shadow-lg text-black
                    <div className="pl-4 space-y-1">
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/oferta-educativa/que-modalidad-elijo"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232] p-2 rounded truncate"
                      >
                        ¿Qué modalidad elijo?
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/oferta-educativa/presencial"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Presencial
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/oferta-educativa/enlinea"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded truncate"
                      >
                        En línea / APRENDEINEA
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/oferta-educativa/examen-unico"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Examen único
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/oferta-educativa/examen-diagnostico"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Exámenes diagnósticos
                      </Link>
                    </div>
                  )}
                </div>

                {/* Servicios */}
                <div className="group relative">
                  <button
                    onClick={toggleS}
                    className="text-left hover:text-[#611232]  p-2  flex items-center justify-between w-full "
                  >
                    Servicios
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                      />
                    </svg>
                  </button>
                  {isClickS && (
                    <div className="pl-4 space-y-1">
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://certificacion.inea.gob.mx/DescCertificado.aspx"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded truncate"
                      >
                        Descarga tu certificado
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/servicios/solicitud-duplicados"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded truncate "
                      >
                        Solicitud de duplicados
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="https://www.gob.mx/curp/"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Consulta tu CURP
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/servicios/constancia-comipems"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Constancia COMIPEMS
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/servicios/reposicion-certificados"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Reposición certificados SEP
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/servicios/descargar-modulos"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Descarga material de estudio
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/servicios/revalidacion-extranjeros"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded truncate"
                      >
                        Revalidación a extranjeros
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/servicios/te-contactamos"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded truncate"
                      >
                        Te contactamos
                      </Link>
                    </div>
                  )}
                </div>

                {/* Ubicación */}
                <div className="group relative">
                  <Link
                    onClick={closeAllMenus && closeMobileMenu}
                    href="/ubicacion"
                    className="hover:text-[#611232]  p-2 rounded"
                  >
                    Ubicación
                  </Link>
                </div>

                {/* Control escolar */}
                <div className="group relative">
                  <button
                    onClick={toggleCE}
                    className="text-left hover:text-[#611232]  p-2  flex items-center justify-between w-full "
                  >
                    Control escolar
                    <svg
                      class="w-2.5 h-2.5 ms-2.5 hover:text-[#611232] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                      />
                    </svg>
                  </button>
                  {isClickCE && (
                    <div className="pl-4 space-y-1">
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://www.inea.gob.mx/servicios_en_linea/Consulta_avance_academico.html"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded truncate"
                      >
                        Consulta tu avance académico
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://siga.inea.gob.mx/PEC/Account/Login?ReturnUrl=%2FPEC%2F"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        SIGA PEC
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://siga.inea.gob.mx/figuras/Account/Login?ReturnUrl=%2Ffiguras%2F"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        SIGA FIGURAS
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://sael.inea.gob.mx/Login.aspx?ReturnUrl=/&AspxAutoDetectCookieSupport=1"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        SAEL
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href=""
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Departamento de Planeación
                      </Link>
                    </div>
                  )}
                </div>

                {/* INTRANET */}
                <div className="group relative">
                  <button
                    onClick={toggleI}
                    className="text-left hover:text-[#611232]  p-2  flex items-center justify-between w-full "
                  >
                    INTRANET
                    <svg
                      className="w-2.5 h-2.5 ms-2.5 hover:text-[#611232] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z"
                      />
                    </svg>
                  </button>
                  {isClickI && (
                    <div className="pl-4 space-y-1">
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://cdmx.inea.gob.mx/CATN2/login.asp"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded truncate"
                      >
                        Mesa de servicios
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://cdmx.inea.gob.mx/gestion/"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Sistema de Gestión
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://cdmx.inea.gob.mx/oficios/"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Sistema de Oficios
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://cdmx.inea.gob.mx/SIMA/"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        SIMA
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://sibiplac.inea.gob.mx/Sibiplac/Login.aspx?ReturnUrl=%2fSibiplac%2fReportes.aspx"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        SIBIPLAC
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://plazas.conevyt.org.mx:8080/plazas/"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        SINAPLAC
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://cdmx.inea.gob.mx/comipems/login.asp"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded truncate"
                      >
                        Constancias COMIPEMS
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://df.sasa.inea.gob.mx/INEAGUI/guiLogin.aspx?ReturnUrl=%2fINEAGUI%2fdefault.aspx"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        SASA
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="http://satic.inea.gob.mx/"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        SATIC
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="https://login.microsoftonline.com/login.srf?wa=wsignin1.0&rpsnv=4&ct=1420848406&rver=6.4.6456.0&wp=MCMBI&wreply=https://portal.office.com/landing.aspx?target=%2fdefault.aspx&lc=2058&id=501392&sso_reload=true"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Correo Institucional
                      </Link>
                      <Link
                        onClick={closeAllMenus && closeMobileMenu}
                        href="/src/app/INTRANET/inicio-sesion"
                        className="block hover:bg-[#A57F2C] hover:text-[#611232]  p-2 rounded"
                      >
                        Iniciar sesion
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
