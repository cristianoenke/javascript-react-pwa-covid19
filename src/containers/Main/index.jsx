import React, {memo, useState, useCallback, useEffect} from 'react'
import Api from '../../api'
import Board from './Components/Board'
import Panel from './Components/Panel'
import {ContainerStyled} from './style'

function Main(){
    const [data, setData] = useState({})
    const [country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleDateString()

    const getCovidData = useCallback((country) => {
        Api.getCoutry(country)
        .then(data => setData(data))
    },[])
    
    useEffect(() =>{
        getCovidData(country)
    }, [getCovidData, country])
    
    const handleChange = ({target}) => {
        const country = target.value
        setCountry(country)
    }

    return (
        <ContainerStyled>
            <div className = 'mb-2'>
                <Panel 
                updateAt = {updateAt} 
                onChange={handleChange} 
                data={data} 
                country={country} 
                getCovidData={getCovidData}
                />
            </div>
            <Board data={data}/>
        </ContainerStyled> 
    )
}

export default memo(Main)