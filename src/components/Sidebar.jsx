import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SidebarLinks = () => {
  const { logout } = useAuth0();
  return (
    <ul className=''>
      <SidebarRoute to='' title='Inicio' icon='fas fa-rocket' />
      <SidebarRoute to='/page2' title='Pagina2' icon='fas fa-user-astronaut' />
      <SidebarRoute to='/category1' title='Catego 1' icon='fab fa-amazon' />
      <SidebarRoute to='/category1/page1' title='Test' icon='fas fa-car' />
      <div className=" mb-10">
     <ul className="flex flex-col ">
        <button className=" text-left hover:bg-gray-500 py-2 text-gray-300 pl-5" onClick={() => logout({ returnTo: window.location.origin })}  >
        <i className="fas fa-sign-out-alt fa-lg text-gray-300 w-9 "></i>Cerrar Sesión </button>
     </ul>
     </div>
      
    </ul>
  );
};

const Logo = () => {
  return (
    <div className='w-full flex flex-col items-center justify-center mt-10 mb-16 ml-3'>
      <svg width="149" height="52" viewBox="0 0 149 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.83384 42.343H11.4423V45.648H1.55235V28.0714H5.83384V42.343ZM24.4261 42.5433H17.8661L16.8146 45.648H12.3328L18.6924 28.0714H23.6499L30.0096 45.648H25.4777L24.4261 42.5433ZM23.3244 39.2383L21.1461 32.8035L18.9929 39.2383H23.3244ZM36.1515 28.0714V38.5873C36.1515 39.6389 36.4102 40.4485 36.9277 41.016C37.4451 41.5835 38.2046 41.8673 39.2061 41.8673C40.2076 41.8673 40.9755 41.5835 41.5096 41.016C42.0438 40.4485 42.3108 39.6389 42.3108 38.5873V28.0714H46.5923V38.5623C46.5923 40.1313 46.2585 41.4583 45.5908 42.5433C44.9231 43.6283 44.0218 44.4462 42.8867 44.997C41.7683 45.5479 40.5164 45.8233 39.131 45.8233C37.7456 45.8233 36.502 45.5562 35.4003 45.0221C34.3154 44.4712 33.4557 43.6533 32.8214 42.5683C32.1871 41.4667 31.87 40.1313 31.87 38.5623V28.0714H36.1515ZM65.3227 45.648H61.0412L53.8803 34.8066V45.648H49.5988V28.0714H53.8803L61.0412 38.9629V28.0714H65.3227V45.648ZM67.7001 36.8346C67.7001 35.0987 68.0757 33.5547 68.8268 32.2026C69.5779 30.8339 70.6212 29.7739 71.9566 29.0228C73.3086 28.255 74.8359 27.8711 76.5385 27.8711C78.625 27.8711 80.411 28.4219 81.8966 29.5236C83.3822 30.6252 84.3754 32.1275 84.8761 34.0304H80.169C79.8185 33.2959 79.3177 32.7368 78.6667 32.3529C78.0324 31.9689 77.3063 31.777 76.4884 31.777C75.1698 31.777 74.1015 32.236 73.2836 33.1541C72.4657 34.0721 72.0567 35.299 72.0567 36.8346C72.0567 38.3703 72.4657 39.5972 73.2836 40.5152C74.1015 41.4333 75.1698 41.8923 76.4884 41.8923C77.3063 41.8923 78.0324 41.7004 78.6667 41.3164C79.3177 40.9325 79.8185 40.3733 80.169 39.6389H84.8761C84.3754 41.5418 83.3822 43.0441 81.8966 44.1457C80.411 45.2307 78.625 45.7732 76.5385 45.7732C74.8359 45.7732 73.3086 45.3976 71.9566 44.6465C70.6212 43.8787 69.5779 42.8187 68.8268 41.4667C68.0757 40.1146 67.7001 38.5706 67.7001 36.8346ZM102.721 28.0714V45.648H98.4397V38.412H91.7796V45.648H87.4981V28.0714H91.7796V34.9568H98.4397V28.0714H102.721ZM110.093 31.5016V35.057H115.827V38.362H110.093V42.2178H116.578V45.648H105.812V28.0714H116.578V31.5016H110.093ZM128.322 45.648L124.666 39.013H123.639V45.648H119.358V28.0714H126.544C127.929 28.0714 129.106 28.3134 130.074 28.7975C131.059 29.2815 131.793 29.9492 132.277 30.8005C132.762 31.6351 133.004 32.5698 133.004 33.6048C133.004 34.7732 132.67 35.8164 132.002 36.7345C131.351 37.6526 130.383 38.3035 129.098 38.6875L133.154 45.648H128.322ZM123.639 35.9834H126.293C127.078 35.9834 127.662 35.7914 128.046 35.4075C128.447 35.0236 128.647 34.4811 128.647 33.78C128.647 33.1123 128.447 32.5865 128.046 32.2026C127.662 31.8187 127.078 31.6268 126.293 31.6268H123.639V35.9834Z" fill="#A5143A"/>
        <path d="M14.4719 10.9317C14.4719 11.8665 14.2466 12.7428 13.7959 13.5607C13.3619 14.3786 12.6692 15.0379 11.7178 15.5387C10.783 16.0394 9.59789 16.2898 8.16238 16.2898H5.23293V23H1.72762V5.5235H8.16238C9.51442 5.5235 10.6662 5.75719 11.6176 6.22457C12.5691 6.69194 13.2785 7.33458 13.7458 8.15249C14.2299 8.9704 14.4719 9.8968 14.4719 10.9317ZM8.01215 13.4605C8.98028 13.4605 9.69804 13.2435 10.1654 12.8096C10.6328 12.3589 10.8665 11.7329 10.8665 10.9317C10.8665 9.22912 9.91503 8.37783 8.01215 8.37783H5.23293V13.4605H8.01215ZM25.9743 23L22.1185 16.1897H20.466V23H16.9607V5.5235H23.5206C24.8727 5.5235 26.0244 5.76554 26.9759 6.2496C27.9273 6.71698 28.6367 7.35962 29.1041 8.17753C29.5882 8.97874 29.8302 9.88011 29.8302 10.8816C29.8302 12.0334 29.4963 13.0766 28.8287 14.0114C28.161 14.9294 27.1678 15.5637 25.8492 15.9143L30.0305 23H25.9743ZM20.466 13.5607H23.3954C24.3469 13.5607 25.0563 13.3353 25.5237 12.8847C25.991 12.4173 26.2247 11.7746 26.2247 10.9567C26.2247 10.1555 25.991 9.53792 25.5237 9.10393C25.0563 8.65325 24.3469 8.42791 23.3954 8.42791H20.466V13.5607ZM41.1129 23.1753C39.4771 23.1753 37.9748 22.7914 36.6061 22.0235C35.2373 21.2557 34.1524 20.1957 33.3511 18.8437C32.5499 17.475 32.1493 15.9309 32.1493 14.2117C32.1493 12.5091 32.5499 10.9818 33.3511 9.62973C34.1524 8.26099 35.2373 7.1927 36.6061 6.42487C37.9748 5.65704 39.4771 5.27312 41.1129 5.27312C42.7654 5.27312 44.2677 5.65704 45.6198 6.42487C46.9885 7.1927 48.0651 8.26099 48.8496 9.62973C49.6509 10.9818 50.0515 12.5091 50.0515 14.2117C50.0515 15.9309 49.6509 17.475 48.8496 18.8437C48.0651 20.1957 46.9885 21.2557 45.6198 22.0235C44.251 22.7914 42.7487 23.1753 41.1129 23.1753ZM41.1129 20.0455C42.1645 20.0455 43.0909 19.8118 43.8921 19.3445C44.6933 18.8604 45.3193 18.176 45.77 17.2913C46.2207 16.4067 46.446 15.3801 46.446 14.2117C46.446 13.0432 46.2207 12.025 45.77 11.157C45.3193 10.2724 44.6933 9.59634 43.8921 9.12897C43.0909 8.66159 42.1645 8.42791 41.1129 8.42791C40.0613 8.42791 39.1266 8.66159 38.3087 9.12897C37.5075 9.59634 36.8815 10.2724 36.4308 11.157C35.9801 12.025 35.7548 13.0432 35.7548 14.2117C35.7548 15.3801 35.9801 16.4067 36.4308 17.2913C36.8815 18.176 37.5075 18.8604 38.3087 19.3445C39.1266 19.8118 40.0613 20.0455 41.1129 20.0455ZM62.8498 5.5235V17.7921C62.8498 19.4947 62.3574 20.8217 61.3725 21.7731C60.3877 22.7079 59.069 23.1753 57.4165 23.1753C55.7473 23.1753 54.3953 22.6912 53.3604 21.7231C52.3422 20.7549 51.8331 19.4029 51.8331 17.6669H55.3384C55.3551 18.4181 55.5303 19.0023 55.8642 19.4196C56.2147 19.8369 56.7155 20.0455 57.3665 20.0455C58.0008 20.0455 58.4848 19.8452 58.8187 19.4446C59.1525 19.044 59.3194 18.4932 59.3194 17.7921V5.5235H62.8498ZM70.4441 8.35279V12.7344H76.328V15.5136H70.4441V20.1457H77.0792V23H66.9388V5.49846H77.0792V8.35279H70.4441ZM79.4134 14.2367C79.4134 12.5174 79.7973 10.9818 80.5651 9.62973C81.3496 8.26099 82.4096 7.20105 83.7449 6.44991C85.097 5.68208 86.6076 5.29816 88.2768 5.29816C90.2298 5.29816 91.9407 5.79892 93.4096 6.80044C94.8785 7.80196 95.905 9.18739 96.4893 10.9567H92.4581C92.0575 10.1221 91.49 9.49619 90.7556 9.07889C90.0378 8.66159 89.2032 8.45294 88.2518 8.45294C87.2336 8.45294 86.3238 8.69498 85.5226 9.17904C84.7381 9.64642 84.1205 10.3141 83.6698 11.1821C83.2358 12.0501 83.0188 13.0683 83.0188 14.2367C83.0188 15.3885 83.2358 16.4067 83.6698 17.2913C84.1205 18.1593 84.7381 18.8354 85.5226 19.3194C86.3238 19.7868 87.2336 20.0205 88.2518 20.0205C89.2032 20.0205 90.0378 19.8118 90.7556 19.3945C91.49 18.9605 92.0575 18.3262 92.4581 17.4916H96.4893C95.905 19.2777 94.8785 20.6715 93.4096 21.673C91.9574 22.6578 90.2465 23.1502 88.2768 23.1502C86.6076 23.1502 85.097 22.7747 83.7449 22.0235C82.4096 21.2557 81.3496 20.1957 80.5651 18.8437C79.7973 17.4916 79.4134 15.956 79.4134 14.2367ZM111.376 5.5235V8.35279H106.719V23H103.214V8.35279H98.5568V5.5235H111.376Z" fill="white"/>
        <g clip-path="url(#clip0_243:1141)">
        <path d="M134.839 0.309937C135.165 0.309937 135.491 0.309937 135.817 0.309937C135.868 0.325336 135.918 0.34867 135.97 0.355203C137.03 0.492869 137.752 1.13547 138.015 2.17426C138.269 3.17899 138.094 4.16365 137.844 5.13384C137.485 6.52777 136.89 7.82883 136.198 9.08742C135.046 11.1846 133.633 13.0933 132.016 14.8526C131.835 15.05 131.77 15.2423 131.841 15.5045C131.958 15.9371 132.054 16.3758 132.151 16.8135C132.274 17.366 132.162 17.8775 131.766 18.2774C129.887 20.1735 127.998 22.0588 126.103 23.9385C125.99 24.0501 125.792 24.1411 125.641 24.1322C125.439 24.1205 125.4 23.9003 125.365 23.722C125.359 23.6917 125.351 23.6618 125.345 23.6315C125.145 22.3547 124.947 21.0779 124.742 19.8016C124.654 19.2518 124.768 18.7548 125.105 18.3134C125.308 18.0478 125.31 17.9629 125.068 17.7198C123.625 16.2764 122.182 14.8335 120.739 13.391C120.509 13.1614 120.426 13.1651 120.165 13.3621C119.768 13.6626 119.32 13.8231 118.819 13.7466C117.48 13.5427 116.143 13.3247 114.805 13.1175C114.598 13.0853 114.421 13.0149 114.299 12.8375C114.299 12.7909 114.299 12.7442 114.299 12.698C114.411 12.551 114.51 12.3923 114.636 12.2593C114.913 11.9663 115.204 11.6863 115.489 11.4011C117.025 9.86535 118.561 8.33002 120.096 6.79283C120.55 6.33877 121.088 6.18384 121.711 6.3271C122.118 6.42044 122.527 6.50864 122.928 6.62297C123.29 6.72657 123.598 6.6785 123.861 6.3985C123.93 6.32524 124.011 6.2641 124.086 6.1969C126.067 4.42871 128.208 2.89199 130.587 1.70153C131.592 1.19846 132.629 0.772867 133.729 0.520869C134.096 0.437802 134.469 0.379936 134.839 0.309937ZM134.751 6.26364C134.746 4.89444 133.639 3.78658 132.276 3.80432C130.908 3.82205 129.812 4.86878 129.82 6.2823C129.828 7.7299 130.959 8.73836 132.294 8.74069C133.664 8.74256 134.756 7.63563 134.751 6.26364Z" fill="#A5143A"/>
        <path d="M116.678 21.5306C116.723 21.3439 116.776 21.0135 116.884 20.7013C117.492 18.9415 118.298 17.2839 119.474 15.8256C119.61 15.6571 119.763 15.5013 119.908 15.3398C120.037 15.1956 120.183 15.1746 120.338 15.2959C120.417 15.3575 120.494 15.4233 120.565 15.4943C121.395 16.3212 122.222 17.15 123.05 17.9783C123.094 18.0222 123.138 18.066 123.179 18.1132C123.4 18.3675 123.382 18.4776 123.15 18.7217C122.15 19.7712 120.897 20.3798 119.556 20.8679C118.715 21.174 117.909 21.5754 117.09 21.9398C116.734 22.0975 116.669 22.0602 116.678 21.5306Z" fill="#A5143A"/>
        </g>
        <defs>
        <clipPath id="clip0_243:1141">
        <rect width="23.84" height="23.8232" fill="white" transform="translate(114.298 0.309937)"/>
        </clipPath>
        </defs>
      </svg>
    </div>
  );
};

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  return (
    <div className='flex flex-col md:flex-row flex-no-wrap md:h-full'>
      {/* Sidebar starts */}

      <div className='sidebar hidden md:flex w-56  ml-6 my-3'>
        <div className='w-full'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
      <div className='flex md:hidden w-full justify-between bg-gray-800 p-2 text-white'>
        <i className={`fas fa-${open ? 'times' : 'bars'}`} onClick={() => setOpen(!open)} />
        <i className='fas fa-home' />
      </div>
      {open && <ResponsiveSidebar />}
      {/* Sidebar ends */}
    </div>
  );
};

const ResponsiveSidebar = () => {
  return (
    <div>
      <div
        className='sidebar h-full z-40 absolute md:h-full sm:hidden transition duration-150 ease-in-out'
        id='mobile-nav'
      >
        <div className='px-8'>
          <Logo />
          <SidebarLinks />
        </div>
      </div>
    </div>
  );
};

const SidebarRoute = ({ to, title, icon }) => {
  return (
    <li className=" mx-4 mb-3 text-xs">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? 'sidebar-route  sidebar-route-active text-white '
            : 'sidebar-route sidebar-route-disable  text-white hover:text-white '
        }
      >
        <div className='flex items-center'>
          <i className={icon} />
          <span className='text-sm  ml-2'>{title}</span>
          
          
        </div>
      </NavLink>
    </li>
  );
};

export default Sidebar;
