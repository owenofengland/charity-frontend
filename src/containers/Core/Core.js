import React, {
    Component
} from 'react';
import axios from 'axios';
 

class Core extends Component {
    state = {
        persons: []
    }

    componentDidMount() {
        console.log('Component mounted')
        axios.get('http://localhost:3001/', { headers: { "Authorization": "Bearer a49a7058a0da24d48d38973f55331a5d800bd1137a21a152e10ccbe3536fbbbd183752792bd0811b90e88cb0f1d864e11ccee7e811609c0dc9650697b1ec9afd", "Content-Type": "application/json" }})
        .then(res => {
            const persons = res.data;
            this.setState({ persons });
        })
    }

    render() {
        return (
            <ul>
                { this.state.persons.filter(person => person.email).map(person => <li>Email: {person.email} <span></span> Name: {person.name}</li>) }
            </ul>
        )
    }
}

export default Core;