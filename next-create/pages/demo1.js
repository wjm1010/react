import Link from 'next/link'
function demo(){
  return (
    <>
      <button>hello</button>
      <Link href='/'>
        <a>
          <span>back</span>
        </a>
      </Link>
    </>
  )
}

export default  demo