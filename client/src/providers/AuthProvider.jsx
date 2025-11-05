import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }){
	const [user, setUser] = useState(null)

	useEffect(() => {
		const stored = localStorage.getItem('ai-expense-user')
		if (stored) {
			try { setUser(JSON.parse(stored)) } catch {}
		}
	}, [])

	function login({ email }){
		const fakeUser = { name: email.split('@')[0], email }
		setUser(fakeUser)
		localStorage.setItem('ai-expense-user', JSON.stringify(fakeUser))
	}

	function register({ name, email, password, avatarUrl }){
		const newUser = { name, email, avatarUrl: avatarUrl || '' }
		setUser(newUser)
		localStorage.setItem('ai-expense-user', JSON.stringify(newUser))
	}

	function logout(){
		setUser(null)
		localStorage.removeItem('ai-expense-user')
	}

	const value = useMemo(() => ({ user, login, register, logout }), [user])

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	)
}

export function useAuth(){
	const ctx = useContext(AuthContext)
	if (!ctx) throw new Error('useAuth must be used within AuthProvider')
	return ctx
}


