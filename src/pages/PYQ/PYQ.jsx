import React, { useEffect, useState } from 'react'
import './PYQ.css'
import { database, appwriteConfig } from '../../appwrite'
import { Query } from 'appwrite'
import UploadImages from '../../components/UploadImage/UploadImage'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'

const PYQ = () => {

    const [imgs, setImgs] = useState([])
    const [isloading, setIsloading] = useState(false)
    const [isimages, setIsimages] = useState(false)

    const { subject } = useParams()

    const getImgs = async () => {
        setIsloading(true)
        try {
            let res = await database.listDocuments(
                appwriteConfig.dbId,
                appwriteConfig.collectionId,
                [
                    Query.equal('subName', subject)
                ]
            );
            let arr = []
            res.documents.map((item) => arr.push(item.imgUrl))
            if(arr.length > 0) setIsimages(true)
            setImgs(arr)
        } catch (error) {
            toast.error(error.message)
        }
        setIsloading(false)
    }
    useEffect(() => {
        getImgs()
    }, [])

    return (
        <div className='pyq'>
            {isloading ? <p className='loading-text'>Loading...</p> : <></>}
            <div className='imgs'>
                {imgs.map((img) => {
                    return <img src={img} />
                })}
            </div>
            {isimages ? <></>: <p className='loading-text'>No images for this subject</p>}
            <UploadImages/>

            <ToastContainer />
        </div>
    )
}

export default PYQ