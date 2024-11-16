'use client'

import { useState } from 'react'

import './page.css'

export default function SignUpPage() {
  // NOTE: https://juejin.cn/post/7196843994030342200

  const [isFold, setIsFold] = useState(false)

  const onClick = () => {
    setIsFold(prev => {
      return !prev
    })
  }

  return (
    <>
      <div>Sign Up Page</div>
      <div>
        <button onClick={onClick}>{isFold ? 'Unfold' : 'Fold'}</button>
      </div>
      <div className={isFold ? 'wrap' : 'wrap active'}>
        <div style={{ minHeight: 0 }}>some text123</div>
      </div>
    </>
  )
}
