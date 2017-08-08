import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {

    constructor(props) {
        super(props);
        this.state = {term: ''};

        /* Garante o contexto correto de 'this' dentro da função 'onInputChange'. */
        this.onInputChange = this.onInputChange.bind(this);

        /* Garante o contexto correto de 'this' dentro da função 'onFormSubmit'. */
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange(event) {

        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
        this.props.fetchWeather(this.state.term);
        this.setState({term: ''});
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
                <input
                    placeholder="Nome da cidade"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>

                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);