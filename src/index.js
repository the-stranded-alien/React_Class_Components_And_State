import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'; 
import Spinner from './Spinner';

// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     );
//     return <div> Latitude : </div>;
// };

class App extends React.Component {
    // constructor(props) {
    //    super(props); // Reference to Constructor of Parent Class (React.Component)
    //
        // THIS IS THE ONLY TIME we do direct assignment to this.state
    //    this.state = { lat: null, errorMessage: '' };
    
        // Would do this in ComponentDidMount()
        // window.navigator.geolocation.getCurrentPosition(
        //     (position) => {
        //         // We called setState !!
        //         this.setState({ lat: position.coords.latitude });
        //         // We did not : "this.state.lat = position.coords.latitude"
        //     },
        //     (err) => {
        //         this.setState({ errorMessage: err.message });
        //     }
        // );
    // }
    // No need to use a constructor !
    state = { lat: null, errorMessage: ''};

    // componentDidMount() {
    //     console.log("My Component was Rendered to the Screen !");
    // }

    // componentDidUpdate() {
    //     console.log("My Component Was Just Updated - It Rerendered!");
    // }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({ lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })
        );    
    }

    renderContent() {
        // Handle Conditional Rendering using Helper Function
        if(this.state.errorMessage && !this.state.lat) {
            return <div> Error: {this.state.errorMessage} </div>;
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <SeasonDisplay lat = {this.state.lat} />
        }
        return <Spinner message="Please Accept Location Request" />
    }

    // React says we have to define render !!
    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>
        );
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);