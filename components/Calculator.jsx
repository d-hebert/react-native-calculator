import React, { Component } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity } from "react-native";
import { create, all } from 'mathjs';

export default class CalculatorContainer extends Component {
    constructor (props) {
      super(props)
      this.state = {
        output: '',
        expression: []
      }

      this.math = create(all);
    }

    handleClearing () {
      this.setState({
        output: ''
      })
    }

    compute () {
      console.log(this.state.expression)
      const currentNumber = this.state.output;
      const expression = [...this.state.expression, currentNumber].join(' ');
      const output = this.math.evaluate(expression);
      this.setState({
        output,
        expression: []
      })
    }

    handleNumbers (digit) {
      // Enforces display length 9 max
      if (this.state.output.length >= 9) {return}
      this.setState(prevState => ({
        output: prevState.output.concat(digit)
      }));
    }

    handleOperation (operation) {
      if (operation === '÷') { operation = '/' }
      if (operation === 'x') { operation = '*' }
      const currentNumber = this.state.output;
      const expression = [...this.state.expression, currentNumber, operation];
      this.setState({
        output: '',
        expression
      });
    }

    handleUtil (util) {
      const output = '';
      const curr = this.state.output;
      if (util === '+/-') {
        if (curr[0] === '-') { output = curr.slice(1) }
        else { output = '-' + curr }
      }
    }

    createNumberButton (digit) {
      const style = digit === '0' ? styles.zero : styles.numbers;
      return (
        <TouchableOpacity style={style}
          onPress={() => {
            this.handleNumbers(digit);
          }
          }>
          <Text style={styles.text}>{digit}</Text>
        </TouchableOpacity>
      )
    }

    createOperationButton (operation) {
      return (
        <TouchableOpacity style={styles.operations}
          onPress={() => {
            this.handleOperation(operation);
          }}>
          <Text style={styles.text}>{operation}</Text>
        </TouchableOpacity>
      )
    }

    createUtilButton (util) {
      return (
        <TouchableOpacity style={styles.util}
          onPress={() => {
            this.handleUtil(util);
          }}>
          <Text style={styles.text}>{util}</Text>
        </TouchableOpacity>
      )
    }

    createEqualsButton () {
      return (
        <TouchableOpacity style={styles.equals}
          onPress={() => {
            this.compute();
          }}>
          <Text style={styles.text}>=</Text>
        </TouchableOpacity>
      )
    }

    createClearButton () {
      return (
        <TouchableOpacity style={styles.util}
          onPress={() => {
            this.handleClearing();
          }}>
          <Text style={styles.text}>ac</Text>
        </TouchableOpacity>
      )
    }

    createOutputScreen () {
      let output = this.state.output
      return (
        <View style={styles.output}>
          <Text style={styles.outputText}>{output}</Text>
        </View>
      )
    }

    render () {
        return (
          <View style={styles.container}>
            <View style={styles.space}></View>
            {this.createOutputScreen()}
            {this.createClearButton()}
            {this.createUtilButton('+/-')}
            {this.createUtilButton('%')}
            {this.createOperationButton('÷')}
            {this.createNumberButton('7')}
            {this.createNumberButton('8')}
            {this.createNumberButton('9')}
            {this.createOperationButton('x')}
            {this.createNumberButton('4')}
            {this.createNumberButton('5')}
            {this.createNumberButton('6')}
            {this.createOperationButton('-')}
            {this.createNumberButton('1')}
            {this.createNumberButton('2')}
            {this.createNumberButton('3')}
            {this.createOperationButton('+')}
            {this.createNumberButton('0')}
            {this.createNumberButton('.')}
            {this.createEqualsButton()}
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
    backgroundColor: "powderblue",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    borderWidth: 0.25,
    width: 75,
    height: 75,
    borderColor: "white"
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
    paddingRight: 20,
    alignItems: "flex-end",
    alignSelf: "flex-start",
    justifyContent: "center",
    backgroundColor: "grey"
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold"
  },
  outputText: {
    color: "white",
    fontSize: 45,
    fontWeight: "bold"
  }
});