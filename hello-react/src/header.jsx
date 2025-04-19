// Import Libraries
import React from "react";
//create componenet
class Header extends React.Component{
  constructor (props) {
    super(props); this.state = {
      judul: 'Ini judul dari state',
      dataMakanan: this.props.list,
    };
      this.handlePesan = this.handlePesan.bind(this);
  };
    handlePesan(pesan, e) {
      e.preventDefault();
      alert ('aku ❤ mie ayam');
      alert('naega saranghae')
    };
    render() {
      return (
          <div>
            <h2>Component dari Clas Header</h2>
            <h3>{ this.state.judul }</h3>
            <p>Mengakses props dari App secara langsung: {this.props.list}</p>
            <p>Mengakses props dari State: {this.state.dataMakanan}</p>
            <a href='/' onClick={(e) =>this.handlePesan ('Pesan dari Parameter', e)}>Halaman Header</a>
          </div>
      );
    }
}  
// export component 
export default Header;
