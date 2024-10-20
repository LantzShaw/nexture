// 'use client'

import { useEffect } from 'react'

async function fetchData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/dashboard/api`)

  if (!response.ok) {
    throw new Error('Failed to fetch data')
  }

  return response.json()
}

export default async function DashboardPage() {
  //   useEffect(() => {
  //     const fetchData = () => {
  //       fetch('/dashboard/api').then(res => {
  //         console.log('==========res=========', res)
  //       })
  //     }

  //     fetchData()
  //   }, [])

  //   fetch('/dashboard/api').then(res => {
  //     console.log('==========res=========', res)
  //   })

  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   const todos = await response.json()

  //   let data = await fetch('https://api.vercel.app/blog')
  //   let posts = await data.json()

  const todos = await fetchData()

  console.log('=====data=====', todos)

  return (
    <>
      <h2>response</h2>
    </>
  )
}

// export async function getServerSideProps() {
//   const response = await fetch('/dashboard/api').then(res => {
//     console.log('==========res=========', res)

//     return res.json()
//   })

//   console.log('=======response=======', response)

//   return {
//     props: {
//       message: 'Hello from server',
//       data: response,
//     },
//   }
// }
