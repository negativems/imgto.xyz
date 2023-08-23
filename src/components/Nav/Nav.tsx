import Link from 'next/link';

import Container from '@/components/Container';

const Nav = () => {
  return (
    <nav className="py-8">
      <Container className="flex justify-between items-center flex-col md:flex-row">
        <p className="text-center mb-4 md:mb-0">
          <Link href="/" className="text-3xl font-bold text-slate-900 dark:text-white hover:text-slate-900 dark:hover:text-gray-100 drop-shadow-[0_2px_0px_rgba(255,255,255,1)] dark:drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
            <svg width="180" height="42" viewBox="0 0 180 42" fill="none" xmlns="http://www.w3.org/2000/svg">
              <title>imgto.xyz</title>
              <path d="M0.44 31.812V9.988H6.908V31.812H0.44ZM3.652 6.776C2.56667 6.776 1.68667 6.468 1.012 5.852C0.337333 5.236 0 4.41467 0 3.388C0 2.36133 0.337333 1.54 1.012 0.924002C1.68667 0.308001 2.56667 0 3.652 0C4.73733 0 5.61733 0.308001 6.292 0.924002C6.96667 1.54 7.304 2.36133 7.304 3.388C7.304 4.41467 6.96667 5.236 6.292 5.852C5.61733 6.468 4.73733 6.776 3.652 6.776Z" fill="black"/>
              <path d="M10.6002 31.812V9.988H15.8802L16.3202 12.804H16.4962C17.4055 11.8947 18.3735 11.1173 19.4002 10.472C20.4268 9.79734 21.6588 9.46 23.0962 9.46C24.6508 9.46 25.8975 9.78267 26.8362 10.428C27.8042 11.044 28.5668 11.9387 29.1242 13.112C30.0922 12.1147 31.1188 11.264 32.2042 10.56C33.2895 9.82667 34.5508 9.46 35.9882 9.46C38.3348 9.46 40.0508 10.252 41.1362 11.836C42.2508 13.3907 42.8082 15.532 42.8082 18.26V31.812H36.3402V19.096C36.3402 17.512 36.1202 16.4267 35.6802 15.84C35.2695 15.2533 34.5948 14.96 33.6562 14.96C32.5708 14.96 31.3242 15.664 29.9162 17.072V31.812H23.4482V19.096C23.4482 17.512 23.2282 16.4267 22.7882 15.84C22.3775 15.2533 21.7028 14.96 20.7642 14.96C19.6788 14.96 18.4468 15.664 17.0682 17.072V31.812H10.6002Z" fill="black"/>
              <path d="M54.1147 41.096C52.4134 41.096 50.8734 40.9053 49.4947 40.524C48.1161 40.1427 47.0161 39.5413 46.1947 38.72C45.3734 37.8987 44.9627 36.8427 44.9627 35.552C44.9627 33.792 46.004 32.3253 48.0867 31.152V30.976C47.5294 30.5947 47.0454 30.1107 46.6347 29.524C46.2534 28.9373 46.0627 28.1893 46.0627 27.28C46.0627 26.488 46.2974 25.7253 46.7667 24.992C47.236 24.2587 47.8227 23.6573 48.5267 23.188V23.012C47.7641 22.484 47.0747 21.7213 46.4587 20.724C45.8721 19.7267 45.5787 18.5973 45.5787 17.336C45.5787 15.576 46.0041 14.124 46.8547 12.98C47.7054 11.8067 48.8201 10.9267 50.1987 10.34C51.5774 9.75333 53.044 9.46 54.5987 9.46C55.8894 9.46 57.0187 9.636 57.9867 9.988H65.9507V14.696H62.4747C62.6801 15.0187 62.8414 15.4293 62.9587 15.928C63.1054 16.4267 63.1787 16.9693 63.1787 17.556C63.1787 19.228 62.7974 20.6067 62.0347 21.692C61.2721 22.7773 60.2454 23.584 58.9547 24.112C57.6641 24.64 56.2121 24.904 54.5987 24.904C53.748 24.904 52.8681 24.7573 51.9587 24.464C51.4307 24.904 51.1667 25.4467 51.1667 26.092C51.1667 26.6493 51.4161 27.06 51.9147 27.324C52.4134 27.588 53.2641 27.72 54.4667 27.72H57.9867C60.6854 27.72 62.7387 28.16 64.1467 29.04C65.5841 29.8907 66.3027 31.2987 66.3027 33.264C66.3027 34.76 65.8041 36.0947 64.8067 37.268C63.8094 38.4707 62.4014 39.4093 60.5827 40.084C58.7641 40.7587 56.608 41.096 54.1147 41.096ZM54.5987 20.988C55.4494 20.988 56.1534 20.68 56.7107 20.064C57.2974 19.448 57.5907 18.5387 57.5907 17.336C57.5907 16.192 57.2974 15.3267 56.7107 14.74C56.1534 14.124 55.4494 13.816 54.5987 13.816C53.748 13.816 53.0294 14.1093 52.4427 14.696C51.8854 15.2827 51.6067 16.1627 51.6067 17.336C51.6067 18.5387 51.8854 19.448 52.4427 20.064C53.0294 20.68 53.748 20.988 54.5987 20.988ZM55.1267 37.048C56.5934 37.048 57.7961 36.784 58.7347 36.256C59.6734 35.728 60.1427 35.0973 60.1427 34.364C60.1427 33.6893 59.8494 33.2347 59.2627 33C58.7054 32.7653 57.8841 32.648 56.7987 32.648H54.5547C53.8214 32.648 53.2054 32.6187 52.7067 32.56C52.2374 32.5307 51.8267 32.472 51.4747 32.384C50.6827 33.088 50.2867 33.8067 50.2867 34.54C50.2867 35.3613 50.7267 35.9773 51.6067 36.388C52.5161 36.828 53.6894 37.048 55.1267 37.048Z" fill="black"/>
              <path d="M78.2346 32.34C75.536 32.34 73.6 31.5627 72.4266 30.008C71.2826 28.4533 70.7106 26.4147 70.7106 23.892V15.048H67.7186V10.252L71.0626 9.988L71.8106 4.18H77.1786V9.988H82.4146V15.048H77.1786V23.804C77.1786 25.036 77.428 25.9307 77.9266 26.488C78.4546 27.016 79.144 27.28 79.9946 27.28C80.3466 27.28 80.6986 27.236 81.0506 27.148C81.432 27.06 81.7693 26.9573 82.0626 26.84L83.0746 31.548C82.5173 31.724 81.828 31.9 81.0066 32.076C80.2146 32.252 79.2906 32.34 78.2346 32.34Z" fill="black"/>
              <path d="M94.2729 32.34C92.4249 32.34 90.6796 31.9 89.0369 31.02C87.4236 30.1107 86.1183 28.8053 85.1209 27.104C84.1236 25.3733 83.6249 23.3053 83.6249 20.9C83.6249 18.4653 84.1236 16.3973 85.1209 14.696C86.1183 12.9947 87.4236 11.704 89.0369 10.824C90.6796 9.91467 92.4249 9.46 94.2729 9.46C96.1209 9.46 97.8516 9.91467 99.4649 10.824C101.078 11.704 102.384 12.9947 103.381 14.696C104.378 16.3973 104.877 18.4653 104.877 20.9C104.877 23.3053 104.378 25.3733 103.381 27.104C102.384 28.8053 101.078 30.1107 99.4649 31.02C97.8516 31.9 96.1209 32.34 94.2729 32.34ZM94.2729 27.104C95.5929 27.104 96.5903 26.5467 97.2649 25.432C97.9396 24.288 98.2769 22.7773 98.2769 20.9C98.2769 18.9933 97.9396 17.4827 97.2649 16.368C96.5903 15.2533 95.5929 14.696 94.2729 14.696C92.9236 14.696 91.9116 15.2533 91.2369 16.368C90.5916 17.4827 90.2689 18.9933 90.2689 20.9C90.2689 22.7773 90.5916 24.288 91.2369 25.432C91.9116 26.5467 92.9236 27.104 94.2729 27.104Z" fill="black"/>
              <path d="M110.618 32.34C109.503 32.34 108.564 31.9587 107.801 31.196C107.068 30.404 106.701 29.436 106.701 28.292C106.701 27.1187 107.068 26.1507 107.801 25.388C108.564 24.596 109.503 24.2 110.618 24.2C111.732 24.2 112.656 24.596 113.39 25.388C114.152 26.1507 114.534 27.1187 114.534 28.292C114.534 29.436 114.152 30.404 113.39 31.196C112.656 31.9587 111.732 32.34 110.618 32.34Z" fill="black"/>
              <path d="M116.825 31.812L123.513 20.46L117.221 9.988H124.173L126.109 13.508C126.402 14.124 126.71 14.7547 127.033 15.4C127.356 16.016 127.664 16.632 127.957 17.248H128.133C128.368 16.632 128.617 16.016 128.881 15.4C129.145 14.7547 129.394 14.124 129.629 13.508L131.125 9.988H137.813L131.477 21.208L138.209 31.812H131.257L129.145 28.204C128.793 27.588 128.441 26.9573 128.089 26.312C127.766 25.6667 127.429 25.036 127.077 24.42H126.901C126.637 25.036 126.358 25.6667 126.065 26.312C125.772 26.928 125.493 27.5587 125.229 28.204L123.513 31.812H116.825Z" fill="#F44336"/>
              <path d="M144.09 40.348C143.445 40.348 142.873 40.304 142.374 40.216C141.905 40.128 141.45 40.0253 141.01 39.908L142.154 34.98C142.36 35.0093 142.594 35.0533 142.858 35.112C143.122 35.2 143.372 35.244 143.606 35.244C144.692 35.244 145.528 34.98 146.114 34.452C146.701 33.924 147.141 33.2347 147.434 32.384L147.742 31.24L139.338 9.988H145.85L148.974 19.36C149.297 20.3573 149.59 21.3693 149.854 22.396C150.118 23.4227 150.397 24.4787 150.69 25.564H150.866C151.101 24.5373 151.336 23.5107 151.57 22.484C151.834 21.428 152.098 20.3867 152.362 19.36L155.002 9.988H161.206L153.638 32.032C152.964 33.8507 152.216 35.376 151.394 36.608C150.573 37.8693 149.576 38.808 148.402 39.424C147.258 40.04 145.821 40.348 144.09 40.348Z" fill="#4CAF50"/>
              <path d="M162.428 31.812V28.336L171.58 15.048H163.44V9.988H179.632V13.42L170.48 26.752H179.94V31.812H162.428Z" fill="#2196F3"/>
            </svg>
          </Link>
        </p>
        <ul className="flex m-0">
          <li className="mr-6">
            <Link href="/how-to-use" className="text-slate-600 dark:text-slate-300 text-inherit">
              How to Use
            </Link>
          </li>
          <li className="mr-6">
            <Link href="/developer-api" className="text-slate-600 dark:text-slate-300 text-inherit">
              Developer API
            </Link>
          </li>
          <li>
            <Link href="/pricing" className="text-slate-600 dark:text-slate-300 text-inherit">
              Pricing
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  )
}

export default Nav;