import Link from 'next/link'

export default function Page(){
  return (
    <>
      <h1>This is the first page</h1>
      <Link href="/dashboard">Go to the second page</Link>
    </>
  )
}