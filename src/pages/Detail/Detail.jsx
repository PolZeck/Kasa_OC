import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Data from '../../datas/datas.json'
import Logement from '../../components/Logement/Logement.jsx'
import './Detail.css'

const Detail = () => {
    const { id } = useParams()
    const [selectedData, setSelectedData] = useState(null)

    useEffect(() => {
        const data = Data.find((item) => item.id === id)
        setSelectedData(data)
    }, [id])

    if (!selectedData) {
        return null
    }

    return (
        <Logement id={id} mode='detail' data={selectedData} />
    )
}

export default Detail