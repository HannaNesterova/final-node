import './App.css';
import MyResolutions from './MyResolutions';

function MainPage(){

    return(
        <div className="input-box">
            <h1>My resolutions for this year</h1>
                <input className="input"
                type="text"
                placeholder="Add your text..."/>
                <button>ADD</button>
                <MyResolutions text={'TEST'} />
        </div>
    )
}

export default MainPage;