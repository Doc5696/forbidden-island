import React from 'react'


function TabItem({
  index,
  isHidden,
}) {

  return (
    <div hidden={isHidden} role="tabpanel" index={index}>
      {index}
    </div>
  )
}

export default TabItem
