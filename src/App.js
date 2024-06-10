import {useState} from "react";
import "./App.css";

function App() {
    const [tableEl, setTableEl] = useState([]);
    const [addDisable, setAddDisable] = useState(false);
    const [deleteDisable, setDeleteDisable] = useState(true);

    const handleAddClick = () => {
        if (tableEl.length < 50) {
            let temp = [...tableEl, <div className="rectangle"/>];
            setTableEl(temp);
            setDeleteDisable(false);
            setAddDisable(temp.length === 50);
        }
    }

    const handleDeleteClick = () => {
        if (tableEl.length > 0) {
            let temp = [...tableEl];
            temp.pop();
            setTableEl(temp);
            setAddDisable(false);
            setDeleteDisable(temp.length === 0);
        }
    }
    return (
        <div className="main">
            <div className="rectangleContainer">
                <div className="container">
                    {tableEl.map((item, i) => (
                        <div key={i} className="rectangle"></div>
                    ))}
                </div>
            </div>
            <div className="buttonsContainer">
                <button
                    className="button addButton"
                    disabled={addDisable}
                    onClick={handleAddClick}>
                    +
                </button>
                <button
                    className={"button deleteButton"}
                    disabled={deleteDisable}
                    onClick={handleDeleteClick}>
                    -
                </button>
            </div>
        </div>
    );
}

export default App;
