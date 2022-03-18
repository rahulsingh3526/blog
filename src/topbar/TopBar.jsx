import "./topbar.css"

export default function TopBar() {
  return (
    <div className="top">
        <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook"></i>
        </div>
        <div className="topCenter">
         <ul className="topList">
             <li className="topListItems">Home</li>
             <li className="topListItems">About</li>
             <li className="topListItems">Contact</li>
             <li className="topListItems">Write</li>
             <li className="topListItems">Logout</li>
         </ul>


        </div>
        <div className="topRight">
            <img className="topImg" src="./abc.png" alt="" />

        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
  

        </div>
      
    </div>
  )
}

