import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  //   console.log('============request==========', request)

  //   const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

  //   const data = await res.json()

  //   return NextResponse.json(data)

  return NextResponse.json({ message: 'hello world' })
}
