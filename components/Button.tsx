import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<TouchableOpacity, ButtonProps>(
  ({ title, ...touchableProps }, ref) => {
    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        className="items-center border-indigo-500  bg-white border rounded-lg shadow-md p-3">
        <Text className="text-indigo-500 text-lg font-semibold text-center">{title}</Text>
      </TouchableOpacity>
    );
  }
);

