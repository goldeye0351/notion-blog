  export const SunToMoon= ({ className }) => {  return (
    <svg xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 24 24" className={className}   >
        <g  fill="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <g stroke-dasharray="2">
          <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
            <animate  attributeName="stroke-dashoffset" dur="0.5s" values="4;2"/>
          </path>
          <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
            <animate  attributeName="stroke-dashoffset" begin="0.2s" dur="0.2s" values="4;2"/>
          </path>
        </g>
        <path  d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" opacity="1">
          <set attributeName="opacity" begin="0.5s" to="1"/>
        </path>
        </g>
      <g  fill-opacity="0"  fill="currentcolor">
        <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
          <animate id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"  attributeName="fill-opacity" begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s" dur="0.4s" values="0;1"/>
          <animate  attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s" dur="0.4s" values="1;0"/>
        </path>
        <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate  attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s" dur="0.4s" values="0;1"/>
          <animate  attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s" dur="0.4s" values="1;0"/>
        </path>
        <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
          <animate  attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s" dur="0.4s" values="0;1"/>
          <animate  attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s" dur="0.4s" values="1;0"/>
        </path>
        <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
          <animate  attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s" dur="0.4s" values="0;1"/>
          <animate  attributeName="fill-opacity" begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s" dur="0.4s" values="1;0"/>
        </path>
      </g>
      <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
        <circle cx="12" cy="12" r="12" />
        <circle cx="22" cy="2" r="3" >
          <animate  attributeName="cx" begin="0.1s" dur="0.4s" values="22;18"/>
          <animate  attributeName="cy" begin="0.1s" dur="0.4s" values="2;6"/>
          <animate  attributeName="r" begin="0.1s" dur="0.4s" values="3;12"/>
        </circle>
        <circle cx="22" cy="2" r="1"><animate  attributeName="cx" begin="0.1s" dur="0.4s" values="22;18"/>
        <animate  attributeName="cy" begin="0.1s" dur="0.4s" values="2;6"/>
        <animate  attributeName="r" begin="0.1s" dur="0.4s" values="1;10"/>
        </circle>
      </mask>
      <circle cx="12" cy="12" r="6"  mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)">
        <set attributeName="opacity" begin="0.5s" to="0"/>
        <animate  attributeName="r" begin="0.1s" dur="0.4s" values="6;10"/>
      </circle>
    </svg>
  )}

  export const MoonToSun= ({ className }) => {    return (
<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"  className={className} >
<rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
<g  fill="currentcolor" stroke="currentcolor" stroke-dasharray="2" stroke-dashoffset="2" stroke-linecap="round" stroke-width="2">
<path d="M0 0">
<animate fill="freeze" attributeName="d" begin="1.2s" dur="0.2s" values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"/>
<animate fill="freeze" attributeName="stroke-dashoffset" begin="1.2s" dur="0.2s" values="2;0"/>
</path>
<path d="M0 0">
<animate fill="freeze" attributeName="d" begin="1.5s" dur="0.2s" values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"/>
<animate fill="freeze" attributeName="stroke-dashoffset" begin="1.5s" dur="1.2s" values="2;0"/>
</path>
<animateTransform attributeName="transform" dur="30s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
</g>
<g fill="currentcolor">
<path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
<animate fill="freeze" attributeName="fill-opacity" dur="0.4s" values="1;0"/>
</path>
<path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
<animate fill="freeze" attributeName="fill-opacity" begin="0.2s" dur="0.4s" values="1;0"/>
</path>
</g><g fill="currentcolor" stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
<path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"/>
<set attributeName="opacity" begin="0.6s" to="0"/></g><mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
<circle cx="12" cy="12" r="12" fill="currentcolor"/>
<circle cx="18" cy="6" r="12" fill="currentcolor">
<animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22"/>
<animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2"/>
<animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="12;3"/>
</circle>
<circle cx="18" cy="6" r="10">
<animate fill="freeze" attributeName="cx" begin="0.6s" dur="0.4s" values="18;22"/>
<animate fill="freeze" attributeName="cy" begin="0.6s" dur="0.4s" values="6;2"/>
<animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;1"/>
</circle>
</mask>
<circle cx="12" cy="12" r="10" fill="currentcolor" mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)" opacity="0">
<set attributeName="opacity" begin="0.6s" to="1"/>
<animate fill="freeze" attributeName="r" begin="0.6s" dur="0.4s" values="10;6"/>
</circle>
</svg>
      )}

  export const Translate= ({ className }) => {    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className} >
        <path stroke-linecap="round" stroke-linejoin="round" d="m10.5 21 5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 0 1 6-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 0 1-3.827-5.802" />
      </svg>
      )}
  
  export const FullWidthIn= ({ className }) => {      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='2' stroke="currentColor"    className={className}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9 3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5 5.25 5.25" />
        </svg>
      )}

  export const FullWidthOut= ({ className }) => {        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth='2' stroke="currentColor"   className={className}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
          </svg>
        )}

  export const PYQ= ({ className }) => {          return (
          <svg viewBox="0 0 960 960" xmlns="http://www.w3.org/2000/svg" fill="none" className={className} >
          <path d="M649.12 128A400 400 0 0 0 512 105.28a356.32 356.32 0 0 0-137.12 25.12l274.08 276.8z" fill="#FC6B4F">
          </path>
          <path d="M797.44 225.12a355.68 355.68 0 0 0-114.56-79.04l-1.92 389.44 197.92-198.08a402.88 402.88 0 0 0-81.44-112.32z" fill="#7838F2">
          </path>
          <path d="M893.76 651.36a400 400 0 0 0 21.92-136.96 355.04 355.04 0 0 0-25.12-136.96l-276.8 273.92z" fill="#5698F3">
          </path>
          <path d="M685.12 884.96a400 400 0 0 0 112-81.28 359.52 359.52 0 0 0 79.2-114.72l-389.44-1.92z" fill="#20E9F4">
          </path>
          <path d="M375.04 901.44A401.12 401.12 0 0 0 512 923.36a356 356 0 0 0 136.96-25.12L375.04 621.6z" fill="#00FD60">
          </path>
          <path d="M341.44 882.72l1.92-389.44L145.44 691.2a401.76 401.76 0 0 0 81.28 112 357.12 357.12 0 0 0 114.72 79.52z" fill="#ABFB5B">
          </path><path d="M130.56 377.44a400 400 0 0 0-21.92 136.96 357.92 357.92 0 0 0 24.96 136.96l276.8-273.92z" fill="#F0E254">
          </path>
          <path d="M339.04 144a405.44 405.44 0 0 0-112 81.44 355.68 355.68 0 0 0-79.04 114.56l389.44 2.08z" fill="#F6B351">
          </path>
          </svg>
        )}

  export const CopyIcon= ({ className }) => {return (
        <svg
          viewBox="0 0 19 20"        fill='none'        xmlns="http://www.w3.org/2000/svg"   className={className}     >
          <path
            d="M3.5 12.5003C2.72343 12.5003 2.33515 12.5003 2.02886 12.3735C1.62048 12.2043 1.29602 11.8798 1.12687 11.4715C1 11.1652 1 10.7769 1 10.0003V4.33366C1 3.40024 1 2.93353 1.18166 2.57701C1.34144 2.2634 1.59641 2.00844 1.91002 1.84865C2.26654 1.66699 2.73325 1.66699 3.66667 1.66699H9.33333C10.1099 1.66699 10.4982 1.66699 10.8045 1.79386C11.2129 1.96302 11.5373 2.28747 11.7065 2.69585C11.8333 3.00214 11.8333 3.39042 11.8333 4.16699M9.5 18.3337H15C15.9334 18.3337 16.4001 18.3337 16.7567 18.152C17.0703 17.9922 17.3252 17.7372 17.485 17.4236C17.6667 17.0671 17.6667 16.6004 17.6667 15.667V10.167C17.6667 9.23357 17.6667 8.76686 17.485 8.41034C17.3252 8.09674 17.0703 7.84177 16.7567 7.68198C16.4001 7.50033 15.9334 7.50033 15 7.50033H9.5C8.56658 7.50033 8.09987 7.50033 7.74335 7.68198C7.42975 7.84177 7.17478 8.09674 7.01499 8.41034C6.83333 8.76686 6.83333 9.23357 6.83333 10.167V15.667C6.83333 16.6004 6.83333 17.0671 7.01499 17.4236C7.17478 17.7372 7.42975 17.9922 7.74335 18.152C8.09987 18.3337 8.56658 18.3337 9.5 18.3337Z"
            stroke="currentcolor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      );
    } 
  export const FindIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className} >
      <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
    </svg>
  )}

  export const UserIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={className} >
    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
    </svg>
  )}
  
  export const EyeIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
    )}

  export const ChatIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
    </svg>
    )}
  export const ThumbUpIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" 
      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
    </svg>
  )}
  export const HeartIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
    </svg>
    )}

  export const LinkIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
    </svg>
    )}

  export const RssIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 19.5v-.75a7.5 7.5 0 0 0-7.5-7.5H4.5m0-6.75h.75c7.87 0 14.25 6.38 14.25 14.25v.75M6 18.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
    </svg>
    )}

  export const WifiIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
    </svg>
    )}

  export const TgIcon= ({ className }) => {return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
    </svg>
    )}

  export const LeftIcon= ({ className }) => {return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
          <path fill="currentColor" d="m9.23 11.808l4.458-3.715A.8.8 0 0 1 15 8.708v6.584a.8.8 0 0 1-1.312.614L9.23 12.192a.25.25 0 0 1 0-.384"/>
      </svg>
      )}

  export const AppleIcon= ({ className }) => {return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
          <path fill="currentColor" fill-rule="evenodd" d="M16.71 1.377a.75.75 0 0 0-.896-.703c-.5.1-2.132.506-3.42 1.794c-.658.658-1.022 1.488-1.22 2.244a7.03 7.03 0 0 0-.194 1.122a33.657 33.657 0 0 0-.243-.104c-.693-.296-1.59-.64-2.61-.64c-1.092 0-2.642.444-3.922 1.7c-1.298 1.274-2.255 3.318-2.255 6.4c0 1.732.866 4.25 2.033 6.295c.59 1.033 1.285 1.995 2.035 2.704c.729.688 1.617 1.238 2.585 1.213c.72-.003 1.45-.286 2.017-.506l.05-.02c.654-.253 1.12-.424 1.511-.424c.374 0 .844.171 1.508.426l.049.018c.576.221 1.319.506 2.032.506c.539 0 1.162-.288 1.708-.627a9.608 9.608 0 0 0 1.796-1.476c1.137-1.182 2.217-2.871 2.175-4.679a.75.75 0 0 0-.428-.66a4.626 4.626 0 0 1-1.39-1.084c-.473-.543-.822-1.212-.844-1.988a5.549 5.549 0 0 1 .683-2.806c.422-.77.9-1.21 1.122-1.327a.75.75 0 0 0 .262-1.1c-.342-.48-.992-1.112-1.758-1.621c-.757-.504-1.744-.965-2.754-.945c-.177.004-.35.017-.52.037c.37-.55.586-1.232.712-1.83a8.23 8.23 0 0 0 .177-1.919Zm-3.255 2.151c.541-.541 1.177-.883 1.704-1.094a7.056 7.056 0 0 1-.093.553c-.131.622-.337 1.142-.59 1.438c-.48.559-1.124 1.169-1.988 1.41c.028-.237.072-.49.138-.744c.155-.595.42-1.153.829-1.563Zm2.917 3.06c.565-.01 1.242.261 1.894.695c.344.228.648.48.89.712c-.357.358-.708.83-1.002 1.366a7.048 7.048 0 0 0-.866 3.57c.034 1.22.584 2.21 1.212 2.93c.46.527.98.934 1.43 1.21c-.127 1.095-.824 2.24-1.737 3.188a8.115 8.115 0 0 1-1.507 1.242c-.508.316-.824.401-.916.401c-.4 0-.888-.174-1.544-.425l-.08-.03c-.564-.217-1.286-.494-1.965-.494c-.7 0-1.418.279-1.98.497l-.072.028c-.648.25-1.127.424-1.537.424h-.023c-.376.012-.894-.212-1.52-.803c-.608-.575-1.217-1.403-1.763-2.358c-1.104-1.934-1.836-4.187-1.836-5.55c0-2.757.845-4.388 1.805-5.33c.978-.96 2.141-1.272 2.873-1.272c.695 0 1.353.235 2.02.52l.27.117c.238.103.485.21.709.295c.312.117.679.229 1.054.229s.746-.105 1.07-.22c.241-.085.505-.194.76-.299l.252-.104c.693-.282 1.382-.523 2.109-.538Z" clip-rule="evenodd"/>
      </svg>
      )}
  export const TimeIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"  className={className}>
        <path fill="currentColor" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"/>
        <rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1">
            <animateTransform attributeName="transform" dur="9s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
        </rect>
        <rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1">
            <animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/>
        </rect>
    </svg>
    )}

  export const RightArrow= ({ className }) => {    return (
      <svg    viewBox="0 0 14 14"   fill="none"    xmlns="http://www.w3.org/2000/svg" className={className}        >
        <path
          d="M1.16669 7.00033H12.8334M12.8334 7.00033L7.00002 1.16699M12.8334 7.00033L7.00002 12.8337"
          stroke="currentcolor"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )  }
  
  export const DownArrow= ({ className }) => {    return (
      <svg        viewBox="0 0 20 20"        fill="none"        xmlns="http://www.w3.org/2000/svg"   className={className}     >
        <path
          d="M6.66666 10.0003L9.99999 13.3337M9.99999 13.3337L13.3333 10.0003M9.99999 13.3337V6.66699M18.3333 10.0003C18.3333 14.6027 14.6024 18.3337 9.99999 18.3337C5.39762 18.3337 1.66666 14.6027 1.66666 10.0003C1.66666 5.39795 5.39762 1.66699 9.99999 1.66699C14.6024 1.66699 18.3333 5.39795 18.3333 10.0003Z"
          stroke="currentcolor"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )  }
  
  export const Dot= ({ className }) => {    return (
      <svg        viewBox="0 0 7 6"        fill="none"        xmlns="http://www.w3.org/2000/svg"  className={className}    >
        <circle cx="3.3335" cy="3" r="3" fill="#12B76A" />
      </svg>
    )  }
  
  export const Docs= ({ className }) => {    return (
      <svg         viewBox="0 0 20 18"        fill="none"        xmlns="http://www.w3.org/2000/svg" className={className}        >
        <path
          d="M9.99999 16.5L9.91661 16.3749C9.33774 15.5066 9.04831 15.0725 8.66591 14.7582C8.32737 14.4799 7.93729 14.2712 7.51799 14.1438C7.04437 14 6.52258 14 5.47901 14H4.33332C3.3999 14 2.93319 14 2.57667 13.8183C2.26307 13.6586 2.0081 13.4036 1.84831 13.09C1.66666 12.7335 1.66666 12.2668 1.66666 11.3333V4.16667C1.66666 3.23325 1.66666 2.76654 1.84831 2.41002C2.0081 2.09641 2.26307 1.84144 2.57667 1.68166C2.93319 1.5 3.3999 1.5 4.33332 1.5H4.66666C6.5335 1.5 7.46692 1.5 8.17996 1.86331C8.80717 2.18289 9.3171 2.69282 9.63668 3.32003C9.99999 4.03307 9.99999 4.96649 9.99999 6.83333M9.99999 16.5V6.83333M9.99999 16.5L10.0834 16.3749C10.6622 15.5066 10.9517 15.0725 11.3341 14.7582C11.6726 14.4799 12.0627 14.2712 12.482 14.1438C12.9556 14 13.4774 14 14.521 14H15.6667C16.6001 14 17.0668 14 17.4233 13.8183C17.7369 13.6586 17.9919 13.4036 18.1517 13.09C18.3333 12.7335 18.3333 12.2668 18.3333 11.3333V4.16667C18.3333 3.23325 18.3333 2.76654 18.1517 2.41002C17.9919 2.09641 17.7369 1.84144 17.4233 1.68166C17.0668 1.5 16.6001 1.5 15.6667 1.5H15.3333C13.4665 1.5 12.5331 1.5 11.82 1.86331C11.1928 2.18289 10.6829 2.69282 10.3633 3.32003C9.99999 4.03307 9.99999 4.96649 9.99999 6.83333"
          stroke="currentcolor"
          stroke-width="1.66667"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    )  }
  
  export const Github= ({ className }) => {    return (
      <svg  viewBox="0 0 18 18"  fill="none"  xmlns="http://www.w3.org/2000/svg"  className={className}      >
        <path
          d="M9 0.25C4.16562 0.25 0.25 4.16562 0.25 9C0.25 12.8719 2.75469 16.1422 6.23281 17.3016C6.67031 17.3781 6.83437 17.1156 6.83437 16.8859C6.83437 16.6781 6.82344 15.9891 6.82344 15.2563C4.625 15.6609 4.05625 14.7203 3.88125 14.2281C3.78281 13.9766 3.35625 13.2 2.98438 12.9922C2.67812 12.8281 2.24063 12.4234 2.97344 12.4125C3.6625 12.4016 4.15469 13.0469 4.31875 13.3094C5.10625 14.6328 6.36406 14.2609 6.86719 14.0312C6.94375 13.4625 7.17344 13.0797 7.425 12.8609C5.47813 12.6422 3.44375 11.8875 3.44375 8.54062C3.44375 7.58906 3.78281 6.80156 4.34062 6.18906C4.25313 5.97031 3.94687 5.07344 4.42812 3.87031C4.42812 3.87031 5.16094 3.64063 6.83437 4.76719C7.53438 4.57031 8.27813 4.47187 9.02188 4.47187C9.76563 4.47187 10.5094 4.57031 11.2094 4.76719C12.8828 3.62969 13.6156 3.87031 13.6156 3.87031C14.0969 5.07344 13.7906 5.97031 13.7031 6.18906C14.2609 6.80156 14.6 7.57812 14.6 8.54062C14.6 11.8984 12.5547 12.6422 10.6078 12.8609C10.925 13.1344 11.1984 13.6594 11.1984 14.4797C11.1984 15.65 11.1875 16.5906 11.1875 16.8859C11.1875 17.1156 11.3516 17.3891 11.7891 17.3016C13.5261 16.7152 15.0355 15.5988 16.1048 14.1096C17.1741 12.6204 17.7495 10.8333 17.75 9C17.75 4.16562 13.8344 0.25 9 0.25Z"
          fill="currentcolor"
        />
      </svg>
    )  }

  export const KeyIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 0 1 3 3m3 0a6 6 0 0 1-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1 1 21.75 8.25Z" />
    </svg>
    )}

  export const WordIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 56 56" stroke-width="2" stroke="currentColor" className={className}>
    <path fill="currentColor" d="m53.922 16.202l1.404-1.423c.674-.692.674-1.61.019-2.246l-.45-.449c-.598-.599-1.534-.543-2.17.094l-1.404 1.385Zm-21.505 19.39l3.818-1.703l16.303-16.283l-2.62-2.602l-16.285 16.283l-1.796 3.688c-.15.318.225.767.58.617M5.484 47.908h36.834c3.538 0 5.465-1.853 5.465-5.39V27.02l-3.013 3.013v12.634c0 1.554-.88 2.433-2.433 2.433H5.447c-1.554 0-2.434-.88-2.434-2.433v-15.74c0-1.554.88-2.434 2.434-2.434h30.302l2.826-2.807H5.484C1.947 21.686 0 23.539 0 27.076v15.441c0 3.538 1.947 5.39 5.484 5.39m4.735-10.706c1.33 0 2.415-1.086 2.415-2.396a2.404 2.404 0 0 0-2.415-2.396a2.388 2.388 0 0 0-2.395 2.396a2.4 2.4 0 0 0 2.395 2.396m7.524 0c1.33 0 2.415-1.086 2.415-2.396a2.404 2.404 0 0 0-2.415-2.396a2.393 2.393 0 0 0-2.414 2.396a2.404 2.404 0 0 0 2.414 2.396m7.506 0a2.413 2.413 0 0 0 2.395-2.396a2.4 2.4 0 0 0-2.395-2.396a2.404 2.404 0 0 0-2.415 2.396c0 1.31 1.086 2.396 2.415 2.396"/>
    </svg>
  )}
  export const MenuIcon= ({ className }) => {return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" className={className}>
  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
  )}
  export const LoginIcon= ({ className }) => {return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" stroke-width="1.2" stroke="currentColor" className={className}>
    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M13.5 10.5v2a1 1 0 0 1-1 1h-2m0-13h2a1 1 0 0 1 1 1v2m-13 0v-2a1 1 0 0 1 1-1h2m0 13h-2a1 1 0 0 1-1-1v-2m6.5-4a2 2 0 1 0 0-4a2 2 0 0 0 0 4m3.803 4.5a3.994 3.994 0 0 0-7.606 0z"/>
</svg>
)}
export const FriendsIcon= ({ className }) => {return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16" stroke-width="0.1" stroke="currentColor" className={className}>
          <path fill="currentColor" d="M9.75 3h.516a3.741 3.741 0 0 1 3.731 3.598a5.46 5.46 0 0 0-1.6-.525a2.239 2.239 0 0 0-1.978-1.568l-.153-.005H9.75a.75.75 0 0 1-.102-1.493L9.75 3Zm-3.66 7.505a5.46 5.46 0 0 1 .473-1.432a.747.747 0 0 0-.313-.068h-.498l-.154-.006A2.252 2.252 0 0 1 5.752 4.5h.498l.102-.007A.75.75 0 0 0 6.25 3h-.498l-.199.005a3.752 3.752 0 0 0 .2 7.5h.337ZM7.725 7.5a5.484 5.484 0 0 1 2.855-1.423a.746.746 0 0 0-.33-.077h-4.5l-.102.007A.75.75 0 0 0 5.75 7.5h1.975Zm8.275 4a4.5 4.5 0 1 1-9 0a4.5 4.5 0 0 1 9 0Zm-4-2a.5.5 0 0 0-1 0V11H9.5a.5.5 0 0 0 0 1H11v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H12V9.5Z"/>
      </svg>
      )}
export const PicIcon= ({ className }) => {return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 48 48" stroke-width="0.1" stroke="currentColor" className={className}>
      <g fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="4">
        <path stroke-linecap="round" d="M5 10a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v28a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V10Z" clip-rule="evenodd"/>
        <path stroke-linecap="round" d="M14.5 18a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd"/>
        <path d="m15 24l5 4l6-7l17 13v4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-4l10-10Z"/>
    </g>
</svg>)}

export const HomeIcon= ({ className }) => {return (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className={className}>
  <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
)}
export const Pic2Icon= ({ className }) => {return (
<svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 56 56" fill="none" stroke-width="1" stroke="currentColor" className={className}>
    <path fill="currentColor" d="M6.65 42.3h3.94v3.642c0 4.364 2.203 6.566 6.65 6.566h32.11c4.405 0 6.65-2.203 6.65-6.566V23.428c0-4.342-2.245-6.545-6.65-6.545h-3.94v-3.43c0-4.364-2.224-6.566-6.63-6.566H6.65C2.225 6.887 0 9.089 0 13.452v22.303c0 4.363 2.224 6.544 6.65 6.544m.064-3.41c-2.118 0-3.304-1.123-3.304-3.326v-21.92c0-2.203 1.186-3.347 3.304-3.347h32.003c2.097 0 3.283 1.144 3.283 3.347v3.24H17.24c-4.447 0-6.65 2.182-6.65 6.545V38.89ZM14 23.618c0-2.203 1.165-3.326 3.283-3.326h32.003c2.097 0 3.304 1.123 3.304 3.326v17.685l-7.773-7.328a4.555 4.555 0 0 0-3.177-1.292c-1.186 0-2.203.402-3.198 1.27l-9.51 8.43l-3.791-3.431c-.89-.784-1.864-1.207-2.88-1.207c-.933 0-1.801.381-2.712 1.186L14 43.76Zm11.48 10.886c2.732 0 4.977-2.245 4.977-5.02c0-2.71-2.245-4.998-4.977-4.998c-2.754 0-4.999 2.288-4.999 4.999c0 2.774 2.245 5.02 4.999 5.02"/>
</svg>)}

export const Pic3Icon= ({ className }) => {return (
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 56 56" fill="none" stroke-width="1" stroke="currentColor" className={className}>
    <path fill="currentColor" d="M7.715 49.574h40.57c4.899 0 7.36-2.437 7.36-7.265V13.69c0-4.828-2.461-7.265-7.36-7.265H7.715C2.84 6.426.355 8.84.355 13.69v28.62c0 4.851 2.485 7.265 7.36 7.265m10.218-21c-3.187 0-5.789-2.601-5.789-5.789c0-3.164 2.602-5.789 5.79-5.789c3.164 0 5.765 2.625 5.765 5.79c0 3.187-2.601 5.788-5.766 5.788M7.762 45.801c-2.25 0-3.633-1.36-3.633-3.657v-1.43l7.195-6.28c1.031-.914 2.156-1.383 3.211-1.383c1.125 0 2.32.469 3.352 1.43l4.5 4.03l11.18-9.937c1.171-1.031 2.46-1.5 3.773-1.5c1.289 0 2.625.492 3.75 1.524l10.78 9.984v3.61c0 2.25-1.405 3.609-3.632 3.609Z"/>
</svg>)}


export const Pic1Icon= ({ className }) => {return (
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke-width="1" stroke="currentColor" className={className}>
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
        <path d="M15 8h.01M3 6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6z"/>
        <path d="m3 16l5-5c.928-.893 2.072-.893 3 0l5 5"/>
        <path d="m14 14l1-1c.928-.893 2.072-.893 3 0l3 3"/>
    </g>
</svg>)}

export const VipIcon= ({ className }) => {return (
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" fill="none" stroke-width="0.5" stroke="currentColor" className={className}>
    <path fill="currentColor" d="M11.5 4a3.5 3.5 0 1 0 0 7a3.5 3.5 0 0 0 0-7ZM6 7.5a5.5 5.5 0 1 1 11 0a5.5 5.5 0 0 1-11 0Zm8.382 6h7.236l2.081 4.162L18 23.995l-5.7-6.333l2.082-4.162Zm1.236 2l-.919 1.838L18 21.005l3.3-3.667l-.918-1.838h-4.764ZM8 16a4 4 0 0 0-4 4h7.05v2H2v-2a6 6 0 0 1 6-6h3v2H8Z"/>
</svg>)}
export const GithubIcon= () => {return (
      <svg  width='80'        height='80'        viewBox='0 0 250 250' className='githubCorner'
        style={{
          fill: '#005500',
          color: '#ffffffbb',
          position: 'absolute',
          zIndex: 1001,
          top: 0,
          right: 0,
          border: 0,
          transform: 'scale(1, 1)'
        }}
        aria-hidden='true'
      >
        <path d='M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z' />
        <path
          d='M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2'
          fill='currentColor'
          style={{
            transformOrigin: '130px 106px'
          }}
          className= 'octoArm' 
        />

        <path
          d='M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z'
          fill='currentColor'          
        />
      </svg>)}