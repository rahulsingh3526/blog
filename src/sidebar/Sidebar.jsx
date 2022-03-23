import"./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">About Me</span>
   <img className = "Img" src="./zoltan-tasi-uNXmhzcQjxg-unsplash.jpg" alt="" /> 
            <p> This is awesome and leets make it just like that i don't know what i am typying but i am trying to increase the lenght of this sentence</p>
        </div>

        <div className="sidebarItem">
        <span className="sidebarList">Categories</span>
        <ul className="sidebarList">

          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        
        </ul>
        
        
      </div>
      <div className="sidebarItem">
          <span className="sidebarTitle">Follow Us</span>
          <div className="sidebarTitle"></div>
          <div className="sidebarSocial"></div>
      </div>
      </div>
  )
}
