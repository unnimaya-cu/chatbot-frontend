import "./App.css";
import Chatbot from "./components/chatbot/chatbot";
// import TooltipLayoutEffect from "./hooks/useLayoutEffect-eg/useLayouteffect";
// import Tooltip from "./hooks/useEffect-eg/useeffect";
// import useCounter from "./custom-hook/customhook";
// import withMessage from "./todo-crud/hoc";
// import Home from "./todo-crud/home";
// import ExampleuseCallback from "./hooks/usecallback";
// import Pagination from "./todo-crud/pagination";
// import ExampleuseMemo from "./hooks/usememo";
// import Todo from "./todo-crud/todo";

function App() {
  // const [count, setCount] = useState(0);
  // const { count, increment } = useCounter();
  // const EnhancedHome = withMessage(Home);
  // console.log(this);

  return (
    <>
      <div>
        <Chatbot />
      </div>

    </>
  );
}

export default App;

{/* <h1>hello</h1> */ }
{/* <Todo /> */ }
{/* <h3>{count} </h3>
        <button onClick={increment}>increment </button> */}

{/* <Pagination /> */ }
{/* <ExampleuseMemo/> */ }
{/* <ExampleuseCallback/> */ }
{/* <EnhancedHome /> */ }
{/* <Tooltip/> */ }
{/* <TooltipLayoutEffect/> */ }

{/* <h3>{count} </h3>
      <button
        onClick={() => {
          console.log("start", count); // 0
          setCount(count + 1);
          console.log("first", count); // still 0
          setCount(count + 1);
          console.log("second", count); // still 0
          setCount(count + 1);
          console.log("third", count); // still 0
        }}
      >
        increment
      </button> */}
