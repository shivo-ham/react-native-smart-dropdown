import { View } from 'react-native'
import { Dropdown } from '../../src/dropdown';

export default function App() {
  return (
    <View style={{flex:1,alignItems:'center',  marginTop:20}}>
      <Dropdown data={[]} label="Select an option" disabled={false} />
    </View>
  )
}

// import { Dropdown, DropdownProvider } from 'react-native-smart-dropdown';

// <DropdownProvider
//   theme={{
//     typography: { fontFamily: 'Inter_Regular' },
//     colors: { primary: '#4F46E5' },
//     strings: {
//       noOptions: 'Koi option nahi mila',
//     },
//   }}
// >
//   <Dropdown />
// </DropdownProvider>

// const text = props.placeholder ?? defaultStrings.placeholder;


// export interface DropdownProps<T> {
//      containerStyle?: ViewStyle

//      label?: string;
//      labelStyle?: TextStyle

//      toolTipMessage?: string;
//      toolTipIcon?: React.ReactNode;
//      toolTipPosition?: 'top' | 'bottom' | 'left' | 'right'
//      toolTipBackgroundColor?: string
//      toolTipTextColor?: string
//      toolTipTextStyle?: TextStyle
//      toolTipIconStyle?: ViewStyle

//      dropdownStyle?: ViewStyle
//      dropdownVariant?: 'outlined' | 'filled' | 'underlined'
//      placeholder?: string
//      loading?: boolean
//      disabled?: boolean;
//      leadingIcon?: React.ReactNode
//      trailingIcon?: React.ReactNode

//      searchable?: boolean         // enable search
//      searchDebounce?: number  // debounce time for search input
//      onSearch?: (text: string) => void | Promise<void>

//      value?: T | T[] | null
//      defaultValue?: T | T[] | null
//      onChangeValue?: (item: T | T[]) => void
//      onToggle?: () => void // callback for dropdown open/close state change

//      data: T[]
//      maxVisibleItems?: number  // for dropdown height control

//      labelField?: keyof T
//      valueField?: keyof T
//      descriptionField?: keyof T

//      renderItem?: (item: T, selected: boolean) => React.ReactNode
//      renderTrigger?: (value: T | T[] | null) => React.ReactNode
//      renderEmpty?: () => React.ReactNode

//      helperText?: string
//      errorText?: string
//      successText?: string
//      helperTextStyle?: TextStyle

//      required?: boolean
//      testID?: string
//      accessibilityLabel?: string

// }
