// import { useEffect, useRef, useState } from "react";

// export default function Tooltip() {
//   const buttonRef = useRef(null);
//   const tooltipRef = useRef(null);

//   const [top, setTop] = useState(0);

//   useEffect(() => {
//     const button = buttonRef.current;
//     const tooltip = tooltipRef.current;

//     const rect = button.getBoundingClientRect();

//     setTop(rect.top - tooltip.offsetHeight);
//   }, []);

//   return (
//     <>
//       <button ref={buttonRef}>Hover Me</button>

//       <div
//         ref={tooltipRef}
//         style={{
//           position: "absolute",
//           top,
//           left: 100,
//           background: "black",
//           color: "white",
//           padding: 10,
//         }}
//       >
//         Tooltip
//       </div>
//     </>
//   );
// }