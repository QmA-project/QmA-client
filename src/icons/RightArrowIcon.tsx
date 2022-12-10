import * as React from "react"
import Svg, { SvgProps, Circle, Path } from "react-native-svg"

const RightArrowIcon = (props: SvgProps) => (
  <Svg
    width={34}
    height={34}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={17} cy={17} r={17} fill="#FF003D" />
    <Path
      d="m17 25-1.374-1.399 5.644-5.62H9v-1.963h12.27l-5.644-5.644L17 9l8 8-8 8Z"
      fill="#fff"
    />
  </Svg>
)

export default RightArrowIcon
