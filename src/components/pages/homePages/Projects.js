import React from 'react';

export default function Projects() {
 const [hoveredLink, setHoveredLink] = useState(null);


 const listData = [
   { url: 'https://example.com', preview: 'Real People Travel' },
   { url: 'https://example2.com', preview: 'Event Ease' },
   // Add more items as needed
 ];


 const handleMouseEnter = (url) => {
   setHoveredLink(url);
 };


 const handleMouseLeave = () => {
   setHoveredLink(null);
 };


 return (
   <div>
     <ul>
       {listData.map((item) => (
         <li
           key={item.url}
           onMouseEnter={() => handleMouseEnter(item.url)}
           onMouseLeave={handleMouseLeave}
         >
           <a href={item.url}>{item.url}</a>
         </li>
       ))}
     </ul>
     {hoveredLink && (
       <div className="preview">
         {listData.find((item) => item.url === hoveredLink)?.preview}
       </div>
     )}
   </div>
 );
};

