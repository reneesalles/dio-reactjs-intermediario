import { Component } from "react";

class NameForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            output: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        this.setState({
            output: `O nome enviado foi: ${this.state.value}`
        });
        event.preventDefault();
    }

    render() {
        const { value, output } = this.state;
        return (
            <div>
                <form
                    onSubmit={this.handleSubmit}
                    style={{
                        margin: '0 auto',
                        maxWidth: '250px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5px'
                    }}>
                    <label
                        style={{
                            display: 'flex'
                        }}>
                        Nome:
                        <input type="text"
                            value={value}
                            onChange={this.handleChange}
                            style={{
                                flex: '1'
                            }} />
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
                <p>{output}</p>
            </div>
        );
    }
}

export default NameForm;