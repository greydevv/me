import { useRouter } from 'next/router'
import Link from 'next/link'

export function NavItem({ to, linkText }) {

  const { pathname } = useRouter()

  const isActive = () => {
    return pathname === to
  }

  const linkCls = () => {
    return `font-ibm-plex-sans text-lg tracking-wider text-center ${isActive() ? 'text-dark' : 'text-grey'}`
  }

  return (
    <div className="relative">
      <Link
        href={ to }
      >
        <a className={ linkCls() }>
          { linkText }
        </a>
      </Link>
      { isActive() &&
        <>
          { to === "/" &&
            <svg
              className="absolute z-[-1] bottom-0 right-1"
              width="51"
              height="9"
              viewBox="0 0 51 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1.37695 2.55784C3.51636 1.67282 6.03867 1.77326 8.25902 1.70087C12.0485 1.57731 15.8369 1.65344 19.6263 1.56314C22.8067 1.48736 25.9873 1.47505 29.1663 1.3489C32.2137 1.22797 35.2266 1.67722 38.2672 1.8386C40.41 1.95232 42.5658 1.8692 44.7103 1.8692C45.6532 1.8692 46.5932 1.88235 47.5343 1.80034C48.1147 1.74976 49.7988 1.39597 49.2785 1.73147C48.5821 2.18059 47.2886 2.06881 46.5316 2.12936C45.1081 2.24321 43.6799 2.27719 42.2541 2.28239C39.3288 2.29304 36.408 2.28294 33.4854 2.48133C30.9295 2.65482 28.387 3.18961 25.8439 3.55255C24.1873 3.78897 22.4664 4.18021 20.8722 4.8227C20.3164 5.04671 19.8214 5.50828 19.2585 5.69498C19.0379 5.76814 18.6177 6.29479 18.6177 6.00104C18.6177 5.42133 26.6069 5.79186 27.3508 5.89392C27.7022 5.94213 28.448 6.07037 27.5881 6.28415C26.5328 6.54652 25.4601 6.67497 24.4082 6.96514C24.0516 7.06348 22.6283 7.27723 22.6283 7.92924" stroke="#E9DFDF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
          { to === "/work" &&
            <svg
              v-show="to === '/work' && isActive"
              className="absolute z-[-1] bottom-0"
              width="52"
              height="24"
              viewBox="0 0 52 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 14.236C1.2671 12.7704 2.82447 11.3671 3.52371 10.0793C3.90856 9.3705 4.10184 8.66366 4.57385 8.00094C4.60266 7.9605 5.11585 6.94437 5.11585 7.42644C5.11585 9.41319 4.82558 11.4114 4.81098 13.408C4.79643 15.3961 3.17475 21.18 3.76084 19.2797C4.11307 18.1377 4.82818 17.0782 5.35298 16.0102C6.16785 14.3518 7.16367 12.7756 8.06301 11.1607C8.86624 9.71835 9.6873 8.32483 10.5867 6.93643C10.7918 6.61979 11.5142 5.05766 11.9417 4.95102C12.1904 4.889 11.8443 5.45317 11.7893 5.70294C11.5688 6.7048 11.3354 7.70503 11.061 8.69373C10.5133 10.6667 9.63423 12.5126 9.00305 14.4556C8.41169 16.276 8.15612 18.2055 7.48713 19.9979C7.26441 20.5946 6.68283 22.4037 6.979 21.8397C8.4499 19.0383 10.3377 16.3809 12.0603 13.7291C13.2949 11.8286 14.7842 10.1332 16.3117 8.46561C16.6581 8.08744 17.0024 7.70797 17.3618 7.34196C17.4793 7.22233 17.6721 6.84853 17.7344 7.00402C17.7959 7.15748 17.3489 7.99208 17.3449 8.00094C16.8523 9.08203 16.3187 10.1451 15.7781 11.2029C14.9313 12.86 14.071 14.4971 13.3476 16.2129C12.7072 17.7316 10.9233 22.3165 11.7554 20.8934C12.8266 19.0615 13.5123 16.8783 14.4485 14.9625C15.6405 12.5234 16.9216 10.2323 18.7337 8.19526C20.0009 6.77091 21.2501 5.39238 22.3245 3.81047C22.9158 2.93992 24.386 0.203429 24.1369 1.22521C22.4507 8.14071 15.7522 28.437 17.8022 21.62C18.5861 19.013 20.1548 16.6553 21.664 14.4218C22.7339 12.8383 23.9525 11.239 25.3648 9.93566C25.7975 9.53643 26.0914 9.16798 25.9323 9.94411C25.5868 11.6289 25.1742 13.3437 24.6196 14.971C24.1142 16.454 23.2941 17.8652 22.9851 19.4065C22.904 19.811 22.8157 20.2576 22.8157 20.6738C22.8157 21.0268 23.1947 20.0765 23.4085 19.7951C25.6039 16.906 27.8756 14.099 29.8957 11.0762C30.1206 10.7397 30.1159 10.7938 30.1159 11.2367C30.1159 12.75 30.0681 14.2133 29.7771 15.706C29.4836 17.212 28.7954 18.7033 28.6169 20.2175C28.6078 20.2942 28.5307 21.6739 28.7439 21.5017C28.9889 21.3038 29.1752 20.8113 29.3028 20.5639C29.8165 19.5684 30.3272 18.5808 30.9119 17.6238C32.5111 15.0064 34.2017 12.4865 35.4173 9.65686C35.9391 8.44246 36.4161 7.22854 37.128 6.10847C37.4247 5.64178 37.7458 5.19523 38.0935 4.76515C38.1076 4.74769 38.4766 4.24611 38.4915 4.34273C38.7317 5.90006 38.1475 7.85995 37.8902 9.38651C37.474 11.8565 37.0291 14.361 36.2219 16.7367C35.8864 17.724 35.7353 18.7549 35.4173 19.7444C35.3534 19.9435 34.9292 21.1528 35.3411 20.3105C36.732 17.466 38.855 14.9764 40.9221 12.597C41.0301 12.4726 41.5488 11.8261 41.5488 11.9549C41.5488 12.9383 41.3849 13.8718 41.2778 14.8443C41.262 14.9879 40.9466 16.6833 40.9729 16.7029C41.0314 16.7467 42.6845 15.2392 42.8699 15.1146C44.0954 14.2913 45.077 13.0484 46.3337 12.3519C46.3935 12.3188 45.9148 13.6611 45.8171 13.8642C45.4436 14.6403 45.1573 15.4374 44.8432 16.2383C44.6915 16.6248 45.7236 15.5443 45.851 15.4188C47.6877 13.6077 49.3361 11.6411 51 9.67376" stroke="#E9DFDF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
          { to === "/blog" &&
            <svg
              v-show="to === '/blog' && isActive"
              className="absolute z-[-1] bottom-px"
              width="47"
              height="8"
              viewBox="0 0 47 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M1 1.31034C2.55688 1.2902 4.10306 1.10345 5.66403 1.10345C7.49559 1.10345 9.32289 1 11.153 1C12.8977 1 14.6786 1.01655 16.4199 1.12644C18.6215 1.26537 20.8172 1.25228 23.0193 1.36207C29.1502 1.66772 35.2565 1.10345 41.3793 1.10345C42.535 1.10345 43.6967 1.51724 44.88 1.51724C45.1409 1.51724 45.4017 1.51724 45.6626 1.51724C46.8209 1.51724 44.6415 1.85309 44.4411 1.87931C42.1588 2.17787 39.8967 2.11759 37.6037 2.13793C35.6615 2.15516 33.731 2.44828 31.7868 2.44828C29.0881 2.44828 26.3966 2.86207 23.7067 2.86207C18.834 2.86207 13.9199 2.7112 9.05894 3.09195C6.92177 3.25936 4.69066 3.27586 2.54939 3.27586C2.38076 3.27586 1.78993 3.15962 1.66629 3.32759C1.59127 3.4295 1.22656 3.48276 1.60283 3.48276C5.9703 3.48276 10.3271 3.98397 14.696 3.71264C15.7962 3.64432 16.8932 3.76533 17.9904 3.84483C19.8065 3.97641 21.6344 4.08509 23.4529 4.18391C25.0648 4.2715 26.6827 4.41379 28.2967 4.41379C29.5346 4.41379 30.7689 4.31034 32.0089 4.31034C34.1022 4.31034 36.2478 4.27343 38.3334 4.46552C39.9178 4.61144 41.5809 4.72414 43.1667 4.72414C43.9458 4.72414 46.2831 4.72414 45.504 4.72414C42.2209 4.72414 38.9186 5.03843 35.6471 5.32184C31.6889 5.66474 27.7507 5.65517 23.7808 5.65517C20.8505 5.65517 17.9241 5.75862 14.9921 5.75862C13.2241 5.75862 11.4457 5.86207 9.68821 5.86207C8.50105 5.86207 7.44267 6.10277 6.28802 6.27586C5.80329 6.34853 5.31524 6.41546 4.83381 6.47701C4.37572 6.53558 3.88503 6.39941 3.43249 6.50575C2.6019 6.70092 4.54858 6.284 4.65931 6.27012C7.04307 5.97119 9.60362 5.73488 11.9991 6.01149C13.0754 6.13578 14.1298 6.38834 15.2142 6.45977C16.5651 6.54875 17.9332 6.48276 19.286 6.48276C22.4987 6.48276 25.6968 6.68966 28.9049 6.68966C31.0365 6.68966 33.1604 6.37931 35.2981 6.37931C36.398 6.37931 37.4979 6.37931 38.5978 6.37931C39.6869 6.37931 40.7273 6.68966 41.8129 6.68966C42.2047 6.68966 43.0301 6.4911 43.3359 6.71264C43.6952 6.973 44.8574 7 45.3559 7" stroke="#E9DFDF" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          }
        </>
      }
    </div>
  )
}

export default function Navbar({ className }) {
  const containerCls = () => {
    let baseCls = "bg-light w-full"
    if (className) {
      return `${className} ${baseCls}`
    }
    return baseCls
  }

  return (
    <div className={ containerCls() }>
      <div className="flex flex-start border-box px-32 max-w-6xl mx-auto gap-x-5 items-center py-8">
        <NavItem to="/" linkText="about" />
        <NavItem to="/work" linkText="work" />
        <NavItem to="/blog" linkText="blog" />
      </div>
    </div>
  )
}
