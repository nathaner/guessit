import jwtDecode from "jwt-decode"

const tokenKey = "token"


export function getJwt() {
    return localStorage.getItem(tokenKey)
}

export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt)
}

export function logout() {
    localStorage.removeItem(tokenKey)
}

export function login(email=null, password=null) {
    const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IlNhcmFoIFJpdmllcmUiLCJlbWFpbCI6ImRzLnJpdmllcmVAZ21haWwuY29tIiwidXNlcm5hbWUiOiJTYXJhaCIsImlhdCI6MTUxNjIzOTAyMn0.I2mBnjOW-18ROLC0uV2eDEsSTzDullfYnKLprgWTE5k"
    localStorage.setItem(tokenKey, jwt)
}

export function getCurrentUser() {
    try {
        const jwt = localStorage.getItem(tokenKey)
        return jwtDecode(jwt)
    } catch (error) {
        return null
    }
}

export default {
    getCurrentUser,
    login,
    logout,
    getJwt,
    loginWithJwt
}