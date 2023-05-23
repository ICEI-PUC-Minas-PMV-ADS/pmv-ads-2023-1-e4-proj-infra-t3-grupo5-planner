import React from "react";
import { TouchableOpacity, Text } from "react-native"

import ButtonStyled from './Button.styled';

const Button = ({ title, onPress}) => (
    <TouchableOpacity onPress={onPress} style={ButtonStyled.standard}>
      <Text style={ButtonStyled.standardText}>{title}</Text>
    </TouchableOpacity>
  );
  
  export default Button;
