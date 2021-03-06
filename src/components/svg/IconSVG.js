export const IconLogo = (props) => (
  <svg
    width={41}
    height={41}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        d="M34.022 28.665a.543.543 0 0 1-.537.592H7.469a.543.543 0 0 1-.537-.59L8.796 5.912a.542.542 0 0 1 .538-.5h22.209c.28 0 .513.217.537.498l1.942 22.755Z"
        fill="#1DCF65"
      />
      <path
        d="M36.099 34.601a.679.679 0 0 1-.672.738H5.594a.678.678 0 0 1-.672-.735L7.064 7.347a.677.677 0 0 1 .672-.627h25.46c.35 0 .643.272.672.625l2.23 27.256Z"
        fill="url(#b)"
      />
      <path
        d="M19.923 26.695c-3.883 0-7.042-3.832-7.042-8.542 0-.245.197-.444.44-.444s.44.198.44.444c0 4.22 2.764 7.654 6.162 7.654s6.163-3.434 6.163-7.654c0-.245.197-.444.44-.444s.44.198.44.444c0 4.71-3.16 8.542-7.043 8.542Z"
        fill="#fff"
      />
      <path
        d="M24.258 18.034a.436.436 0 0 1-.31-.13.448.448 0 0 1 0-.629l2.278-2.302a.438.438 0 0 1 .622 0l2.257 2.28a.448.448 0 0 1 0 .628.437.437 0 0 1-.622 0l-1.946-1.966-1.968 1.989a.436.436 0 0 1-.31.13Z"
        fill="#fff"
      />
    </g>
    <defs>
      <linearGradient
        id="b"
        x1={29.873}
        y1={31.334}
        x2={11.513}
        y2={9.901}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#52D67A" />
        <stop offset={1} stopColor="#5AEE87" />
      </linearGradient>
      <clipPath id="a">
        <path
          fill="#fff"
          transform="translate(4.92 5.412)"
          d="M0 0h31.16v30.176H0z"
        />
      </clipPath>
    </defs>
  </svg>
);

export const IconChevronDown = (props) => (
  <svg
    width={8}
    height={4}
    fill="none"
    transform={props.rotate ? "rotate(180)" : "rotate(0)"}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m1 .5 3 3 3-3"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconCart = (props) => (
  <svg
    width={20}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M19.561 4.874a2.06 2.06 0 0 0-1.579-.745H5.16l-.4-1.49c-.232-.866-1.031-1.47-1.958-1.47H.653c-.358 0-.653.282-.653.624 0 .343.294.625.653.625h2.148a.69.69 0 0 1 .673.503l2.57 9.787c.231.866 1.03 1.47 1.958 1.47h8.4c.927 0 1.749-.604 1.96-1.47l1.579-6.202a1.786 1.786 0 0 0-.38-1.632Zm-.904 1.349-1.58 6.202a.69.69 0 0 1-.673.503H8.002a.69.69 0 0 1-.674-.504L5.496 5.399h12.487c.21 0 .421.1.548.261.126.16.188.362.126.564ZM8.444 14.981c-1.2 0-2.19.947-2.19 2.094 0 1.148.99 2.094 2.19 2.094s2.19-.946 2.19-2.093c0-1.148-.99-2.095-2.19-2.095Zm0 2.92c-.484 0-.863-.363-.863-.826 0-.463.379-.826.863-.826.485 0 .864.363.864.826 0 .444-.4.826-.864.826ZM15.688 14.981c-1.2 0-2.19.947-2.19 2.094 0 1.148.99 2.094 2.19 2.094s2.189-.946 2.189-2.094c-.02-1.147-.99-2.094-2.19-2.094Zm0 2.92c-.485 0-.864-.363-.864-.826 0-.463.38-.826.864-.826s.863.363.863.826c0 .444-.4.826-.863.826Z"
      fill="#43464E"
    />
  </svg>
);

export const IconCartW = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.474 5.848a2.472 2.472 0 0 0-1.896-.893H6.191l-.48-1.788c-.278-1.04-1.238-1.764-2.35-1.764H.784c-.43 0-.784.338-.784.75 0 .41.353.749.784.749H3.36c.379 0 .708.241.808.604l3.083 11.743c.278 1.04 1.237 1.764 2.35 1.764h10.081c1.112 0 2.098-.724 2.35-1.764l1.896-7.442a2.143 2.143 0 0 0-.455-1.959Zm-1.086 1.62-1.895 7.441a.829.829 0 0 1-.809.605H9.602a.828.828 0 0 1-.809-.604L6.595 6.476H21.58c.252 0 .505.121.657.314.151.193.226.435.151.676ZM10.133 17.978c-1.44 0-2.627 1.135-2.627 2.512s1.187 2.513 2.627 2.513c1.44 0 2.628-1.135 2.628-2.512s-1.188-2.514-2.628-2.514Zm0 3.503c-.581 0-1.036-.435-1.036-.99 0-.557.455-.992 1.036-.992.582 0 1.037.435 1.037.991-.001.533-.481.991-1.037.991ZM18.825 17.978c-1.44 0-2.627 1.135-2.627 2.512 0 1.378 1.187 2.513 2.627 2.513 1.44 0 2.628-1.136 2.628-2.512-.025-1.377-1.188-2.513-2.628-2.513Zm0 3.504c-.581 0-1.036-.435-1.036-.991s.455-.991 1.036-.991c.582 0 1.037.435 1.037.99 0 .533-.481.992-1.037.992Z"
      fill="#fff"
    />
  </svg>
);

export const IconEmptyCart = (props) => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="#5ECE7B"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
);

export const IconSlideLeft = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#000" fillOpacity={0.73} d="M0 0h24v24H0z" />
    <path
      d="m14.25 6.069-5.625 5.619 5.625 5.619"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconSlideRight = (props) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#000" fillOpacity={0.73} d="M24 0H0v24h24z" />
    <path
      d="m9.75 6.069 5.625 5.619-5.625 5.619"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const IconMinus = (props) => (
  <svg
    width={10}
    height={2}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1h8"
      stroke="#1D1F22"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)
