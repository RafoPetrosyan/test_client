import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function OrdersIcon(props) {
   return (
      <Svg
         xmlns="http://www.w3.org/2000/svg"
         width={24}
         height={24}
         viewBox="0 0 24 24"
         fill="none"
         stroke="currentColor"
         strokeWidth={2}
         strokeLinecap="round"
         strokeLinejoin="round"
         className="lucide lucide-list-ordered"
         {...props}
      >
         <Path d="M10 12h11M10 18h11M10 6h11M4 10h2M4 6h1v4M6 18H4c0-1 2-2 2-3s-1-1.5-2-1" />
      </Svg>
   );
}

export default OrdersIcon;
