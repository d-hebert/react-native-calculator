import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { create, all } from 'mathjs';

export default class CalculatorContainer extends Component {
    render () {
        return (
          <View style={styles.container}>
            <View style={styles.space}></View>
            <View style={styles.output}>
              <Text style={styles.text}></Text>
            </View>
            <TouchableOpacity style={styles.util}>
              <Text style={styles.text}>ac</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.util}>
              <Text style={styles.text}>+/-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.util}>
              <Text style={styles.text}>%</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operations}>
              <Text style={styles.text}>÷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>7</Text>
              {/* <Button style={styles.text}>7</Button> */}
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>8</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>9</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operations}>
              <Text style={styles.text}>x</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>4</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>5</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>6</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operations}>
              <Text style={styles.text}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.operations}>
              <Text style={styles.text}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.zero}>
              <Text style={styles.text}>0</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.numbers}>
              <Text style={styles.text}>.</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.equals}>
              <Text style={styles.text}>=</Text>
            </TouchableOpacity>
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 300,
    height: 400,
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap"
  },
  space: {
    width: 300,
    height: 50
  },
  util: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 0.25,
    borderColor: "white",
    width: 75,
    height: 75,
    backgroundColor: "powderblue"
  },
  operations: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 0.25,
    borderColor: "white",
    width: 75,
    height: 75,
    backgroundColor: "skyblue"
  },
  equals: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 0.25,
    borderColor: "white",
    width: 75,
    height: 75,
    backgroundColor: "peachpuff"
  },
  numbers: {
    // flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 0.25,
    borderColor: "white",
    width: 75,
    height: 75,
    backgroundColor: "steelblue"
  },
  zero: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 0.25,
    borderColor: "white",
    width: 150,
    height: 75,
    backgroundColor: "steelblue"
  },
  output: {
    // flex: 1,
    borderRadius: 4,
    borderWidth: 0.25,
    borderColor: "white",
    width: 300,
    height: 75,
    alignItems: "center",
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: "grey"
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  }
});