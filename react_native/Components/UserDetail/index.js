import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  ScrollView,
  FlatList,
  Platform
} from 'react-native';
import ShowUserDetail from './ShowUserDetail';

const statusBarHeight = Platform.OS === 'ios' ? 60 : 40;

class UserDetail extends Component {
  constructor(props) {
    super(props);
    this.state={
      userDetail: [{
        name: 'Nidhi kumari',
        age: 25,
        email: 'kumari.nidhi1211@gmail.com',
        img_url: '',
        connection: [
          {
            id: 0,
            name: 'test connection',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },{
            id: 1,
            name: 'test connection 1',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },{
            id: 2,
            name: 'test connection 2',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },{
            id: 3,
            name: 'test connection 3',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },{
            id: 4,
            name: 'test connection 4',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },{
            id: 5,
            name: 'test connection 5',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },
          {
            id: 6,
            name: 'test connection',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },{
            id: 7,
            name: 'test connection 1',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },{
            id: 8,
            name: 'test connection 2',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },{
            id: 9,
            name: 'test connection 3',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },{
            id: 10,
            name: 'test connection 4',
            age: 23,
            img_url: '',
            email: 'test@gmail.com'
          },
        ]
      }]
    }
  }

  deleteConnection = (index) => {
    let temp = this.state.userDetail[0];
    temp.connection.splice(index,1)
    this.setState({userDetail: [temp]})
  }

  render(){
    const { userDetail } = this.state;
    return(
      <SafeAreaView style={styles.container}>
        <View style={styles.mainUser}>
          <ShowUserDetail userDetails={userDetail[0]} header/>
        </View>
        <FlatList
          data={userDetail[0] && userDetail[0].connection && userDetail[0].connection}
          renderItem = {({item, index}) =><ShowUserDetail userDetails={item} index={index} userDeleteAction={this.deleteConnection}/>}
        />
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  mainUser: {
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomWidth: 1
  }
})

export default UserDetail;