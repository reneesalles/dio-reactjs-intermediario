import React, { Component } from "react";

class FileInputForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            output: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit(event) {
        event.preventDefault();
        const file = this.fileInput.current.files[0];
        this.setState({
            output: `Arquivo selecionado: ${file.name}`
        });
    }

    render() {
        const { output } = this.state;
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
                        Upload de arquivo:
                        <input type="file" 
                            ref={this.fileInput}
                            style={{
                                flex: '1'
                            }} />
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
                <p>{output}</p>
            </div>
        )
    }
}

export default FileInputForm;