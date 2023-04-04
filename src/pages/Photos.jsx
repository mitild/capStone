import React, { useContext } from "react"
import Image from "../components/image"
import {getClass} from "../utils"
import { Context } from "../AppContext"

function Photos() {
    const {photosArr} = useContext(Context)
    const eachImg = photosArr.map((photo, i) => (
        <Image key={photo.id} img={photo} className={getClass(i)} />
    ))

    return (
        <main className="photos">
            {eachImg}
        </main>
    )
}

export default Photos