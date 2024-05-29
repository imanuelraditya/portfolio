import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/'>
        <Image src='/logo.png' height={54} width={54} priority alt='' />
    </Link>
  )
}

export default Logo