import ReactDom from "react-dom/client"
import "./style.css"
import searchs from "./Images/searchs.png"
import img1 from "./Images/img1.jpg"
import img2 from "./Images/img2.jpg"
import img3 from "./Images/img3.jpg"
import img4 from "./Images/img4.jpg"
import img5 from "./Images/img5.jpg"
import starBlue from "./Images/starBlue.png"


const root = ReactDom.createRoot(document.getElementById("root"));

function ChatBox(props) {
  return (
    <div className="container">
      <div id='sec1'>
        <img id='chatdp' src={props.pic} alt="dp"></img>
      </div>
      <div id='sec2'>
        <div>
        <h3>{props.pname}</h3>
        <p>{props.data}</p>
        </div>
        <div className='time'>
          <p>{props.chattime}</p>
          <p><img id='star'src={starBlue} alt='star'></img></p>
        </div>
      </div>

    </div>)
}
var chatdata = [
  {
    dp: img1 ,
    name: 'Jessica Koel',
    textdata: 'Hey,Joel I here to help you out please...',
    time: '11.26',
  },
  {
    dp: img2 ,
    name: 'Komeial Bolger',
    textdata: 'I will send you all documents as soon a...',
    time: '12.26',
  },
  {
    dp: img3 ,
    name: 'Tamaara Suiale',
    textdata: 'Are you going to business trip next week...',
    time: '8.26',
  },
  {
    dp: img4 ,
    name: 'Sam Nielson',
    textdata: 'I suggest to start new business soon...',
    time: '7.16',
  },
  {
    dp: img5 ,
    name: 'Patrick Koeler',
    textdata: 'May be yes',
    time: '11.26',
  }
]

root.render(<div id='app'>

  <input id='search' type='text' placeholder="Search.."></input>
  <img src={searchs} alt='search' className="searchicon"></img>

  <div>
    {
      chatdata.map(function (value, index) {
        console.log(value.dp);
        console.log(value.name);

        console.log(chatdata[index].name);
        return (<ChatBox pic={value.dp} pname={value.name} data={value.textdata} chattime={value.time}></ChatBox>)
      })
    }

  </div>
</div>)