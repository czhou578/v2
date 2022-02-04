import { useEffect } from "react";
import { designSVG } from "../../scripts/script";
import styles from '../../styles/svg.module.css'

const Design: React.FC = () => {
  useEffect(() => {
    designSVG();
  }, []);

  return (
    <div>
      <div className="icon-1">
        <svg
          width="828"
          height="519"
          viewBox="0 0 1028 519"
          fill="none"
          xmlns="https://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="right">
              <stop offset="0" stopColor="#36f59f">
                <animate
                  dur="5s"
                  attributeName="offset"
                  fill="freeze"
                  from="0"
                  to="1"
                  repeatCount="indefinite"
                />
              </stop>
              <stop offset="0" stopColor="#fff">
                <animate
                  dur="5s"
                  attributeName="offset"
                  fill="freeze"
                  from="0"
                  to="1"
                  repeatCount="indefinite"
                />
              </stop>
            </linearGradient>
          </defs>
          <g id="undraw_In_progress_re_m1l6 (1) 1">
            <path
              id="connect-line"
              d="M220.896 260.972L219.505 259.592L279.965 199.615H397.13L456.245 139.763H571.897L630.245 81.431H901.859V83.3826H631.065L572.716 141.715H457.071L397.957 201.567H280.78L220.896 260.972Z"
              fill="white"
            />
            <path
              id="Vector"
              d="M540.536 176.597C562.237 176.597 579.83 160.345 579.83 140.297C579.83 120.249 562.237 103.996 540.536 103.996C518.834 103.996 501.241 120.249 501.241 140.297C501.241 160.345 518.834 176.597 540.536 176.597Z"
              fill="white"
            />
            <path
              id="unfilled-2"
              d="M872.946 91.242C878.811 91.242 883.566 86.8494 883.566 81.431C883.566 76.0125 878.811 71.62 872.946 71.62C867.081 71.62 862.326 76.0125 862.326 81.431C862.326 86.8494 867.081 91.242 872.946 91.242Z"
              fill="#CBCBCB"
            />
            <path
              id="Vector_2"
              d="M540.536 177.578C532.554 177.578 524.751 175.392 518.115 171.295C511.478 167.199 506.306 161.376 503.251 154.564C500.197 147.752 499.397 140.255 500.955 133.024C502.512 125.792 506.355 119.149 511.999 113.935C517.643 108.721 524.834 105.17 532.663 103.731C540.491 102.293 548.605 103.031 555.979 105.853C563.354 108.675 569.657 113.453 574.091 119.584C578.525 125.715 580.892 132.923 580.892 140.297C580.88 150.181 576.624 159.657 569.059 166.647C561.493 173.636 551.235 177.567 540.536 177.578ZM540.536 104.977C532.974 104.977 525.582 107.049 519.295 110.93C513.008 114.811 508.107 120.327 505.214 126.781C502.32 133.234 501.563 140.336 503.038 147.187C504.513 154.039 508.154 160.332 513.501 165.271C518.848 170.211 525.661 173.575 533.077 174.938C540.493 176.3 548.181 175.601 555.167 172.928C562.153 170.254 568.124 165.727 572.325 159.919C576.526 154.111 578.768 147.282 578.768 140.297C578.757 130.933 574.725 121.955 567.558 115.334C560.39 108.712 550.672 104.988 540.536 104.977V104.977Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_3"
              d="M540.536 166.233C556.042 166.233 568.611 154.621 568.611 140.297C568.611 125.972 556.042 114.36 540.536 114.36C525.03 114.36 512.46 125.972 512.46 140.297C512.46 154.621 525.03 166.233 540.536 166.233Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_4"
              d="M537.86 151.246L529.457 141.264L534.344 137.753L538.323 142.479L551.764 129.37L556.258 133.305L537.86 151.246Z"
              fill="white"
            />
            <path
              id="Vector_5"
              d="M347.249 236.444C368.951 236.444 386.544 220.192 386.544 200.144C386.544 180.095 368.951 163.843 347.249 163.843C325.547 163.843 307.955 180.095 307.955 200.144C307.955 220.192 325.547 236.444 347.249 236.444Z"
              fill="white"
            />
            <path
              id="Vector_6"
              d="M875.669 112.826C897.37 112.826 914.963 96.5738 914.963 76.5255C914.963 56.4773 897.37 40.225 875.669 40.225C853.967 40.225 836.374 56.4773 836.374 76.5255C836.374 96.5738 853.967 112.826 875.669 112.826Z"
              fill="white"
            />
            <path
              id="Vector_7"
              d="M347.249 237.425C339.267 237.425 331.465 235.239 324.828 231.142C318.192 227.046 313.019 221.223 309.965 214.411C306.91 207.598 306.111 200.102 307.668 192.87C309.225 185.638 313.069 178.995 318.713 173.782C324.357 168.568 331.548 165.017 339.376 163.578C347.204 162.14 355.319 162.878 362.693 165.7C370.067 168.522 376.37 173.3 380.804 179.431C385.239 185.562 387.606 192.77 387.606 200.144C387.594 210.028 383.338 219.504 375.772 226.493C368.206 233.483 357.949 237.414 347.249 237.425ZM347.249 164.824C339.688 164.824 332.296 166.896 326.008 170.777C319.721 174.658 314.821 180.174 311.927 186.627C309.033 193.081 308.276 200.183 309.751 207.034C311.227 213.885 314.868 220.179 320.215 225.118C325.562 230.058 332.374 233.422 339.79 234.784C347.207 236.147 354.894 235.448 361.88 232.775C368.866 230.101 374.837 225.574 379.038 219.766C383.239 213.958 385.482 207.129 385.482 200.144C385.47 190.78 381.439 181.802 374.271 175.181C367.104 168.559 357.386 164.835 347.249 164.824V164.824Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_8"
              d="M876.662 114.788C868.68 114.788 860.878 112.602 854.241 108.505C847.604 104.409 842.432 98.586 839.377 91.7737C836.323 84.9614 835.524 77.4653 837.081 70.2333C838.638 63.0014 842.482 56.3584 848.125 51.1445C853.769 45.9306 860.96 42.3798 868.789 40.9413C876.617 39.5028 884.731 40.2411 892.106 43.0629C899.48 45.8846 905.783 50.6631 910.217 56.7941C914.652 62.925 917.018 70.133 917.018 77.5066C917.006 87.3909 912.751 96.8671 905.185 103.856C897.619 110.846 887.361 114.777 876.662 114.788ZM876.662 42.1872C869.1 42.1872 861.708 44.2586 855.421 48.1396C849.134 52.0205 844.233 57.5367 841.34 63.9904C838.446 70.4442 837.689 77.5458 839.164 84.3971C840.639 91.2484 844.28 97.5417 849.627 102.481C854.974 107.421 861.787 110.785 869.203 112.147C876.619 113.51 884.307 112.811 891.293 110.138C898.279 107.464 904.25 102.937 908.451 97.1291C912.652 91.3208 914.894 84.4922 914.894 77.5066C914.883 68.1426 910.851 59.1651 903.684 52.5437C896.516 45.9223 886.798 42.1977 876.662 42.1872V42.1872Z"
              fill="#3F3D56"
            />
            <path
              id="Vector_9"
              d="M347.249 226.08C362.755 226.08 375.325 214.468 375.325 200.144C375.325 185.819 362.755 174.207 347.249 174.207C331.743 174.207 319.173 185.819 319.173 200.144C319.173 214.468 331.743 226.08 347.249 226.08Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_10"
              d="M876.662 103.443C892.168 103.443 904.738 91.831 904.738 77.5066C904.738 63.1822 892.168 51.57 876.662 51.57C861.156 51.57 848.586 63.1822 848.586 77.5066C848.586 91.831 861.156 103.443 876.662 103.443Z"
              fill="#6C63FF"
            />
            <path
              id="Vector_11"
              d="M344.574 211.093L336.171 201.111L341.057 197.6L345.037 202.326L358.477 189.217L362.972 193.151L344.574 211.093Z"
              fill="white"
            />
            <ellipse
              id="Ellipse 2"
              cx="325.081"
              cy="52.5463"
              rx="27.0814"
              ry="23.5463"
              fill="#EB3131"
            />
            <ellipse
              id="Ellipse 3"
              cx="400.484"
              cy="52.5463"
              rx="27.0813"
              ry="23.5463"
              fill="#BDC83F"
            />
            <ellipse
              id="Ellipse 4"
              cx="370.748"
              cy="108.469"
              rx="27.0814"
              ry="23.5463"
              fill="#1435DE"
            />
            <rect
              id="Rectangle 3"
              x="803"
              y="126"
              width="129"
              height="49"
              rx="7"
              fill="#B0D6EC"
            />
            <text
              id="&#60;/&#62;"
              fill="black"
              stroke="black"
              xmlSpace="preserve"
              style={{ whiteSpace: "pre" }}
              fontFamily="Roboto"
              fontSize="36"
              letterSpacing="0em"
            >
              <tspan x="836.305" y="160.847">
                &#60;/&#62;
              </tspan>
            </text>
            <path
              id="Vector_12"
              d="M872.519 88.5901L864.116 78.6084L869.002 75.097L872.982 79.823L886.423 66.7146L890.917 70.6487L872.519 88.5901Z"
              fill="white"
            />
          </g>
        </svg>
        <div className={styles.designCtn}>
          <h2 className={styles.header}>Designer (Start to Finish)</h2>
          <p className={styles.paragraph}>
            Visual impact makes a statement. I&apos;ll help unite products, <br />
            interfaces, users, and experiences. From color to code...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Design;
