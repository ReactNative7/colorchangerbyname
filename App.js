import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Container, Header, Content, Item, Label, Button, Input } from 'native-base';
export default class App extends React.Component {
constructor(props){
super(props);
this.state= {colorname:'black'}
}
render() {
return (
<Container>
<Header></Header>
<Content style={{ padding:20 }}>
<Text style={{ fontSize:30, textAlign:'center', marginVertical:40 }}>Color Changer</Text>
<Item floatingLabel>
<Label>Colour Name</Label>
<Input
onChangeText={(text) =>this.setState({colorname:text.toLowerCase()})}
/>
</Item>
<View style={{ flex:1, height:200, backgroundColor:this.state.colorname, marginTop:40}}>
</View>
</Content>
</Container>
);
}
}
const styles = StyleSheet.create({
container: {
flex:1,
backgroundColor:'#fff',
alignItems:'center',
justifyContent:'center',
},
});