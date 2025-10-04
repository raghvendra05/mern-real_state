import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { app } from "../firebase"
import { useDispatch } from "react-redux"
import { signInSuccess } from "../redux/user/userSlice"
import { useNavigate } from "react-router-dom"


export const OAuth = () => {

  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider()
      const auth = getAuth(app)

      const result = await signInWithPopup(auth, provider)

      const res = await fetch('/api/auth/google',{
        method:'POST',
        headers:{
          'Content-type':"application/json",
        },
        body: JSON.stringify({name: result.user.displayName, email:result.user.email,photo :result.user.photoURL})
      })

      const data = await res.json()
      dispatch(signInSuccess(data))

      navigate("/")

    } catch (error) {
      console.log("couldn't sign in with google", error) //will only be shown in console
    }
  }
  return (
    <button onClick={handleGoogleClick} type='button' className='bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-80'>continue with google</button>
  )
}
