import axios from "../../utils/axios.js"
import React from "react"
import { Modal } from "../Modal/Modal.jsx"


export const Main = () => {
    const [photo, setPhoto] = React.useState()
    const [modal, setModal] = React.useState(false)

   
    
    const fetchPhoto = async () => {
        try {
            const {data} = await axios.get('/images')
            setPhoto(data)
        } catch (error) {
            console.log(error);
        }
    } 

    const openModal = () => {
        setModal(prev => !prev)
        console.log(modal);
    }

    
    React.useEffect(() => {
        fetchPhoto()
    }, [])

    return (
            
        <section className="section">
        <div className="row">
            {photo?
             photo.map(item => <div key = {item.id}className="row__item">
                <button onClick={openModal} className="row__item__img-btn"><img className="row__item_img" src={item.image} alt="cat" /></button>
                    {item.id}
                </div> )
                : 
                'loading...'
                }
        </div>
    </section>
    )
}