import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Image,
  View,
  Text,
  StatusBar,
  TouchableOpacity
} from 'react-native';

const DetailLable = ({title, value}) => (
	<View style={{flexDirection: 'row'}}>
		<Text>{title} </Text>
		<Text>{value}</Text>
	</View>
)

const ShowUserDetail = ({userDetails, index, header, userDeleteAction}) => (
	<View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',paddingTop: 10, paddingBottom: 10, borderBottomWidth: header ? 0 : 1, borderBottomColor: 'lightgrey'}}>
		<View style={{flexDirection: 'row'}}>
			<Image src={userDetails && userDetails.img_url}
				style={{height: 50, width: 50, borderRadius: 25, marginRight: 20, backgroundColor: 'lightgrey'}}
			/>
			<View>
				<DetailLable title='NAME :' value={userDetails && userDetails.name} />
				<DetailLable title='AGE :' value={userDetails && userDetails.age} />
				<DetailLable title='EMAIL :' value={userDetails && userDetails.email} />
			</View>
		</View>
		{header ? null :
			<TouchableOpacity onPress={() => userDeleteAction(index)}>
				<View style={{height: 30, width: 80, justifyContent: 'center', alignItems: 'center', backgroundColor: 'grey'}}>
					<Text style={{color: 'white'}}>DELETE</Text>
				</View>
			</TouchableOpacity>
		}
	</View>
)

export default ShowUserDetail;