import React, { Component } from 'react'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'

import fetchCientistas from './fetchCientistas';
import { getCientistasError, getCientistas, getCientistasPending } from '../../redux/reducers/cientistasReducer';

class FetchReduxComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: false,
            cientistas: [],
            pending: false
        }
    }

    componentDidMount() {
        const { fetchCientistas } = this.props;
        fetchCientistas();
    }

    render() {
        const { cientistas } = this.state;
        return (
            <div>
                <h3>Cientistas Brasileiras</h3>
                <ul>
                    {cientistas.map((cientista, index) => (
                        <li key={`cientista_${index}`}>
                            <div><b>nome:</b> {cientista.name}</div>
                            <div><b>área:</b> {cientista.area}</div>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        error: getCientistasError(state),
        cientistas: getCientistas(state),
        pending: getCientistasPending(state)
    };
}

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchCientistas: fetchCientistas
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FetchReduxComponent);