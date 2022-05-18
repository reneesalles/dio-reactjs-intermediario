import { Component } from "react";

class SorveteForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sabor: 'chocolate',
            casquinha: false,
            guardanapos: 'nao'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        const { sabor, casquinha, guardanapos } = this.state;
        this.setState({
            output: `Seu sabor escolhido foi ${sabor}, guardanapos ${guardanapos}, ${casquinha ? 'com' : 'sem'} casquinha`
        });
        event.preventDefault();
    }

    render() {
        const { sabor, casquinha, guardanapos, output } = this.state;
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
                    <label>
                        Escolha o sabor:
                        <select name="sabor" value={sabor}
                            onChange={this.handleInputChange}>
                            <option value="uva">Uva</option>
                            <option value="limao">Limão</option>
                            <option value="coco">Coco</option>
                            <option value="chocolate">Chocolate</option>
                            <option value="morango">Morango</option>
                        </select>
                    </label>
                    <label>
                        <input type="checkbox" name="casquinha" checked={casquinha}
                            onChange={this.handleInputChange} />
                        Colocar na casquinha?
                    </label>
                    <label>
                        Guardanapos:
                        <div>
                            <label>
                                <input type="radio" name="guardanapos" value="sim" checked={guardanapos === 'sim'}
                                    onChange={this.handleInputChange} />
                                Sim
                            </label>
                        </div>
                        <div>
                            <label>
                                <input type="radio" name="guardanapos" value="nao" checked={guardanapos === 'nao'}
                                    onChange={this.handleInputChange} />
                                Não
                            </label>
                        </div>
                    </label>
                    <input type="submit" value="Enviar" />
                </form>
                <p>{output}</p>
            </div>
        );
    }
}

export default SorveteForm;