import type { IconBaseProps } from 'react-icons';

import {
  MdWork,
  MdMonitor,
  MdOutlineArticle,
  MdOutlineSchedule,
  MdOutlineInsights,
  MdOutlineDesignServices
} from 'react-icons/md';
import {
  SiGithub,
  SiGitlab,
  SiArduino,
  SiDiscord,
  SiTwitter,
  SiLinkedin,
  SiAboutdotme,
  SiFreecodecamp,
  SiCodepen,
  SiCodesandbox
} from 'react-icons/si';
import {
  FaBars,
  FaPeopleGroup,
  FaChevronLeft,
  FaChevronRight,
  FaRegNoteSticky
} from 'react-icons/fa6';
import { CgWebsite } from 'react-icons/cg';
import { IoMdSwitch } from 'react-icons/io';
import { PiCalendar } from 'react-icons/pi';
import { BiLogoGmail } from 'react-icons/bi';
import { LiaBlogSolid } from 'react-icons/lia';
import { FiCodesandbox } from 'react-icons/fi';
import { RiArticleLine } from 'react-icons/ri';
import { TiDocumentText } from 'react-icons/ti';
import { RxDashboard, RxMoon } from 'react-icons/rx';
import { PiPlugsConnectedBold } from 'react-icons/pi';
import { BsArrowUpRight, BsSun } from 'react-icons/bs';
import { HiOutlineRocketLaunch } from 'react-icons/hi2';
import { LuGithub, LuLayoutDashboard } from 'react-icons/lu';
import { AiOutlineFundProjectionScreen } from 'react-icons/ai';
import { VscFeedback, VscNotebookTemplate } from 'react-icons/vsc';
import { IoShareSocialOutline, IoCopyOutline } from 'react-icons/io5';
import { HiOutlineDocumentText, HiOutlineTemplate } from 'react-icons/hi';

export type Icon = IconBaseProps;

export const Icons = {
  logo: (props: Icon) => (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' {...props}>
      <path
        fill='currentColor'
        d='M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z'
      />
    </svg>
  ),
  theme: {
    sun: (props: Icon) => <BsSun {...props} />,
    moon: (props: Icon) => <RxMoon {...props} />,
    system: (props: Icon) => <MdMonitor {...props} />
  },
  community: {
    twitter: (props: Icon) => <SiTwitter {...props} />,
    github: (props: Icon) => <SiGithub {...props} />,
    discord: (props: Icon) => <SiDiscord {...props} />
  },
  social: {
    github: (props: Icon) => (
      <SiGithub
        className='cursor-pointer text-2xl text-background dark:text-white md:text-3xl'
        {...props}
      />
    ),
    twitter: (props: Icon) => (
      <SiTwitter
        className='cursor-pointer text-2xl text-background dark:text-white md:text-3xl'
        {...props}
      />
    ),
    codesandbox: (props: Icon) => (
      <FiCodesandbox
        className='cursor-pointer text-2xl text-background dark:text-white md:text-3xl'
        {...props}
      />
    ),
    linkedin: (props: Icon) => (
      <SiLinkedin
        className='cursor-pointer text-2xl text-background dark:text-white md:text-3xl'
        {...props}
      />
    ),
    gitlab: (props: Icon) => (
      <SiGitlab
        className='cursor-pointer text-2xl text-background dark:text-white md:text-3xl'
        {...props}
      />
    ),
    freecodecamp: (props: Icon) => (
      <SiFreecodecamp
        className='cursor-pointer text-2xl text-background dark:text-white md:text-3xl'
        {...props}
      />
    ),
    arduino: (props: Icon) => (
      <SiArduino
        className='cursor-pointer text-2xl text-background dark:text-white md:text-3xl'
        {...props}
      />
    )
  },
  navigation: {
    blog: {
      icon: (props: Icon) => <LiaBlogSolid {...props} />,
      posts: (props: Icon) => <MdOutlineArticle {...props} />,
      github: (props: Icon) => <SiGithub {...props} />,
      notes: (props: Icon) => <FaRegNoteSticky {...props} />
    },
    works: {
      icon: (props: Icon) => <MdWork {...props} />,
      projects: (props: Icon) => <AiOutlineFundProjectionScreen {...props} />,
      codesandbox: (props: Icon) => <SiCodesandbox {...props} />,
      codepen: (props: Icon) => <SiCodepen {...props} />,
      arduino: (props: Icon) => <SiArduino {...props} />
    },
    insights: {
      icon: (props: Icon) => <MdOutlineInsights {...props} />,
      dashboard: (props: Icon) => <LuLayoutDashboard {...props} />,
      github: (props: Icon) => <LuGithub {...props} />,
      website: (props: Icon) => <CgWebsite {...props} />
    },
    guestbook: (props: Icon) => <FaPeopleGroup {...props} />,
    docs: (props: Icon) => <HiOutlineDocumentText {...props} />,
    about: (props: Icon) => <SiAboutdotme {...props} />
  },
  search: {
    projects: (props: Icon) => <RxDashboard {...props} />,
    posts: (props: Icon) => <RiArticleLine {...props} />
  },
  directions: {
    arrowUpRight: (props: Icon) => <BsArrowUpRight {...props} />,
    chevRight: (props: Icon) => <FaChevronRight {...props} />,
    chevLeft: (props: Icon) => <FaChevronLeft {...props} />
  },
  share: (props: Icon) => <IoShareSocialOutline {...props} />,
  feedback: (props: Icon) => <VscFeedback {...props} />,
  docs: (props: Icon) => <TiDocumentText {...props} />,
  meeting: (props: Icon) => <MdOutlineSchedule {...props} />,
  ask: (props: Icon) => <BiLogoGmail {...props} />,
  mobileNavBar: (props: Icon) => <FaBars {...props} />,
  copy: (props: Icon) => <IoCopyOutline {...props} />,
  switch: (props: Icon) => <IoMdSwitch {...props} />,
  templates: (props: Icon) => <VscNotebookTemplate {...props} />,
  design: (props: Icon) => <MdOutlineDesignServices {...props} />,
  calendar: (props: Icon) => <PiCalendar {...props} />,
  gitHub: (props: Icon) => (
    <svg viewBox='0 0 438.549 438.549' {...props}>
      <path
        fill='currentColor'
        d='M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z'></path>
    </svg>
  ),
  checkly: (props: Icon) => (
    <svg
      {...props}
      viewBox='0 0 60 55'
      fill='none'
      style={{
        transform: 'translateX(0px)'
      }}>
      <path
        d='M48.032,32.154l-0,-15.552c-0,-4.35 -3.528,-7.877 -7.878,-7.877l-20.31,-0c-4.35,-0 -7.877,3.527 -7.877,7.877l0,15.552c-0.378,11.68 7.685,11.16 8.884,11.16l9.134,0.604l-0,0.002l0.03,0l0,-0.002l9.134,-0.604c1.199,-0 9.262,0.522 8.884,-11.16l-0.001,-0Z'
        style={{
          fill: 'rgb(0, 117, 255)',
          fillRule: 'nonzero'
        }}></path>
      <path
        d='M41.263,33.6c3.56,-7.651 2.885,-12.693 -5.977,-6.597c-1.66,-0.69 -3.206,-0.829 -5.258,-0.872l-0.041,-0c-0.005,-0 -0.009,-0 -0.014,-0.001c-2.052,0.043 -3.599,0.183 -5.258,0.873c-8.863,-6.096 -9.537,-1.055 -5.977,6.597c1.106,1.96 -1.318,2.758 -3.365,3.032c-0.001,0.001 1.237,3.799 3.901,5.963l4.574,1.082l1.475,0.462c0.012,-0 2.068,0.62 2.379,0.707c0.485,0.793 1.332,1.419 2.285,1.429l0.028,0c0.955,-0.009 1.8,-0.634 2.286,-1.428c0.31,-0.087 2.367,-0.706 2.378,-0.707l1.476,-0.462l4.573,-1.082c2.664,-2.164 3.902,-5.961 3.901,-5.963c-2.048,-0.274 -4.471,-1.072 -3.365,-3.032l-0.001,-0.001Z'
        style={{
          fill: 'white',
          fillRule: 'nonzero'
        }}></path>
      <path
        d='M18.964,26.034c-0.138,0.03 -0.276,0.07 -0.395,0.146c-0.383,0.248 -0.294,0.816 -0.262,1.203c0.061,0.74 0.223,1.481 0.417,2.203c0.135,0.503 0.301,1.001 0.513,1.478c0.238,-0.371 0.503,-0.712 0.779,-1.024c0.226,-0.255 0.459,-0.49 0.691,-0.705c1.269,-1.174 2.532,-1.757 2.532,-1.757c-1.218,-0.876 -2.704,-1.882 -4.274,-1.545l-0.001,0.001Z'
        style={{
          fill: 'rgb(0, 47, 102)',
          fillRule: 'nonzero'
        }}></path>
      <path
        d='M41.035,26.034c0.138,0.03 0.276,0.07 0.395,0.146c0.383,0.248 0.294,0.816 0.262,1.203c-0.061,0.74 -0.223,1.481 -0.417,2.203c-0.135,0.503 -0.301,1.001 -0.513,1.478c-0.238,-0.371 -0.503,-0.712 -0.779,-1.024c-0.226,-0.255 -0.459,-0.49 -0.691,-0.705c-1.269,-1.174 -2.532,-1.757 -2.532,-1.757c1.218,-0.876 2.704,-1.882 4.274,-1.545l0.001,0.001Z'
        style={{
          fill: 'rgb(0, 47, 102)',
          fillRule: 'nonzero'
        }}></path>
      <path
        d='M32.295,44.837c-0.006,-0.013 -0.012,-0.027 -0.018,-0.04c-0.242,-0.544 -0.736,-0.936 -1.287,-1.138c-0.641,-0.235 -1.374,-0.231 -2.014,0.012c-0.541,0.206 -1.015,0.593 -1.256,1.126c-0.005,0.013 -0.011,0.026 -0.017,0.04c-0.001,0.003 -0.003,0.005 -0.004,0.009c0.486,0.793 1.332,1.419 2.286,1.429l0.028,0c0.955,-0.009 1.8,-0.634 2.287,-1.428c-0.001,-0.003 -0.003,-0.005 -0.004,-0.009l-0.001,-0.001Z'
        style={{
          fill: 'rgb(0, 47, 102)',
          fillRule: 'nonzero'
        }}></path>
      <path
        d='M28.826,36.913c-0.217,-0.237 -0.468,-0.442 -0.74,-0.614c-0.293,-0.184 -0.609,-0.332 -0.936,-0.445c-0.348,-0.12 -0.71,-0.2 -1.076,-0.242c-0.385,-0.044 -0.776,-0.045 -1.161,-0.003c-0.406,0.044 -0.807,0.136 -1.191,0.272c-0.41,0.146 -0.802,0.342 -1.165,0.582c-0.398,0.263 -0.761,0.577 -1.083,0.929c-0.366,0.397 -0.68,0.84 -0.946,1.309c-0.311,0.547 -0.558,1.129 -0.754,1.727c-0.232,0.706 -0.393,1.434 -0.503,2.167c-0.017,0.11 -0.033,0.213 -0.048,0.325c-0.011,0.069 -0.039,0.228 -0.049,0.328c2.055,0.238 4.109,0.519 6.146,0.891c-0.036,-0.006 0.23,-1.155 0.263,-1.271c0.086,-0.303 0.19,-0.603 0.336,-0.883c0.205,-0.394 0.493,-0.723 0.869,-0.959c0.35,-0.22 0.74,-0.369 1.106,-0.559c0.421,-0.217 0.826,-0.479 1.164,-0.812c0.333,-0.326 0.441,-0.69 0.437,-1.152c-0.004,-0.291 -0.067,-0.578 -0.182,-0.844c-0.117,-0.276 -0.288,-0.526 -0.487,-0.747l-0,0.001Z'
        style={{
          fill: 'rgb(0, 47, 102)',
          fillRule: 'nonzero'
        }}></path>
      <path
        d='M40.823,43.248c-0.01,-0.101 -0.037,-0.259 -0.048,-0.328c-0.014,-0.112 -0.032,-0.215 -0.048,-0.325c-0.11,-0.733 -0.272,-1.461 -0.503,-2.167c-0.196,-0.597 -0.443,-1.179 -0.754,-1.727c-0.267,-0.469 -0.581,-0.912 -0.946,-1.309c-0.322,-0.351 -0.686,-0.666 -1.083,-0.929c-0.363,-0.24 -0.755,-0.437 -1.165,-0.582c-0.385,-0.136 -0.785,-0.228 -1.191,-0.272c-0.386,-0.042 -0.776,-0.041 -1.162,0.003c-0.365,0.041 -0.727,0.122 -1.075,0.242c-0.327,0.113 -0.644,0.261 -0.936,0.445c-0.272,0.172 -0.523,0.377 -0.74,0.614c-0.201,0.221 -0.37,0.472 -0.488,0.747c-0.114,0.267 -0.178,0.553 -0.181,0.844c-0.004,0.462 0.104,0.825 0.436,1.152c0.339,0.333 0.743,0.595 1.164,0.812c0.367,0.19 0.756,0.338 1.107,0.559c0.376,0.236 0.664,0.565 0.869,0.959c0.144,0.28 0.25,0.58 0.336,0.883c0.033,0.117 0.298,1.265 0.263,1.271c2.036,-0.371 4.09,-0.652 6.145,-0.891l0,-0.001Z'
        style={{
          fill: 'rgb(0, 47, 102)',
          fillRule: 'nonzero'
        }}></path>
      <path
        d='M26.063,39.605c0.505,0 0.914,-0.409 0.914,-0.914c0,-0.505 -0.409,-0.915 -0.914,-0.915c-0.505,0 -0.915,0.41 -0.915,0.915c-0,0.505 0.41,0.914 0.915,0.914Z'
        style={{
          fill: 'white',
          fillRule: 'nonzero'
        }}></path>
      <path
        d='M33.936,39.605c0.505,0 0.915,-0.409 0.915,-0.914c-0,-0.505 -0.41,-0.915 -0.915,-0.915c-0.505,0 -0.914,0.41 -0.914,0.915c-0,0.505 0.409,0.914 0.914,0.914Z'
        style={{
          fill: 'white',
          fillRule: 'nonzero'
        }}></path>
    </svg>
  )
};
