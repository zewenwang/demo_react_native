import React, {Component} from 'react';
import {Text, View, AppRegistry, Image} from 'react-native';

export default class HelloWorld extends Component {
    render() {
        return (<View>
            <Text>Hello World,asdadkjhqwdkqhkasda gfh 你好啊</Text>
            <Bananas name="asljfkaslfjl"/>
            <Bananas name="qweqwuroqwur"/>
        </View>);
    }
}

class Bananas extends Component {
    render() {
        let pic = {
            uri: 'http://d.hiphotos.baidu.com/image/h%3D300/sign=007c2995f3dcd100d29cfe21428a47be/78310a55b319ebc48cfef5018926cffc1f1716a7.jpg'
        };
        return (<View>
            <Text>这是个图片</Text>
            <Image source={pic} style={{
                    width: 200,
                    height: 110
                }}/>
            <Text>这是个图片!!!</Text>
            <Text>props.name: {this.props.name}</Text>
        </View>);
    }
}

// AppRegistry.registerComponent("Bananas", () => Bananas)
