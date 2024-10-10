import CreateForm from "./pages/create-form/CreateForm";

function App() {
  return <CreateForm />;
}

export default App;

// const [data, setData] = useState(null);

// useEffect(() => {
//   fetch("https://htj2hjvrqc.execute-api.us-east-1.amazonaws.com/dev/users", {
//     method: "GET",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((resp) => resp.json())
//     .then((resp) => setData(resp))
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
