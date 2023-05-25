import { useParams } from "react-router-dom"
import Profile from "../components/Profile/Profile"

const ProfilePage = () => {
    const {postId} = useParams()

    console.log(postId)
    return <Profile />
}

export default ProfilePage