import CreateCampaign from "./component/CreateCampaign";
import Header from "./component/Header";
import useCampain from "./hooks/useCampain";

function App() {
    const compainNumber = useCampain();
    console.log(compainNumber)
    return (
        <div className="App">
            <Header />
            <main className="mt-10">
                <CreateCampaign />
            </main>
        </div>
    );
}

export default App;
