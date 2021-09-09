import { createContext, useState, useEffect, useContext } from "react"
import { getFireauth } from '../firebase/firebase-data'

const UserContext = createContext()

const useAuth = () =>{
    return useContext(UserContext)
}

const auth = getFireauth()

const UserProvider = ({children}) =>{
    const [user, setUser] = useState(null)

    useEffect(() =>{
        const unSubcribe = auth.onAuthStateChanged((user) =>{
            if(user){
                setUser(user)
            } else{
                setUser(false)
            }
        })
        return () => unSubcribe()
    })

    const signIn =  (email,password) =>{
        return new Promise(async (resolve, reject) =>{
            try{
                const credential = await auth.signInWithEmailAndPassword(email, password)
                setUser(credential.user)
                resolve(credential.user)
            } catch (e){
                reject(e)
            }
        })
    }

    const signOut = () =>{
        return new Promise(async (resolve,reject) =>{
            try{
                await auth.signOut()
                setUser(null)
                resolve()
            } catch (e){
                reject (e)
            }
        })
    }

    const register = (email, password) =>{
        return new Promise(async (resolve, reject) =>{
            try{
                const newUser = await auth.createUserWithEmailAndPassword(email, password)
                resolve(newUser)
            }catch(e){
                reject(e)
            }
        })
    }


    return <UserContext.Provider value={{user, signIn, signOut, register}}>
        {children}
    </UserContext.Provider>
}

export {UserProvider, useAuth}