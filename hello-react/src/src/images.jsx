import react, { Component } from 'react'; class Image extends Component {
    render() {
        return (
            <img src={this.props.srcGambar} alt="Food" width='500' />    
        );
    }
}export default Image;
