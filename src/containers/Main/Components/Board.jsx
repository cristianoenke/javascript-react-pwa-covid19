import React, {memo} from 'react'
import PropTypes from 'prop-types'
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({data}) {
    const {cases, todayDeaths, recovered, deaths, todayCases} = data
    const getValue = (value) => value ? value : <Skeleton variant = 'text' width = {182} height = {60} />
    
    return (
        <Grid container spacing={4}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label='Total de Casos' color='#ff0000'/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label='Mortes Hoje' color='#ff0000'/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label='Casos Hoje' color='#ff0000'/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label='Total de Mortos' color='#ff0000'/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label='Total de Recuperados' color='#ff0000'/>
            </Grid>
        </Grid>
    )
}

export default Board 