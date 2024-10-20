'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const router = useRouter()

  const clickHandler = () => {
    router.push('/home')
  }

  useEffect(() => {
    // NOTE: 客户端组件可以使用相对路径
    fetch('/login/api')
      .then(res => {
        return res.json()
      })
      .then(data => {
        console.log('-------login data-----', data)
      })
  }, [])

  return (
    <>
      <div>Login Page</div>
      <button
        className="p-2 bg-white text-black hover:bg-green-400 hover:text-white rounded-lg w-40"
        onClick={clickHandler}
      >
        Login
      </button>
    </>
  )
}
