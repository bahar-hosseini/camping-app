import { createContext, useState } from 'react'

export const AuthContext = createContext({})

export default function AuthProvider({ children }) {
  // const [auth, setAuth] = useState({})
  const [isLogin, setIsLogin] = useState(false)

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

// export default AuthContext
