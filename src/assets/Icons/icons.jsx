export default class Icons {
  static Search() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 text-rose-500">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
        />
      </svg>
    );
  }
  static Close({ className }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className={`w-4 h-4 text-gray-400 cursor-pointer hover:text-gray-600 ${className}`}>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    );
  }
  static ArrowDown() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="12px"
        height="24px">
        <path d="M18.05,17.79a1,1,0,0,0-1.42,0L13,21.42V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V21.41L7.38,17.79A1,1,0,1,0,6,19.2l3.92,3.92a3,3,0,0,0,4.24,0l3.92-3.92A1,1,0,0,0,18.05,17.79Z" />
      </svg>
    );
  }
  static NoData({ className }) {
    return (
      <svg
        className={className}
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          opacity="0.5"
          d="M31.1111 3.88889V31.1111H3.88889V3.88889H31.1111ZM31.1111 0H3.88889C1.75 0 0 1.75 0 3.88889V31.1111C0 33.25 1.75 35 3.88889 35H31.1111C33.25 35 35 33.25 35 31.1111V3.88889C35 1.75 33.25 0 31.1111 0ZM21.6611 17.2278L15.8278 24.7528L11.6667 19.7167L5.83333 27.2222H29.1667L21.6611 17.2278Z"
          fill="#6C6C6C"
        />
      </svg>
    );
  }
  static Camera({ className }) {
    return (
      <svg
        width="38"
        className={className}
        height="33"
        viewBox="0 0 38 33"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M36.5394 6.53571C35.5745 5.57098 34.4106 5.08848 33.0469 5.08848H28.7245L27.7406 2.46436C27.496 1.83411 27.0492 1.29052 26.3993 0.83363C25.7495 0.376948 25.0839 0.148438 24.402 0.148438H14.5221C13.8403 0.148438 13.1745 0.376948 12.5248 0.83363C11.8751 1.29052 11.4282 1.83411 11.1838 2.46436L10.1997 5.08848H5.87733C4.51351 5.08848 3.34953 5.57098 2.3846 6.53571C1.41987 7.50051 0.9375 8.66462 0.9375 10.0283V27.3178C0.9375 28.6816 1.41987 29.8459 2.3846 30.8104C3.34953 31.7753 4.51357 32.2578 5.87733 32.2578H33.0464C34.4101 32.2578 35.5739 31.7753 36.5389 30.8104C37.5036 29.8459 37.9861 28.6816 37.9861 27.3178V10.0283C37.9864 8.66462 37.5039 7.50051 36.5394 6.53571ZM25.5692 24.7806C23.8775 26.4723 21.842 27.3183 19.4619 27.3183C17.0818 27.3183 15.0464 26.4723 13.3546 24.7806C11.6629 23.0892 10.8172 21.0531 10.8172 18.6736C10.8172 16.2933 11.6632 14.2579 13.3546 12.5662C15.0462 10.8744 17.0819 10.0287 19.4619 10.0287C21.8419 10.0287 23.8775 10.8746 25.5692 12.5662C27.2608 14.2577 28.1067 16.2933 28.1067 18.6736C28.1067 21.0531 27.2609 23.0889 25.5692 24.7806Z"
          fill="black"
        />
        <path
          d="M19.4622 13.1206C17.9313 13.1206 16.6223 13.6641 15.5353 14.7513C14.4482 15.8384 13.9047 17.1471 13.9047 18.6784C13.9047 20.209 14.4482 21.5179 15.5353 22.605C16.6223 23.6919 17.9312 24.2354 19.4622 24.2354C20.9929 24.2354 22.302 23.6919 23.389 22.605C24.4761 21.5179 25.0197 20.2091 25.0197 18.6784C25.0197 17.1472 24.4761 15.8385 23.389 14.7513C22.302 13.6642 20.9929 13.1206 19.4622 13.1206Z"
          fill="black"
        />
      </svg>
    );
  }
  static Warning({ className }) {
    return (
      <svg
        width="20"
        height="20"
        className={className}
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.8259 11.5649V4.78258C10.8259 4.35037 10.4755 4 10.0433 4C9.61112 4 9.26074 4.35037 9.26074 4.78258V11.5649C9.26074 11.9971 9.61112 12.3475 10.0433 12.3475C10.4755 12.3475 10.8259 11.9971 10.8259 11.5649Z"
          fill="#4F4F4F"
        />
        <path
          d="M10.0435 16C10.6197 16 11.0869 15.5329 11.0869 14.9566C11.0869 14.3803 10.6197 13.9131 10.0435 13.9131C9.46717 13.9131 9 14.3803 9 14.9566C9 15.5329 9.46717 16 10.0435 16Z"
          fill="#4F4F4F"
        />
        <circle cx="10" cy="10" r="9.4" stroke="#4F4F4F" strokeWidth="1.2" />
      </svg>
    );
  }
  static Plus({ className }) {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512 512"
        width="18"
        height="18">
        <g>
          <path d="M480,224H288V32c0-17.673-14.327-32-32-32s-32,14.327-32,32v192H32c-17.673,0-32,14.327-32,32s14.327,32,32,32h192v192   c0,17.673,14.327,32,32,32s32-14.327,32-32V288h192c17.673,0,32-14.327,32-32S497.673,224,480,224z" />
        </g>
      </svg>
    );
  }
  static Edit({ className }) {
    return (
      <svg
        className={className}
        xmlns="http://www.w3.org/2000/svg"
        id="Filled"
        viewBox="0 0 24 24">
        <path d="M1.172,19.119A4,4,0,0,0,0,21.947V24H2.053a4,4,0,0,0,2.828-1.172L18.224,9.485,14.515,5.776Z" />
        <path d="M23.145.855a2.622,2.622,0,0,0-3.71,0L15.929,4.362l3.709,3.709,3.507-3.506A2.622,2.622,0,0,0,23.145.855Z" />
      </svg>
    );
  }
  static Check({ className }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        id="Capa_1"
        x="0px"
        fill="#15803d"
        className={className}
        y="0px"
        viewBox="0 0 507.506 507.506"
        width="8"
        height="8">
        <g>
          <path d="M163.865,436.934c-14.406,0.006-28.222-5.72-38.4-15.915L9.369,304.966c-12.492-12.496-12.492-32.752,0-45.248l0,0   c12.496-12.492,32.752-12.492,45.248,0l109.248,109.248L452.889,79.942c12.496-12.492,32.752-12.492,45.248,0l0,0   c12.492,12.496,12.492,32.752,0,45.248L202.265,421.019C192.087,431.214,178.271,436.94,163.865,436.934z" />
        </g>
      </svg>
    );
  }

  static Arrow({ className }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="16"
        className={className}
        height="16">
        <path d="M18.71,8.21a1,1,0,0,0-1.42,0l-4.58,4.58a1,1,0,0,1-1.42,0L6.71,8.21a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41l4.59,4.59a3,3,0,0,0,4.24,0l4.59-4.59A1,1,0,0,0,18.71,8.21Z" />
      </svg>
    );
  }
  static Minus({ className }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="14"
        className={className}
        height="14">
        <rect x="6" y="11" width="12" height="2" rx="1" />
      </svg>
    );
  }
  static Badge({ className }) {
    return (
      <svg
        id="Layer_1"
        height="16"
        className={className}
        viewBox="0 0 24 24"
        width="16">
        <path d="m20 8a8 8 0 1 0 -14 5.274v7.873a2.847 2.847 0 0 0 4.63 2.226l1.37-1.1 1.369 1.1a2.85 2.85 0 0 0 4.631-2.226v-7.873a7.957 7.957 0 0 0 2-5.274zm-8-5a5 5 0 1 1 -5 5 5.006 5.006 0 0 1 5-5zm0 15.436-3 2.4v-5.425a7.935 7.935 0 0 0 6 0v5.424z" />
      </svg>
    );
  }
  static Upload({ className }) {
    return (
      <svg
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        viewBox="0 0 512.022 512.022"
        width="16"
        className={className}
        height="16">
        <g>
          <path d="M165.558,141.889l59.328-59.349l0.448,290.816c0,17.673,14.327,32,32,32l0,0c17.673,0,32-14.327,32-32l-0.448-290.453   l58.987,58.987c12.278,12.712,32.536,13.064,45.248,0.786s13.064-32.536,0.786-45.248c-0.258-0.267-0.52-0.529-0.786-0.786   l-68.523-68.523c-37.49-37.491-98.274-37.491-135.765-0.001c0,0-0.001,0.001-0.001,0.001L120.31,96.641   c-12.278,12.712-11.926,32.97,0.786,45.248C133.497,153.866,153.157,153.866,165.558,141.889z" />
          <path d="M480.011,309.355c-17.673,0-32,14.327-32,32v97.941c-0.012,4.814-3.911,8.714-8.725,8.725H72.736   c-4.814-0.012-8.714-3.911-8.725-8.725v-97.941c0-17.673-14.327-32-32-32s-32,14.327-32,32v97.941   c0.047,40.146,32.58,72.678,72.725,72.725h366.549c40.146-0.047,72.678-32.58,72.725-72.725v-97.941   C512.011,323.682,497.684,309.355,480.011,309.355z" />
        </g>
      </svg>
    );
  }
  static Bin({ className }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        viewBox="0 0 24 24"
        width="16"
        className={className}
        height="16">
        <path d="M21,4H17.9A5.009,5.009,0,0,0,13,0H11A5.009,5.009,0,0,0,6.1,4H3A1,1,0,0,0,3,6H4V19a5.006,5.006,0,0,0,5,5h6a5.006,5.006,0,0,0,5-5V6h1a1,1,0,0,0,0-2ZM11,2h2a3.006,3.006,0,0,1,2.829,2H8.171A3.006,3.006,0,0,1,11,2Zm7,17a3,3,0,0,1-3,3H9a3,3,0,0,1-3-3V6H18Z" />
        <path d="M10,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,10,18Z" />
        <path d="M14,18a1,1,0,0,0,1-1V11a1,1,0,0,0-2,0v6A1,1,0,0,0,14,18Z" />
      </svg>
    );
  }
  static ZoomIN({ className }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        id="Outline"
        className={className}
        viewBox="0 0 24 24"
        width="16"
        height="16">
        <path d="M23.707,22.293l-5.969-5.969a10.016,10.016,0,1,0-1.414,1.414l5.969,5.969a1,1,0,0,0,1.414-1.414ZM10,18a8,8,0,1,1,8-8A8.009,8.009,0,0,1,10,18Z" />
        <path d="M13,9H11V7A1,1,0,0,0,9,7V9H7a1,1,0,0,0,0,2H9v2a1,1,0,0,0,2,0V11h2a1,1,0,0,0,0-2Z" />
      </svg>
    );
  }
  static Circle({ className }) {
    return (
      <svg
        width="56"
        height="56"
        viewBox="0 0 56 56"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="28"
          cy="28"
          r="24"
          fill="#DCFCE7"
          stroke="#F0FDF4"
          strokeWidth="8"></circle>
        <path
          d="M37.75 22H18.25C17.8358 22 17.5 22.3358 17.5 22.75V33.25C17.5 33.6642 17.8358 34 18.25 34H37.75C38.1642 34 38.5 33.6642 38.5 33.25V22.75C38.5 22.3358 38.1642 22 37.75 22Z"
          stroke="#16A34A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M28 31C29.6569 31 31 29.6569 31 28C31 26.3431 29.6569 25 28 25C26.3431 25 25 26.3431 25 28C25 29.6569 26.3431 31 28 31Z"
          stroke="#16A34A"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M32.5 22L38.5 27.25"
          stroke="#16A34A"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M32.5 34L38.5 28.75"
          stroke="#16A34A"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M23.5 22L17.5 27.25"
          stroke="#16A34A"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
        <path
          d="M23.5 34L17.5 28.75"
          stroke="#16A34A"
          strokeLinecap="round"
          strokeLinejoin="round"></path>
      </svg>
    );
  }
}
