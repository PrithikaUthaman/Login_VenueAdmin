import React, { useEffect } from 'react'
import './Homepage.css'
import { BarChart,ResponsiveContainer,Bar,XAxis,YAxis } from 'recharts'

function Homepage() {
    useEffect(()=>{
        fetch("http://localhost:8090/account/admin")
        .then(res=>{
           return res.json();
        }).then(data=>{
            console.log(data)
        })
    },[])
  return (
    <div className='homepage'>
        <h1>{data.name},{data.location}</h1>
        <div className='leftside'>
        Do you want to charge your customers for requesting songs? <br/><br/><br/>
        Custom song request amount<br/><br/><br/>
        Regular song request amounts, from high to low
        </div>
        <div className='rightside'>
        <input type="radio" id="yes" value="yes"/>
          <label for="html">Yes</label><br/>
          <input type="radio" id="no" value="no"/>
          <label for="css">no</label><br></br><br/>
          <input type ="text"></input><br/><br/>
          <div className='textStyle'>
          <input type ="text" style={{width:"50px",marginLeft:"-31px"}}></input><input type ="text" style={{width:"50px"}}/><input type ="text" style={{width:"50px"}}/>
          </div>
        </div>
        <ResponsiveContainer width="50%" aspect={3}>
            <BarChart data={data} width={500} height={500}>
                <XAxis dataKey="data.name" fill='FFFFFF'/>
                <YAxis fill='FFFFFF' />
                <Bar dataKey="data.category" fill=" F0C3F1"/>
            </BarChart>
        </ResponsiveContainer>
        <input type='button' value="save" className='save'></input><br/>
    </div>
    
  )
}

export default Homepage