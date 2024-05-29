'use client';

import { RiLinkedinFill, RiGithubFill, RiInstagramFill } from "react-icons/ri";
import Link from "next/link";

const icons = [
    { 
        path: 'https://www.linkedin.com/in/imanuelraditya/',
        name: <RiLinkedinFill />
    },
    { 
        path: 'https://github.com/imanuelraditya',
        name: <RiGithubFill />
    },
    { 
        path: 'https://instagram.com/imanuelraditya',
        name: <RiInstagramFill />
    },
]

const Socials = ({containerStyles, iconStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return (
                <Link href={icon.path} key={index}> 
                    <div className={`${iconStyles}`}>{icon.name}</div>
                </Link>
            )
        }
        )}
    </div>
  )
}

export default Socials