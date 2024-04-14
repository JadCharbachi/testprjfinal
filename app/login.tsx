'use client'

import { FormEvent } from 'react'
import { useRouter } from 'next/navigation'
import { Card, Title } from '@tremor/react'

export default function LoginPage() {
    const router = useRouter()

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()

        const formData = new FormData(event.currentTarget)
        const email = formData.get('email')
        const password = formData.get('password')

        const response = await fetch('/api/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        })

        if (response.ok) {
            router.push('/profile')
        } else {
            // Handle errors
            console.log('login error')
        }
    }

    return (
        <main className="p-4 md:p-10 mx-auto max-w-7xl">
            <Title className='mb-4'>
                Login page
            </Title>
            <Card>
                <form onSubmit={handleSubmit}>
                    <div className='my-4 '>
                        <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <div className='my-4'>
                        <input type="password" name="password" placeholder="Password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </Card>
        </main>
    )
}