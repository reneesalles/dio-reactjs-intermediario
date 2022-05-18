import React, { Component } from 'react';

class StatefullComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                'Tomate',
                'Alface',
                'Melancia'
            ]
        };
    }

    addItem = (item) => {
        this.setState({
            items: [
                ...this.state.items,
                item
            ]
        });
    }

    removeItem = () => {
        this.setState({
            items: [
                ...this.state.items.slice(0,-1)
            ]
        });
    }

    render() {
        const { items } = this.state;
        return (
            <div>
                <p><b>Lista Statefull (class component)</b></p>
                <ul>
                    {items.map((item, index) => <li key={`item_${index}`}>{item}</li>)}
                </ul>
                <button onClick={() => this.addItem('Batata')}>Adicionar Item</button>
                <button onClick={() => this.removeItem()}>Remover Item</button>
            </div>
        );
    }
}

export default StatefullComponent;