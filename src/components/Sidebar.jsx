import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const SidebarLinks = () => {
  const { logout } = useAuth0();
  return (
    <ul className='h-full flex flex-col '>
      <SidebarRoute to='/proyectos' title='Proyectos' icon='M2.39717 5.44013L4.69252 4.63042C4.21861 5.26837 3.81159 5.95339 3.4779 6.67465L2.39717 5.44013ZM0.802776 5.57337L2.92884 8.00249L2.62117 8.77229C2.57434 8.88912 2.5628 9.01712 2.58797 9.14044C2.61314 9.26376 2.67391 9.377 2.76278 9.46614L2.96553 9.66825C1.86871 10.904 1.26365 12.1971 0.676615 13.9569C0.638793 14.0703 0.633304 14.192 0.660763 14.3083C0.688223 14.4247 0.747546 14.5311 0.832084 14.6156C0.916621 14.7001 1.02303 14.7595 1.13939 14.7869C1.25575 14.8144 1.37745 14.8089 1.49087 14.7711C3.25068 14.1841 4.54383 13.579 5.7797 12.4823L5.98181 12.6844C6.07088 12.7733 6.18409 12.8342 6.30743 12.8595C6.43076 12.8848 6.5588 12.8734 6.6757 12.8266L7.44554 12.519L9.87478 14.6449C9.95391 14.7142 10.0488 14.7631 10.1512 14.7872C10.2536 14.8113 10.3603 14.81 10.4621 14.7833C10.5638 14.7566 10.6575 14.7054 10.7349 14.6342C10.8123 14.5629 10.871 14.4738 10.9059 14.3746L12.828 8.92934C14.1046 7.41879 14.8049 5.50493 14.8047 3.52721V1.28732C14.8047 1.11662 14.7369 0.952904 14.6162 0.832197C14.4955 0.711489 14.3317 0.643677 14.161 0.643677H11.921C9.94351 0.6434 8.0298 1.34345 6.51928 2.61967L1.07376 4.54224C0.974665 4.57724 0.885641 4.63596 0.81447 4.71329C0.743298 4.79061 0.692144 4.88419 0.665476 4.98584C0.638808 5.08749 0.637437 5.19413 0.661483 5.29643C0.685528 5.39873 0.73426 5.49359 0.803419 5.57272L0.802776 5.57337ZM2.37206 13.0757C2.77629 12.0999 3.22944 11.3237 3.87763 10.5803L4.8676 11.5702C4.12416 12.2184 3.34788 12.6715 2.37206 13.0757ZM6.59202 11.4743L6.24829 11.1306L4.31726 9.19967L3.97353 8.85596L4.43055 7.71349C4.84995 6.66541 5.43883 5.69341 6.17363 4.83639L6.54438 4.40322C7.20919 3.6277 8.03394 3.00521 8.96202 2.57846C9.8901 2.15172 10.8995 1.93084 11.921 1.93097H13.5174V3.52721C13.5175 4.54866 13.2966 5.55804 12.8698 6.48608C12.4431 7.41411 11.8205 8.23882 11.045 8.90359L10.6118 9.27433C9.75471 10.0091 8.78267 10.5979 7.73455 11.0173L6.59202 11.4743ZM10.008 13.0506L8.77344 11.9706C9.49475 11.6369 10.1798 11.2299 10.8178 10.756L10.008 13.0506ZM9.65528 5.1492C9.65528 4.9785 9.7231 4.81478 9.84381 4.69408C9.96452 4.57337 10.1282 4.50556 10.299 4.50556C10.4697 4.50556 10.6334 4.57337 10.7541 4.69408C10.8748 4.81478 10.9426 4.9785 10.9426 5.1492C10.9426 5.31991 10.8748 5.48362 10.7541 5.60433C10.6334 5.72504 10.4697 5.79285 10.299 5.79285C10.1282 5.79285 9.96452 5.72504 9.84381 5.60433C9.7231 5.48362 9.65528 5.31991 9.65528 5.1492ZM10.299 3.21826C9.78682 3.21826 9.29565 3.4217 8.93351 3.78382C8.57137 4.14594 8.36793 4.63709 8.36793 5.1492C8.36793 5.66132 8.57137 6.15246 8.93351 6.51458C9.29565 6.87671 9.78682 7.08014 10.299 7.08014C10.8111 7.08014 11.3023 6.87671 11.6644 6.51458C12.0265 6.15246 12.23 5.66132 12.23 5.1492C12.23 4.63709 12.0265 4.14594 11.6644 3.78382C11.3023 3.4217 10.8111 3.21826 10.299 3.21826Z' />
      <SidebarRoute to='/dialogos' title='Mi perfil' icon='M14.724 16.7356C10.4028 16.7356 6.08164 16.7356 1.76045 16.7356C1.76148 16.5558 1.76148 16.3761 1.76321 16.1964C1.77012 15.4947 2.00564 14.872 2.4974 14.3455C2.65867 14.173 2.84791 14.0247 3.02438 13.8652C-0.832682 10.8901 -0.945953 5.50102 2.37273 2.33338C5.45831 -0.611957 9.94423 -0.54975 12.7822 1.30042C12.6099 1.64092 12.4376 1.98207 12.2659 2.32159C13.7512 3.33884 14.723 4.66778 15.1295 6.34343C15.5373 8.02499 15.2569 9.6224 14.3797 11.133C14.7441 11.3026 15.0963 11.4667 15.4482 11.6307C14.897 12.4885 14.2464 13.2405 13.4304 13.8679C14.0596 14.2977 14.483 14.8409 14.6301 15.535C14.7126 15.9256 14.6961 16.3349 14.724 16.7356ZM11.2237 1.76729C11.2047 1.75027 11.1981 1.74078 11.1885 1.73586C11.1633 1.7231 11.137 1.71164 11.1108 1.70083C9.228 0.935032 7.33003 0.903273 5.45037 1.67431C2.4677 2.89782 0.790053 5.78521 1.27456 8.83171C1.56188 10.64 2.5157 12.0792 4.0483 13.1826C4.25585 13.3319 4.45718 13.4586 4.73414 13.384C4.78732 13.3695 4.84844 13.3817 4.90577 13.3817C7.12904 13.3817 9.35232 13.3653 11.5749 13.3954C12.0162 13.4013 12.3474 13.2952 12.6503 13.0245C12.9949 12.7164 13.3416 12.4106 13.706 12.0874C13.631 12.0445 13.6038 12.0265 13.5744 12.0128C12.2459 11.3979 10.9167 10.7844 9.58957 10.1669C9.4984 10.1246 9.44901 10.1495 9.38064 10.2045C8.96623 10.5375 8.48104 10.6599 7.95095 10.5794C7.01647 10.4373 6.40246 9.64793 6.48637 8.72072C6.56062 7.89893 7.36664 7.23758 8.2804 7.25984C8.40783 7.26311 8.45859 7.21793 8.50832 7.12004C9.38685 5.38708 10.2685 3.65544 11.1491 1.92347C11.1757 1.87075 11.1999 1.81706 11.2237 1.76729ZM11.7424 3.36372C11.7275 3.38599 11.7106 3.40661 11.6989 3.42953C10.9833 4.83377 10.2692 6.23866 9.55192 7.64192C9.50979 7.7241 9.52499 7.77419 9.58542 7.84197C9.87412 8.16577 10.0275 8.54065 10.0002 8.96791C9.99292 9.08152 10.034 9.12834 10.1345 9.1745C11.002 9.57066 11.8667 9.97206 12.7325 10.3722C12.921 10.4592 13.1099 10.5467 13.2964 10.6328C14.7993 8.33406 14.2126 5.04331 11.7424 3.36372ZM13.4124 15.6146C13.2349 15.004 12.5291 14.5135 11.8256 14.5125C9.43658 14.5092 7.04755 14.5017 4.65851 14.5171C3.92709 14.5217 3.40839 14.8913 3.0969 15.518C3.08343 15.5452 3.08136 15.5772 3.07238 15.6146C6.52298 15.6146 9.96149 15.6146 13.4124 15.6146ZM8.82844 8.93288C8.83259 8.63167 8.55736 8.36811 8.23999 8.36974C7.92884 8.37138 7.66017 8.62479 7.65603 8.92044C7.65188 9.21674 7.9133 9.4731 8.22687 9.48063C8.54803 9.48849 8.82396 9.23671 8.82844 8.93288Z' />
      <SidebarRoute to='/usuarios' title='Usuarios' icon='M12.2552 17.3792C11.9805 17.3792 11.7061 17.3792 11.4314 17.3792C11.4063 17.3683 11.3822 17.351 11.3561 17.3476C10.6715 17.2595 10.0685 16.9882 9.53796 16.5558C9.42931 16.467 9.32719 16.3705 9.21648 16.2726C9.04663 16.774 8.72413 17.1157 8.2335 17.2979C8.15579 17.3268 8.07671 17.3523 7.99832 17.3792C7.81541 17.3792 7.63215 17.3792 7.44924 17.3792C7.41967 17.3666 7.39148 17.3506 7.36088 17.3421C6.85614 17.2055 6.49788 16.9015 6.28884 16.4266C6.26787 16.3786 6.25033 16.3293 6.22695 16.2702C6.18329 16.3103 6.15372 16.3361 6.12552 16.3633C5.67684 16.7982 5.14769 17.096 4.54257 17.2595C4.36928 17.3064 4.19187 17.3398 4.01652 17.3792C3.74181 17.3792 3.46744 17.3792 3.19272 17.3792C3.16762 17.3683 3.14356 17.351 3.11743 17.3476C1.28795 17.098 -0.0488301 15.5416 0.00136793 13.7193C0.0254355 12.8476 0.925905 12.1473 1.79887 12.3033C2.54187 12.4359 3.09233 13.0829 3.09164 13.7985C3.0913 14.028 3.20682 14.2004 3.42515 14.2857C3.77103 14.4207 4.11657 14.1664 4.11829 13.773C4.12207 12.953 4.11932 12.133 4.11864 11.313C4.11864 11.2919 4.11245 11.2708 4.10626 11.2324C3.08064 11.2324 2.06052 11.2324 1.04384 11.2324C1.04384 10.8836 1.04384 10.5538 1.04384 10.2135C1.38663 10.2135 1.71601 10.2135 2.07496 10.2135C1.45952 9.25169 1.11638 8.22053 1.04074 7.11085C0.964757 5.99334 1.1573 4.91731 1.6304 3.89534C2.10109 2.8788 2.78495 2.02886 3.68439 1.35128C6.07464 -0.449578 9.39458 -0.450938 11.7621 1.35026C12.9806 2.27738 13.8058 3.47445 14.193 4.94519C14.6819 6.80215 14.3938 8.55711 13.3771 10.2193C13.735 10.2193 14.0685 10.2193 14.4061 10.2193C14.4061 10.566 14.4061 10.8958 14.4061 11.2443C13.375 11.2443 12.3549 11.2443 11.3279 11.2443C11.3279 12.0939 11.3269 12.9251 11.3286 13.7561C11.3293 14.0828 11.5455 14.3204 11.8381 14.3242C12.128 14.3279 12.3432 14.0902 12.3597 13.7656C12.3927 13.1149 12.7242 12.6562 13.321 12.4006C13.8962 12.1544 14.5584 12.2996 14.9982 12.7378C15.4335 13.172 15.4988 13.7006 15.4187 14.2769C15.2176 15.7184 14.1837 16.8917 12.7668 17.2653C12.5983 17.3095 12.4261 17.3415 12.2552 17.3792ZM11.0951 10.2097C11.0982 10.2108 11.1085 10.2169 11.1192 10.2169C11.3767 10.2179 11.6349 10.2067 11.8911 10.223C12.0434 10.2325 12.1317 10.1737 12.2163 10.0612C13.2275 8.71316 13.5995 7.20842 13.2736 5.56463C12.6881 2.60954 9.88418 0.663849 6.94932 1.08372C5.37702 1.30879 4.11382 2.0598 3.17484 3.31771C2.23862 4.57223 1.90202 5.99028 2.13513 7.53038C2.27884 8.48062 2.66392 9.33634 3.26321 10.0948C3.3024 10.1445 3.36223 10.2108 3.41483 10.2128C3.73115 10.2237 4.04781 10.2182 4.37925 10.2182C4.36172 10.173 4.35518 10.1523 4.3459 10.1326C3.87383 9.13541 4.14717 8.12568 5.05589 7.48822C5.10472 7.45388 5.1446 7.37297 5.14598 7.31279C5.15457 6.96806 5.14047 6.62264 5.15457 6.2779C5.1611 6.11981 5.10747 6.04536 4.96512 5.976C4.24447 5.62446 3.92816 4.7803 4.229 4.04493C4.52572 3.31908 5.34195 2.9298 6.10214 3.15181C6.70349 3.32723 7.16112 3.87188 7.20684 4.4665C7.25773 5.1298 6.91666 5.72306 6.327 6.00524C6.27234 6.03142 6.1881 6.08003 6.18672 6.12049C6.17538 6.46319 6.18019 6.80657 6.18019 7.153C7.21853 7.153 8.23865 7.153 9.26943 7.153C9.26943 6.85416 9.25877 6.56586 9.27356 6.27892C9.28181 6.12117 9.22886 6.0457 9.08549 5.97634C8.40369 5.64588 8.08049 4.87379 8.30879 4.15814C8.53365 3.45405 9.25637 2.9978 9.9863 3.09843C10.6767 3.19396 11.2182 3.72807 11.321 4.41448C11.418 5.0635 11.0528 5.72408 10.4285 6.00524C10.3177 6.05488 10.2947 6.11403 10.2964 6.22113C10.3023 6.57164 10.303 6.9225 10.2961 7.27302C10.294 7.38657 10.3315 7.4498 10.4267 7.51848C11.1336 8.02641 11.4359 8.71078 11.2904 9.56786C11.2536 9.78647 11.1618 9.99556 11.0951 10.2097ZM5.14941 11.2429C5.14941 11.3215 5.14941 11.383 5.14941 11.4445C5.14941 12.2364 5.15526 13.0278 5.14735 13.8196C5.14116 14.4408 4.84754 14.9045 4.2902 15.1812C3.73734 15.4559 3.18963 15.4012 2.68971 15.0435C2.28125 14.7515 2.07324 14.3439 2.05949 13.841C2.05089 13.5334 1.814 13.2978 1.53275 13.3073C1.24497 13.3171 1.0263 13.5585 1.03249 13.8659C1.03421 13.956 1.04934 14.0457 1.05931 14.1355C1.21919 15.5743 2.67252 16.6105 4.10282 16.3055C5.34402 16.0407 6.17469 15.0286 6.17882 13.7707C6.18157 12.9789 6.1795 12.1874 6.17882 11.3956C6.17882 11.3466 6.17331 11.2973 6.17022 11.2426C5.83018 11.2429 5.50045 11.2429 5.14941 11.2429ZM9.26874 11.2399C9.26874 11.3096 9.26874 11.365 9.26874 11.4204C9.26874 12.1952 9.26668 12.9697 9.27046 13.7445C9.27115 13.9077 9.28215 14.0729 9.30725 14.2341C9.50185 15.4811 10.7039 16.4395 11.9653 16.3579C13.3265 16.2702 14.3903 15.1928 14.4164 13.8761C14.4226 13.5595 14.2012 13.312 13.9079 13.3076C13.6243 13.3035 13.3987 13.5378 13.3874 13.8485C13.3554 14.7243 12.6715 15.357 11.7731 15.3424C10.9621 15.3291 10.2999 14.6352 10.2985 13.7958C10.2975 13.004 10.2981 12.2126 10.2981 11.4207C10.2981 11.3616 10.2981 11.3021 10.2981 11.2399C9.94676 11.2399 9.62116 11.2399 9.26874 11.2399ZM7.72292 8.18212C7.23091 8.18212 6.73925 8.17838 6.24724 8.18484C6.11796 8.18654 5.98353 8.20422 5.86044 8.24263C5.40143 8.3861 5.09165 8.86071 5.15663 9.30302C5.23606 9.84461 5.64727 10.2138 6.19807 10.2169C7.21613 10.2227 8.23418 10.2203 9.25224 10.2159C9.36433 10.2155 9.48019 10.1924 9.58747 10.1584C10.0458 10.0132 10.3559 9.53931 10.2909 9.09768C10.2115 8.56119 9.80751 8.19368 9.26702 8.1845C8.75232 8.176 8.23762 8.18246 7.72292 8.18212ZM7.20891 11.2443C7.20891 12.457 7.20891 13.65 7.20891 14.843C7.20891 15.171 7.20409 15.4991 7.21028 15.8269C7.21785 16.2063 7.56304 16.45 7.90343 16.3236C8.11488 16.245 8.23831 16.0499 8.23831 15.784C8.239 14.314 8.23865 12.8439 8.23831 11.3735C8.23831 11.3306 8.23075 11.2875 8.22662 11.2443C7.88555 11.2443 7.55617 11.2443 7.20891 11.2443ZM5.66618 5.12674C5.93848 5.12504 6.18294 4.87957 6.17813 4.61235C6.17331 4.34887 5.93711 4.1153 5.67065 4.11054C5.40006 4.10578 5.15182 4.34683 5.15044 4.61643C5.14907 4.88501 5.3949 5.12844 5.66618 5.12674ZM10.2975 4.62459C10.3019 4.35703 10.0575 4.1119 9.78516 4.11054C9.52008 4.10952 9.28043 4.33901 9.26978 4.60419C9.25912 4.86937 9.49945 5.11892 9.77313 5.12674C10.0427 5.13456 10.293 4.89453 10.2975 4.62459Z' />
      <SidebarRoute to='/category1/page1' title='Test' icon='M6.91696 0.583496C6.70699 0.583496 6.50562 0.666908 6.35714 0.815381C6.20867 0.963855 6.12526 1.16523 6.12526 1.3752V2.62768C5.57927 2.84884 5.06684 3.14516 4.60281 3.50805L3.51738 2.88102C3.33554 2.77604 3.11945 2.74759 2.91664 2.80193C2.71382 2.85627 2.5409 2.98896 2.43591 3.17079L0.852502 5.91326C0.74752 6.09509 0.71907 6.31119 0.773411 6.514C0.827752 6.71681 0.960432 6.88973 1.14227 6.99472L2.2269 7.62096C2.14571 8.20454 2.14571 8.79655 2.2269 9.38013L1.14227 10.0056C1.05213 10.0576 0.973119 10.1268 0.909762 10.2094C0.846406 10.2919 0.799943 10.3861 0.77303 10.4866C0.746118 10.5872 0.739285 10.692 0.752921 10.7952C0.766558 10.8983 0.800396 10.9978 0.852502 11.0878L2.43591 13.8303C2.5409 14.0121 2.71382 14.1448 2.91664 14.1992C3.11945 14.2535 3.33554 14.2251 3.51738 14.1201L4.60281 13.493C5.06279 13.8533 5.57502 14.1502 6.12526 14.3734V15.6259C6.12526 15.8359 6.20867 16.0372 6.35714 16.1857C6.50562 16.3342 6.70699 16.4176 6.91696 16.4176H10.0838C10.2938 16.4176 10.4951 16.3342 10.6436 16.1857C10.7921 16.0372 10.8755 15.8359 10.8755 15.6259V14.3734C11.4215 14.1522 11.9339 13.8559 12.3979 13.493L13.4834 14.1201C13.6652 14.2251 13.8813 14.2535 14.0841 14.1992C14.2869 14.1448 14.4598 14.0121 14.5648 13.8303L16.1482 11.0878C16.2532 10.906 16.2817 10.6899 16.2273 10.4871C16.173 10.2843 16.0403 10.1114 15.8585 10.0064L14.7738 9.38013C14.855 8.79655 14.855 8.20454 14.7738 7.62096L15.8585 6.99552C15.9486 6.94353 16.0276 6.87428 16.091 6.79174C16.1543 6.70919 16.2008 6.61497 16.2277 6.51445C16.2546 6.41394 16.2615 6.3091 16.2478 6.20594C16.2342 6.10278 16.2004 6.00333 16.1482 5.91326L14.5648 3.17079C14.4598 2.98896 14.2869 2.85627 14.0841 2.80193C13.8813 2.74759 13.6652 2.77604 13.4834 2.88102L12.3979 3.50805C11.9339 3.14516 11.4215 2.84884 10.8755 2.62768V1.3752C10.8755 1.16523 10.7921 0.963855 10.6436 0.815381C10.4951 0.666908 10.2938 0.583496 10.0838 0.583496H6.91696ZM7.70867 3.18821V2.16691H9.29208V3.18821C9.29217 3.35873 9.34731 3.52467 9.44931 3.66133C9.5513 3.79799 9.6947 3.89806 9.85815 3.94666C10.571 4.15954 11.2238 4.53705 11.7638 5.04871C11.8877 5.16609 12.0462 5.2403 12.2157 5.26027C12.3851 5.28025 12.5566 5.24492 12.7043 5.15955L13.5895 4.64811L14.3812 6.01934L13.4968 6.52999C13.3493 6.61518 13.2331 6.74571 13.1656 6.90218C13.0982 7.05865 13.083 7.23271 13.1223 7.39849C13.2946 8.1231 13.2946 8.87799 13.1223 9.6026C13.083 9.76839 13.0982 9.94245 13.1656 10.0989C13.2331 10.2554 13.3493 10.3859 13.4968 10.4711L14.3812 10.9818L13.5895 12.353L12.7035 11.8415C12.5558 11.7564 12.3846 11.7211 12.2153 11.7411C12.046 11.7611 11.8876 11.8352 11.7638 11.9524C11.2238 12.4641 10.571 12.8416 9.85815 13.0544C9.6947 13.103 9.5513 13.2031 9.44931 13.3398C9.34731 13.4764 9.29217 13.6424 9.29208 13.8129V14.8342H7.70867V13.8129C7.70858 13.6424 7.65343 13.4764 7.55144 13.3398C7.44944 13.2031 7.30605 13.103 7.1426 13.0544C6.42976 12.8416 5.77698 12.4641 5.23696 11.9524C5.11308 11.835 4.95458 11.7608 4.78509 11.7408C4.6156 11.7208 4.4442 11.7562 4.29642 11.8415L3.41129 12.353L2.61959 10.9818L3.50392 10.4711C3.65149 10.3859 3.76764 10.2554 3.8351 10.0989C3.90257 9.94245 3.91775 9.76839 3.8784 9.6026C3.70618 8.87799 3.70618 8.1231 3.8784 7.39849C3.91775 7.23271 3.90257 7.05865 3.8351 6.90218C3.76764 6.74571 3.65149 6.61518 3.50392 6.52999L2.61959 6.01934L3.41129 4.64811L4.29642 5.15955C4.4442 5.24492 4.6156 5.28025 4.78509 5.26027C4.95458 5.2403 5.11308 5.16609 5.23696 5.04871C5.777 4.53705 6.42977 4.15954 7.1426 3.94666C7.30605 3.89806 7.44944 3.79799 7.55144 3.66133C7.65343 3.52467 7.70858 3.35873 7.70867 3.18821ZM6.91696 8.50055C6.91696 8.0806 7.08379 7.67785 7.38073 7.38091C7.67768 7.08396 8.08043 6.91714 8.50037 6.91714C8.92032 6.91714 9.32307 7.08396 9.62001 7.38091C9.91696 7.67785 10.0838 8.0806 10.0838 8.50055C10.0838 8.92049 9.91696 9.32324 9.62001 9.62019C9.32307 9.91713 8.92032 10.084 8.50037 10.084C8.08043 10.084 7.67768 9.91713 7.38073 9.62019C7.08379 9.32324 6.91696 8.92049 6.91696 8.50055ZM8.50037 5.33373C7.66048 5.33373 6.85499 5.66737 6.26109 6.26127C5.6672 6.85516 5.33355 7.66065 5.33355 8.50055C5.33355 9.34044 5.6672 10.1459 6.26109 10.7398C6.85499 11.3337 7.66048 11.6674 8.50037 11.6674C9.34027 11.6674 10.1458 11.3337 10.7397 10.7398C11.3335 10.1459 11.6672 9.34044 11.6672 8.50055C11.6672 7.66065 11.3335 6.85516 10.7397 6.26127C10.1458 5.66737 9.34027 5.33373 8.50037 5.33373Z' />
      <div className=" flex flex-col text-white h-full justify-end mb-12 mx-4 text-sm ">
        <li className=" sidebar-route-disable sidebar-route" to="/">
          <NavLink to="/">
            <div className="flex">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.82761 2.41382C4.18743 2.41382 3.57348 2.66813 3.1208 3.1208C2.66813 3.57348 2.41382 4.18743 2.41382 4.82761V14.4828C2.41382 15.123 2.66813 15.7369 3.1208 16.1896C3.57348 16.6423 4.18743 16.8966 4.82761 16.8966H13.6782C13.8916 16.8966 14.0962 16.8118 14.2471 16.6609C14.398 16.51 14.4828 16.3054 14.4828 16.092C14.4828 15.8786 14.398 15.6739 14.2471 15.523C14.0962 15.3722 13.8916 15.2874 13.6782 15.2874H4.82761C4.61422 15.2874 4.40957 15.2026 4.25868 15.0517C4.10778 14.9008 4.02301 14.6962 4.02301 14.4828V4.82761C4.02301 4.61422 4.10778 4.40957 4.25868 4.25868C4.40957 4.10778 4.61422 4.02301 4.82761 4.02301H13.6782C13.8916 4.02301 14.0962 3.93824 14.2471 3.78735C14.398 3.63646 14.4828 3.43181 14.4828 3.21842C14.4828 3.00502 14.398 2.80037 14.2471 2.64948C14.0962 2.49859 13.8916 2.41382 13.6782 2.41382H4.82761ZM12.6378 5.86796C12.5636 5.79111 12.4748 5.72981 12.3767 5.68764C12.2785 5.64548 12.1729 5.62328 12.0661 5.62235C11.9593 5.62142 11.8533 5.64178 11.7544 5.68224C11.6555 5.72269 11.5657 5.78244 11.4902 5.85798C11.4146 5.93353 11.3549 6.02336 11.3144 6.12225C11.274 6.22113 11.2536 6.32708 11.2545 6.43391C11.2555 6.54075 11.2777 6.64632 11.3198 6.74449C11.362 6.84265 11.4233 6.93144 11.5001 7.00566L13.3451 8.8506H6.43681C6.22341 8.8506 6.01876 8.93537 5.86787 9.08626C5.71698 9.23715 5.63221 9.4418 5.63221 9.6552C5.63221 9.86859 5.71698 10.0732 5.86787 10.2241C6.01876 10.375 6.22341 10.4598 6.43681 10.4598H13.3451L11.5001 12.3047C11.3536 12.4565 11.2725 12.6597 11.2743 12.8707C11.2761 13.0817 11.3608 13.2835 11.5099 13.4326C11.6591 13.5818 11.8609 13.6664 12.0719 13.6683C12.2828 13.6701 12.4861 13.589 12.6378 13.4424L15.8562 10.224C16.0071 10.0732 16.0918 9.86855 16.0918 9.6552C16.0918 9.44185 16.0071 9.23723 15.8562 9.08635L12.6378 5.86796V5.86796Z" fill="white"/>
              </svg>
              <span className='text-sm  ml-2 '>Cerrar Sesion</span>
            </div>
          </NavLink>
      </li>
        {/* <button className=" text-xs text-left hover:bg-gray-500 py-2 text-gray-300 pl-5" onClick={() => logout({ returnTo: window.location.origin })}  > */}
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

      <div className='sidebar hidden md:flex w-56  ml-6 my-3 '>
        <div className='w-full h-full flex flex-col'>
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
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" 
          d={icon}
          fill="white"/>
        </svg>

          <span className='text-sm  ml-2'>{title}</span>
          
          
        </div>
      </NavLink>
    </li>
  );
};






export default Sidebar;
