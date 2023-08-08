import { Backdrop } from '@mui/material'
import React from 'react'

import { SvgFrameBox1, SvgFrameBox2 } from './styles'

type LibComponentProps = {
  isLoading: boolean
}

const Loading1 = () => (
  <SvgFrameBox1>

    {/* <!--base--> */}
    <svg>
      <g id="big-outter">
        <g id="squares">
          <path id="Ellipse 25" d="M383.931 285.267C374.922 309.242 360.656 330.88 342.188 348.583C323.72 366.285 301.522 379.599 277.234 387.541L277 386.821C301.181 378.915 323.28 365.659 341.667 348.035C360.053 330.411 374.255 308.869 383.225 285L383.931 285.267Z" stroke="#00AAFF" strokeWidth="6" strokeLinecap="square" strokeDasharray="1 15" />
        </g>
        <g id="bottom-dots">
          <path id="Ellipse 22" d="M368.63 350.215C350.6 370.742 328.367 387.15 303.437 398.328C278.508 409.505 251.466 415.189 224.146 414.995C196.827 414.801 169.868 408.733 145.1 397.202C120.332 385.672 98.3341 368.949 80.5984 348.168" stroke="#00AAFF" strokeWidth="2" strokeLinecap="square" strokeDasharray="1 15" />
          <path id="Ellipse 21" d="M345.779 148.085C360.806 171.738 368.526 199.298 367.972 227.315C367.419 255.333 358.616 282.566 342.666 305.607L342.147 305.248C358.027 282.309 366.79 255.197 367.341 227.303C367.893 199.409 360.207 171.972 345.246 148.423L345.779 148.085Z" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.5 15" />
        </g>
        <g id="top-dots">
          <path id="Ellipse 20" d="M92.4362 117.897C75.3686 139.201 63.6658 164.291 58.3117 191.059C52.9576 217.826 54.1089 245.488 61.6686 271.718L62.394 271.509C54.8677 245.395 53.7216 217.856 59.0519 191.207C64.3823 164.558 76.0333 139.578 93.0253 118.369L92.4362 117.897Z" stroke="#00AAFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" strokeDasharray="0.5 15" />
          <path id="Ellipse 23" d="M251.126 44.8182C226.015 41.2368 200.432 42.9587 176.027 49.8728" stroke="#00AAFF" strokeWidth="2" strokeLinecap="square" strokeDasharray="0.5 15" />
          <path id="Ellipse 24" d="M300.89 118.301C274.736 99.5021 242.549 91.1476 210.597 94.8638" stroke="#00AAFF" strokeWidth="4" strokeLinecap="square" strokeDasharray="0.5 15" />
        </g>
        <g id="Ellipse 12">
          <mask id="path-20-inside-6_115_2" fill="white">
            <path d="M225.5 22C240.73 22 255.911 23.7181 270.755 27.1217L269.171 34.0299C254.846 30.7455 240.197 29.0875 225.5 29.0875L225.5 22Z" />
          </mask>
          <path d="M225.5 22C240.73 22 255.911 23.7181 270.755 27.1217L269.171 34.0299C254.846 30.7455 240.197 29.0875 225.5 29.0875L225.5 22Z" stroke="#00AAFF" strokeWidth="8" mask="url(#path-20-inside-6_115_2)" />
        </g>
        <g id="Ellipse 11">
          <mask id="path-21-inside-7_115_2" fill="white">
            <path d="M76.2195 83.2711C89.0537 69.7053 103.677 57.9521 119.686 48.3363L125.449 57.9312C110.312 67.0233 96.4854 78.1363 84.3502 90.9633L76.2195 83.2711Z" />
          </mask>
          <path d="M76.2195 83.2711C89.0537 69.7053 103.677 57.9521 119.686 48.3363L125.449 57.9312C110.312 67.0233 96.4854 78.1363 84.3502 90.9633L76.2195 83.2711Z" fill="#00AAFF" stroke="#00AAFF" strokeWidth="8" mask="url(#path-21-inside-7_115_2)" />
        </g>
      </g>
      <circle id="base" cx="228.5" cy="224.5" r="202" stroke="#00AAFF" />
      <mask id="path-2-inside-1_115_2" fill="white">
        <path d="M165.046 416.801C208.726 431.214 256.011 430.328 299.119 414.287C342.228 398.247 378.591 368.008 402.224 328.548C425.858 289.088 435.354 242.758 429.149 197.183C422.944 151.607 401.408 109.502 368.086 77.7961L363.102 83.0341C395.235 113.608 416.001 154.21 421.985 198.158C427.968 242.106 418.811 286.782 396.022 324.833C373.232 362.884 338.167 392.043 296.598 407.511C255.028 422.979 209.432 423.834 167.312 409.935L165.046 416.801Z" />
      </mask>
      <path d="M165.046 416.801C208.726 431.214 256.011 430.328 299.119 414.287C342.228 398.247 378.591 368.008 402.224 328.548C425.858 289.088 435.354 242.758 429.149 197.183C422.944 151.607 401.408 109.502 368.086 77.7961L363.102 83.0341C395.235 113.608 416.001 154.21 421.985 198.158C427.968 242.106 418.811 286.782 396.022 324.833C373.232 362.884 338.167 392.043 296.598 407.511C255.028 422.979 209.432 423.834 167.312 409.935L165.046 416.801Z" stroke="#00AAFF" strokeWidth="8" mask="url(#path-2-inside-1_115_2)" />
    </svg>

    {/* <!--big centro--> */}
    <svg>
      <g id="big-centro">
        <circle id="Ellipse 19" cx="227.5" cy="224.5" r="158" stroke="#00AAFF" />
        <g id="Ellipse 29">
          <mask id="path-23-inside-8_115_2" fill="white">
            <path d="M70.3243 192.208C68.873 199.183 67.8935 206.247 67.3925 213.352L70.5546 213.575C71.0456 206.612 72.0055 199.689 73.4278 192.854L70.3243 192.208Z" />
          </mask>
          <path d="M70.3243 192.208C68.873 199.183 67.8935 206.247 67.3925 213.352L70.5546 213.575C71.0456 206.612 72.0055 199.689 73.4278 192.854L70.3243 192.208Z" stroke="#00AAFF" strokeWidth="4" mask="url(#path-23-inside-8_115_2)" />
        </g>
        <g id="Ellipse 48">
          <mask id="path-24-inside-9_115_2" fill="white">
            <path d="M109.166 116.849C104.328 122.078 99.8478 127.626 95.756 133.457L98.3509 135.278C102.361 129.564 106.751 124.126 111.493 119.002L109.166 116.849Z" />
          </mask>
          <path d="M109.166 116.849C104.328 122.078 99.8478 127.626 95.756 133.457L98.3509 135.278C102.361 129.564 106.751 124.126 111.493 119.002L109.166 116.849Z" stroke="#00AAFF" strokeWidth="4" mask="url(#path-24-inside-9_115_2)" />
        </g>
        <g id="Ellipse 49">
          <mask id="path-25-inside-10_115_2" fill="white">
            <path d="M156.914 81.6077C150.492 84.6902 144.285 88.2021 138.335 92.1196L140.079 94.7672C145.909 90.9281 151.992 87.4864 158.286 84.4655L156.914 81.6077Z" />
          </mask>
          <path d="M156.914 81.6077C150.492 84.6902 144.285 88.2021 138.335 92.1196L140.079 94.7672C145.909 90.9281 151.992 87.4864 158.286 84.4655L156.914 81.6077Z" stroke="#00AAFF" strokeWidth="4" mask="url(#path-25-inside-10_115_2)" />
        </g>
        <g id="Ellipse 30">
          <mask id="path-26-inside-11_115_2" fill="white">
            <path d="M80.0639 287.513C88.7706 307.608 101.547 325.681 117.588 340.592L119.747 338.27C104.026 323.658 91.5052 305.946 82.9726 286.252L80.0639 287.513Z" />
          </mask>
          <path d="M80.0639 287.513C88.7706 307.608 101.547 325.681 117.588 340.592L119.747 338.27C104.026 323.658 91.5052 305.946 82.9726 286.252L80.0639 287.513Z" stroke="#00AAFF" strokeWidth="4" mask="url(#path-26-inside-11_115_2)" />
        </g>
        <g id="Ellipse 38">
          <mask id="path-27-inside-12_115_2" fill="white">
            <path d="M284.312 76.5318C260.377 67.3417 234.569 64.0954 209.103 67.0713L210.125 75.8204C234.176 73.0099 258.55 76.0758 281.155 84.7552L284.312 76.5318Z" />
          </mask>
          <path d="M284.312 76.5318C260.377 67.3417 234.569 64.0954 209.103 67.0713L210.125 75.8204C234.176 73.0099 258.55 76.0758 281.155 84.7552L284.312 76.5318Z" fill="#00AAFF" stroke="#00AAFF" strokeWidth="4" mask="url(#path-27-inside-12_115_2)" />
        </g>
        <g id="Ellipse 46">
          <mask id="path-28-inside-13_115_2" fill="white">
            <path d="M376.684 278.04C385.344 253.908 388.021 228.035 384.485 202.64L375.761 203.855C379.1 227.838 376.572 252.273 368.393 275.064L376.684 278.04Z" />
          </mask>
          <path d="M376.684 278.04C385.344 253.908 388.021 228.035 384.485 202.64L375.761 203.855C379.1 227.838 376.572 252.273 368.393 275.064L376.684 278.04Z" fill="#00AAFF" stroke="#00AAFF" strokeWidth="4" mask="url(#path-28-inside-13_115_2)" />
        </g>
        <g id="Ellipse 47">
          <mask id="path-29-inside-14_115_2" fill="white">
            <path d="M90.923 321.469C106.609 343.562 127.42 361.52 151.572 373.802L159.476 358.26C137.838 347.256 119.194 331.168 105.141 311.375L90.923 321.469Z" />
          </mask>
          <path d="M90.923 321.469C106.609 343.562 127.42 361.52 151.572 373.802L159.476 358.26C137.838 347.256 119.194 331.168 105.141 311.375L90.923 321.469Z" fill="#00AAFF" stroke="#00AAFF" strokeWidth="4" mask="url(#path-29-inside-14_115_2)" />
        </g>
        <circle id="Ellipse 44" cx="227.5" cy="224.5" r="150" stroke="#00AAFF" />
      </g>
    </svg>

    {/* <!--solo lines--> */}
    <svg>
      <g id="solo-lines">
        <g id="left-line">
          <mask id="path-18-inside-4_115_2" fill="white">
            <path d="M109.714 84.729C87.8988 102.801 70.6164 125.728 59.2501 151.677C47.8838 177.625 42.7493 205.874 44.2574 234.162C45.7655 262.451 53.8744 289.994 67.9352 314.586C81.9959 339.179 101.618 360.139 125.231 375.789L126.101 374.477C102.693 358.963 83.2407 338.185 69.3019 313.805C55.3631 289.426 47.3245 262.122 45.8294 234.079C44.3344 206.036 49.4244 178.032 60.6921 152.308C71.9598 126.585 89.0923 103.856 110.719 85.9413L109.714 84.729Z" />
          </mask>
          <path d="M109.714 84.729C87.8988 102.801 70.6164 125.728 59.2501 151.677C47.8838 177.625 42.7493 205.874 44.2574 234.162C45.7655 262.451 53.8744 289.994 67.9352 314.586C81.9959 339.179 101.618 360.139 125.231 375.789L126.101 374.477C102.693 358.963 83.2407 338.185 69.3019 313.805C55.3631 289.426 47.3245 262.122 45.8294 234.079C44.3344 206.036 49.4244 178.032 60.6921 152.308C71.9598 126.585 89.0923 103.856 110.719 85.9413L109.714 84.729Z" stroke="#00AAFF" strokeWidth="2" mask="url(#path-18-inside-4_115_2)" />
        </g>
        <g id="right-line">
          <mask id="path-19-inside-5_115_2" fill="white">
            <path d="M293.127 56.0696C319.474 66.6482 342.971 83.2599 361.731 104.57C380.491 125.88 393.99 151.293 401.144 178.768C408.298 206.243 408.906 235.013 402.92 262.766C396.935 290.518 384.522 316.48 366.68 338.564L365.455 337.574C383.143 315.682 395.448 289.946 401.381 262.434C407.315 234.922 406.712 206.401 399.621 179.165C392.529 151.928 379.147 126.735 360.55 105.61C341.952 84.485 318.659 68.0173 292.541 57.5306L293.127 56.0696Z" />
          </mask>
          <path d="M293.127 56.0696C319.474 66.6482 342.971 83.2599 361.731 104.57C380.491 125.88 393.99 151.293 401.144 178.768C408.298 206.243 408.906 235.013 402.92 262.766C396.935 290.518 384.522 316.48 366.68 338.564L365.455 337.574C383.143 315.682 395.448 289.946 401.381 262.434C407.315 234.922 406.712 206.401 399.621 179.165C392.529 151.928 379.147 126.735 360.55 105.61C341.952 84.485 318.659 68.0173 292.541 57.5306L293.127 56.0696Z" stroke="#00AAFF" strokeWidth="2" mask="url(#path-19-inside-5_115_2)" />
        </g>
      </g>
    </svg>

    {/* <!--outter center--> */}
    <svg>
      <g id="outter-center">
        <g id="Ellipse 33">
          <mask id="path-13-inside-2_115_2" fill="white">
            <path d="M189.514 348.899C211.061 355.133 233.858 355.662 255.672 350.436L255.068 347.917C233.691 353.039 211.35 352.52 190.233 346.411L189.514 348.899Z" />
          </mask>
          <path d="M189.514 348.899C211.061 355.133 233.858 355.662 255.672 350.436L255.068 347.917C233.691 353.039 211.35 352.52 190.233 346.411L189.514 348.899Z" stroke="#00AAFF" strokeWidth="4" mask="url(#path-13-inside-2_115_2)" />
        </g>
        <g id="Ellipse 34">
          <mask id="path-14-inside-3_115_2" fill="white">
            <path d="M356.914 241.429C359.846 218.667 356.816 195.533 348.12 174.294L341.756 176.899C350.001 197.036 352.874 218.969 350.094 240.551L356.914 241.429Z" />
          </mask>
          <path d="M356.914 241.429C359.846 218.667 356.816 195.533 348.12 174.294L341.756 176.899C350.001 197.036 352.874 218.969 350.094 240.551L356.914 241.429Z" fill="#00AAFF" stroke="#00AAFF" strokeWidth="4" mask="url(#path-14-inside-3_115_2)" />
        </g>
        <path id="Subtract" d="M189.25 109.57L189.432 109.657L189.624 109.592C210.524 102.521 232.956 101.284 254.506 106.014C276.057 110.744 295.909 121.262 311.926 136.436L312.071 136.573H312.27H322.893C344.364 159.613 357.5 190.522 357.5 224.5C357.5 295.745 299.745 353.5 228.5 353.5C157.255 353.5 99.5 295.745 99.5 224.5C99.5 170.522 132.653 124.286 179.708 105.046L189.25 109.57Z" stroke="#00AAFF" />
      </g>
    </svg>

    {/* <!--center lines--> */}
    <svg>
      <g id="center-lines">
        <circle id="Ellipse 36" cx="225.5" cy="224.5" r="93" stroke="#00AAFF" />
        <path id="Ellipse 45" d="M152.445 160.624C135.723 180.1 127.383 205.455 129.26 231.112C131.136 256.768 143.075 280.625 162.451 297.433C181.826 314.242 207.05 322.625 232.575 320.739C258.099 318.853 281.833 306.852 298.555 287.376C315.277 267.9 323.617 242.545 321.74 216.888C319.864 191.232 307.925 167.375 288.549 150.567C269.174 133.758 243.95 125.375 218.425 127.261C192.901 129.147 169.167 141.148 152.445 160.624L152.445 160.624Z" stroke="#00AAFF" strokeWidth="8" strokeDasharray="1 20" />
      </g>
    </svg>

    {/* <!--center--> */}
    <svg>
      <g id="center">
        <path id="center_2" d="M173.051 160.818C183.357 152.33 195.57 146.47 208.64 143.741L209.406 147.646L209.598 148.626L210.579 148.435C213.252 147.913 215.974 147.53 218.739 147.291C202.333 148.709 187.389 155.238 175.508 165.278L176.271 164.633L175.626 163.869L173.051 160.818ZM268.968 159.114L271.131 155.768C282.255 163.153 291.42 173.128 297.84 184.836L294.328 186.706L293.445 187.177L293.916 188.06C298.136 195.966 301.026 204.69 302.286 213.934C297.387 178 267.858 149.902 231.266 147.211C244.593 148.191 256.981 152.541 267.584 159.411L268.424 159.955L268.968 159.114ZM300.731 247.009L304.553 248.1C300.733 260.894 293.865 272.57 284.539 282.125L281.715 279.301L281.008 278.594L280.301 279.301C292.512 267.089 300.668 250.821 302.572 232.692C302.101 237.178 301.247 241.55 300.044 245.774L299.77 246.735L300.731 247.009ZM225.346 303.006L225.389 307C212.037 306.982 198.888 303.723 187.073 297.504L188.969 294.006L189.445 293.128L188.567 292.651C186.556 291.559 184.599 290.38 182.7 289.12C194.964 297.259 209.678 302 225.5 302C225.779 302 226.057 301.998 226.335 301.996L225.335 302.006L225.346 303.006ZM149.854 245.575L146.04 246.69C142.449 233.83 142.033 220.29 144.827 207.234L148.705 208.113L149.682 208.335L149.902 207.358C152.935 193.924 159.459 181.81 168.471 172.022C155.761 185.826 148 204.257 148 224.5C148 242.991 154.476 259.969 165.283 273.291C158.889 265.41 154.012 256.249 151.095 246.254L150.814 245.294L149.854 245.575Z" fill="#00AAFF" stroke="#00AAFF" strokeWidth="2" />
        <circle id="dot" cx="225.5" cy="224.5" r="14" stroke="#00AAFF" />
      </g>
    </svg>

  </SvgFrameBox1>)

const Loading2 = () => (
  <SvgFrameBox2>
    <svg>
      <g id="out1">
        <path d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z" />
        <path d="M72 172C72 116.772 116.772 72 172 72C227.228 72 272 116.772 272 172C272 227.228 227.228 272 172 272C116.772 272 72 227.228 72 172ZM197.322 172C197.322 158.015 185.985 146.678 172 146.678C158.015 146.678 146.678 158.015 146.678 172C146.678 185.985 158.015 197.322 172 197.322C185.985 197.322 197.322 185.985 197.322 172Z" stroke="#00FFFF" strokeWidth="2" strokeMiterlimit="16" mask="url(#path-1-inside-1_111_3212)" />
      </g>
    </svg>

    <svg>
      <g id="out2">
        <mask id="path-2-inside-2_111_3212" fill="white">
          <path d="M102.892 127.966C93.3733 142.905 88.9517 160.527 90.2897 178.19L94.3752 177.88C93.1041 161.1 97.3046 144.36 106.347 130.168L102.892 127.966Z" />
          <path d="M93.3401 194.968C98.3049 211.971 108.646 226.908 122.814 237.541L125.273 234.264C111.814 224.163 101.99 209.973 97.2731 193.819L93.3401 194.968Z" />
          <path d="M152.707 92.3592C140.33 95.3575 128.822 101.199 119.097 109.421L121.742 112.55C130.981 104.739 141.914 99.1897 153.672 96.3413L152.707 92.3592Z" />
          <path d="M253.294 161.699C255.099 175.937 253.132 190.4 247.59 203.639L243.811 202.057C249.075 189.48 250.944 175.74 249.23 162.214L253.294 161.699Z" />
          <path d="M172 90.0557C184.677 90.0557 197.18 92.9967 208.528 98.6474C219.875 104.298 229.757 112.505 237.396 122.621L234.126 125.09C226.869 115.479 217.481 107.683 206.701 102.315C195.921 96.9469 184.043 94.1529 172 94.1529V90.0557Z" />
          <path d="M244.195 133.235C246.991 138.442 249.216 143.937 250.83 149.623L246.888 150.742C245.355 145.34 243.242 140.12 240.586 135.174L244.195 133.235Z" />
          <path d="M234.238 225.304C223.932 237.338 210.358 246.126 195.159 250.604C179.961 255.082 163.79 255.058 148.606 250.534L149.775 246.607C164.201 250.905 179.563 250.928 194.001 246.674C208.44 242.42 221.335 234.071 231.126 222.639L234.238 225.304Z" />
        </mask>
        <path d="M102.892 127.966L105.579 123.75L101.362 121.063L98.6752 125.28L102.892 127.966ZM90.2897 178.19L85.304 178.567L85.6817 183.553L90.6674 183.175L90.2897 178.19ZM94.3752 177.88L94.7529 182.866L99.7386 182.488L99.3609 177.503L94.3752 177.88ZM106.347 130.168L110.564 132.855L113.251 128.638L109.034 125.951L106.347 130.168ZM93.3401 194.968L91.9387 190.168L87.1391 191.569L88.5405 196.369L93.3401 194.968ZM122.814 237.541L119.813 241.54L123.812 244.541L126.813 240.542L122.814 237.541ZM125.273 234.264L129.272 237.265L132.273 233.266L128.274 230.265L125.273 234.264ZM97.2731 193.819L102.073 192.418L100.671 187.618L95.8717 189.02L97.2731 193.819ZM152.707 92.3592L157.567 91.182L156.389 86.3226L151.53 87.4998L152.707 92.3592ZM119.097 109.421L115.869 105.603L112.05 108.831L115.278 112.649L119.097 109.421ZM121.742 112.55L117.924 115.778L121.152 119.596L124.97 116.368L121.742 112.55ZM153.672 96.3413L154.849 101.201L159.708 100.023L158.531 95.1641L153.672 96.3413ZM253.294 161.699L258.255 161.07L257.626 156.11L252.666 156.738L253.294 161.699ZM247.59 203.639L245.66 208.251L250.272 210.182L252.203 205.569L247.59 203.639ZM243.811 202.057L239.198 200.126L237.268 204.739L241.88 206.669L243.811 202.057ZM249.23 162.214L248.601 157.253L243.641 157.882L244.269 162.842L249.23 162.214ZM172 90.0557V85.0557H167V90.0557H172ZM208.528 98.6474L206.299 103.123L206.299 103.123L208.528 98.6474ZM237.396 122.621L240.409 126.611L244.399 123.598L241.386 119.608L237.396 122.621ZM234.126 125.09L230.136 128.103L233.149 132.093L237.139 129.08L234.126 125.09ZM206.701 102.315L204.473 106.791L204.473 106.791L206.701 102.315ZM172 94.1529H167V99.1529H172V94.1529ZM244.195 133.235L248.601 130.87L246.235 126.465L241.83 128.83L244.195 133.235ZM250.83 149.623L252.195 154.433L257.005 153.067L255.64 148.257L250.83 149.623ZM246.888 150.742L242.078 152.107L243.444 156.917L248.254 155.552L246.888 150.742ZM240.586 135.174L238.22 130.768L233.815 133.134L236.181 137.539L240.586 135.174ZM234.238 225.304L238.036 228.556L241.288 224.759L237.491 221.506L234.238 225.304ZM195.159 250.604L196.572 255.4L196.572 255.4L195.159 250.604ZM148.606 250.534L143.814 249.107L142.386 253.899L147.178 255.326L148.606 250.534ZM149.775 246.607L151.203 241.816L146.411 240.388L144.983 245.18L149.775 246.607ZM194.001 246.674L195.415 251.47L195.415 251.47L194.001 246.674ZM231.126 222.639L234.379 218.841L230.581 215.589L227.329 219.386L231.126 222.639ZM98.6752 125.28C88.5757 141.13 83.8844 159.826 85.304 178.567L95.2754 177.812C94.0191 161.227 98.1709 144.681 107.109 130.653L98.6752 125.28ZM90.6674 183.175L94.7529 182.866L93.9976 172.895L89.912 173.204L90.6674 183.175ZM99.3609 177.503C98.1715 161.8 102.102 146.135 110.564 132.855L102.131 127.481C92.5071 142.585 88.0368 160.4 89.3895 178.258L99.3609 177.503ZM109.034 125.951L105.579 123.75L100.205 132.183L103.661 134.385L109.034 125.951ZM88.5405 196.369C93.8083 214.41 104.78 230.259 119.813 241.54L125.815 233.542C112.512 223.558 102.802 209.532 98.1397 193.566L88.5405 196.369ZM126.813 240.542L129.272 237.265L121.274 231.263L118.815 234.54L126.813 240.542ZM128.274 230.265C115.679 220.813 106.486 207.534 102.073 192.418L92.4735 195.221C97.493 212.412 107.948 227.513 122.272 238.263L128.274 230.265ZM95.8717 189.02L91.9387 190.168L94.7415 199.767L98.6745 198.619L95.8717 189.02ZM151.53 87.4998C138.398 90.681 126.188 96.8793 115.869 105.603L122.325 113.239C131.457 105.519 142.262 100.034 153.884 97.2187L151.53 87.4998ZM115.278 112.649L117.924 115.778L125.56 109.322L122.915 106.193L115.278 112.649ZM124.97 116.368C133.616 109.059 143.846 103.866 154.849 101.201L152.495 91.4818C139.981 94.5132 128.347 100.419 118.514 108.732L124.97 116.368ZM158.531 95.1641L157.567 91.182L147.848 93.5364L148.812 97.5185L158.531 95.1641ZM248.334 162.327C250.028 175.697 248.181 189.277 242.978 201.708L252.203 205.569C258.082 191.522 260.169 176.177 258.255 161.07L248.334 162.327ZM249.521 199.027L245.741 197.445L241.88 206.669L245.66 208.251L249.521 199.027ZM248.423 203.987C254.025 190.602 256.014 175.98 254.19 161.585L244.269 162.842C245.873 175.5 244.125 188.357 239.198 200.126L248.423 203.987ZM249.858 167.174L253.923 166.659L252.666 156.738L248.601 157.253L249.858 167.174ZM172 95.0557C183.903 95.0557 195.644 97.8172 206.299 103.123L210.757 94.1717C198.717 88.1761 185.45 85.0557 172 85.0557V95.0557ZM206.299 103.123C216.954 108.429 226.233 116.135 233.406 125.634L241.386 119.608C233.281 108.874 222.796 100.167 210.757 94.1717L206.299 103.123ZM234.383 118.631L231.113 121.1L237.139 129.08L240.409 126.611L234.383 118.631ZM238.116 122.077C230.393 111.849 220.403 103.552 208.93 97.8393L204.473 106.791C214.56 111.814 223.345 119.11 230.136 128.103L238.116 122.077ZM208.93 97.8393C197.458 92.1263 184.816 89.1529 172 89.1529V99.1529C183.269 99.1529 194.385 101.767 204.473 106.791L208.93 97.8393ZM177 94.1529V90.0557H167V94.1529H177ZM239.79 135.601C242.416 140.49 244.504 145.649 246.02 150.988L255.64 148.257C253.927 142.225 251.567 136.395 248.601 130.87L239.79 135.601ZM249.464 144.813L245.523 145.932L248.254 155.552L252.195 154.433L249.464 144.813ZM251.698 149.376C250.067 143.628 247.818 138.073 244.991 132.808L236.181 137.539C238.666 142.168 240.644 147.052 242.078 152.107L251.698 149.376ZM242.951 139.579L246.561 137.64L241.83 128.83L238.22 130.768L242.951 139.579ZM230.441 222.051C220.763 233.351 208.017 241.603 193.746 245.808L196.572 255.4C212.698 250.649 227.101 241.325 238.036 228.556L230.441 222.051ZM193.746 245.808C179.475 250.012 164.291 249.99 150.033 245.742L147.178 255.326C163.289 260.125 180.447 260.151 196.572 255.4L193.746 245.808ZM153.397 251.962L154.567 248.035L144.983 245.18L143.814 249.107L153.397 251.962ZM148.348 251.399C163.7 255.973 180.049 255.997 195.415 251.47L192.588 241.877C179.077 245.858 164.702 245.837 151.203 241.816L148.348 251.399ZM195.415 251.47C210.78 246.942 224.504 238.058 234.924 225.891L227.329 219.386C218.167 230.084 206.099 237.897 192.588 241.877L195.415 251.47ZM227.874 226.436L230.986 229.101L237.491 221.506L234.379 218.841L227.874 226.436Z" fill="#00FFFF" mask="url(#path-2-inside-2_111_3212)" />
      </g>
    </svg>

    <svg>
      <g id="inner3">
        <path d="M195.136 135.689C188.115 131.215 179.948 128.873 171.624 128.946C163.299 129.019 155.174 131.503 148.232 136.099L148.42 136.382C155.307 131.823 163.368 129.358 171.627 129.286C179.886 129.213 187.988 131.537 194.954 135.975L195.136 135.689Z" />
        <path d="M195.136 208.311C188.115 212.784 179.948 215.127 171.624 215.054C163.299 214.981 155.174 212.496 148.232 207.901L148.42 207.618C155.307 212.177 163.368 214.642 171.627 214.714C179.886 214.786 187.988 212.463 194.954 208.025L195.136 208.311Z" />
        <path d="M195.136 135.689L195.474 135.904L195.689 135.566L195.351 135.352L195.136 135.689ZM171.624 128.946L171.627 129.346L171.624 128.946ZM148.232 136.099L148.011 135.765L147.678 135.986L147.899 136.32L148.232 136.099ZM148.42 136.382L148.086 136.603L148.307 136.936L148.641 136.716L148.42 136.382ZM171.627 129.286L171.63 129.686L171.627 129.286ZM194.954 135.975L194.739 136.313L195.076 136.528L195.291 136.19L194.954 135.975ZM195.136 208.311L195.351 208.648L195.689 208.433L195.474 208.096L195.136 208.311ZM171.624 215.054L171.627 214.654L171.624 215.054ZM148.232 207.901L147.899 207.68L147.678 208.014L148.011 208.234L148.232 207.901ZM148.42 207.618L148.641 207.284L148.307 207.063L148.086 207.397L148.42 207.618ZM171.627 214.714L171.63 214.314L171.627 214.714ZM194.954 208.025L195.291 207.81L195.076 207.472L194.739 207.687L194.954 208.025ZM195.351 135.352C188.265 130.836 180.022 128.473 171.62 128.546L171.627 129.346C179.874 129.274 187.966 131.594 194.921 136.026L195.351 135.352ZM171.62 128.546C163.218 128.619 155.018 131.127 148.011 135.765L148.453 136.432C155.33 131.88 163.38 129.418 171.627 129.346L171.62 128.546ZM147.899 136.32L148.086 136.603L148.753 136.161L148.566 135.878L147.899 136.32ZM148.641 136.716C155.463 132.199 163.448 129.757 171.63 129.686L171.623 128.886C163.287 128.958 155.15 131.447 148.199 136.049L148.641 136.716ZM171.63 129.686C179.812 129.614 187.839 131.916 194.739 136.313L195.169 135.638C188.138 131.158 179.959 128.813 171.623 128.886L171.63 129.686ZM195.291 136.19L195.474 135.904L194.799 135.474L194.617 135.76L195.291 136.19ZM194.921 207.974C187.966 212.406 179.874 214.726 171.627 214.654L171.62 215.454C180.022 215.527 188.265 213.163 195.351 208.648L194.921 207.974ZM171.627 214.654C163.38 214.582 155.33 212.12 148.453 207.567L148.011 208.234C155.018 212.873 163.218 215.38 171.62 215.454L171.627 214.654ZM148.566 208.122L148.753 207.838L148.086 207.397L147.899 207.68L148.566 208.122ZM148.199 207.951C155.15 212.553 163.287 215.041 171.623 215.114L171.63 214.314C163.448 214.243 155.463 211.801 148.641 207.284L148.199 207.951ZM171.623 215.114C179.959 215.187 188.138 212.842 195.169 208.362L194.739 207.687C187.839 212.084 179.812 214.386 171.63 214.314L171.623 215.114ZM194.617 208.239L194.799 208.526L195.474 208.096L195.291 207.81L194.617 208.239Z" fill="#00FFFF" mask="url(#path-5-inside-3_111_3212)" />
      </g>
      <path id="out3" d="M240.944 172C240.944 187.951 235.414 203.408 225.295 215.738C215.176 228.068 201.095 236.508 185.45 239.62C169.806 242.732 153.567 240.323 139.5 232.804C125.433 225.285 114.408 213.12 108.304 198.384C102.2 183.648 101.394 167.25 106.024 151.987C110.654 136.723 120.434 123.537 133.696 114.675C146.959 105.813 162.884 101.824 178.758 103.388C194.632 104.951 209.472 111.97 220.751 123.249" stroke="#00FFFF" />
    </svg>

    <svg>
      <g id="inner1">
        <path fillRule="evenodd" clipRule="evenodd" d="M145.949 124.51L148.554 129.259C156.575 124.859 165.672 122.804 174.806 123.331C183.94 123.858 192.741 126.944 200.203 132.236C207.665 137.529 213.488 144.815 217.004 153.261C220.521 161.707 221.59 170.972 220.09 179.997L224.108 180.665L224.102 180.699L229.537 181.607C230.521 175.715 230.594 169.708 229.753 163.795L225.628 164.381C224.987 159.867 223.775 155.429 222.005 151.179C218.097 141.795 211.628 133.699 203.337 127.818C195.045 121.937 185.266 118.508 175.118 117.923C165.302 117.357 155.525 119.474 146.83 124.037C146.535 124.192 146.241 124.349 145.949 124.51ZM224.638 164.522C224.009 160.091 222.819 155.735 221.082 151.563C217.246 142.352 210.897 134.406 202.758 128.634C194.62 122.862 185.021 119.496 175.06 118.922C165.432 118.367 155.841 120.441 147.311 124.914L148.954 127.91C156.922 123.745 165.876 121.814 174.864 122.333C184.185 122.87 193.166 126.019 200.782 131.421C208.397 136.822 214.339 144.257 217.928 152.877C221.388 161.188 222.526 170.276 221.23 179.173L224.262 179.677C224.998 174.671 225.35 169.535 224.638 164.522Z" fill="#00FFFF" />
        <path fillRule="evenodd" clipRule="evenodd" d="M139.91 220.713C134.922 217.428 130.469 213.395 126.705 208.758L130.983 205.286L130.985 205.288L134.148 202.721C141.342 211.584 151.417 217.642 162.619 219.839C173.821 222.036 185.438 220.232 195.446 214.742L198.051 219.491C197.759 219.651 197.465 219.809 197.17 219.963C186.252 225.693 173.696 227.531 161.577 225.154C154.613 223.789 148.041 221.08 142.202 217.234L139.91 220.713ZM142.752 216.399C148.483 220.174 154.934 222.833 161.769 224.173C173.658 226.504 185.977 224.704 196.689 219.087L195.046 216.09C185.035 221.323 173.531 222.998 162.427 220.82C151.323 218.643 141.303 212.747 134.01 204.122L131.182 206.5C134.451 210.376 138.515 213.607 142.752 216.399Z" fill="#00FFFF" />
      </g>
    </svg>

    <svg>
      <path id="center1" d="M180.956 186.056C183.849 184.212 186.103 181.521 187.41 178.349C188.717 175.177 189.013 171.679 188.258 168.332C187.503 164.986 185.734 161.954 183.192 159.65C180.649 157.346 177.458 155.883 174.054 155.46C170.649 155.038 167.197 155.676 164.169 157.288C161.14 158.9 158.683 161.407 157.133 164.468C155.582 167.528 155.014 170.992 155.505 174.388C155.997 177.783 157.524 180.944 159.879 183.439L161.129 182.259C159.018 180.021 157.648 177.186 157.207 174.141C156.766 171.096 157.276 167.989 158.667 165.245C160.057 162.5 162.261 160.252 164.977 158.806C167.693 157.36 170.788 156.788 173.842 157.167C176.895 157.546 179.757 158.858 182.037 160.924C184.317 162.99 185.904 165.709 186.581 168.711C187.258 171.712 186.992 174.849 185.82 177.694C184.648 180.539 182.627 182.952 180.032 184.606L180.956 186.056Z" fill="#00FFFF" />
      <path id="center" d="M172 166.445C175.068 166.445 177.556 168.932 177.556 172C177.556 175.068 175.068 177.556 172 177.556C168.932 177.556 166.444 175.068 166.444 172C166.444 168.932 168.932 166.445 172 166.445ZM172 177.021C174.773 177.021 177.021 174.773 177.021 172C177.021 169.227 174.773 166.979 172 166.979C169.227 166.979 166.979 169.227 166.979 172C166.979 174.773 169.227 177.021 172 177.021Z" fill="#00FFFF" />
    </svg>

  </SvgFrameBox2>)

const LoadingComponent = (props: LibComponentProps) => {
  const { isLoading } = props
  const isShowLoading1 = false

  return (
    <React.Fragment>
      <Backdrop open={isLoading}>
        {isShowLoading1 ? <Loading1 /> : <Loading2 />}
      </Backdrop>
    </React.Fragment>
  )
}

export default LoadingComponent