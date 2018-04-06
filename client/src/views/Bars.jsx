import React from 'react'
import httpClient from '../httpClient'

class Bars extends React.Component {

    state = { bars: [] }

    componentDidMount() {
        // make api call to get bars
        httpClient.getBars().then((serverResponse) => {
            console.log(serverResponse.data)
            this.setState({ bars: serverResponse.data })
        })
    }
    
    render() {
        return (
            <div className="Bars">
                <h1>Bars List</h1>
                <ul>
                    {this.state.bars.map((b) => {
                        return <li key={b._id}>{b.name} -{b.user.name}</li>
                    })}
                </ul>
            </div>
        )
    }
}

export default Bars