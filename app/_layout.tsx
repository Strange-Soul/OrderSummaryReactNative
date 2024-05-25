import React, { useState } from 'react';
import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, StyleSheet, Dimensions } from 'react-native';
import CustomButton from "../components/CustomButton";
import RadioButton from "../components/RadioButton";
import FakeButton from "../components/FakeButton";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import SponsorCarousel from "../components/Caurosuel";
import DropDown from "../components/DropDownPicker";
import Quantity from "../components/QuantityDropDown";
const product = require("../assets/images/product.jpg");
const seller = require("../assets/images/seller.jpg");

const estim=require("../assets/images/stopwatch.jpg");

const home=require("../assets/images/home.png");
const callicon=require("../assets/images/caller.png");

const bulk=require("../assets/images/bulk.png");
const assured=require("../assets/images/assured.png");
const retur=require("../assets/images/return.png");


const { width: viewportWidth } = Dimensions.get('window');



const RootLayout = () => {
  const [selectedOption, setSelectedOption] = useState('Summary');

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
          <View style={styles.section}>
            <View style={styles.radioGroup}>
              <RadioButton 
                selected={selectedOption === 'Summary'} 
                onPress={() => setSelectedOption('Summary')} 
                label={"Summary"}
              />
              <RadioButton 
                label={"Order"} 
                selected={selectedOption === 'Order'} 
                onPress={() => setSelectedOption('Order')} 
              />
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.imageContainer}>
              <Image
                source={product}
                style={styles.image}
                resizeMode='contain'
              />
            </View>
            <View style={styles.productDetails}>
              <Text style={styles.productTitle}>Winter Jacket</Text>
              <Text style={styles.productDescription}>Sky blue in colourblocked</Text>
              <Text style={styles.productPrice}>
                $500 <Text style={styles.oldPrice}>$540</Text> <Text style={styles.discount}>20% off</Text>
              </Text>
              <View style={styles.sizeQtyContainer}>
                <DropDown />
                <Quantity />
              </View>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.sellerInfo}>
              <Text style={{ color: "gray" }}>Sold by:</Text>
              <Image
                source={seller}
                resizeMode='cover'
                style={styles.image1}
              />
              <Text> Fashions</Text>
            </View>
            <Text>7-days <Text style={{ color: "gray" }}>Return available</Text></Text>
          </View>

          <View style={styles.Estimation}>
          <View style={styles.EstimImg}>
              <Image
              source={estim}
              resizeMode='contain'
              style={styles.image2}
              />
            </View>
            <View style={styles.EstDetails}>
            <Text>Estimated Delivery By</Text>
            <Text style={{fontWeight:"bold"}}> Tuesday ,2nd Jan</Text>
          </View>
          </View>

          <View style={styles.Address}>
            <View style={styles.DelImg}>
              <Image
              resizeMode='contain'
              style={styles.hm}
              source={home}
              />
            </View>
            <View  style={styles.deladdress}>
            <Text>Delivery Address</Text>
            <Text style={{color:"Grey"}}>2/5q ,srr nagar</Text>
            <Text style={{color:"grey"}}>Ramyanpatti,Tirunelveli</Text>
            </View>
            
            <FakeButton
              title="Change"
              onPress={() => {
                alert("Clicked Address Change Button");
              }}
            />
          </View>

          <View style={styles.Dialbox}>
            <View style={styles.caller}>
              <Image 
              resizeMode='contain'
              style={styles.hm}
              source={callicon}
              />
            </View>
            <View style={{flex:1,flexDirection:'row',marginHorizontal:70}}>
              <Text>Kayal vizhi {  }</Text>
            <Text style={{fontWeight:"bold"}}>9449496617 </Text>
            </View>
            <View style={{marginHorizontal:2,top:16}}>
            <FakeButton title="Change" 
                onPress={() => {
                  alert("Clicked call Button");
                }}
              />
              </View>
          </View>

          <View style={styles.SponsorBox}>
            <Text>Sponsors</Text>
            
          </View>

          <View>
          <Text style={{fontWeight:"bold",fontSize:18,left:4}}>Price Details</Text>
          <View style={styles.Pricebox}>
            <View style={styles.pmode}>
              <Text style={styles.commonGrey}>Total MRP </Text>
              <Text style={styles.commonGrey}>Discount on MRP</Text>
              <Text style={styles.commonGrey}>Shipping Fee </Text>
              </View>
              <View style={styles.prices}>
                <Text style={styles.comPrice}>$1999</Text>
                <Text style={styles.pdisc}>-$1440</Text>
                <Text style={styles.comPrice}>$45</Text>
              </View>
            </View>
           
            <View style={{ height: 2, backgroundColor: "grey", width: "100%", marginTop: 10, marginBottom: 10 }} ></View>

            <View style={styles.finalised}>
            <Text>Total Amount</Text>
            <Text style={{fontWeight:"bold"}}>$579</Text>
          </View>
        </View>
          <View style={styles.box}>
            
          </View>

          <View style={styles.Qualitybox}>

            <View style={styles.feed}>
            <View style={styles.imageLayout}>
            <Image 
            resizeMode='contain'
            style={styles.globalimg}
            source={bulk}
            /></View>
               <Text style={{fontSize:10,fontWeight:"bold",left:-10}}>Group Buy for {    } Low Price</Text>
               </View>
            <View style={styles.feed}>
              <View style={styles.imageLayout}>
            <Image 
            style={styles.globalimg}
            source={assured}
            resizeMode='contain'
            /></View>
            <Text style={{fontSize:10,fontWeight:"bold",left:-10}} >Quality assured products</Text>
            </View>

            <View style={styles.feed}>
            <View style={styles.imageLayout}>
            <Image 
            resizeMode='contain'
            style={styles.globalimg}
            source={retur}
            /></View>
            <Text style={{fontSize:10,fontWeight:"bold",left:-10}}>Easy Return & Refund</Text>
            </View>
        
          </View>

          <CustomButton title="Place Order"
            onPress={() => {
              alert("Clicked Place Order Button");
            }}
          />
          <StatusBar backgroundColor="#161622" barStyle="light-content" />
        </ScrollView>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

export default RootLayout;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    marginTop: 10,
    width: "100%",
    height: "100%",
  },
  container: {
    padding: 5,
    alignItems: "center",
    marginTop: 20,
  },
  section: {
    width: "100%",
    padding: 10,
    backgroundColor: "#FEFEFE",
    marginBottom: 10,
  },
  radioGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  textGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
    marginVertical: 10,
  },
  box: {
    width: "100%",
    padding: 10,
    backgroundColor: "#FEFEFE",
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image1: {
    width: 20,
    height: 20,
    marginHorizontal: 5,
  },
  sellerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageContainer: {
    width: 120,
    height: 120,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:19
  },
  image: {
    width: "100%",
    height: "100%",
    left:-10
  },
  image2:
  {
   width:"100%",
   height:"50%",
   marginHorizontal:-40
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productDescription: {
    fontSize: 14,
    color: 'grey',
  },
  productPrice: {
    fontSize: 14,
    color: 'green',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'red',
  },
  discount: {
    color: 'orange',
  },
  sizeQtyContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  Estimation:
  {
    flexDirection:"row",
    alignContent:"center",
    justifyContent:"center",
  },
  EstimImg:
  {
    width:100,
    height:100,
    left:26
  },
  EstDetails:{
    flexDirection:"row",
    marginTop:16,
    marginRight:20
  },
  Address:
  {
    flexDirection:"row",
    justifyContent:"space-around",
    alignItems:"center",
    width:"100%",
    height:"auto",
    marginTop:-40
  },
  DelImg:
  {
    width:100,
   height:100
  },
  hm:
  {
    width:40,
    height:40
  },
  deladdress:
  {
     marginRight:10,
     left:-58,
     top:-16
  },
  Dialbox:
  {
    width: "100%",
    padding: 10,
    backgroundColor: "#FEFEFE",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
  ,
  caller:
  {
    marginRight:-50,
    fontWeight:"bold",

  },
  commonGrey:
  {
    color:"grey",
    fontSize:16,
    marginTop:10
  },
  comPrice:
  {
    fontSize:16,
    marginTop:10
  },
  pdisc:
  {
    color:"#12BA6C",
    fontSize:16,
    marginTop:10,
    left:-7
  },
 Pricebox:
 {
  width:"100%",
  padding:5,
  flexDirection:"row",
  alignContent:"center",
  alignItems:"center",
  justifyContent:"center"

 }
,
pmode:
{
  flex:1,
  flexDirection:"column"
},
prices:
{
  flexDirection:"column"
},
finalised:
{
  flexDirection:"row",
  justifyContent:"space-between",
  alignItems:"center",
  padding:5
},
Qualitybox:
{
   flex:1,
   flexDirection:"row",
   justifyContent:"space-evenly",
   alignContent:"center",
   left:-10
},
feed:{
   width:100,
   height:100,
   flexDirection:"row",
   alignContent:"center",
   justifyContent:"center",
   marginLeft:10
},

imageLayout:
{
width:32,
height:30,
borderRadius:50,
backgroundColor:"#347B72",
alignItems:"center",
marginRight:10
},

globalimg:
{
  width:"80%",
  height:"80%",
  color:"white",
  alignSelf:"center",
  marginLeft:4
},
SponsorBox:
{
  width:"100%",
  padding:10
},

});
