//import React, { Component } frm 'react';
import React, { Component } from 'react';
import Image from './images';class List extends Component {
    render() {
        return (
            <div> 
                <ol>
                    <li>
                        <Image srcGambar='https://t4.ftcdn.net/jpg/08/99/49/23/360_F_899492316_MyjlbOBsuwZQqXFAIhYO1FNRnsGuX05S.jpg' /> </li>
                    <li> 
                        <Image srcGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/food1.jpg' /> </li>
                    <li>
                        <Image srcGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg'  /> </li>
                    <li>
                        <Image srcGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png'   /> </li> 
                        <li>
                        <Image srcGambar='https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png'  /> </li>   
                </ol>
            </div>
        );
    }
} export default List;