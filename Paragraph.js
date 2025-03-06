import React from 'react'

const Paragraph = () => {
  return (
    <div>
        <h1 style={{backgroundColor:'brown',marginTop:'30px'}}>With certain React-Bootstrap components, you may want to modify the component or HTML tag that is rendered.

If you want to keep all the styling of a particular React-Bootstrap component but switch the component that is finally rendered (whether it's a different React-Bootstrap component, a different custom component, or a different HTML tag) you can use the as prop to do so.

The example below passes an anchor to the as prop in a Button component. This ultimately causes a a tag to be rendered but with the same styles as a Button component.</h1>
    </div>
  )
}

export default Paragraph