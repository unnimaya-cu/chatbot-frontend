// import { useLayoutEffect, useRef, useState } from "react";

// export default function TooltipLayoutEffect() {
//   const buttonRef = useRef(null);
//   const tooltipRef = useRef(null);

//   const [top, setTop] = useState(0);

//   //   useEffect(() => {
//   //     const button = buttonRef.current;
//   //     const tooltip = tooltipRef.current;

//   //     const rect = button.getBoundingClientRect();

//   //     setTop(rect.top - tooltip.offsetHeight);
//   //   }, []);
//   useLayoutEffect(() => {
//     const rect = buttonRef.current.getBoundingClientRect();

//     setTop(rect.top - tooltipRef.current.offsetHeight);
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
