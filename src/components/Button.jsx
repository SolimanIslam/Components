// // import className from 'classnames';

// // function Button({
// //   children,
// //   primary,
// //   secondary,
// //   success,
// //   warning,
// //   danger,
// //   outline,
// //   rounded,
// //   ...rest
// // }) {
// //   const classes = className(
// //     rest.className,
// //     'flex items-center px-3 py-1.5 border',
// //     {
// //       'border-blue-500 bg-blue-500 text-white': primary,
// //       'border-gray-900 bg-gray-900 text-white': secondary,
// //       'border-green-500 bg-green-500 text-white': success,
// //       'border-yellow-400 bg-yellow-400 text-white': warning,
// //       'border-red-500 bg-red-500 text-white': danger,
// //       'rounded-full': rounded,

// //       'text-blue-500 bg-white': outline && primary,
// //       'text-gray-900 bg-white': outline && secondary,
// //       'text-green-500 bg-white': outline && success,
// //       'text-yellow-400 bg-white': outline && warning,
// //       'bg-white text-red-500 ': outline && danger,
// //     }
// //   );

// //   return (
// //     <button {...rest} className={classes}>
// //       {children}
// //     </button>
// //   );
// // }

// // Button.propTypes = {
// //   checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
// //     const count =
// //       Number(!!primary) +
// //       Number(!!secondary) +
// //       Number(!!warning) +
// //       Number(!!success) +
// //       Number(!!danger);

// //     if (count > 1) {
// //       return new Error(
// //         'Only one of primary, secondary, success, warning, danger can be true'
// //       );
// //     }
// //   },
// // };

// // export default Button;

import classNames from "classnames";

function Button({ children, primary, secondary, success, warning, danger, rounded, outline, ...rest }) {


  const classes = classNames(rest.className, 'flex items-center px-3 py-1.5 border', {
    'border-blue-500 bg-blue-500 text-white': primary,
    'border-gray-500 bg-gray-500 text-white': secondary,
    'border-green-500 bg-green-500 text-white': success,
    'border-yellow-500 bg-yellow-500 text-white': warning,
    'border-red-500 bg-red-500 text-white': danger,
    'rounded-full': rounded,
    'bg-white': outline,
    'text-blue-600 ': outline && primary,
    'text-gray-900': outline && secondary,
    'text-green-600': outline && success,
    'text-yellow-600': outline && warning,
    'text-red-600': outline && danger,
  });

  return (<button {...rest} className={classes}>{children}</button>)
};



Button.propTypes = {
  checkCombination: ({ primary, secondary, success, warning, danger }) => {
    const conflictArr = [primary, secondary, success, warning, danger];

    const count = conflictArr.reduce((acc, item) => acc + Number(!!item), 0);

    if (count > 1) { return new Error('Only one of primary, secondary, success, warning, danger can be true') }
  }
};

export default Button;
