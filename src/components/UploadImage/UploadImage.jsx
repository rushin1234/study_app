import React, { useEffect, useState } from 'react'
import './UploadImage.css'
import { storage, database, appwriteConfig } from '../../appwrite'
import { ID } from 'appwrite'
import { useParams, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { account } from '../../appwrite';
import 'react-toastify/dist/ReactToastify.css';


const UploadImage = () => {
    const navigate = useNavigate()
    const [imgs, setImgs] = useState([])
    const [isloading, setIsloading] = useState(false)
    const { subject } = useParams()
    const [user, setUser] = useState(null)

    const checkLogin = async () => {
        try {
            const response = await account.get();
            setUser(response); // Store user data if needed
        } catch (error) {
            // toast.error('Error checking login:', error);
            // Handle cases where the user is not logged in (e.g., redirect to login page)
        }
    };
    useEffect(() => {
        checkLogin()
    }, [])
    const uploadImgs = async () => {
        setIsloading(true)
        if(user == null) {
            toast('You are not authorised')
            setIsloading(false)
            return 
        }
        try {
            for (let i = 0; i < imgs.length; i++) {
                const uploadedFile = await storage.createFile(
                    appwriteConfig.bucketId,
                    ID.unique(),
                    imgs[i]
                )

                const fileUrl = storage.getFilePreview(appwriteConfig.bucketId, uploadedFile.$id, 2000, 2000, 'top', 100)
                await database.createDocument(appwriteConfig.dbId, appwriteConfig.collectionId, ID.unique(), {
                    imgUrl: fileUrl,
                    subName: subject,
                    email: user.email
                })
            }
            toast('images are uploaded')
            navigate('/')

        } catch (error) {
            toast.error(error.message)
        }
        setIsloading(false)
    }
    return (
        <div className='up'>
            {isloading ? <p className='loading-text'>UpLoading...</p> : <></>}
            <input type="file" multiple id='input' onChange={e => {
                setImgs(e.target.files)
                // console.log(e.target.files);
            }} />
            <label htmlFor="input">Select images to upload</label>
            <button onClick={uploadImgs}>Upload</button>


            <ToastContainer />
        </div>
    )
}

export default UploadImage