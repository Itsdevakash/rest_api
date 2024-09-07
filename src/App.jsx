import { useState ,useEffect} from "react"
import 'font-awesome/css/font-awesome.min.css'
const App=()=>{


  const [userData,setUserData] = useState([])
  const [loading,setLoading] = useState(false)
  useEffect(()=>{
    fetchData() 
  },[])
  const fetchData=()=>{
    setLoading(true)
    fetch('https://jsonplaceholder.typicode.com/users')
    

    .then((response)=>response.json())

    .then((users)=>{
      setUserData(users)
      setLoading(false)
    })
    
    
    .catch((error)=>{  
      setLoading(false)
    })

   
  }
//Http Request Ajax Request
return(
  <div>
    <center><h1>Rest API</h1></center>

   <button 
   onClick={fetchData}
   
   style={{ 
      border:"none",
      padding:10,
      fontSize:15,
      margin:"15px 0",
      borderRadius:5,
      background:"blue",
      color:"#fff"

    }}><i className="fa fa-hand-o-right"></i> Fetch Data</button>
  {
    loading && 
    <div>
    
    <i className="fa fa-spinner fa-spin" style={{ fontSize:150 }}></i>

    </div>

  }
{

userData.map((item,index)=>(

    <div 
    key={index}
     style={{ 
      marginTop:24,
      display:'flex',
      flexDirection:"column",
      gap:10,
     }}>
      <div style={{ 
         border:"1px solid #ccc",
         padding:16,
         boxShadow:'0 0 10px #ddd',
         background:'#fff',
         borderRadius:5,
       }}>
        <h3  style={{ 
          padding:0,
          margin:0,
         }}>{item.name}</h3>
        <p style={{ 
          padding:0,
          margin:0,
          color:'bule',
         }}>Email: {item.email}</p>
        <p style={{ 
          padding:0,
          margin:0,
          color:'gray',
         }}>Phone :{item.phone}</p>

      </div>

    </div>
  ))
}
  </div>

)


}

 export default App